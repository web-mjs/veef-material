const createElement = (name, component) => {
    let opts = null;

    customElements.define(name, class extends HTMLElement {
        constructor() {
            super()
            this._shadowRoot = this.attachShadow(opts || {mode: 'open'})
        }
        connectedCallback() {
            let root = this._shadowRoot
            // TODO: check if current render pass is done before allowing new render
            // let rendered = false;
            let lastVdom = 0
            let rerender = (_ctx) => {
                internalState._reset()
                let newVdom = wrapStyle(component(state, _ctx))

                if(!lastVdom) {
                    render(newVdom, root)
                } else {
                    diff(lastVdom, newVdom, root)
                }

                lastVdom = newVdom;
                internalState._renderHandlers.map(x => x(root))
            }
            this.$r = rerender;

            let internalState = {
                _css: '',
                _renderHandlers: [],
                _slotSubs: [],
                _reset: () => {
                    /* 
                     * Called before each render for "hook-like" methods.
                     * For example, addStyle() will be called every time, but
                     * we *do not* want to actually concatenate the CSS
                     * multiple times. Instead, always start with empty string. 
                     */ 
                    internalState._css = ''
                    internalState._renderHandlers = []
                }
            };

            const state = {
                init(defaultValues) { 
                    /* init({var1: value1, ...}) returns a setter-proxy for an
                     * object stored in the state. If state isn't init-ed,
                     * this is the first render, so we read `defaultValues`.
                     */
                    if(!internalState._varData) internalState._varData = defaultValues

                    /* The setter proxy is needed to re-render VDOM when
                     * changing a state variable. 
                     */
                    return new Proxy(internalState._varData, {
                        set(obj, prop, value){
                            obj[prop] = value;
                            rerender()
                            return 1
                        }
                    })
                },
                addStyle: (x) => {
                    /* Add CSS to the shadow DOM */
                    internalState._css += x
                },
                slot: (name, data) => {
                    DOM_SLOT._name = name || '';
                    /*DOM_SLOT._slotChange = (e) => e.target.assignedNodes().map(x => {
                        if(x.$r) {
                            internalState._slotSubs.push({_name: name, _fn: x.$r })
                            x.$r(data)
                        }
                    })*/
					[...this.children].map(x => x.slot == name && x.$r ? x.$r(data) : 0) 
                    //internalState._slotSubs.filter(x => x._name == name).map(x => x._fn(data))
                    return DOM_SLOT
                }, 
                ref: (name) => refCache[name],
                after: (cb) => {
                    internalState._renderHandlers.push(cb)
                }
            };

            const wrapStyle = (vdom) => {
                const styleTag = newTag('style')
                styleTag._children[0] = internalState._css;
                vdom._children.unshift(styleTag)
                return vdom
            }
            rerender()
			setElementProps([['vf','']], this)
            new MutationObserver(rerender).observe(this, {attributes:true,subtree:true})
        }
        /*
        TODO: Attribute stuff
        disconnectedCallback() {
        }
        attributeChangedCallback(name, from, to) {
            console.log(name, from,to)
        }
         */
    })
}
const render = (vdom, target) => {
    if(!vdom._isElement) return document.createTextNode(vdom);
    let name = vdom._name
    let newEl
    if(name != 'root') 
    newEl = document.createElement(name);
    else
    newEl = target
    setElementProps(vdom._props, newEl)
    newEl.append(...vdom._children.map(x => render(x)));
    return newEl
};
const _diff = (vdom1, vdom2, domNode, parentNode) => {
    if(isUndef(vdom2)) { // new vDOM removes a node
        if(domNode) domNode.remove()
        return
    }
    if(isUndef(vdom1)) { // node didn't exist before
        if(vdom2) parentNode.append(render(vdom2))
        return
    }
    if(!vdom2._isElement || !vdom1._isElement) { // check if nodes aren't element (TextNode)
        if(vdom1 !== vdom2) {
            domNode.replaceWith(render(vdom2))
            return
        }
        return
    }
    if(vdom1._name != vdom2._name) { // check if different tag names
        domNode.replaceWith(render(vdom2))
        return
    }

    /* Filter differing props old -> new */

    const findOldProp = (key) => vdom1._props.find(x=>x[0]==key)[1];
    setElementProps(vdom2._props.filter(x => x[1] != findOldProp(x[0])), domNode)

    for(let i = 0;;i++) {
        const v1 = vdom1._children[i], v2 = vdom2._children[i]
        if(isUndef(v1) && isUndef(v2)) break
        _diff(v1, v2, domNode.childNodes[i], domNode)
    }
}


/*@__INLINE__*/
const diff = (vdom1, vdom2, w) => _diff(vdom1, vdom2, w)

// Construct an empty virtual <tag>
/*@__PURE__*/
const newTag = (ch) => ( {_name: ch, _props: [], _children: [''], x: 0, _isElement: 1 });

const DOM_SLOT = {};

