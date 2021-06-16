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
/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */
export declare const isNodeElement: (node: Node) => node is Element;
export declare function findAssignedElement(slot: HTMLSlotElement, selector: string): HTMLElement | null;
export declare type Constructor<T> = new (...args: any[]) => T;
export declare function addHasRemoveClass(element: HTMLElement): {
    addClass: (className: string) => void;
    removeClass: (className: string) => void;
    hasClass: (className: string) => boolean;
};
/**
 * Do event listeners suport the `passive` option?
 */
export declare const supportsPassiveEventListener = false;
export declare const deepActiveElementPath: (doc?: Document) => Element[];
export declare const doesElementContainFocus: (element: HTMLElement) => boolean;
export interface RippleInterface {
    startPress: (e?: Event) => void;
    endPress: () => void;
    startFocus: () => void;
    endFocus: () => void;
    startHover: () => void;
    endHover: () => void;
}
