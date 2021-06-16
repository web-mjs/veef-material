/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

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
import '@material/mwc-menu';
import '@material/mwc-icon';
import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation';
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation';
import * as typeahead from '@material/list/typeahead';
import { MDCListTextAndIndex } from '@material/list/types';
import { FormElement } from '@material/mwc-base/form-element';
import { FloatingLabel } from '@material/mwc-floating-label';
import { LineRipple } from '@material/mwc-line-ripple';
import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';
import { Menu } from '@material/mwc-menu';
import { NotchedOutline } from '@material/mwc-notched-outline';
import { MDCSelectAdapter } from '@material/select/adapter';
import MDCSelectFoundation from '@material/select/foundation';
declare global {
    interface Element {
        floatingLabelFoundation?: MDCFloatingLabelFoundation;
        lineRippleFoundation?: MDCLineRippleFoundation;
    }
}
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires opened
 * @fires closed
 * @fires change
 * @fires invalid
 */
export declare abstract class SelectBase extends FormElement {
    protected mdcFoundation: MDCSelectFoundation;
    protected readonly mdcFoundationClass: typeof MDCSelectFoundation;
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLInputElement;
    protected slotElement: HTMLSlotElement | null;
    protected nativeSelectElement: HTMLSelectElement | null;
    protected nativeInputElement: HTMLInputElement | null;
    protected lineRippleElement: LineRipple | null;
    protected labelElement: FloatingLabel | null;
    protected outlineElement: NotchedOutline | null;
    protected menuElement: Menu | null;
    protected anchorElement: HTMLDivElement | null;
    disabled: boolean;
    outlined: boolean;
    label: string;
    protected outlineOpen: boolean;
    protected outlineWidth: number;
    value: string;
    protected selectedText: string;
    icon: string;
    protected menuOpen: boolean;
    helper: string;
    validateOnInitialRender: boolean;
    validationMessage: string;
    required: boolean;
    naturalMenuWidth: boolean;
    protected isUiValid: boolean;
    fixedMenuPosition: boolean;
    protected typeaheadState: typeahead.TypeaheadState;
    protected sortedIndexByFirstChar: Map<string, MDCListTextAndIndex[]>;
    protected menuElement_: Menu | null;
    get items(): ListItemBase[];
    get selected(): ListItemBase | null;
    get index(): number;
    protected listeners: ({
        target: Element;
        name: string;
        cb: EventListenerOrEventListenerObject;
    })[];
    protected onBodyClickBound: (evt: MouseEvent) => void;
    protected _menuUpdateComplete: null | Promise<unknown>;
    protected get shouldRenderHelperText(): boolean;
    protected valueSetDirectly: boolean;
    validityTransform: ((value: string, nativeValidity: ValidityState) => Partial<ValidityState>) | null;
    protected _validity: ValidityState;
    get validity(): ValidityState;
    render(): import("lit-element").TemplateResult;
    protected renderRipple(): {};
    protected renderOutline(): {};
    protected renderLabel(): {};
    protected renderLeadingIcon(): {};
    protected renderLineRipple(): {};
    protected renderHelperText(): {};
    protected createAdapter(): MDCSelectAdapter;
    checkValidity(): boolean;
    reportValidity(): boolean;
    protected _checkValidity(value: string): boolean;
    setCustomValidity(message: string): void;
    protected _getUpdateComplete(): Promise<boolean>;
    getUpdateComplete(): Promise<boolean>;
    protected firstUpdated(): Promise<void>;
    protected onItemsUpdated(): void;
    select(index: number): void;
    protected selectByValue(value: string): void;
    disconnectedCallback(): void;
    focus(): void;
    blur(): void;
    protected onFocus(): void;
    protected onBlur(): void;
    protected onClick(evt: MouseEvent | TouchEvent): void;
    protected onKeydown(evt: KeyboardEvent): void;
    protected handleTypeahead(event: KeyboardEvent): void;
    protected onSelected(event: CustomEvent<{
        index: number;
    }>): Promise<void>;
    protected onOpened(): void;
    protected onClosed(): void;
    layout(updateItems?: boolean): Promise<void>;
    layoutOptions(): Promise<void>;
}
