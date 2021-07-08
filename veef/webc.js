import { h, useEffect, useRef, cloneElement, render, hydrate } from '@web-mjs/preact';

function register(Component, tagName, propNames, options) {
    var opts = {
            domProps: [],
            shadow: true,
            shadowOpts: {mode: 'open', delegatesFocus: false}
        };
    if(typeof options !== 'undefined') {
        opts = Object.assign(opts, options);
    }

	function PreactElement() {
		const inst = Reflect.construct(HTMLElement, [], PreactElement);
		inst._vdomComponent = Component;
		inst._root =
			opts.shadow ? inst.attachShadow( opts.shadowOpts ) : inst;
		return inst;
	}
    let pType; 
	PreactElement.prototype = pType = Object.create(HTMLElement.prototype);
	pType.constructor = PreactElement;
	pType.connectedCallback = connectedCallback;
	pType.attributeChangedCallback = attributeChangedCallback;
	pType.disconnectedCallback = disconnectedCallback;
    pType.observer = null;
    pType.isSlotted = false;

	propNames = propNames || [];
	PreactElement.observedAttributes = propNames;

	// Keep DOM properties and Preact props in sync
	propNames.forEach((name) => {
		Object.defineProperty(PreactElement.prototype, name, {
			get() {
				return this._vdom.props[name];
			},
			set(v) {
				if (this._vdom) {
					this.attributeChangedCallback(name, null, v);
				} else {
					if (!this._props) this._props = {};
					this._props[name] = v;
					this.connectedCallback();
				}

                if(opts.domProps.indexOf(name) !== -1) {
					this.setAttribute(name, v);
				}
			},
		});
	});

	return customElements.define(
		tagName || Component.tagName || Component.displayName || Component.name,
		PreactElement
	);
}

export default { register };

function ContextProvider(props) {
	this.getChildContext = () => props.context;
	// eslint-disable-next-line no-unused-vars
	const { context, children, ...rest } = props;
	return cloneElement(children, rest);
}

function connectedCallback() {
    let domChildren = [];
    let domText = this.innerHTML;
    if(this.children && this.children.length !== 0) {
        domChildren = [...this.children];
    }
    const domSlot = (slotName) => {
        let slotArgs = [];
        if(typeof slotName !== 'undefined' && slotName) {
            slotArgs = {name: slotName}
        }
        let context = null;
        slotArgs.ref = (slotElement) => {
            if(!slotElement) return;
            [...this.children].map(x => {
                if(typeof (x._vdom) === 'undefined') return;
                if(slotName && x.getAttribute('slot') !== slotName) return;
                //if(!x.assignedSlot || !x.assignedSlot.isSameNode(slotElement)) return;

                let contextReady = !!context;
                x._vdom = cloneElement(x._vdom, {context, contextReady });
                render(x._vdom, x._root);
            });
        };
        return h((props, ctx) => {
            context = ctx;
            return h('slot', slotArgs)
        });
    }
	this._vdom = h(
		ContextProvider,
		{ ...this._props, domChildren, domSlot, domText, context: null, contextReady: false },
		toVdom(this, this._vdomComponent)
	);

    this.observer = new MutationObserver((records, obs) => {
        console.log("change");
        /*
        this._vdom = h(
            ContextProvider,
            { ...this._props, context, domElement: this, contextReady },
            toVdom(this, this._vdomComponent)
        );
        render(this._vdom, this._root);
        */
        obs.disconnect();
    });

    this.observer.observe(this, { childList: true });
	(this.hasAttribute('hydrate') ? hydrate : render)(this._vdom, this._root);
}

function toCamelCase(str) {
	return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

function attributeChangedCallback(name, oldValue, newValue) {
	if (!this._vdom) return;
	// Attributes use `null` as an empty value whereas `undefined` is more
	// common in pure JS components, especially with default parameters.
	// When calling `node.removeAttribute()` we'll receive `null` as the new
	// value. See issue #50.
	newValue = newValue == null ? undefined : newValue;
	const props = {};
	props[name] = newValue;
	props[toCamelCase(name)] = newValue;
	this._vdom = cloneElement(this._vdom, props);
	render(this._vdom, this._root);
}

function disconnectedCallback() {
    if(this.observer != null) {
        this.observer.disconnect();
        this.observer = null;
    }
	render((this._vdom = null), this._root);
}

function toVdom(element, nodeName) {
    let	props = {},
		i = 0,
		a = element.attributes;

	for (i = a.length; i--; ) {
		if (a[i].name !== 'slot') {
			props[a[i].name] = a[i].value;
			props[toCamelCase(a[i].name)] = a[i].value;
		}
	}

    return h(nodeName, props);
}
