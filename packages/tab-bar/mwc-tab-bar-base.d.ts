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
import '@material/mwc-tab';
import '@material/mwc-tab-scroller';
import { BaseElement } from '@material/mwc-base/base-element';
import { Tab } from '@material/mwc-tab';
import { TabScroller } from '@material/mwc-tab-scroller';
import { MDCTabBarAdapter } from '@material/tab-bar/adapter';
import MDCTabBarFoundation from '@material/tab-bar/foundation';
import { MDCTabInteractionEvent } from '@material/tab/types';
export declare class TabBarBase extends BaseElement {
    protected mdcFoundation: MDCTabBarFoundation;
    protected readonly mdcFoundationClass: typeof MDCTabBarFoundation;
    protected mdcRoot: HTMLElement;
    protected scrollerElement: TabScroller;
    protected tabsSlot: HTMLElement;
    activeIndex: number;
    protected _previousActiveIndex: number;
    protected _handleTabInteraction(e: MDCTabInteractionEvent): void;
    protected _handleKeydown(e: KeyboardEvent): void;
    protected render(): import("lit-element").TemplateResult;
    protected _getTabs(): Tab[];
    protected _getTab(index: number): Tab;
    protected createAdapter(): MDCTabBarAdapter;
    protected firstUpdated(): void;
    protected _getUpdateComplete(): any;
    protected getUpdateComplete(): any;
    scrollIndexIntoView(index: number): void;
}
