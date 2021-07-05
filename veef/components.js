import { render, html, useRef, useEffect, useState, useContext, createContext } from '@web-mjs/preact';
import webComponents from './webc.js'; 

// shite that needs to be handled
// aria-*, focus/active, keyboard select, multiple pointers/mobile, passive events 
// use <label>
// print?
// fuck RTL


const cssRef = (code) => {
	const setInnerCss = (el) => {
		if(el.childNodes.length === 0)
		el.appendChild(el.ownerDocument.createTextNode(code));
	}

	const r = useRef();
	useEffect(() => setInnerCss(r.current));
	return r;
};

const FOCUSED_CLS = ["mdc-text-field--focused", "mdc-text-field--label-floating"];
const FOCUSED_SPAN = ["mdc-floating-label--float-above"];

import { textFieldStyle as myCss } from './textfield2-css';
const OutlineField = (props) => {
	useEffect(() => {
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
	const [cls, setCls] = useState(["mdc-text-field","mdc-text-field--outlined"]);
	const [spanCls, setSpanCls] = useState([]);
	return html`
	<label class=${cls.join(" ")}>
      <mwc-notched-outline class="mdc-notched-outline" ref=${outline}>
      <span id="label" class=${["mdc-floating-label", ...spanCls].join(" ")}>Example</label>
      </mwc-notched-outline>
      <input aria-labelledby="label" class="mdc-text-field__input" onFocus=${onClick} onBlur=${blur} type="text" placeholder="" />
      </label>
	<style ref=${cssRef(myCss)} />`;
};

webComponents.register(OutlineField, 'veef-outlinefield', [], {shadow: true});


const CasualField = () => {
	const LB = ["mdc-text-field", "mdc-text-field--filled"];
	const [labelCls, setLabel] = useState(LB);
	const LB_FOC = ["mdc-text-field--focused", "mdc-text-field--label-floating"];

	const SPN = ["mdc-floating-label"];
	const [spanCls, setSpan] = useState(SPN);
	const SPN_FOC = "mdc-floating-label--float-above";

	const onClick = () => {
		setLabel([...labelCls, ...LB_FOC]);
		setSpan([...spanCls, SPN_FOC]);
	};
	const onBlur = () => {
		setLabel(LB);
		setSpan(SPN);
	};
	const styleRef = useRef();
	const nativeInput = useRef();
	return html`
	<label class=${labelCls.join(" ")}>
      <span class="mdc-text-field__ripple"></span>
      <span id="label" class=${spanCls.join(" ")}>Demo field</span>
      <input ref=${nativeInput} onBlur=${onBlur} onFocus=${onClick} aria-labelledby="label" class="mdc-text-field__input" type="text" placeholder=""/>
      <span class="mdc-line-ripple" style="transform-origin: 103px center;"></span>
      </label>
	<style ref=${cssRef(myCss)} />`;
};
webComponents.register(CasualField, 'veef-field', [], {shadow: true});

import { buttonStyle } from './button-css';
const Button = (props) => {
	console.log('raised' in props)
	let cls = 'mdc-button--unelevated';
	if('raised' in props) cls = 'mdc-button--raised';
	useEffect(() => {
		rippleRef.current.primary = false;
		buttonRef.current.addEventListener('mousedown', (e) => {
			rippleRef.current.startPress(e);
		});
		buttonRef.current.addEventListener('mouseup', (e) => {
			rippleRef.current.endPress();
		});
	});
	const styleRef = useRef();
	const nativeInput = useRef();
	const rippleRef = useRef();
	const buttonRef = useRef();
	return html`
	<button id="button" ref=${buttonRef}
	onFocus=${() => rippleRef.current.startFocus()}
	onBlur=${() => rippleRef.current.endFocus()}
	class="mdc-button ${cls}" aria-label="Button">
        <mwc-ripple class="ripple" ref=${rippleRef} ></mwc-ripple>
        <span class="leading-icon">
          <slot name="icon">
          </slot>
        </span>
        <span class="mdc-button__label">Primer</span>
        <span class="slot-container">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
          </slot>
        </span>
      </button>
	<style ref=${cssRef(buttonStyle)} />`;
};
webComponents.register(Button, 'veef-button', ['raised'], {shadow: true});

const ListContext = createContext();
const MyList = (props) => {
	useEffect(() => {
		list.current.addEventListener('focusout', () => {
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
	<style ref=${cssRef(listCss)} />
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
	useEffect(() => {
		const outerEl = ripple.current.parentNode.host;
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
	const ripple = useRef();
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
	<style ref=${cssRef(listItemCss)} />
	<mwc-ripple ref=${ripple} />
	<span class="mdc-deprecated-list-item__graphic material-icons"><slot name="graphic" /></span>
	${textSlot}
	<span class="mdc-deprecated-list-item__meta material-icons"><slot name="meta" /></span>
	`;
}

webComponents.register(ListItem, 'veef-list-item', ['twoline'], {shadow: true});

import { dialogStyle } from './dialog-css';
const Dialog = (props) => {
	useEffect(() => {
		const repaint = 50;
		if(props.open === true) {
			if(!dialog.current.classList.contains("mdc-dialog--display")) {
				dialog.current.classList.add("mdc-dialog--display");
				setTimeout(() => dialog.current.classList.add("mdc-dialog--open"), repaint);
			}
		} else {
			if(dialog.current.classList.contains("mdc-dialog--display")) {
				dialog.current.classList.remove("mdc-dialog--open");
				setTimeout(() => dialog.current.classList.remove("mdc-dialog--display"), 150);
			}
		}
		const KEY_ESC = 27;
		const handleKey = (event) => { 
			var key = event.which || event.keyCode;
			if (key === KEY_ESC) {
				close();
				event.stopPropagation();
			}
		};
		document.addEventListener('keyup', handleKey);
		return () => {
			document.removeEventListener('keyup', handleKey);
		};
	});
	const style = useRef();
	const dialog = useRef();
	const container = useRef();
	const close = () => {
		dialog.current.getRootNode().host.open = false;
	};
	let dialogCls;
	dialogCls = (["mdc-dialog"]).join(" ");
	return html`
	<style ref=${cssRef(dialogStyle)} />
	<div role="alertdialog" ref=${dialog} aria-modal="true" aria-labelledby="title" aria-describedby="content"
	class="mdc-dialog">
      <div class="mdc-dialog__container" ref=${container}>
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
      <div class="mdc-dialog__scrim" onClick=${close}></div>
    </div>
	`;
};
webComponents.register(Dialog, 'veef-dialog', ['heading', 'open', 'k'], {shadow: true});

import { switchStyle } from './switch-css.js';
const Switch = (props) => {
	const style = useRef();
	const check = useRef();
	return html`
	<style ref=${cssRef(switchStyle)} />
	<div class="mdc-switch mdc-switch--checked" ref=${check}>
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          
        <mwc-ripple unbounded="">
        </mwc-ripple>
          <div class="mdc-switch__thumb">
            <input type="checkbox" onChange=${() => check.current.classList.toggle('mdc-switch--checked')}
			id="basic-switch" class="mdc-switch__native-control" role="switch" aria-checked="true" />
          </div>
        </div>
      </div>`;
};

webComponents.register(Switch, 'veef-switch', ['checked']);


import { tabStyle, tabGroupStyle } from './tabgroup-css.js';

const SingleTab = (props) => {
	const tabCtx = useContext(TabContext);
	const tabClasses = ['mdc-tab'];

	let thisActive = false;
	if(tabCtx.active.key === props.tabKey)  {
		thisActive = true;
		tabClasses.push('mdc-tab--active');
	}
	const activeIndicator = 'mdc-tab-indicator--active';
	useEffect(() => {
		const hostNode = btn.current.parentNode.host;
		if(thisActive && !indicator.current.classList.contains(activeIndicator)){
			let pos = -2000;
			if(tabCtx.previousActive.key !== null) {
				const ourPos = btn.current.getBoundingClientRect();
				const prevPos = tabCtx.previousActive.btnNode.getBoundingClientRect();
				pos = prevPos.left - ourPos.left;
			}

			indicatorLine.current.classList.remove('transition-cls');
			indicatorLine.current.style.setProperty('--tranX', `${Math.round(pos)}px`);

			indicatorLine.current.getBoundingClientRect();
			indicatorLine.current.classList.add('transition-cls');
			indicatorLine.current.style.setProperty('--tranX', `0px`);
			indicator.current.classList.add(activeIndicator);
			indicatorLine.current.getBoundingClientRect();
		}
		if(!thisActive)
			indicator.current.classList.remove(activeIndicator);
		document.addEventListener('mouseup', mUp);
		return () => {
			document.removeEventListener('mouseup', mUp);
		};
	});
	const btn = useRef();
	const onClick = (e) => {
		tabCtx.onClick({key: props.tabKey, e: e, btnNode: btn.current});
	};

	const mDown = (e) => {
		ripple.current.startPress(e);
	};
	const mUp = (e) => {
		ripple.current.endPress();
	};
	const indicator = useRef();
	const indicatorLine = useRef();
	const ripple = useRef();
	return html`
	<button ref=${btn} role="tab" onMouseDown=${mDown} 
	onClick=${onClick} aria-selected="true" tabindex="0" class=${tabClasses.join(" ")}>
        <span class="mdc-tab__content">
        <span class="mdc-tab__text-label">${props.children}</span>
        </span>
		<span class="mdc-tab-indicator" ref=${indicator}>
		<span ref=${indicatorLine} class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"/>
		</span>
		<mwc-ripple ref=${ripple} primary/>
      </button>
	  <style ref=${cssRef(tabStyle)} />
	`;
};

webComponents.register(SingleTab, 'veef-tab', ['tabKey'],
	{shadowOpts: {mode: 'open', delegatesFocus: true}, shadow: true, domProps: ['tabKey']});

const TabContext = createContext();
const TabGroup = (props) => {
	let [active, setActive] = useState({key: null, e: null, btnNode: null});
	let [previousActive, setPrev] = useState({key: null, e: null, btnNode: null});
	const tabCtx = {
		onClick: (data) => {
			if(active) {
				setPrev(active)
			}
			setActive({key: data.key, e: data.e, btnNode: data.btnNode})
		},
		active,
		previousActive
	}
	const tabs = useRef();
	return html`
	<style ref=${cssRef(tabGroupStyle)} />
	<div class="mdc-tab-bar">
		<div class="scr-wrap">
			<div class="mdc-tab-scroller">
				<div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll"
				style="margin-bottom: 0px;">
					<div ref=${tabs} class="mdc-tab-scroller__scroll-content">
					<${TabContext.Provider} value=${tabCtx}>
					${props.children}
					<//>
					</div>
				</div>
			</div>
		</div>
	</div>
	`;
}

webComponents.register(TabGroup, 'veef-tabgroup', [], {shadow: true});

const Checkbox = (props) => {
	useEffect(() => {
		ripple.current.unbounded = true;
		if(cls.indexOf("anim")) {
			setTimeout(() => {
				setCls(cls.split(" ")[0]);
			}, 200);
		}
	});
	const [cls, setCls] = useState("");
	const ripple = useRef();
	const native = useRef();
	const onChange = (e) => {
		if(e.target.checked) 
		setCls("mdc-checkbox--selected mdc-checkbox--anim-unchecked-checked");
		else
		setCls(" mdc-checkbox--anim-checked-unchecked");
	};
	return html`<style ref=${cssRef(CSTYLE)} />
	<div class="mdc-checkbox mdc-checkbox--upgraded mdc-checkbox--touch ${cls}">
		<input type="checkbox" ref=${native} onChange=${onChange} class="mdc-checkbox__native-control" data-indeterminate="false" value="" />
		<div class="mdc-checkbox__background">
		  <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
			<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
		  </svg>
	  <div class="mdc-checkbox__mixedmark"></div>
	</div>
	<mwc-ripple ref=${ripple} />
	</div>
	`;
}

webComponents.register(Checkbox, 'veef-checkbox', ["unbounded"], {domProps: ['unbounded'], shadow: true});
const CSTYLE = `
.mdc-checkbox {
  padding: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);
  margin: calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);
}
.mdc-checkbox .mdc-checkbox__ripple::before, .mdc-checkbox .mdc-checkbox__ripple::after {
  background-color: #000;
}
.mdc-checkbox:hover .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before {
  opacity: 0.04;
}
.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {
  transition: opacity 150ms linear;
}
.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-checkbox.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);
}
.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {
  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));
}
.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before {
  opacity: 0.04;
}
.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {
  transition: opacity 150ms linear;
}
.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {
  transition-duration: 75ms;
  opacity: 0.12;
  /* @alternate */
  opacity: var(--mdc-ripple-press-opacity, 0.12);
}
.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);
}
.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,
.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after {
  background-color: #018786;
  /* @alternate */
  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));
}
.mdc-checkbox .mdc-checkbox__background {
  top: calc((40px - 18px) / 2);
  /* @alternate */
  top: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);
  left: calc((40px - 18px) / 2);
  /* @alternate */
  left: calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);
}
.mdc-checkbox .mdc-checkbox__native-control {
  top: calc((40px - 40px) / 2);
  /* @alternate */
  top: calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);
  right: calc((40px - 40px) / 2);
  /* @alternate */
  right: calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);
  left: calc((40px - 40px) / 2);
  /* @alternate */
  left: calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);
  width: 40px;
  /* @alternate */
  width: var(--mdc-checkbox-ripple-size, 40px);
  height: 40px;
  /* @alternate */
  height: var(--mdc-checkbox-ripple-size, 40px);
}
.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {
  border-color: rgba(0, 0, 0, 0.54);
  /* @alternate */
  border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
  background-color: transparent;
}
.mdc-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background,
.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled ~ .mdc-checkbox__background {
  border-color: #018786;
  /* @alternate */
  border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));
  background-color: #018786;
  /* @alternate */
  background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));
}
@keyframes m-fin {
  0% {
    border-color: rgba(0, 0, 0, 0.54);
    /* @alternate */
    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
    background-color: transparent;
  }
  50% {
    border-color: #018786;
    /* @alternate */
    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));
    background-color: #018786;
    /* @alternate */
    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));
  }
}
@keyframes m-fout {
  0%, 80% {
    border-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));
    background-color: var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));
  }
  100% {
    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
    background-color: transparent;
  }
}
.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
  animation-name: m-fin;
}
.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
  animation-name: m-fout;
}
.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {
  border-color: var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));
  background-color: transparent;
}
.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked ~ .mdc-checkbox__background,
.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate ~ .mdc-checkbox__background,
.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled] ~ .mdc-checkbox__background {
  border-color: transparent;
  background-color: var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));
}
.mdc-checkbox .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {
  color: #fff;
  /* @alternate */
  color: var(--mdc-checkbox-ink-color, #fff);
}
.mdc-checkbox .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {
  border-color: #fff;
  /* @alternate */
  border-color: var(--mdc-checkbox-ink-color, #fff);
}
.mdc-checkbox .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {
  color: #fff;
  /* @alternate */
  color: var(--mdc-checkbox-ink-color, #fff);
}
.mdc-checkbox .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {
  border-color: #fff;
  /* @alternate */
  border-color: var(--mdc-checkbox-ink-color, #fff);
}

.mdc-touch-target-wrapper {
  display: inline;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: mdc-animation-deceleration-curve-timing-function;
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
}

@media screen and (-ms-high-contrast: active) {
  .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {
    border-color: GrayText;
    /* @alternate */
    border-color: var(--mdc-checkbox-disabled-color, GrayText);
    background-color: transparent;
  }

  .mdc-checkbox__native-control[disabled]:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control[disabled]:indeterminate ~ .mdc-checkbox__background,
.mdc-checkbox__native-control[data-indeterminate=true][disabled] ~ .mdc-checkbox__background {
    border-color: GrayText;
    background-color: transparent;
    /* @alternate */
    background-color: var(--mdc-checkbox-disabled-color, transparent);
  }

  .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {
    color: GrayText;
    /* @alternate */
    color: var(--mdc-checkbox-ink-color, GrayText);
  }
  .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {
    border-color: GrayText;
    /* @alternate */
    border-color: var(--mdc-checkbox-ink-color, GrayText);
  }

  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox--upgraded .mdc-checkbox__checkmark {
  opacity: 1;
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background, .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;
  transition: none;
}
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;
  transition: none;
}
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,
.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background {
  transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
}
.mdc-checkbox__native-control:disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox--touch .mdc-checkbox__native-control {
  top: calc((40px - 48px) / 2);
  /* @alternate */
  top: calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);
  right: calc((40px - 48px) / 2);
  /* @alternate */
  right: calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);
  left: calc((40px - 48px) / 2);
  /* @alternate */
  left: calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);
  width: 48px;
  /* @alternate */
  width: var(--mdc-checkbox-touch-target-size, 48px);
  height: 48px;
  /* @alternate */
  height: var(--mdc-checkbox-touch-target-size, 48px);
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark {
  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark,
.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark,
.mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,
.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,
.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,
.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark {
  transition: none;
}

:host {
  outline: none;
  display: inline-flex;
  -webkit-tap-highlight-color: transparent;
}

.mdc-checkbox .mdc-checkbox__background::before {
  content: none;
}
`;
