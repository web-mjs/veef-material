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
import '@material/mwc-icon/mwc-icon';
import '@material/mwc-ripple/mwc-ripple';
import { Ripple } from '@material/mwc-ripple/mwc-ripple';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers';
import { LitElement, TemplateResult } from 'lit-element';
/** @soyCompatible */
export declare class ButtonBase extends LitElement {
    raised: boolean;
    unelevated: boolean;
    outlined: boolean;
    dense: boolean;
    disabled: boolean;
    trailingIcon: boolean;
    fullwidth: boolean;
    icon: string;
    label: string;
    expandContent: boolean;
    buttonElement: HTMLElement;
    ripple: Promise<Ripple | null>;
    protected shouldRenderRipple: boolean;
    protected rippleHandlers: RippleHandlers;
    /** @soyTemplate */
    protected renderOverlay(): TemplateResult;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    protected createRenderRoot(): ShadowRoot;
    focus(): void;
    blur(): void;
    /** @soyTemplate classMap */
    protected getRenderClasses(): (part: import("lit-html").Part) => void;
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: #button
     * @soyClasses buttonClasses: #button
     */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected renderIcon(): TemplateResult;
    protected handleRippleActivate(evt?: Event): void;
    protected handleRippleDeactivate(): void;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    protected handleRippleFocus(): void;
    protected handleRippleBlur(): void;
}
