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
import { BaseElement } from '@material/mwc-base/base-element';
import { MDCSnackbarAdapter } from '@material/snackbar/adapter';
import MDCSnackbarFoundation from '@material/snackbar/foundation';
export declare class SnackbarBase extends BaseElement {
    protected mdcFoundation: MDCSnackbarFoundation;
    protected readonly mdcFoundationClass: typeof MDCSnackbarFoundation;
    protected mdcRoot: HTMLElement;
    protected labelElement: HTMLElement;
    open: boolean;
    timeoutMs: number;
    closeOnEscape: boolean;
    labelText: string;
    stacked: boolean;
    leading: boolean;
    protected reason: string;
    protected render(): import("lit-element").TemplateResult;
    protected createAdapter(): MDCSnackbarAdapter;
    /** @export */
    show(): void;
    /** @export */
    close(reason?: string): void;
    protected firstUpdated(): void;
    protected _handleKeydown(e: KeyboardEvent): void;
    protected _handleActionClick(e: MouseEvent): void;
    protected _handleDismissClick(e: MouseEvent): void;
}
