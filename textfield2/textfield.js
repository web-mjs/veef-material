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
import { render, html, webComponents, useRef, useEffect, useState } from '@web-mjs/preact';
import { style as myCss } from './textfield-css.js';

const El = () => html`<h1>yoo</h1>`;
const Field = (props) => {
	const styleRef = useRef();
	useEffect(() => {
		styleRef.current.innerText = myCss;
	});
	return html`
	<label class="mdc-text-field mdc-text-field--outlined">
      <mwc-notched-outline class="mdc-notched-outline">
      <span id="label" class="mdc-floating-label"><!---->Field<!----></span>
      </mwc-notched-outline>
      <input aria-labelledby="label" class="mdc-text-field__input" type="text" placeholder="">
      </label>
	<style ref=${styleRef}>input{ background: red; }</style>`;
};

webComponents.register(Field, 'mwc-textfield2', [], {shadow: true});
