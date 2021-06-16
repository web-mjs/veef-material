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
import './mwc-list-item';
import { BaseElement } from '@material/mwc-base/base-element';
import { MDCListAdapter } from './mwc-list-adapter';
import MDCListFoundation from './mwc-list-foundation';
import { MWCListIndex } from './mwc-list-foundation';
import { Layoutable, ListItemBase, RequestSelectedDetail } from './mwc-list-item-base';
export { ActionDetail, createSetFromIndex, isEventMulti, isIndexSet, MWCListIndex, SelectedDetail } from './mwc-list-foundation';
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 */
export declare abstract class ListBase extends BaseElement implements Layoutable {
    protected mdcFoundation: MDCListFoundation;
    protected mdcAdapter: MDCListAdapter | null;
    protected readonly mdcFoundationClass: typeof MDCListFoundation;
    emptyMessage: string | undefined;
    protected mdcRoot: HTMLElement;
    protected slotElement: HTMLSlotElement | null;
    activatable: boolean;
    multi: boolean;
    wrapFocus: boolean;
    itemRoles: string | null;
    innerRole: string | null;
    innerAriaLabel: string | null;
    rootTabbable: boolean;
    protected previousTabindex: Element | null;
    noninteractive: boolean;
    debouncedLayout: (updateItems?: boolean) => void | undefined;
    protected itemsReadyResolver: (value?: (PromiseLike<never[]> | never[] | undefined)) => void;
    constructor();
    itemsReady: Promise<never[]>;
    protected _getUpdateComplete(): Promise<boolean>;
    protected getUpdateComplete(): Promise<boolean>;
    protected get assignedElements(): Element[];
    protected items_: ListItemBase[];
    get items(): ListItemBase[];
    protected updateItems(): void;
    get selected(): ListItemBase | ListItemBase[] | null;
    get index(): MWCListIndex;
    render(): import("lit-element").TemplateResult;
    renderPlaceholder(): import("lit-element").TemplateResult | null;
    firstUpdated(): void;
    protected onFocusIn(evt: FocusEvent): void;
    protected onFocusOut(evt: FocusEvent): void;
    protected onKeydown(evt: KeyboardEvent): void;
    protected onRequestSelected(evt: CustomEvent<RequestSelectedDetail>): void;
    protected getIndexOfTarget(evt: Event): number;
    protected createAdapter(): MDCListAdapter;
    protected selectUi(index: number, activate?: boolean): void;
    protected deselectUi(index: number): void;
    select(index: MWCListIndex): void;
    toggle(index: number, force?: boolean): void;
    protected onListItemConnected(e: CustomEvent): void;
    layout(updateItems?: boolean): void;
    getFocusedItemIndex(): number;
    focusItemAtIndex(index: number): void;
    focus(): void;
    blur(): void;
}
