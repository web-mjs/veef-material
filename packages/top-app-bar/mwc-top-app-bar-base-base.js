import { __decorate } from "tslib";
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { addHasRemoveClass, BaseElement } from '@material/mwc-base/base-element';
import { supportsPassiveEventListener } from '@material/mwc-base/utils';
import { strings } from '@material/top-app-bar/constants';
import MDCTopAppBarBaseFoundation from '@material/top-app-bar/foundation';
import { html, property, query } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
export const passiveEventOptionsIfSupported = supportsPassiveEventListener ? { passive: true } : undefined;
export class TopAppBarBaseBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.centerTitle = false;
        this.handleTargetScroll = () => {
            this.mdcFoundation.handleTargetScroll();
        };
        this.handleNavigationClick = () => {
            this.mdcFoundation.handleNavigationClick();
        };
    }
    get scrollTarget() {
        return this._scrollTarget || window;
    }
    set scrollTarget(value) {
        this.unregisterScrollListener();
        const old = this.scrollTarget;
        this._scrollTarget = value;
        this.updateRootPosition();
        this.requestUpdate('scrollTarget', old);
        this.registerScrollListener();
    }
    updateRootPosition() {
        if (this.mdcRoot) {
            const windowScroller = this.scrollTarget === window;
            // we add support for top-app-bar's tied to an element scroller.
            this.mdcRoot.style.position = windowScroller ? '' : 'absolute';
        }
    }
    render() {
        // clang-format off
        let title = html `<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;
        if (this.centerTitle) {
            title = html `<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${title}</section>`;
        }
        // clang-format on
        return html `
      <header class="mdc-top-app-bar ${classMap(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle ? null : title}
        </section>
        ${this.centerTitle ? title : null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${classMap(this.contentClasses())}">
      <slot></slot>
    </div>
    `;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { setStyle: (property, value) => this.mdcRoot.style.setProperty(property, value), getTopAppBarHeight: () => this.mdcRoot.clientHeight, notifyNavigationIconClicked: () => {
                this.dispatchEvent(new Event(strings.NAVIGATION_EVENT, { bubbles: true, cancelable: true }));
            }, getViewportScrollY: () => this.scrollTarget instanceof Window ?
                this.scrollTarget.pageYOffset :
                this.scrollTarget.scrollTop, getTotalActionItems: () => this._actionItemsSlot
                .assignedNodes({ flatten: true })
                .length });
    }
    registerListeners() {
        this.registerScrollListener();
    }
    unregisterListeners() {
        this.unregisterScrollListener();
    }
    registerScrollListener() {
        this.scrollTarget.addEventListener('scroll', this.handleTargetScroll, passiveEventOptionsIfSupported);
    }
    unregisterScrollListener() {
        this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
    }
    firstUpdated() {
        super.firstUpdated();
        this.updateRootPosition();
        this.registerListeners();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unregisterListeners();
    }
}
__decorate([
    query('.mdc-top-app-bar')
], TopAppBarBaseBase.prototype, "mdcRoot", void 0);
__decorate([
    query('slot[name="actionItems"]')
], TopAppBarBaseBase.prototype, "_actionItemsSlot", void 0);
__decorate([
    property({ type: Boolean })
], TopAppBarBaseBase.prototype, "centerTitle", void 0);
__decorate([
    property({ type: Object })
], TopAppBarBaseBase.prototype, "scrollTarget", null);
//# sourceMappingURL=mwc-top-app-bar-base-base.js.map