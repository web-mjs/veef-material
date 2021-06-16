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
import { addHasRemoveClass, BaseElement, CustomEventListener, EventType, SpecificEventListener } from './base-element';
import { RippleInterface } from './utils';
export { addHasRemoveClass, BaseElement, CustomEventListener, EventType, RippleInterface, SpecificEventListener, };
/** @soyCompatible */
export declare abstract class FormElement extends BaseElement {
    /**
     * Form-capable element in the component ShadowRoot.
     *
     * Define in your component with the `@query` decorator
     */
    protected abstract formElement: HTMLElement;
    protected createRenderRoot(): ShadowRoot;
    /**
     * Implement ripple getter for Ripple integration with mwc-formfield
     */
    readonly ripple?: Promise<RippleInterface | null>;
    click(): void;
    setAriaLabel(label: string): void;
    protected firstUpdated(): void;
}
