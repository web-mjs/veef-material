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
import '@material/mwc-ripple/mwc-ripple';
import { FormElement } from '@material/mwc-base/form-element';
import { Ripple } from '@material/mwc-ripple/mwc-ripple';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers';
import { PropertyValues, TemplateResult } from 'lit-element';
/** @soyCompatible */
export declare class CheckboxBase extends FormElement {
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLInputElement;
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
    name?: string;
    value: string;
    /** @soyPrefixAttribute */
    ariaLabel?: string;
    /** @soyPrefixAttribute */
    ariaLabelledBy?: string;
    /** @soyPrefixAttribute */
    ariaDescribedBy?: string;
    /**
     * Touch target extends beyond visual boundary of a component by default.
     * Set to `true` to remove touch target added to the component.
     * @see https://material.io/design/usability/accessibility.html
     */
    reducedTouchTarget: boolean;
    protected animationClass: string;
    protected shouldRenderRipple: boolean;
    protected focused: boolean;
    ripple: Promise<Ripple | null>;
    protected mdcFoundationClass: undefined;
    protected mdcFoundation: undefined;
    protected createAdapter(): {};
    protected update(changedProperties: PropertyValues): void;
    protected calculateAnimationStateName(checked: boolean, indeterminate: boolean, disabled: boolean): string;
    protected rippleElement: Ripple | null;
    protected rippleHandlers: RippleHandlers;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    /**
     * @soyTemplate
     * @soyAttributes checkboxAttributes: input
     * @soyClasses checkboxClasses: .mdc-checkbox
     */
    protected render(): TemplateResult;
    protected handleFocus(): void;
    protected handleBlur(): void;
    protected handleRippleMouseDown(event: Event): void;
    protected handleRippleTouchStart(event: Event): void;
    protected handleRippleDeactivate(): void;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    protected handleRippleFocus(): void;
    protected handleRippleBlur(): void;
    protected handleChange(): void;
    protected resetAnimationClass(): void;
    get isRippleActive(): boolean;
}
