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
import { render, html, webComponents, useRef, useEffect, useState, useContext, createContext } from '@web-mjs/preact';
import { style as myCss } from './textfield-css.js';
//import { floatingLabel } from '@material/mwc-floating-label';

const El = () => html`<h1>yoo</h1>`;
const FOCUSED_CLS = ["mdc-text-field--focused", "mdc-text-field--label-floating"];
const FOCUSED_SPAN = ["mdc-floating-label--float-above"];

import useCls from './classList';

const OutlineField = (props) => {
	useEffect(() => {
		styleRef.current.innerText = myCss;
		outline.current.width = 100;
	});
	const onClick = () => { 
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

const ListContext = createContext();
const MyList = (props) => {
	useEffect(() => {
		styleRef.current.innerText = LIST_CSS;
		list.current.parentNode.host.addEventListener('focusout', () => {
			console.log("WTF");
			if(ripple) ripple.endPress();
		});
	});
	const styleRef = useRef();
	const [ripple, setRipple] = useState(null);
	/*
	const onClick = (r) => {
		console.log(list.current);
		list.current.focus();
		setRipple(r);
	}; */
	const list = useRef();
	return html`
	<style ref=${styleRef} />
	<${ListContext.Provider} value=${{setRipple}} >
	<ul class="mdc-deprecated-list" ref=${list} tabindex="-1">
	${props.children}
	</ul>
	<//>
	`;
}

import webRegister from './webc.js';
//webComponents.register(MyList, 'veef-list', [], {shadow: true});
webRegister(MyList, 'veef-list', [], {shadow: true});

const ListItem = (props) => {
	const context = useContext(ListContext);
	useEffect(() => {
		styleRef.current.innerText = LIST_ITEM_CSS;
		const outerEl = styleRef.current.parentNode.host;
		//outerEl.setAttribute('tabindex', '-1');
		outerEl.tabIndex = -1;
		outerEl.setAttribute('aria-disabled', false);
		outerEl.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			context.setRipple(ripple.current);
			outerEl.focus();
		});
		outerEl.addEventListener('mousedown', (e) => {
			ripple.current.startPress(e);
		});
		outerEl.addEventListener('mouseup', (e) => {
			ripple.current.endPress();
		});
		outerEl.addEventListener('mouseenter', (e) => {
			ripple.current.startHover();
		});
		outerEl.addEventListener('mouseleave', (e) => {
			ripple.current.endHover();
		});
	});
	const styleRef = useRef();
	const ripple = useRef();
	return html`
	<style ref=${styleRef} />
	<mwc-ripple ref=${ripple} />
	<span class="mdc-deprecated-list-item__graphic material-icons"><slot name="graphic" /></span>
	<span class="mdc-deprecated-list-item__text"><slot /></span>
	<span class="mdc-deprecated-list-item__meta material-icons"><slot name="meta" /></span>
	`;
}

webRegister(ListItem, 'veef-list-item', [], {shadow: true});


const LIST_CSS = `
:host{
display: block;
}
.mdc-deprecated-list {
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    line-height: 1.5rem;
    margin: 0px;
    list-style-type: none;
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    padding: var(--mdc-list-vertical-padding, 8px) 0;
}
`;
const LIST_ITEM_CSS = `
:host{
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    line-height: 1.5rem;
    list-style-type: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: var(--mdc-list-side-padding, 16px);
    padding-right: var(--mdc-list-side-padding, 16px);
    outline: none;
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    height: 72px;
	cursor: pointer;
}
:host([twoline]) {
    height: 72px;
}
:host([disabled]), :host([noninteractive]) {
    cursor: default;
    pointer-events: none;
}
:host([graphic="avatar"]) .mdc-deprecated-list-item__graphic, :host([graphic="medium"]) .mdc-deprecated-list-item__graphic, :host([graphic="large"]) .mdc-deprecated-list-item__graphic, :host([graphic="control"]) .mdc-deprecated-list-item__graphic {
    margin-left: 0px;
    margin-right: var(--mdc-list-item-graphic-margin, 16px);
}
:host([graphic="avatar"]) .mdc-deprecated-list-item__graphic {
    width: var(--mdc-list-item-graphic-size, 40px);
    height: var(--mdc-list-item-graphic-size, 40px);
}
.mdc-deprecated-list-item__graphic {
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    fill: currentcolor;
    display: inline-flex;
}
:host([disabled]), :host([noninteractive]) {
    cursor: default;
    pointer-events: none;
}
:host([twoline]) .mdc-deprecated-list-item__text {
    align-self: flex-start;
}
.mdc-deprecated-list-item__text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.mdc-deprecated-list-item__meta {
    width: var(--mdc-list-item-meta-size, 24px);
    height: var(--mdc-list-item-meta-size, 24px);
    margin-left: auto;
    margin-right: 0px;
    color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
}

`;

