const render = (vdom) => {
    if(vdom.charAt) return document.createTextNode(vdom);
    let newEl = document.createElement(vdom.name || 'div');
    vdom.props.map(x => newEl[x.name] = x.value)
    //vdom.props.map(x => newEl.setAttribute(x.name, x.value))
    newEl.append(...vdom.children.map(x => render(x)))
    return newEl
};
const _diff = (vdom1, vdom2, w, i, buf) => {
    if(typeof vdom1 == 'undefined') {
        if(vdom2.name) {
            let L = null;
            while(L = buf.shift()){
                if(L.name == vdom2.name) {
                    w.appendChild(L.dom)
                    return
                }
            }
        }
        w.appendChild(render(vdom2))
        return
    }
    if(vdom2.charAt && vdom1.charAt) {
        if(vdom1 !== vdom2) {
            w.insertBefore(document.createTextNode(vdom2), w.childNodes[i])
            return
        }
        return
    }
    if(vdom1.name != vdom2.name) {
        buf.push({name: vdom1.name, dom: w.childNodes[i]})
        w.replaceChild(render(vdom2), w.childNodes[i])
        return
    }
    vdom2.props.filter(x => x.value != vdom2.props[x.key]).map(x => w[x.key] = x.value)
    buf = []
    vdom2.children.map((x, i) => _diff(vdom1.children[i], x, w, i, buf))
}
const diff = (vdom1, vdom2, w) => _diff(vdom1, vdom2, w, 0, [])

const h = (strings, ...argums) => {
    const PROP_NAME=6, PROP_EQUALS=7, PROP_Q1=8, PROP_Q2=9, EARLY=10;
    const NOTAGS = ['br', 'hr', 'img', 'input'];
	const strs = [...strings];
	const el = (ch) => ( {name: ch, props: [], children: [''], x:0 });
	let tag = el('');
	let root = tag;
	let tagStack = [tag];
	let chr = null;

	let stage = 2;
	let _put = (x) => tag.children.push(x)
	let put = (x) => { tag.x=_put(x); _put('') }
	let propPut = (x) => tag.props[0].value += chr;
	let transitions = {
        0: {'>': 2, ' ': 1, '/':4, 'fn': () => {tag.name += chr} },
		1: {'>': 2, ' ': 1, '/': 4, 'fn': () => {tag.props.unshift({name: chr, value: ''}); stage = PROP_NAME}},
		[PROP_NAME]: {'=': PROP_EQUALS, 'fn': () => {tag.props[0].name+= chr}},
		[PROP_EQUALS]: {'"': PROP_Q1, "'": PROP_Q2, 'fn': propPut},
		[PROP_Q1]: {'"': 1, 'fn': propPut},
		[PROP_Q2]: {"'": 1, 'fn': propPut},
		2: {'<': 3, 'fn': () => {
			tag.children[tag.x] += chr
			}},
		3: {'/': 4, 'fn': () => {
			const n = el(chr)
			tagStack.push(tag)
			put(n)
			tag = n
			stage = 0
			}},
		4: {'fn': () => {
			if(chr != '>')  return; 
			tag = tagStack.pop()
			stage = 2;
			}}
	};
	let c = 0;
	for(var i = 0;;i++) {
		if(i >= strings[c].length) {
			const arg = argums[c];
			if(!arg) break;
			if(stage == PROP_NAME || stage == PROP_EQUALS) {
				tag.props[0].value = arg;
				stage = 1;
			}
			if(stage == 2) {
				put(arg)
			}
			i = 0; c++;
			if(c >= strings.length || i >= strings[c].length) break;
		}
		chr  = strings[c][i];
		let T = transitions[stage]
		if(chr in T) stage = T[chr]
		else T['fn']()
	}
	return root;
}

export { h as parse, render, diff }