const h = (strings, ...argums) => {
    const TAG_NAME = 0, PROPS_START = 1, INNER_TEXT = 2;
    const PROP_NAME=6, PROP_EQUALS=7, PROP_Q1=8, PROP_Q2=9, EARLY=10;
    const FUNC = 15;

    /* TODO: Allow a subset of tags to be autoclosed,
        i.e. <br> instead of <br/> in parser */
    const AUTOCLOSE = ['br', 'hr', 'img', 'input'];

    const addDomSlot = (data) => {
        const slotTag = newTag('slot')
        //slotTag._props=[['onslotchange', data._slotChange],['name', data._name]]
		slotTag._props = [['name', data._name]];
        tag._children.push(slotTag)
    }

    let tag = newTag('root');
    let root = tag;
    let chr = null;
    let stage = 2;

    const tagStack = [tag];

    const _put = (x) => tag._children.push(x)
    const put = (x) => { tag.x=_put(x); _put('') }
    const propPut = () => {
        tag._props[0][1] += chr;
    }

    /* Run smart trim on all inner TextNodes and remove them if empty. */
    const trimChildren = (node) => node.map(x => x._isElement ? x : preservingTrim(x)).filter(x => x!=='');

    /* State machine for parsing JSX */
    let transitions = {
        [TAG_NAME]: {'>': INNER_TEXT, ' ': PROPS_START, '/':4, fn: () => {tag._name += chr} },
        [PROPS_START]: {'>': INNER_TEXT, ' ': PROPS_START, '/': 4, fn: () => {
            tag._props.unshift([chr, '']);
            stage = PROP_NAME}},
        [PROP_NAME]: {'=': PROP_EQUALS, fn: () => {tag._props[0][0]+= chr}},
        [PROP_EQUALS]: {'"': PROP_Q1, "'": PROP_Q2, fn: propPut},
        [PROP_Q1]: {'"': PROPS_START, fn: propPut},
        [PROP_Q2]: {"'": PROPS_START, fn: propPut},
        [INNER_TEXT]: {fn: () => {
            if(chr == '<') {
                tag._children = trimChildren(tag._children)
                stage = 3;
                return
            }
            tag._children[tag.x] += chr
        }},
        3: {'/': 4, fn: () => {
            const newEl = newTag(chr)
            tagStack.push(tag)
            put(newEl)
            tag = newEl
            stage = TAG_NAME
        }},
        4: {fn: () => {
            if(chr != '>')  return; 
            tag = tagStack.pop()
            stage = INNER_TEXT;
        }}
    };
    let c = 0;
    for(var i = 0;;i++) {
        if(i >= strings[c].length) {
            if(c >= argums.length) break;
            const arg = argums[c];
            if(stage == PROP_NAME || stage == PROP_EQUALS) {
                tag._props[0][1] = arg;
                stage = PROPS_START;
            }
            if(stage == 2) {
                if(arg == DOM_SLOT) addDomSlot(DOM_SLOT)
                else
                    put(arg.toString())
            }
            i = 0; c++;
            if(isUndef(strings[c][0])) break;
        }
        chr  = strings[c][i]
        if(stage == TAG_NAME || stage == PROPS_START) chr = chr.replace(/\s/,' ')
        let T = transitions[stage]
        if(chr in T) stage = T[chr]
        else T.fn()
    }
    root._children = trimChildren(root._children)
    return root;
}

export { h, createElement }

/*@__PURE__*/
const isUndef = (x) => typeof x == 'undefined'

let eventHandlerCache = new Map()
let refCache = {}
const setElementProps = (props, element) => {
    const isEvent = (key) => key.substr(0, 2) == 'on'
    props.map(x => {
        const key = x[0]
        const value = x[1]
        if(key == 'class' && !value.trim) {
            /* If <el class={} is an object prop we can do per-class diff.
             * Ex: old.class={a: true} and new.class{a: false, b: true}
             * means we need to do classList.remove('a') && classList.add('b')
             * ... Useful for CSS animations and such.
             */
            const cl = element.classList;
            cl.forEach((v) => v in value ? null : value[v] = 0)

            for(var cls in value) !value[cls] ? cl.remove(cls) : cl.add(cls)
            return
        }
        if(key == 'ref') {
            refCache[value] = element
            return
        }
        if(isEvent(key) && !value.trim) {
            let evName = key.toLowerCase().substr(2)
            let events = eventHandlerCache.get(element) || {[evName]: null}
            element.removeEventListener(evName, events[evName])
            element.addEventListener(evName, value)
            events[evName] = value 
            eventHandlerCache.set(element, events)
            return
        }
        element.setAttribute(key, value)
    })
}

/*@__PURE__*/
const preservingTrim = (x) => {
    /* 
     * Removes all but one whitespace.
     * Needed for proper HTML word breaking.
     * f('a')       =>  'a'
     * f('  \t  a') =>  '<space> a'
     * f('  a  ')   =>  '<space> a <space>'
     * */
    if(x === '') return ''
    let fullTrim = x.trim()
    let l = '', r = '';
    if(x[0] !== fullTrim[0]) l = ' ';
    if(x.substr(-1) !== fullTrim.substr(-1)) r = ' ';
    if(fullTrim == '' && l==r) return l
    return l + fullTrim + r;
};
