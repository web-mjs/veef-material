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
import { floatingLabel } from '@material/mwc-floating-label';
import MDCTextFieldFoundation from '@material/textfield/foundation';

const El = () => html`<h1>yoo</h1>`;
const FOCUSED_CLS = ["mdc-text-field--focused", "mdc-text-field--label-floating"];
const FOCUSED_SPAN = ["mdc-floating-label--float-above"];

import useCls from './classList';

const OutlineField = (props) => {
	useEffect(() => {
		styleRef.current.innerText = myCss;
		outline.current.width = 100;
		foundation.current.floatingLabelFoundation = floatingLabel('Example');
	});
	const onClick = () => { 
		//foundation.current.floatingLabelFoundation.float();
		console.log(foundation.current);
		outline.current.open = true;
		setCls([...cls, ...FOCUSED_CLS]); 
		setSpanCls(FOCUSED_SPAN);
	}
	const blur = () => {
		outline.current.open = false;
		setCls(cls.filter(x => FOCUSED_CLS.indexOf(x) == -1));
		setSpanCls([]);
	};

	const outline = useRef();
	const styleRef = useRef();
	const foundation = useRef();
	const [cls, setCls] = useState(["mdc-text-field","mdc-text-field--outlined"]);
	const [spanCls, setSpanCls] = useState([]);
	return html`
	<label class=${cls.join(" ")}>
      <mwc-notched-outline class="mdc-notched-outline" ref=${outline}>
      <span ref=${foundation} id="label" class=${["mdc-floating-label", ...spanCls].join(" ")}>Example</label>
      </mwc-notched-outline>
      <input aria-labelledby="label" class="mdc-text-field__input" onFocus=${onClick} onBlur=${blur} type="text" placeholder="" />
      </label>
	<style ref=${styleRef} />`;
};


webComponents.register(OutlineField, 'veef-outlinefield', [], {shadow: true});


const CasualField = () => {
	const FOC = ["mdc-text-field--focused", "mdc-text-field--label-floating"];
	useEffect(() => {
		styleRef.current.innerText = myCss;
	});
	const onClick = () => {
		labelCls.addAll(FOC);
		spanCls.add("mdc-floating-label--float-above");
	};
	const onBlur = () => {
		labelCls.removeAll(FOC);
		spanCls.remove("mdc-floating-label--float-above");
	};
	const labelCls = useCls(["mdc-text-field", "mdc-text-field--filled"]);
	const spanCls = useCls(["mdc-floating-label"]);
	const styleRef = useRef();
	const nativeInput = useRef();
	return html`
	<label class=${labelCls.value}>
      <span class="mdc-text-field__ripple"></span>
      <span id="label" class=${spanCls.value}>Demo field</span>
      <input ref=${nativeInput} onBlur=${onBlur} onFocus=${onClick} aria-labelledby="label" class="mdc-text-field__input" type="text" placeholder=""/>
      <span class="mdc-line-ripple" style="transform-origin: 103px center;"></span>
      </label>
	<style ref=${styleRef} />`;
};
webComponents.register(CasualField, 'veef-field', [], {shadow: true});

import { style as buttonCss } from './button-css.js';
const Button = () => {
	const FOC = ["mdc-text-field--focused", "mdc-text-field--label-floating"];
	useEffect(() => {
		styleRef.current.innerText = buttonCss;
		rippleRef.current.primary = false;
		buttonRef.current.addEventListener('mousedown', (e) => {
			rippleRef.current.startPress(e);
		});
		buttonRef.current.addEventListener('mouseup', (e) => {
			rippleRef.current.endPress();
		});
	});
	const onClick = () => {
		labelCls.addAll(FOC);
		spanCls.add("mdc-floating-label--float-above");
	};
	const onBlur = () => {
		labelCls.removeAll(FOC);
		spanCls.remove("mdc-floating-label--float-above");
	};
	const labelCls = useCls(["mdc-text-field", "mdc-text-field--filled"]);
	const spanCls = useCls(["mdc-floating-label"]);
	const styleRef = useRef();
	const nativeInput = useRef();
	const rippleRef = useRef();
	const buttonRef = useRef();
	return html`
	<button id="button" ref=${buttonRef}
	onFocus=${() => rippleRef.current.startFocus()}
	onBlur=${() => rippleRef.current.endFocus()}
	class="mdc-button mdc-button--unelevated" aria-label="Button">
        <mwc-ripple class="ripple" ref=${rippleRef} ></mwc-ripple>
        <span class="leading-icon">
          <slot name="icon">
          </slot>
        </span>
        <span class="mdc-button__label">Primer</span>
        <span class="slot-container  ">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
          </slot>
        </span>
      </button>
	<style ref=${styleRef} />`;
};
webComponents.register(Button, 'veef-button', [], {shadow: true});
