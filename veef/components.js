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

// shite that needs to be handled
// aria-*, focus/active, keyboard select, multiple pointers/mobile, passive events 
// use <label>
// print?
// fuck RTL

const putCss = (el, code) => {
	if(el.childNodes.length === 0)
	el.appendChild(el.ownerDocument.createTextNode(code));
}

const El = () => html`<h1>yoo</h1>`;
const FOCUSED_CLS = ["mdc-text-field--focused", "mdc-text-field--label-floating"];
const FOCUSED_SPAN = ["mdc-floating-label--float-above"];

import useCls from './classList';

const OutlineField = (props) => {
	useEffect(() => {
		putCss(styleRef.current, myCss);
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
		putCss(styleRef.current, buttonCss);
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
		putCss(styleRef.current, listCss);
		list.current.addEventListener('focusout', () => {
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

webComponents.register(MyList, 'veef-list', [], {shadow: true});

import { listItemCss, listCss } from './list-css.js';

const ListItem = (props) => {
	const context = useContext(ListContext);
	console.log(context);
	useEffect(() => {
		putCss(styleRef.current, listItemCss);
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
	console.log(props);
	let textSlot = html`
	<span class="mdc-deprecated-list-item__text"><slot /></span>
	`;

	if(props.twoline == "true" || props.twoline === "") {
		textSlot = html`<span class="mdc-deprecated-list-item__text">
<span class="mdc-deprecated-list-item__primary-text"><slot></slot></span>
<span class="mdc-deprecated-list-item__secondary-text"><slot name="secondary"></slot></span>
      </span>
		`;
	} 
	return html`
	<style ref=${styleRef} />
	<mwc-ripple ref=${ripple} />
	<span class="mdc-deprecated-list-item__graphic material-icons"><slot name="graphic" /></span>
	${textSlot}
	<span class="mdc-deprecated-list-item__meta material-icons"><slot name="meta" /></span>
	`;
}

webComponents.register(ListItem, 'veef-list-item', ['twoline'], {shadow: true});

const Dialog = (props) => {
	useEffect(() => {
		putCss(style.current, DIALOG_CSS);
		console.log(props);
		if(props.open === "true") {
			if(!dialog.current.classList.contains("mdc-dialog--open")) {
				dialog.current.classList.add("mdc-dialog--flex");
				setTimeout(() => dialog.current.classList.add("mdc-dialog--open"), 50);
			}
		}
	});
	const style = useRef();
	const dialog = useRef();
	let dialogCls;
	dialogCls = (["mdc-dialog"]).join(" ");
	return html`
	<style ref=${style} />
	<div role="alertdialog" ref=${dialog} aria-modal="true" aria-labelledby="title" aria-describedby="content"
	class="mdc-dialog">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
      <h2 id="title" class="mdc-dialog__title">${props.heading}</h2>
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer id="actions" class="mdc-dialog__actions">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>
	`;
};
webComponents.register(Dialog, 'veef-dialog', ['heading', 'open'], {shadow: true});

const DIALOG_CSS = `
.mdc-dialog {
    display: none;
    z-index: var(--mdc-dialog-z-index, 7);
	transition:0.2s;
}
.mdc-dialog--flex {
    display: flex;
}
.mdc-dialog, .mdc-dialog__scrim {
    position: fixed;
    top: 0px;
    left: 0px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
.mdc-dialog__scrim {
	background-color: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32));
	opacity: 0;
	z-index: -1;
  transition: opacity 150ms linear;
}
.mdc-dialog--open .mdc-dialog__scrim {
    opacity: 1;
}
.mdc-dialog--open .mdc-dialog__container {
    transform: none;
    opacity: 1;
}
.mdc-dialog__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
    transform: scale(0.8);
    opacity: 0;
    pointer-events: none;
	  transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-dialog .mdc-dialog__surface{
    max-height: var(--mdc-dialog-max-height, calc(100% - 32px));
    min-width: var(--mdc-dialog-min-width, 280px);
	max-width: 80vw;
    border-radius: var(--mdc-shape-medium, 4px);
    background-color: var(--mdc-theme-surface, #fff);
    box-shadow: var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));
    position: relative;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    pointer-events: auto;
    overflow-y: auto;
}
.mdc-dialog__surface::before {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border: 2px solid transparent;
    border-radius: inherit;
    content: "";
    pointer-events: none;
}
.mdc-dialog__title {
    display: block;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
    line-height: var(--mdc-typography-headline6-line-height, 2rem);
    font-weight: var(--mdc-typography-headline6-font-weight, 500);
    letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);
    text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
    text-transform: var(--mdc-typography-headline6-text-transform, inherit);
    position: relative;
    flex-shrink: 0;
    box-sizing: border-box;
    margin: 0px 0px 1px;
    padding: 0px 24px 9px;
}
.mdc-dialog__title::before {
    display: inline-block;
    width: 0px;
    height: 40px;
    content: "";
    vertical-align: 0px;
}
.mdc-dialog .mdc-dialog__content{
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-body1-font-size, 1rem);
    line-height: var(--mdc-typography-body1-line-height, 1.5rem);
    font-weight: var(--mdc-typography-body1-font-weight, 400);
    letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);
    text-decoration: var(--mdc-typography-body1-text-decoration, inherit);
    text-transform: var(--mdc-typography-body1-text-transform, inherit);
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0px;
    overflow: auto;
    padding: 20px 24px;
    padding-top: 0px;
}
.mdc-dialog__actions {
    display: flex;
    position: relative;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    min-height: 52px;
    margin: 0px;
    padding: 8px;
    border-top: 1px solid transparent;
}
`;
