/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

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
import { __decorate } from "tslib";
import { customElement } from 'lit-element';
import { style as controlStyle } from './mwc-control-list-item-css';
import { style } from './mwc-list-item-css';
import { RadioListItemBase } from './mwc-radio-list-item-base';
let RadioListItem = class RadioListItem extends RadioListItemBase {
};
RadioListItem.styles = [style, controlStyle];
RadioListItem = __decorate([
    customElement('mwc-radio-list-item')
], RadioListItem);
export { RadioListItem };
//# sourceMappingURL=mwc-radio-list-item.js.map