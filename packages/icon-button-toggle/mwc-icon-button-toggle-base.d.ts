/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
/** @soyCompatible */
export declare class IconButtonToggleBase extends LitElement {
    protected mdcRoot: HTMLElement;
    /** @soyPrefixAttribute */
    ariaLabel?: string;
    disabled: boolean;
    onIcon: string;
    offIcon: string;
    ariaLabelOn?: string;
    ariaLabelOff?: string;
    on: boolean;
    ripple: Promise<Ripple | null>;
    protected shouldRenderRipple: boolean;
    protected rippleHandlers: RippleHandlers;
    protected handleClick(): void;
    click(): void;
    focus(): void;
    blur(): void;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected render(): TemplateResult;
    protected handleRippleMouseDown(event?: Event): void;
    protected handleRippleTouchStart(event?: Event): void;
    protected handleRippleDeactivate(): void;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    protected handleRippleFocus(): void;
    protected handleRippleBlur(): void;
}
