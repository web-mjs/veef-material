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
import 'blocking-elements';
import 'wicg-inert';
import { MDCDialogAdapter } from '@material/dialog/adapter';
import MDCDialogFoundation from '@material/dialog/foundation';
import { BaseElement } from '@material/mwc-base/base-element';
export { MDCDialogCloseEventDetail } from '@material/dialog/types';
export declare class DialogBase extends BaseElement {
    protected mdcRoot: HTMLDivElement;
    protected primarySlot: HTMLElement;
    protected secondarySlot: HTMLElement;
    protected contentSlot: HTMLElement;
    protected contentElement: HTMLDivElement;
    protected conatinerElement: HTMLDivElement;
    hideActions: boolean;
    stacked: boolean;
    heading: string;
    scrimClickAction: string;
    escapeKeyAction: string;
    open: boolean;
    defaultAction: string;
    actionAttribute: string;
    initialFocusAttribute: string;
    set suppressDefaultPressSelector(selector: string);
    get suppressDefaultPressSelector(): string;
    protected closingDueToDisconnect?: boolean;
    protected initialSupressDefaultPressSelector: string;
    protected get primaryButton(): HTMLElement | null;
    protected currentAction: string | undefined;
    protected mdcFoundationClass: typeof MDCDialogFoundation;
    protected mdcFoundation: MDCDialogFoundation;
    protected boundHandleClick: ((ev: MouseEvent) => void) | null;
    protected boundHandleKeydown: ((ev: KeyboardEvent) => void) | null;
    protected boundHandleDocumentKeydown: ((ev: KeyboardEvent) => void) | null;
    protected emitNotification(name: string, action?: string): void;
    protected getInitialFocusEl(): HTMLElement | null;
    protected searchNodeTreesForAttribute(nodes: Node[], attribute: string): HTMLElement | null;
    protected createAdapter(): MDCDialogAdapter;
    protected render(): import("lit-element").TemplateResult;
    protected renderHeading(): import("lit-element").TemplateResult;
    protected firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    forceLayout(): void;
    focus(): void;
    blur(): void;
    protected setEventListeners(): void;
    protected removeEventListeners(): void;
    close(): void;
    show(): void;
}
