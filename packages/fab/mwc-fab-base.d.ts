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
import '@material/mwc-ripple/mwc-ripple';
import { Ripple } from '@material/mwc-ripple/mwc-ripple';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers';
import { LitElement, TemplateResult } from 'lit-element';
/**
 * Fab Base class logic and template definition
 * @soyCompatible
 */
export declare class FabBase extends LitElement {
    ripple: Promise<Ripple | null>;
    mini: boolean;
    exited: boolean;
    disabled: boolean;
    extended: boolean;
    showIconAtEnd: boolean;
    reducedTouchTarget: boolean;
    icon: string;
    label: string;
    protected shouldRenderRipple: boolean;
    protected rippleHandlers: RippleHandlers;
    protected createRenderRoot(): ShadowRoot;
    /**
     * @soyTemplate
     * @soyClasses fabClasses: .mdc-fab
     */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected renderIcon(): TemplateResult;
    /** @soyTemplate */
    protected renderTouchTarget(): TemplateResult;
    /** @soyTemplate */
    protected renderLabel(): TemplateResult;
    /** @soyTemplate */
    protected renderBeforeRipple(): TemplateResult;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    protected handleRippleActivate(event?: Event): void;
    protected handleRippleStartPress(event?: Event): void;
    protected handleRippleDeactivate(): void;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    protected handleRippleFocus(): void;
    protected handleRippleBlur(): void;
}
