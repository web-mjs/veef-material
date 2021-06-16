/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { MDCMenuSurfaceAdapter } from '@material/menu-surface/adapter';
import { Corner as CornerEnum } from '@material/menu-surface/constants';
import MDCMenuSurfaceFoundation from '@material/menu-surface/foundation';
import { BaseElement } from '@material/mwc-base/base-element';
export declare type Corner = keyof typeof CornerEnum;
export declare type AnchorableElement = HTMLElement & {
    anchor: Element | null;
};
export declare type MenuCorner = 'START' | 'END';
/**
 * @fires opened
 * @fires closed
 */
export declare abstract class MenuSurfaceBase extends BaseElement {
    protected mdcFoundation: MDCMenuSurfaceFoundation;
    protected readonly mdcFoundationClass: typeof MDCMenuSurfaceFoundation;
    mdcRoot: HTMLDivElement;
    slotElement: HTMLSlotElement | null;
    absolute: boolean;
    fullwidth: boolean;
    fixed: boolean;
    x: number | null;
    y: number | null;
    quick: boolean;
    open: boolean;
    stayOpenOnBodyClick: boolean;
    protected bitwiseCorner: CornerEnum;
    protected previousMenuCorner: MenuCorner | null;
    menuCorner: MenuCorner;
    corner: Corner;
    protected styleTop: string;
    protected styleLeft: string;
    protected styleRight: string;
    protected styleBottom: string;
    protected styleMaxHeight: string;
    protected styleTransformOrigin: string;
    anchor: HTMLElement | null;
    protected previouslyFocused: HTMLElement | Element | null;
    protected previousAnchor: HTMLElement | null;
    protected onBodyClickBound: (evt: MouseEvent) => void;
    render(): import("lit-element").TemplateResult;
    createAdapter(): MDCMenuSurfaceAdapter;
    protected onKeydown(evt: KeyboardEvent): void;
    protected onBodyClick(evt: MouseEvent): void;
    protected registerBodyClick(): void;
    protected deregisterBodyClick(): void;
    close(): void;
    show(): void;
}
