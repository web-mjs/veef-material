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
import '@material/mwc-ripple/mwc-ripple';
import { FormElement } from '@material/mwc-base/form-element';
import { Ripple } from '@material/mwc-ripple/mwc-ripple';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers';
import { MDCSwitchAdapter } from '@material/switch/deprecated/adapter';
import MDCSwitchFoundation from '@material/switch/deprecated/foundation';
export declare class SwitchBase extends FormElement {
    checked: boolean;
    disabled: boolean;
    /** @soyPrefixAttribute */
    ariaLabel?: string;
    /** @soyPrefixAttribute */
    ariaLabelledBy?: string;
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLInputElement;
    ripple: Promise<Ripple | null>;
    protected shouldRenderRipple: boolean;
    protected mdcFoundation: MDCSwitchFoundation;
    protected changeHandler(e: Event): void;
    protected readonly mdcFoundationClass: typeof MDCSwitchFoundation;
    protected createAdapter(): MDCSwitchAdapter;
    protected rippleHandlers: RippleHandlers;
    protected renderRipple(): import("lit-element").TemplateResult | "";
    focus(): void;
    blur(): void;
    protected render(): import("lit-element").TemplateResult;
    protected handleRippleMouseDown(event: Event): void;
    protected handleRippleTouchStart(event: Event): void;
    protected handleRippleDeactivate(): void;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    protected handleRippleFocus(): void;
    protected handleRippleBlur(): void;
}
