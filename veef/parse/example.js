const createElement = (name, component) => {
    let opts = null;
    customElements.define(name, class extends HTMLElement {
        constructor() {
            super()
            this._r = this.attachShadow(opts || {mode: 'open'})
        }
        connectedCallback() {
            const hookCounter = 'h', renderFns = 'f', reset = 'r', data = 'd';
            const root = this._r
            let rerender = () => {
                let prevFns = state[renderFns]
                state[reset]()
                let newVdom = component(state)
                diff(lastVdom, newVdom, root)
                lastVdom = newVdom;
                prevFns.map(x => x(root))
            }
            let state = {
                [hookCounter]: 0,
                [renderFns]: [],
                [reset]: () => {
                    state[hookCounter] = 0
                    state[renderFns] = []
                },
                [data]: {},
                slot: (name, data) => { DOM_SLOT.n = name; return DOM_SLOT }, 
                ref: (name) => refCache[name],
                track: (defaultVal) => {
                    let key = ++state[hookCounter]
                    const set = (x) => { state[data][key] = x; rerender() }
                    if(key in state[data]) return {value: state[data][key], set}
                    state[data][key] = defaultVal
                    return {value: defaultVal, set}
                },
                onRender: (cb) => {
                    state[renderFns].push(cb)
                },
            }
            let lastVdom = component(state)
            root.append(render(lastVdom))
            state[renderFns].map(x => x(root))
        }
        /*disconnectedCallback() {
        }*/
        attributeChangedCallback(name, from, to) {
        }
    })
}
const render = (vdom) => {
    if(vdom.charAt) return document.createTextNode(vdom);
    let name = vdom.name
    if(name == 'root') name = 'div'
    let newEl = document.createElement(name);
    if(name == 'slot') newEl.name = vdom.n;
    vdom.props.map(x => { 
        if(!setEvent(x, newEl))
        newEl[x.name] = x.value
    })
    newEl.append(...vdom.children.map(x => render(x)));
    return newEl
};
const isEvent = (x) => x.name.substr(0, 2) == 'on'
const _diff = (vdom1, vdom2, domNode, parentNode) => {
    if(isUndef(vdom2)) {
        if(domNode) domNode.remove()
        return
    }
    if(isUndef(vdom1)) {
        if(vdom2) parentNode.append(render(vdom2))
        return
    }
    if(!vdom2.el || !vdom1.el) {
        if(vdom1 !== vdom2) {
            domNode.replaceWith(render(vdom2))
            return
        }
        return
    }
    if(vdom1.name != vdom2.name) {
        domNode.replaceWith(render(vdom2))
        return
    }
    vdom2.props.filter(x => !isEvent(x) && x.name != 'ref' && x.value != vdom2.props[x.key]).map(x => domNode[x.key] = x.value)
    vdom2.props.map(x => setEvent(x, domNode))
    const recursiveDiff = (dom) => {
        dom.children.map((x, i) => _diff(vdom1.children[i], vdom2.children[i], domNode.childNodes[i], domNode))
    }
    recursiveDiff(vdom2)
    recursiveDiff(vdom1)
}
const diff = (vdom1, vdom2, w) => _diff(vdom1, vdom2, w.children[0])

const newTag = (ch) => ( {name: ch, props: [], children: [''], x:0, el:1 });

const DOM_SLOT = {};

const h = (strings, ...argums) => {
    const TAG_NAME = 0, PROPS_START = 1, TAG_TEXT = 2;
    const PROP_NAME=6, PROP_EQUALS=7, PROP_Q1=8, PROP_Q2=9, EARLY=10;
    const FUNC = 99;

    const AUTOCLOSE = ['br', 'hr', 'img', 'input'];

    const addDomSlot = (name) => {
        const slotTag = newTag('slot')
        slotTag.n = name;
        tag[children].push(slotTag)
    }

	let tag = newTag('root');
	let root = tag;
	let chr = null;
	let stage = 2;

	const tagStack = [tag];

    const children = 'children'
	const _put = (x) => tag[children].push(x)
	const put = (x) => { tag.x=_put(x); _put('') }
	const propPut = (x) => tag.props[0].value += chr;


    const trimChildren = (node) => node.map(x => x.el ? x : smartTrim(x)).filter(x => x!=='');

	let transitions = {
        [TAG_NAME]: {'>': TAG_TEXT, ' ': PROPS_START, '/':4, [FUNC]: () => {tag.name += chr} },
		[PROPS_START]: {'>': TAG_TEXT, ' ': PROPS_START, '/': 4, [FUNC]: () => {
            tag.props.unshift({name: chr, value: ''});
            stage = PROP_NAME}},
		[PROP_NAME]: {'=': PROP_EQUALS, [FUNC]: () => {tag.props[0].name+= chr}},
		[PROP_EQUALS]: {'"': PROP_Q1, "'": PROP_Q2, [FUNC]: propPut},
		[PROP_Q1]: {'"': PROPS_START, [FUNC]: propPut},
		[PROP_Q2]: {"'": PROPS_START, [FUNC]: propPut},
		[TAG_TEXT]: {[FUNC]: () => {
            if(chr == '<') {
                tag[children] = trimChildren(tag[children])
                stage = 3;
                return
            }
			tag[children][tag.x] += chr
			}},
		3: {'/': 4, [FUNC]: () => {
			const newEl = newTag(chr)
			tagStack.push(tag)
			put(newEl)
			tag = newEl
			stage = TAG_NAME
			}},
		4: {[FUNC]: () => {
			if(chr != '>')  return; 
			tag = tagStack.pop()
			stage = TAG_TEXT;
			}}
	};
	let c = 0;
	for(var i = 0;;i++) {
		if(i >= strings[c].length) {
            if(c >= argums.length) break;
			const arg = argums[c];
			if(stage == PROP_NAME || stage == PROP_EQUALS) {
				tag.props[0].value = arg;
				stage = PROPS_START;
			}
			if(stage == 2) {
                if(arg === DOM_SLOT) addDomSlot(DOM_SLOT.n)
                else
				put(arg.toString())
			}
			i = 0; c++;
            if(isUndef(strings[c][0])) break;
		}
		chr  = strings[c][i];
		let T = transitions[stage]
		if(chr in T) stage = T[chr]
		else T[FUNC]()
	}
    root[children] = trimChildren(root[children])
	return root;
}

export { h, createElement }

const isUndef = (x) => typeof x === 'undefined'

let eventHandlerCache = []
let refCache = {}
const setEvent = (x, element) => {
    if(x.name == 'ref') {
        refCache[x.value] = element
        return true
    }
    if(typeof x.value == 'function' && isEvent(x)) {
        let evName = x.name.toLowerCase().substr(2)
        eventHandlerCache.filter(h => h.name == evName && h.el == element).map(x => 
            element.removeEventListener(evName, x.fn)
        );
        eventHandlerCache.push({name: evName, el: element, fn: x.value})
        element.addEventListener(evName, x.value)
        return true
    }
    return false
}

const smartTrim = (x) => {
    if(x === '') return ''
    let fullTrim = x.trim()
    let l = '', r = '';
    if(x[0] !== fullTrim[0]) l = ' ';
    if(x.substr(-1) !== fullTrim.substr(-1)) r = ' ';
    if(fullTrim == '' && l==r) return l
    return l + fullTrim + r;
};
