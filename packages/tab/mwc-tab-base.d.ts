/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

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
import '@material/mwc-tab-indicator';
import '@material/mwc-ripple/mwc-ripple';
import { BaseElement } from '@material/mwc-base/base-element';
import { Ripple } from '@material/mwc-ripple/mwc-ripple';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers';
import { TabIndicator } from '@material/mwc-tab-indicator';
import { MDCTabAdapter } from '@material/tab/adapter';
import MDCTabFoundation from '@material/tab/foundation';
export interface TabInteractionEventDetail {
    tabId: string;
}
export declare class TabBase extends BaseElement {
    protected mdcFoundation: MDCTabFoundation;
    protected readonly mdcFoundationClass: typeof MDCTabFoundation;
    protected mdcRoot: HTMLElement;
    protected tabIndicator: TabIndicator;
    label: string;
    icon: string;
    hasImageIcon: boolean;
    isFadingIndicator: boolean;
    minWidth: boolean;
    isMinWidthIndicator: boolean;
    get active(): boolean;
    indicatorIcon: string;
    stacked: boolean;
    focusOnActivate: boolean;
    protected _active: boolean;
    protected initFocus: boolean;
    /**
     * Other properties
     * indicatorContent <slot>
     * previousIndicatorClientRect (needed?)
     * onTransitionEnd (needed?)
     */
    protected _contentElement: HTMLElement;
    protected shouldRenderRipple: boolean;
    ripple: Promise<Ripple | null>;
    protected rippleElement: Ripple | null;
    protected createRenderRoot(): ShadowRoot;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): import("lit-element").TemplateResult;
    protected renderIndicator(): import("lit-element").TemplateResult;
    /** @soyCompatible */
    protected renderRipple(): import("lit-element").TemplateResult | "";
    protected createAdapter(): MDCTabAdapter;
    activate(clientRect: ClientRect): void;
    deactivate(): void;
    protected setActive(newValue: boolean): void;
    computeDimensions(): import("@material/tab/types").MDCTabDimensions;
    computeIndicatorClientRect(): ClientRect;
    focus(): void;
    protected rippleHandlers: RippleHandlers;
    protected handleClick(): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
    protected handleRippleMouseDown(event: Event): void;
    protected handleRippleTouchStart(event: Event): void;
    protected handleRippleDeactivate(): void;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    protected handleRippleFocus(): void;
    protected handleRippleBlur(): void;
    get isRippleActive(): boolean;
}
