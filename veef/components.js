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
	let cls = 'normal';
	if('raised' in props) cls = 'raised';
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
	class="btn ${cls}" aria-label="Button">
        <mwc-ripple class="ripple" ref=${rippleRef} ></mwc-ripple>
        <span class="leading-icon">
          <slot name="icon">
          </slot>
        </span>
        <span class="label">${props.children}</span>
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
	onClick=${onClick} onpointerup=${mUp} onpointerout=${mUp} aria-selected="true" tabindex="0" class=${tabClasses.join(" ")}>
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
		if(cls.indexOf("anim") !== -1) {
			setTimeout(() => {
				setCls(cls.split(" ")[0]);
			}, 200);
		}
	});
	const [cls, setCls] = useState("");
	const ripple = useRef();
	const native = useRef();
	const onChange = (e) => {
		if(e.target.checked) {
			svg.current.style.setProperty('--offset', '0');
		} else {
			svg.current.style.setProperty('--offset', '29.783');
		}
	};
	const svg = useRef()
	return html`<style ref=${cssRef(CSTYLE)} />
	<div class="mdc-checkbox ${cls}">
		<input type="checkbox" ref=${native} onChange=${onChange} class="native" data-indeterminate="false" value="" />
		<div class="bg">
		  <svg class="check-svg" viewBox="0 0 24 24">
			<path ref=${svg} class="check-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
		  </svg>
	  <div class="mdc-checkbox__mixedmark"></div>
	</div>
	<mwc-ripple ref=${ripple} />
	</div>
	`;
}
const CSTYLE = `
.mdc-checkbox{
	width: 40px;
	height: 40px;
	position: relative;
	display: inline-block;
}
.mdc-checkbox .native{
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	border: 0;
	outline: 0;
	opacity: 0;
	cursor: pointer;
}
.bg{
	background: #fff;
	position: absolute;
	inset: 10px;
	border: 2px solid #eee;
	border-color: var(--unchecked, rgba(0, 0, 0, 0.54));
	border-radius: 2px;
	transition:  border-color 90ms ease-in-out 0ms, background-color 90ms ease-in-out 0ms;
	z-index: -1;
}
.native:checked ~ .bg{
	background: #018786;
	border-color: #018786;
}
.check-svg{
	color: #fff;
}
.check-path{
    stroke: currentColor;
    stroke-width: 3.12px;
	stroke-dashoffset: var(--offset, 29.7833);
    stroke-dasharray: 29.7833;
	transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
}
.check-path.no-trans{
	transition: none;
}
`;

webComponents.register(Checkbox, 'veef-checkbox', ["unbounded"], {domProps: ['unbounded'], shadow: true});
