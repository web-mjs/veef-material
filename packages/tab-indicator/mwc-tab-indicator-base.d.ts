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
import { MDCTabIndicatorAdapter } from '@material/tab-indicator/adapter';
import MDCTabIndicatorFoundation from '@material/tab-indicator/foundation';
import MDCSlidingTabIndicatorFoundation from '@material/tab-indicator/sliding-foundation';
import { PropertyValues } from 'lit-element';
export declare class TabIndicatorBase extends BaseElement {
    protected mdcFoundation: MDCTabIndicatorFoundation;
    protected get mdcFoundationClass(): typeof MDCSlidingTabIndicatorFoundation;
    protected mdcRoot: HTMLElement;
    protected contentElement: HTMLElement;
    icon: string;
    fade: boolean;
    protected render(): import("lit-element").TemplateResult;
    protected updated(changedProperties: PropertyValues): void;
    protected createAdapter(): MDCTabIndicatorAdapter;
    computeContentClientRect(): ClientRect;
    activate(previousIndicatorClientRect?: ClientRect): void;
    deactivate(): void;
}
