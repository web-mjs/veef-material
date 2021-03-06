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
import { ListBase } from './mwc-list-base';
import { style } from './mwc-list-css';
export { createSetFromIndex, isEventMulti, isIndexSet } from './mwc-list-foundation';
let List = class List extends ListBase {
};
List.styles = style;
List = __decorate([
    customElement('mwc-list')
], List);
export { List };
//# sourceMappingURL=mwc-list.js.map