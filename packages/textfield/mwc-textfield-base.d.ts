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
import '@material/mwc-notched-outline';
import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation';
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation';
import { FormElement } from '@material/mwc-base/form-element';
import { FloatingLabel } from '@material/mwc-floating-label';
import { LineRipple } from '@material/mwc-line-ripple';
import { NotchedOutline } from '@material/mwc-notched-outline';
import { MDCTextFieldAdapter, MDCTextFieldInputAdapter, MDCTextFieldLabelAdapter, MDCTextFieldLineRippleAdapter, MDCTextFieldOutlineAdapter, MDCTextFieldRootAdapter } from '@material/textfield/adapter';
import MDCTextFieldFoundation from '@material/textfield/foundation';
import { PropertyValues, TemplateResult } from 'lit-element';
declare global {
    interface HTMLElement {
        floatingLabelFoundation?: MDCFloatingLabelFoundation;
        lineRippleFoundation?: MDCLineRippleFoundation;
    }
    interface Element {
        floatingLabelFoundation?: MDCFloatingLabelFoundation;
        lineRippleFoundation?: MDCLineRippleFoundation;
    }
}
/**
 * This is the enumerated typeof HTMLInputElement.type as declared by
 * lit-analyzer.
 */
export declare type TextFieldType = 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'color';
/**
 * This is the enumerated typeof HTMLInputElement.inputMode as declared by
 * lit-analyzer.
 */
export declare type TextFieldInputMode = 'verbatim' | 'latin' | 'latin-name' | 'latin-prose' | 'full-width-latin' | 'kana' | 'kana-name' | 'katakana' | 'numeric' | 'tel' | 'email' | 'url';
export declare type TextAreaCharCounter = 'external' | 'internal';
/** @soyCompatible */
export declare abstract class TextFieldBase extends FormElement {
    protected mdcFoundation: MDCTextFieldFoundation;
    protected readonly mdcFoundationClass: typeof MDCTextFieldFoundation;
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLInputElement;
    protected labelElement: FloatingLabel | null;
    protected lineRippleElement: LineRipple | null;
    protected outlineElement: NotchedOutline | null;
    protected notchElement: HTMLElement;
    value: string;
    type: TextFieldType;
    placeholder: string;
    label: string;
    icon: string;
    iconTrailing: string;
    disabled: boolean;
    required: boolean;
    minLength: number;
    maxLength: number;
    outlined: boolean;
    helper: string;
    validateOnInitialRender: boolean;
    validationMessage: string;
    autoValidate: boolean;
    pattern: string;
    min: number | string;
    max: number | string;
    step: number | null;
    size: number | null;
    helperPersistent: boolean;
    charCounter: boolean | TextAreaCharCounter;
    endAligned: boolean;
    prefix: string;
    suffix: string;
    name: string;
    inputMode: TextFieldInputMode;
    readOnly: boolean;
    autocapitalize: string;
    protected outlineOpen: boolean;
    protected outlineWidth: number;
    protected isUiValid: boolean;
    protected focused: boolean;
    protected _validity: ValidityState;
    protected _outlineUpdateComplete: null | Promise<unknown>;
    get validity(): ValidityState;
    get willValidate(): boolean;
    get selectionStart(): number | null;
    get selectionEnd(): number | null;
    validityTransform: ((value: string, nativeValidity: ValidityState) => Partial<ValidityState>) | null;
    focus(): void;
    blur(): void;
    select(): void;
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): void;
    update(changedProperties: PropertyValues): void;
    /** @soyTemplate */
    render(): TemplateResult;
    updated(changedProperties: PropertyValues): void;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected renderOutline(): TemplateResult | string;
    /** @soyTemplate */
    protected renderLabel(): TemplateResult | string;
    /** @soyTemplate */
    protected renderLeadingIcon(): TemplateResult | string;
    /** @soyTemplate */
    protected renderTrailingIcon(): TemplateResult | string;
    /** @soyTemplate */
    protected renderIcon(icon: string, isTrailingIcon?: boolean): TemplateResult;
    /** @soyTemplate */
    protected renderPrefix(): TemplateResult | string;
    /** @soyTemplate */
    protected renderSuffix(): TemplateResult | string;
    /** @soyTemplate */
    protected renderAffix(content: string, isSuffix?: boolean): TemplateResult | string;
    /** @soyTemplate */
    protected renderInput(shouldRenderHelperText: boolean): TemplateResult;
    /** @soyTemplate */
    protected renderLineRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected renderHelperText(shouldRenderHelperText: boolean, shouldRenderCharCounter: boolean): TemplateResult | string;
    /** @soyTemplate */
    protected renderCharCounter(shouldRenderCharCounter: boolean): TemplateResult | string;
    protected onInputFocus(): void;
    protected onInputBlur(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    protected _checkValidity(value: string): boolean;
    setCustomValidity(message: string): void;
    protected handleInputChange(): void;
    protected createFoundation(): void;
    protected createAdapter(): MDCTextFieldAdapter;
    protected getRootAdapterMethods(): MDCTextFieldRootAdapter;
    protected getInputAdapterMethods(): MDCTextFieldInputAdapter;
    protected getLabelAdapterMethods(): MDCTextFieldLabelAdapter;
    protected getLineRippleAdapterMethods(): MDCTextFieldLineRippleAdapter;
    _getUpdateComplete(): Promise<boolean>;
    getUpdateComplete(): Promise<boolean>;
    firstUpdated(): Promise<void>;
    protected getOutlineAdapterMethods(): MDCTextFieldOutlineAdapter;
    layout(): Promise<void>;
}
