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
import { __decorate } from "tslib";
import { customElement } from 'lit-element';
import { TextFieldBase } from './mwc-textfield-base';
import { style } from './mwc-textfield-css';
/** @soyCompatible */
let TextField = class TextField extends TextFieldBase {
};
TextField.styles = style;
TextField = __decorate([
    customElement('mwc-textfield')
], TextField);
export { TextField };
//# sourceMappingURL=mwc-textfield.js.map