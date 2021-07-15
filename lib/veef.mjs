let e=(e,n)=>{customElements.define(e,class extends HTMLElement{constructor(){super(),this.t=this.attachShadow({mode:"open"})}connectedCallback(){let e=this.t,l={o:"",l:0,i:[],u(){l.o="",l.l=0,l.i=[]},v:{},addStyle(e){l.o+=e},slot:(e,t)=>(s.n=e,s),ref:e=>d[e],add(t){let o=++l.l
return{val:o in l.v?l.v[o]:t,set(t){l.v[o]=t,(()=>{let t=l.i
l.u()
let o=i(n(l))
r(c,o,e),c=o,t.map((t=>t(e)))})()}}},onRender(e){l.i.push(e)}}
let i=e=>{let t=o("style")
return t._[0]=l.o,e._.unshift(t),e}
let c=i(n(l))
e.append(t(c)),l.i.map((t=>t(e)))}})},t=e=>{if(!e.m)return document.createTextNode(e)
let n=e.p
"root"==n&&(n="div")
let r=document.createElement(n)
return f(e.h,r),r.append(...e._.map((e=>t(e)))),r},n=(e,r,o,s)=>{if(i(r))o&&o.remove()
else if(i(e))r&&s.append(t(r))
else{if(!r.m||!e.m)return e!==r?void o.replaceWith(t(r)):void 0
if(e.p==r.p){f(r.h.filter((t=>{return t[1]!=(n=t[0],e.h.find((e=>e[0]==n))[1])
var n})),o)
for(let t=0;;t++){let s=e._[t],l=r._[t]
if(i(s)&&i(l))break
n(s,l,o.childNodes[t],o)}}else o.replaceWith(t(r))}},r=(e,t,r)=>n(e,t,r.children[0]),o=e=>({p:e,h:[],_:[""],x:0,m:1}),s={},l=(e,...t)=>{let n=15,r=e=>{let t=o("slot")
t.v=e,l._.push(t)}
let l=o("root"),c=l,d=null,f=2
let a=[l],v=e=>l._.push(e),_=e=>{l.x=v(e),v("")},m=()=>{l.h[0][1]+=d},p=e=>e.map((e=>e.m?e:u(e))).filter((e=>""!==e))
let h={0:{">":2," ":1,"/":4,[n](){l.p+=d}},1:{">":2," ":1,"/":4,[n](){l.h.unshift([d,""]),f=6}},6:{"=":7,[n](){l.h[0][0]+=d}},7:{'"':8,"'":9,[n]:m},8:{'"':1,[n]:m},9:{"'":1,[n]:m},2:{[n](){if("<"==d)return l._=p(l._),void(f=3)
l._[l.x]+=d}},3:{"/":4,[n](){let e=o(d)
a.push(l),_(e),l=e,f=0}},4:{[n](){">"==d&&(l=a.pop(),f=2)}}},k=0
for(var b=0;;b++){if(b>=e[k].length){if(k>=t.length)break
let n=t[k]
if(6!=f&&7!=f||(l.h[0][1]=n,f=1),2==f&&(n==s?r(s.n):_(n.toString())),b=0,k++,i(e[k][0]))break}d=e[k][b],0!=f&&1!=f||(d=d.replace(/\s/," "))
let n=h[f]
d in n?f=n[d]:n[15]()}return c._=p(c._),c},i=e=>void 0===e
let c=new Map,d={}
let f=(e,t)=>{e.map((e=>{let n=e[0],r=e[1]
if("class"!=n||r.trim)if("ref"!=n){if((e=>"on"==e.substr(0,2))(n)&&!r.trim){let e=n.toLowerCase().substr(2),o=c.get(t)||{[e]:null}
return t.removeEventListener(e,o[e]),t.addEventListener(e,r),o[e]=r,void c.set(t,o)}t.setAttribute(n,r)}else d[r]=t
else{let e=t.classList
for(var o in e.forEach((e=>e in r?null:r[e]=0)),r)r[o]?e.add(o):e.remove(o)}}))},u=e=>{if(""===e)return""
let t=e.trim(),n="",r=""
return e[0]!==t[0]&&(n=" "),e.substr(-1)!==t.substr(-1)&&(r=" "),""==t&&n==r?n:n+t+r}
export{e as createElement,l as h}
