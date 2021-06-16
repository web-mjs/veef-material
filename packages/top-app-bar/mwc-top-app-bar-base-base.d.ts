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
import { BaseElement } from '@material/mwc-base/base-element';
import { MDCTopAppBarAdapter } from '@material/top-app-bar/adapter';
import MDCTopAppBarBaseFoundation from '@material/top-app-bar/foundation';
export declare const passiveEventOptionsIfSupported: {
    passive: boolean;
} | undefined;
interface ClassInfo {
    [key: string]: boolean;
}
export declare abstract class TopAppBarBaseBase extends BaseElement {
    protected abstract mdcFoundation: MDCTopAppBarBaseFoundation;
    protected abstract mdcFoundationClass: typeof MDCTopAppBarBaseFoundation;
    protected mdcRoot: HTMLElement;
    protected _actionItemsSlot: HTMLElement;
    protected _scrollTarget: HTMLElement | Window;
    centerTitle: boolean;
    get scrollTarget(): HTMLElement | Window;
    set scrollTarget(value: HTMLElement | Window);
    protected updateRootPosition(): void;
    /**
     * classMap map for classes on the bar
     */
    protected abstract barClasses(): ClassInfo;
    /**
     * classMap map for classes on the content slot
     */
    protected abstract contentClasses(): ClassInfo;
    protected render(): import("lit-element").TemplateResult;
    protected createAdapter(): MDCTopAppBarAdapter;
    protected handleTargetScroll: () => void;
    protected handleNavigationClick: () => void;
    protected registerListeners(): void;
    protected unregisterListeners(): void;
    protected registerScrollListener(): void;
    protected unregisterScrollListener(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
}
export {};
