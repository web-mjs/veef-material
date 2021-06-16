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
import 'blocking-elements';
import 'wicg-inert';
import { MDCDrawerAdapter } from '@material/drawer/adapter';
import MDCDismissibleDrawerFoundation from '@material/drawer/dismissible/foundation';
import { BaseElement } from '@material/mwc-base/base-element';
import { PropertyValues } from 'lit-element';
interface InertableHTMLElement extends HTMLElement {
    inert?: boolean;
}
export declare class DrawerBase extends BaseElement {
    protected mdcRoot: HTMLElement;
    protected appContent: InertableHTMLElement;
    protected mdcFoundation: MDCDismissibleDrawerFoundation;
    protected get mdcFoundationClass(): typeof MDCDismissibleDrawerFoundation;
    protected createAdapter(): MDCDrawerAdapter;
    protected _previousFocus: HTMLElement | null;
    protected _handleScrimClick(): void;
    open: boolean;
    hasHeader: boolean;
    type: string;
    protected render(): import("lit-element").TemplateResult;
    protected firstUpdated(): void;
    protected updated(changedProperties: PropertyValues): void;
}
export {};
