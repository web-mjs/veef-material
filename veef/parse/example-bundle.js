const e=(e,n)=>{customElements.define(e,class extends HTMLElement{constructor(){super(),this._r=this.attachShadow({mode:"open"})}connectedCallback(){const e=this._r;let s={c:"",h:0,f:[],r:()=>{s.c="",s.h=0,s.f=[]},d:{},addStyle:e=>s.c+=e,slot:(e,t)=>(a.n=e,a),ref:e=>c[e],add:t=>{let l=++s.h;const a=t=>{s.d[l]=t,(()=>{let t=s.f;s.r();let l=o(n(s));r(i,l,e),i=l,t.map((t=>t(e)))})()};return l in s.d?{val:s.d[l],set:a}:(s.d[l]=t,{val:t,set:a})},onRender:e=>{s.f.push(e)}};const o=e=>{console.log(s.c);const t=l("style");return t.children[0]=s.c,e.children.unshift(t),e};let i=o(n(s));e.append(t(i)),s.f.map((t=>t(e)))}attributeChangedCallback(e,t,n){}})},t=e=>{if(e.charAt)return document.createTextNode(e);let n=e.name;"root"==n&&(n="div");let r=document.createElement(n);return"slot"==n&&(r.name=e.n),u(e.props,r),r.append(...e.children.map((e=>t(e)))),r},n=(e,r,l,a)=>{if(o(r))l&&l.remove();else{if(!o(e))return r.el&&e.el?void(e.name==r.name?(u(r.props.filter((t=>{return t.value!=(n=t.name,e.props.find((e=>e.name==n)).value).value;var n})),l),r.children.map(((t,a)=>n(e.children[a],r.children[a],l.childNodes[a],l)))):l.replaceWith(t(r))):e!==r?void l.replaceWith(t(r)):void 0;r&&a.append(t(r))}},r=(e,t,r)=>n(e,t,r.children[0]),l=e=>({name:e,props:[],children:[""],x:0,el:1}),a={},s=(e,...t)=>{const n=99,r=e=>{const t=l("slot");t.n=e,s[m].push(t)};let s=l("root"),i=s,c=null,u=2;const p=[s],m="children",h=e=>s[m].push(e),v=e=>{s.x=h(e),h("")},f=e=>s.props[0].value+=c,b=e=>e.map((e=>e.el?e:d(e))).filter((e=>""!==e));let x={0:{">":2," ":1,"/":4,[n]:()=>{s.name+=c}},1:{">":2," ":1,"/":4,[n]:()=>{s.props.unshift({name:c,value:""}),u=6}},6:{"=":7,[n]:()=>{s.props[0].name+=c}},7:{'"':8,"'":9,[n]:f},8:{'"':1,[n]:f},9:{"'":1,[n]:f},2:{[n]:()=>{if("<"==c)return s[m]=b(s[m]),void(u=3);s[m][s.x]+=c}},3:{"/":4,[n]:()=>{const e=l(c);p.push(s),v(e),s=e,u=0}},4:{[n]:()=>{">"==c&&(s=p.pop(),u=2)}}},E=0;for(var g=0;;g++){if(g>=e[E].length){if(E>=t.length)break;const n=t[E];if(6!=u&&7!=u||(s.props[0].value=n,u=1),2==u&&(n===a?r(a.n):v(n.toString())),g=0,E++,o(e[E][0]))break}c=e[E][g],2!=u&&8!=u&&9!=u&&(c=c.replace(/\s/," "));let n=x[u];c in n?u=n[c]:n[99]()}return i[m]=b(i[m]),i},o=e=>void 0===e;let i=[],c={};const u=(e,t)=>{e.map((e=>{if("class"==e.name&&!e.value.trim){const n=t.classList;return n.forEach((t=>t in e.value?null:e.value[t]=!1)),void Object.entries(e.value).map((e=>e[1]?n.add(e[0]):n.remove(e[0])))}if("ref"!=e.name){if((e=>"on"==e.name.substr(0,2))(e)&&!e.value.trim){let n=e.name.toLowerCase().substr(2);return i.filter((e=>e[0]==n&&e[1]==t)).map((e=>t.removeEventListener(n,e[2]))),i.push({0:n,1:t,2:e.value}),void t.addEventListener(n,e.value)}t.setAttribute(e.name,e.value)}else c[e.value]=t}))},d=e=>{if(""===e)return"";let t=e.trim(),n="",r="";return e[0]!==t[0]&&(n=" "),e.substr(-1)!==t.substr(-1)&&(r=" "),""==t&&n==r?n:n+t+r};export{e as createElement,s as h};
