import { __decorate } from "tslib";
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import '@material/mwc-ripple/mwc-ripple';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers';
import { eventOptions, html, internalProperty, LitElement, property, queryAsync } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/**
 * Fab Base class logic and template definition
 * @soyCompatible
 */
export class FabBase extends LitElement {
    constructor() {
        super(...arguments);
        this.mini = false;
        this.exited = false;
        this.disabled = false;
        this.extended = false;
        this.showIconAtEnd = false;
        this.reducedTouchTarget = false;
        this.icon = '';
        this.label = '';
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    /**
     * @soyTemplate
     * @soyClasses fabClasses: .mdc-fab
     */
    render() {
        const hasTouchTarget = this.mini && !this.reducedTouchTarget;
        /** @classMap */
        const classes = {
            'mdc-fab--mini': this.mini,
            'mdc-fab--touch': hasTouchTarget,
            'mdc-fab--exited': this.exited,
            'mdc-fab--extended': this.extended,
            'icon-end': this.showIconAtEnd,
        };
        const ariaLabel = this.label ? this.label : this.icon;
        /*
         * Some internal styling is sensitive to whitespace in this template, take
         * care when modifying it.
         */
        return html `<button
          class="mdc-fab ${classMap(classes)}"
          ?disabled="${this.disabled}"
          aria-label="${ariaLabel}"
          @mouseenter=${this.handleRippleMouseEnter}
          @mouseleave=${this.handleRippleMouseLeave}
          @focus=${this.handleRippleFocus}
          @blur=${this.handleRippleBlur}
          @mousedown=${this.handleRippleActivate}
          @touchstart=${this.handleRippleStartPress}
          @touchend=${this.handleRippleDeactivate}
          @touchcancel=${this.handleRippleDeactivate}><!--
        -->${this.renderBeforeRipple()}<!--
        -->${this.renderRipple()}<!--
        -->${this.showIconAtEnd ? this.renderLabel() : ''}<!--
        --><span class="icon-slot-container"><!--
          --><slot name="icon">${this.renderIcon()}</slot><!--
        --></span><!--
        -->${!this.showIconAtEnd ? this.renderLabel() : ''}<!--
        -->${this.renderTouchTarget()}<!--
      --></button>`;
    }
    /** @soyTemplate */
    renderIcon() {
        return html `${this.icon ? html `
          <span class="material-icons mdc-fab__icon">${this.icon}</span>` :
            ''}`;
    }
    /** @soyTemplate */
    renderTouchTarget() {
        const hasTouchTarget = this.mini && !this.reducedTouchTarget;
        return html `${hasTouchTarget ? html `<div class="mdc-fab__touch"></div>` : ''}`;
    }
    /** @soyTemplate */
    renderLabel() {
        const showLabel = this.label !== '' && this.extended;
        return html `${showLabel ? html `<span class="mdc-fab__label">${this.label}</span>` :
            ''}`;
    }
    /** @soyTemplate */
    renderBeforeRipple() {
        return html ``;
    }
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ?
            html `<mwc-ripple class="ripple"></mwc-ripple>` :
            '';
    }
    handleRippleActivate(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.handleRippleStartPress(event);
    }
    handleRippleStartPress(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
__decorate([
    queryAsync('mwc-ripple')
], FabBase.prototype, "ripple", void 0);
__decorate([
    property({ type: Boolean })
], FabBase.prototype, "mini", void 0);
__decorate([
    property({ type: Boolean })
], FabBase.prototype, "exited", void 0);
__decorate([
    property({ type: Boolean })
], FabBase.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], FabBase.prototype, "extended", void 0);
__decorate([
    property({ type: Boolean })
], FabBase.prototype, "showIconAtEnd", void 0);
__decorate([
    property({ type: Boolean })
], FabBase.prototype, "reducedTouchTarget", void 0);
__decorate([
    property()
], FabBase.prototype, "icon", void 0);
__decorate([
    property()
], FabBase.prototype, "label", void 0);
__decorate([
    internalProperty()
], FabBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    eventOptions({ passive: true })
], FabBase.prototype, "handleRippleStartPress", null);
//# sourceMappingURL=mwc-fab-base.js.map