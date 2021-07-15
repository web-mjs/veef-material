let e=(e,n)=>{customElements.define(e,class extends HTMLElement{constructor(){super(),this.t=this.attachShadow({mode:"open"})}connectedCallback(){let e=this.t,l={o:"",l:[],i(){l.o="",l.l=[]},init(t){return l.u||(l.u=t),new Proxy(l.u,{set(t,o,s){return t[o]=s,(t=>{let o=l.l
l.i()
let s=i(n(l))
r(c,s,e),c=s,o.map((t=>t(e)))})(),1}})},addStyle(e){l.o+=e},slot:(e,t)=>(s.n=e,s),ref:e=>u[e],onDone(e){l.l.push(e)}}
let i=e=>{let t=o("style")
return t.v[0]=l.o,e.v.unshift(t),e}
let c=i(n(l))
e.append(t(c)),l.l.map((t=>t(e)))}})},t=e=>{if(!e.m)return document.createTextNode(e)
let n=e._
"root"==n&&(n="div")
let r=document.createElement(n)
return f(e.p,r),r.append(...e.v.map((e=>t(e)))),r},n=(e,r,o,s)=>{if(i(r))o&&o.remove()
else if(i(e))r&&s.append(t(r))
else{if(!r.m||!e.m)return e!==r?void o.replaceWith(t(r)):void 0
if(e._==r._){f(r.p.filter((t=>{return t[1]!=(n=t[0],e.p.find((e=>e[0]==n))[1])
var n})),o)
for(let t=0;;t++){let s=e.v[t],l=r.v[t]
if(i(s)&&i(l))break
n(s,l,o.childNodes[t],o)}}else o.replaceWith(t(r))}},r=(e,t,r)=>n(e,t,r.children[0]),o=e=>({_:e,p:[],v:[""],x:0,m:1}),s={},l=(e,...t)=>{let n=15,r=e=>{let t=o("slot")
t.h=e,l.v.push(t)}
let l=o("root"),c=l,u=null,f=2
let a=[l],v=e=>l.v.push(e),m=e=>{l.x=v(e),v("")},_=()=>{l.p[0][1]+=u},p=e=>e.map((e=>e.m?e:d(e))).filter((e=>""!==e))
let b={0:{">":2," ":1,"/":4,[n](){l._+=u}},1:{">":2," ":1,"/":4,[n](){l.p.unshift([u,""]),f=6}},6:{"=":7,[n](){l.p[0][0]+=u}},7:{'"':8,"'":9,[n]:_},8:{'"':1,[n]:_},9:{"'":1,[n]:_},2:{[n](){if("<"==u)return l.v=p(l.v),void(f=3)
l.v[l.x]+=u}},3:{"/":4,[n](){let e=o(u)
a.push(l),m(e),l=e,f=0}},4:{[n](){">"==u&&(l=a.pop(),f=2)}}},h=0
for(var k=0;;k++){if(k>=e[h].length){if(h>=t.length)break
let n=t[h]
if(6!=f&&7!=f||(l.p[0][1]=n,f=1),2==f&&(n==s?r(s.n):m(n.toString())),k=0,h++,i(e[h][0]))break}u=e[h][k],0!=f&&1!=f||(u=u.replace(/\s/," "))
let n=b[f]
u in n?f=n[u]:n[15]()}return c.v=p(c.v),c},i=e=>void 0===e
let c=new Map,u={}
let f=(e,t)=>{e.map((e=>{let n=e[0],r=e[1]
if("class"!=n||r.trim)if("ref"!=n){if((e=>"on"==e.substr(0,2))(n)&&!r.trim){let e=n.toLowerCase().substr(2),o=c.get(t)||{[e]:null}
return t.removeEventListener(e,o[e]),t.addEventListener(e,r),o[e]=r,void c.set(t,o)}t.setAttribute(n,r)}else u[r]=t
else{let e=t.classList
for(var o in e.forEach((e=>e in r?null:r[e]=0)),r)r[o]?e.add(o):e.remove(o)}}))},d=e=>{if(""===e)return""
let t=e.trim(),n="",r=""
return e[0]!==t[0]&&(n=" "),e.substr(-1)!==t.substr(-1)&&(r=" "),""==t&&n==r?n:n+t+r}
export{e as createElement,l as h}
