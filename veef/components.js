import { render, html, useRef, useEffect, useState, useContext, createContext } from '@web-mjs/preact';
import webComponents from './webc.js'; 

// Show HN: A 30KB UI component library with progressive Web Modules
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

const FOCUSED_CLS = ["textfield--focused", "textfield--label-floating"];
const FOCUSED_SPAN = ["mdc-floating-label--float-above"];

import { textFieldStyle as myCss } from './textfield-css';
const OutlineField = (props) => {
	useEffect(() => {
		outline.current.width = outline.current.querySelector('#label').getBoundingClientRect().width;
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
	const [cls, setCls] = useState(["textfield","textfield--outlined"]);
	const [spanCls, setSpanCls] = useState([]);
	return html`
	<label class=${cls.join(" ")}>
      <mwc-notched-outline class="mdc-notched-outline" ref=${outline}>
      <span id="label" class=${["mdc-floating-label", ...spanCls].join(" ")}>Example</label>
      </mwc-notched-outline>
      <input aria-labelledby="label" class="textfield__input" onFocus=${onClick} onBlur=${blur} type="text" placeholder="" />
      </label>
	<style ref=${cssRef(myCss)} />`;
};

webComponents.register(OutlineField, 'veef-outlinefield', [], {shadow: true});


const CasualField = () => {
	const LB = ["textfield", "textfield--filled"];
	const [labelCls, setLabel] = useState(LB);
	const LB_FOC = ["textfield--focused", "textfield--label-floating"];

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
      <span class="textfield__ripple"></span>
      <span id="label" class=${spanCls.join(" ")}>Demo field</span>
      <input ref=${nativeInput} onBlur=${onBlur} onFocus=${onClick} aria-labelledby="label" class="textfield__input" type="text" placeholder=""/>
      <span class="mdc-line-ripple" style="transform-origin: 103px center;"></span>
      </label>
	<style ref=${cssRef(myCss)} />`;
};
webComponents.register(CasualField, 'veef-field', [], {shadow: true});

import { buttonStyle } from './button-css';
const Button = (props) => {
	let cls = 'normal';
	if('raised' in props) cls = 'raised';
	if('light' in props) cls = 'light';
	if('borderless' in props) cls += ' borderless';
	useEffect(() => {
		rippleRef.current.primary = false;
		buttonRef.current.addEventListener('pointerdown', (e) => {
			buttonRef.current.setPointerCapture(e.pointerId)
			rippleRef.current.startPress(e);
		});
	});
	const styleRef = useRef();
	const nativeInput = useRef();
	const rippleRef = useRef();
	const buttonRef = useRef();
	const mUp = () => rippleRef.current.endPress();
	return html`
	<button id="button" ref=${buttonRef}
	onFocus=${() => rippleRef.current.startFocus()}
	onBlur=${() => rippleRef.current.endFocus()}
	onpointerup=${mUp} onpointercancel=${mUp}
	class="btn ${cls}" aria-label="Button">
        <mwc-ripple class="ripple" ref=${rippleRef} ></mwc-ripple>
        <span class="leading-icon">
          <slot name="icon">
          </slot>
        </span>
        <span class="label">${props.domText}</span>
        <span class="slot-container">
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
	${props.domSlot()}
	</ul>
	<//>
	`;
}

webComponents.register(MyList, 'veef-list', [], {shadow: true});

import { listItemCss, listCss } from './list-css.js';

const ListItem = (props) => {
	if(!props.contextReady) return html`no`
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
<span class="mdc-deprecated-list-item__secondary-text">${props.domSlot('secondary')}</span>
      </span>
		`;
	} 
	return html`
	<style ref=${cssRef(listItemCss)} />
	<mwc-ripple ref=${ripple} />
	<vf-icon><slot name="graphic" /></vf-icon>
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

import { switchStyle, checkboxStyle } from './switch-css.js';
const Switch = (props) => {
	const style = useRef();
	const check = useRef();
	return html`
	<style ref=${cssRef(switchStyle)} />
	<div class="switch switch-checked" ref=${check}>
        <div class="switch-track"></div>
        <div class="switch-thumb-under">
          
        <mwc-ripple unbounded="">
        </mwc-ripple>
          <div class="switch-thumb">
            <input type="checkbox" onChange=${() => check.current.classList.toggle('switch-checked')}
			id="basic-switch" class="native-input" role="switch" aria-checked="true" />
          </div>
        </div>
      </div>`;
};

webComponents.register(Switch, 'vf-switch', ['checked']);


import { tabStyle, tabGroupStyle } from './tabgroup-css.js';

const SingleTab = (props) => {
	if(!props.contextReady) return html`nooo`;
	const tabCtx = useContext(TabContext);
	const tabClasses = ['mdc-tab'];

	let thisActive = false;
	if(tabCtx.active.key === props.tabKey)  {
		thisActive = true;
		tabClasses.push('mdc-tab--active');
	}
	const activeIndicator = 'mdc-tab-indicator--active';
	console.log("rendering tab")
	useEffect(() => {
		if(tabCtx.active.key === null && props.tabKey == 'one')
			onClick(new PointerEvent('click'))
		console.log("after render")
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
        <span class="mdc-tab__text-label">${props.domText}</span>
        </span>
		<span class="mdc-tab-indicator" ref=${indicator}>
		<span ref=${indicatorLine} class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"/>
		</span>
		<mwc-ripple ref=${ripple} primary/>
      </button>
	  <style ref=${cssRef(tabStyle)} />
	`;
};

webComponents.register(SingleTab, 'veef-tab', ['tabKey', 'active'],
	{shadowOpts: {mode: 'open', delegatesFocus: true}, shadow: true, domProps: ['tabKey', ]});

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
					${props.domSlot()}
					<//>
					</div>
				</div>
			</div>
		</div>
	</div>
	`;
}

webComponents.register(TabGroup, 'vf-tabgroup', [], {shadow: true});

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
	return html`<style ref=${cssRef(checkboxStyle)} />
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

const Icon = (props) => {
const SVG_DATA={
	"add":"~M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z^",
	"arrow-down":"~M7 10l5 5 5-5H7z^",
	"chev-left":"~M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z^",
	"chev-right":"~M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z^",
	"chev-down":"~M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z^",
	"dark-mode":"~M9.4 5.5a7.4 7.4 0 009.1 9.1 7 7 0 11-9.1-9zM12 3a9 9 0 108.9 7.6 5.4 5.4 0 01-9.8-3.1c0-1.8.9-3.4 2.3-4.4L12 3z^",
	"delete":"~M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z^",
	"done":"~M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z^",
	"error":"~M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z^",
	"like":"~M12 21.4L10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.5 4.4 3 7.5 3A6 6 0 0112 5a6 6 0 014.5-2c3 0 5.5 2.4 5.5 5.5 0 3.8-3.4 6.9-8.6 11.5L12 21.4z^",
	"download":"<g>~M18 15v3H6v-3H4v3c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-3H18z M17 11l-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59L7 11l5 5 L17 11z^</g>",
	"upload":"<g>~M18 15v3H6v-3H4v3c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-3H18z M7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5L7 9z^</g>",
	"folder":"~M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z^",
	"home":"~M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z^",
	"light-mode":"~M7 5L5 3 4 4l1 2zm-6 6h3v2H1zM11 1h2v3h-2zm8 2l1 1-1 2-2-1zm-2 15l2 2 1-1-1-2zm3-7h3v2h-3zm-8-5a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8zm-1 4h2v2h-2zm-7-1l1 1 2-2-2-1z^",
	"pin":"~M12 2a7 7 0 00-7 7c0 5.3 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zM7 9a5 5 0 0110 0c0 2.9-2.9 7.2-5 9.9-2-2.7-5-7-5-9.9z^<circle cx=12 cy=9 r=2.5 />",
	"lock":"~M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z^",
	"login":"~M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5L11 7z M20 19h-8v2h8c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z^",
	"logout":"~M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4L17 8z M5 5h7V3H5C3.9 3 3 3.9 3 5v14c0 1.1 0.9 2 2 2h7v-2H5V5z^",
	"dots":"~M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z^",
	"refresh":"~M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z^",
	"search":"~M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z^"};	
	
	useEffect(() => {
		let iconData = SVG_DATA['home'];
		const wantedIcon = props.domText.trim(); //props.domElement.innerHTML.trim();
		if(wantedIcon in SVG_DATA) {
			iconData = SVG_DATA[wantedIcon];
		}
		iconData = iconData.replaceAll('~','<path d="').replaceAll('^', '"/>');
		svg.current.innerHTML = iconData;
	});
	const svg = useRef();
	const w=32, h=32;
	return html`<svg xmlns="http://www.w3.org/2000/svg" width=${w} height=${h} ref=${svg} viewBox="0 0 24 24" fill="#000000"></svg>`;
};
webComponents.register(Icon, 'vf-icon');

webComponents.register(Checkbox, 'veef-checkbox', ["unbounded"], {domProps: ['unbounded'], shadow: true});
