/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
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
import { MDCResizeObserver } from '@material/linear-progress/types';
import { LitElement, PropertyValues, TemplateResult } from 'lit-element';
/** @soyCompatible */
export declare class LinearProgressBase extends LitElement {
    protected rootEl: HTMLElement;
    indeterminate: boolean;
    progress: number;
    buffer: number;
    reverse: boolean;
    closed: boolean;
    /** @soyPrefixAttribute */
    ariaLabel?: string;
    protected stylePrimaryHalf: string;
    protected stylePrimaryFull: string;
    protected styleSecondaryQuarter: string;
    protected styleSecondaryHalf: string;
    protected styleSecondaryFull: string;
    protected animationReady: boolean;
    protected closedAnimationOff: boolean;
    protected resizeObserver: MDCResizeObserver | null;
    connectedCallback(): void;
    /**
     * @soyTemplate
     */
    protected render(): TemplateResult;
    update(changedProperties: Map<string, string>): void;
    firstUpdated(changed: PropertyValues): Promise<void>;
    protected syncClosedState(): void;
    protected updated(changed: PropertyValues): void;
    disconnectedCallback(): void;
    protected attachResizeObserver(): void;
    protected calculateAndSetAnimationDimensions(width: number): void;
    protected restartAnimation(): Promise<void>;
    open(): void;
    close(): void;
}
