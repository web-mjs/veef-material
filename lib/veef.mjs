let e=(e,n)=>{customElements.define(e,class extends HTMLElement{constructor(){super(),this.t=this.attachShadow({mode:"open"})}connectedCallback(){let e=this.t,l={o:"",l:[],i(){l.o="",l.l=[]},init(t){return l.u||(l.u=t),new Proxy(l.u,{set(t,o,s){return t[o]=s,(t=>{let o=l.l
l.i()
let s=i(n(l))
r(f,s,e),f=s,o.map((t=>t(e)))})(),1}})},addStyle(e){l.o+=e},slot:(e,t)=>(s.n=e,s),ref:e=>c[e],onDone(e){l.l.push(e)}}
let i=e=>{let t=o("style")
return t.v[0]=l.o,e.v.unshift(t),e}
let f=i(n(l))
e.append(t(f)),l.l.map((t=>t(e)))}})},t=e=>{if(!e.m)return document.createTextNode(e)
let n=e._
"root"==n&&(n="div")
let r=document.createElement(n)
return u(e.p,r),r.append(...e.v.map((e=>t(e)))),r},n=(e,r,o,s)=>{if(i(r))o&&o.remove()
else if(i(e))r&&s.append(t(r))
else{if(!r.m||!e.m)return e!==r?void o.replaceWith(t(r)):void 0
if(e._==r._){u(r.p.filter((t=>{return t[1]!=(n=t[0],e.p.find((e=>e[0]==n))[1])
var n})),o)
for(let t=0;;t++){let s=e.v[t],l=r.v[t]
if(i(s)&&i(l))break
n(s,l,o.childNodes[t],o)}}else o.replaceWith(t(r))}},r=(e,t,r)=>n(e,t,r.children[0]),o=e=>({_:e,p:[],v:[""],x:0,m:1}),s={},l=(e,...t)=>{let n=e=>{let t=o("slot")
t.h=e,r.v.push(t)}
let r=o("root"),l=r,f=null,c=2
let u=[r],a=e=>r.v.push(e),v=e=>{r.x=a(e),a("")},m=()=>{r.p[0][1]+=f},_=e=>e.map((e=>e.m?e:d(e))).filter((e=>""!==e))
let p={0:{">":2," ":1,"/":4,fn(){r._+=f}},1:{">":2," ":1,"/":4,fn(){r.p.unshift([f,""]),c=6}},6:{"=":7,fn(){r.p[0][0]+=f}},7:{'"':8,"'":9,fn:m},8:{'"':1,fn:m},9:{"'":1,fn:m},2:{fn(){if("<"==f)return r.v=_(r.v),void(c=3)
r.v[r.x]+=f}},3:{"/":4,fn(){let e=o(f)
u.push(r),v(e),r=e,c=0}},4:{fn(){">"==f&&(r=u.pop(),c=2)}}},b=0
for(var h=0;;h++){if(h>=e[b].length){if(b>=t.length)break
let o=t[b]
if(6!=c&&7!=c||(r.p[0][1]=o,c=1),2==c&&(o==s?n(s.n):v(o.toString())),h=0,b++,i(e[b][0]))break}f=e[b][h],0!=c&&1!=c||(f=f.replace(/\s/," "))
let o=p[c]
f in o?c=o[f]:o.fn()}return l.v=_(l.v),l},i=e=>void 0===e
let f=new Map,c={}
let u=(e,t)=>{e.map((e=>{let n=e[0],r=e[1]
if("class"!=n||r.trim)if("ref"!=n){if((e=>"on"==e.substr(0,2))(n)&&!r.trim){let e=n.toLowerCase().substr(2),o=f.get(t)||{[e]:null}
return t.removeEventListener(e,o[e]),t.addEventListener(e,r),o[e]=r,void f.set(t,o)}t.setAttribute(n,r)}else c[r]=t
else{let e=t.classList
for(var o in e.forEach((e=>e in r?null:r[e]=0)),r)r[o]?e.add(o):e.remove(o)}}))},d=e=>{if(""===e)return""
let t=e.trim(),n="",r=""
return e[0]!==t[0]&&(n=" "),e.substr(-1)!==t.substr(-1)&&(r=" "),""==t&&n==r?n:n+t+r}
export{e as createElement,l as h}
