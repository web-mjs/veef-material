import { __decorate } from "tslib";
import { ariaProperty } from '@material/mwc-base/aria-property';
import { html, internalProperty, LitElement, property, query } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import { styleMap } from 'lit-html/directives/style-map';
/** @soyCompatible */
export class LinearProgressBase extends LitElement {
    constructor() {
        super(...arguments);
        this.indeterminate = false;
        this.progress = 0;
        this.buffer = 1;
        this.reverse = false;
        this.closed = false;
        this.stylePrimaryHalf = '';
        this.stylePrimaryFull = '';
        this.styleSecondaryQuarter = '';
        this.styleSecondaryHalf = '';
        this.styleSecondaryFull = '';
        this.animationReady = true;
        this.closedAnimationOff = false;
        this.resizeObserver = null;
    }
    connectedCallback() {
        super.connectedCallback();
        // if detached and reattached
        if (this.rootEl) {
            this.attachResizeObserver();
        }
    }
    /**
     * @soyTemplate
     */
    render() {
        /** @classMap */
        const classes = {
            'mdc-linear-progress--closed': this.closed,
            'mdc-linear-progress--closed-animation-off': this.closedAnimationOff,
            'mdc-linear-progress--indeterminate': this.indeterminate,
            // needed for controller-less render
            'mdc-linear-progress--animation-ready': this.animationReady
        };
        /** @styleMap */
        const rootStyles = {
            '--mdc-linear-progress-primary-half': this.stylePrimaryHalf,
            '--mdc-linear-progress-primary-half-neg': this.stylePrimaryHalf !== '' ? `-${this.stylePrimaryHalf}` : '',
            '--mdc-linear-progress-primary-full': this.stylePrimaryFull,
            '--mdc-linear-progress-primary-full-neg': this.stylePrimaryFull !== '' ? `-${this.stylePrimaryFull}` : '',
            '--mdc-linear-progress-secondary-quarter': this.styleSecondaryQuarter,
            '--mdc-linear-progress-secondary-quarter-neg': this.styleSecondaryQuarter !== '' ? `-${this.styleSecondaryQuarter}` :
                '',
            '--mdc-linear-progress-secondary-half': this.styleSecondaryHalf,
            '--mdc-linear-progress-secondary-half-neg': this.styleSecondaryHalf !== '' ? `-${this.styleSecondaryHalf}` : '',
            '--mdc-linear-progress-secondary-full': this.styleSecondaryFull,
            '--mdc-linear-progress-secondary-full-neg': this.styleSecondaryFull !== '' ? `-${this.styleSecondaryFull}` : '',
        };
        /** @styleMap */
        const bufferBarStyles = {
            'flex-basis': this.indeterminate ? '100%' : `${this.buffer * 100}%`,
        };
        /** @styleMap */
        const primaryBarStyles = {
            transform: this.indeterminate ? 'scaleX(1)' : `scaleX(${this.progress})`,
        };
        return html `
      <div
          role="progressbar"
          class="mdc-linear-progress ${classMap(classes)}"
          style="${styleMap(rootStyles)}"
          dir="${ifDefined(this.reverse ? 'rtl' : undefined)}"
          aria-label="${ifDefined(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${ifDefined(this.indeterminate ? undefined : this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${styleMap(bufferBarStyles)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${styleMap(primaryBarStyles)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`;
    }
    update(changedProperties) {
        // - When showing the indicator, enable animations immediately.
        // - On first render, disable the animation immediately.
        // - For normal calls to hide the component, let transitionend event trigger
        //   disabling of animations instead (see render method), so that animation
        //   does not jump in the middle of fade out.
        if (changedProperties.has('closed') &&
            (!this.closed || changedProperties.get('closed') === undefined)) {
            this.syncClosedState();
        }
        super.update(changedProperties);
    }
    async firstUpdated(changed) {
        super.firstUpdated(changed);
        this.attachResizeObserver();
    }
    syncClosedState() {
        this.closedAnimationOff = this.closed;
    }
    updated(changed) {
        // restart animation for timing if reverse changed and is indeterminate.
        // don't restart here if indeterminate has changed as well because we don't
        // want to incur an extra style recalculation
        if (!changed.has('indeterminate') && changed.has('reverse') &&
            this.indeterminate) {
            this.restartAnimation();
        }
        // Recaclulate the animation css custom props and restart the calculation
        // if this is not the first render cycle, otherwise, resize observer init
        // will already handle this and prevent unnecessary rerender + style recalc
        // but resize observer will not update animation vals while determinate
        if (changed.has('indeterminate') &&
            changed.get('indeterminate') !== undefined && this.indeterminate &&
            window.ResizeObserver) {
            this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth);
        }
        super.updated(changed);
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        super.disconnectedCallback();
    }
    attachResizeObserver() {
        if (window.ResizeObserver) {
            this.resizeObserver =
                new window
                    .ResizeObserver((entries) => {
                    if (!this.indeterminate) {
                        return;
                    }
                    for (const entry of entries) {
                        if (entry.contentRect) {
                            const width = entry.contentRect.width;
                            this.calculateAndSetAnimationDimensions(width);
                        }
                    }
                });
            this.resizeObserver.observe(this.rootEl);
            return;
        }
        this.resizeObserver = null;
    }
    calculateAndSetAnimationDimensions(width) {
        const primaryHalf = width * 0.8367142;
        const primaryFull = width * 2.00611057;
        const secondaryQuarter = width * 0.37651913;
        const secondaryHalf = width * 0.84386165;
        const secondaryFull = width * 1.60277782;
        this.stylePrimaryHalf = `${primaryHalf}px`;
        this.stylePrimaryFull = `${primaryFull}px`;
        this.styleSecondaryQuarter = `${secondaryQuarter}px`;
        this.styleSecondaryHalf = `${secondaryHalf}px`;
        this.styleSecondaryFull = `${secondaryFull}px`;
        // need to restart animation for custom props to apply to keyframes
        this.restartAnimation();
    }
    async restartAnimation() {
        this.animationReady = false;
        await this.updateComplete;
        await new Promise(requestAnimationFrame);
        this.animationReady = true;
        await this.updateComplete;
    }
    open() {
        this.closed = false;
    }
    close() {
        this.closed = true;
    }
}
__decorate([
    query('.mdc-linear-progress')
], LinearProgressBase.prototype, "rootEl", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "indeterminate", void 0);
__decorate([
    property({ type: Number })
], LinearProgressBase.prototype, "progress", void 0);
__decorate([
    property({ type: Number })
], LinearProgressBase.prototype, "buffer", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "reverse", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "closed", void 0);
__decorate([
    ariaProperty, property({ attribute: 'aria-label' })
], LinearProgressBase.prototype, "ariaLabel", void 0);
__decorate([
    internalProperty()
], LinearProgressBase.prototype, "stylePrimaryHalf", void 0);
__decorate([
    internalProperty()
], LinearProgressBase.prototype, "stylePrimaryFull", void 0);
__decorate([
    internalProperty()
], LinearProgressBase.prototype, "styleSecondaryQuarter", void 0);
__decorate([
    internalProperty()
], LinearProgressBase.prototype, "styleSecondaryHalf", void 0);
__decorate([
    internalProperty()
], LinearProgressBase.prototype, "styleSecondaryFull", void 0);
__decorate([
    internalProperty()
], LinearProgressBase.prototype, "animationReady", void 0);
__decorate([
    internalProperty()
], LinearProgressBase.prototype, "closedAnimationOff", void 0);
//# sourceMappingURL=mwc-linear-progress-base.js.map