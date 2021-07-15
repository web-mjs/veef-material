let e=(e,n)=>{customElements.define(e,class extends HTMLElement{constructor(){super(),this.t=this.attachShadow({mode:"open"})}connectedCallback(){let e=this.t,l=0,i=s=>{f.o()
let o=a(n(u,s))
l?r(l,o,e):e.append(t(o)),l=o,f.l.map((t=>t(e)))}
this.$r=i
let f={i:"",l:[],u:[],o(){f.i="",f.l=[]}}
let u={init(e){return f.m||(f.m=e),new Proxy(f.m,{set(e,t,n){return e[t]=n,i(),1}})},addStyle(e){f.i+=e},slot:(e,t)=>(o.v=e||"",o._=n=>n.target.assignedNodes().map((n=>{n.$r&&(f.u.push({v:e,h:n.$r}),n.$r(t))})),f.u.filter((t=>t.v==e)).map((e=>e.h(t))),o),ref:e=>c[e],after(e){f.l.push(e)}},a=e=>{let t=s("style")
return t.p[0]=f.i,e.p.unshift(t),e}
i(),new MutationObserver(i).observe(this,{attributes:!0})}})},t=e=>{if(!e.k)return document.createTextNode(e)
let n=e.v
"root"==n&&(n="div")
let r=document.createElement(n)
return u(e.M,r),r.append(...e.p.map((e=>t(e)))),r},n=(e,r,s,o)=>{if(i(r))s&&s.remove()
else if(i(e))r&&o.append(t(r))
else{if(!r.k||!e.k)return e!==r?void s.replaceWith(t(r)):void 0
if(e.v==r.v){u(r.M.filter((t=>{return t[1]!=(n=t[0],e.M.find((e=>e[0]==n))[1])
var n})),s)
for(let t=0;;t++){let o=e.p[t],l=r.p[t]
if(i(o)&&i(l))break
n(o,l,s.childNodes[t],s)}}else s.replaceWith(t(r))}},r=(e,t,r)=>n(e,t,r.children[0]),s=e=>({v:e,M:[],p:[""],x:0,k:1}),o={},l=(e,...t)=>{let n=e=>{let t=s("slot")
t.M=[["onslotchange",e._],["name",e.v]],r.p.push(t)}
let r=s("root"),l=r,f=null,c=2
let u=[r],d=e=>r.p.push(e),m=e=>{r.x=d(e),d("")},v=()=>{r.M[0][1]+=f},_=e=>e.map((e=>e.k?e:a(e))).filter((e=>""!==e))
let b={0:{">":2," ":1,"/":4,fn(){r.v+=f}},1:{">":2," ":1,"/":4,fn(){r.M.unshift([f,""]),c=6}},6:{"=":7,fn(){r.M[0][0]+=f}},7:{'"':8,"'":9,fn:v},8:{'"':1,fn:v},9:{"'":1,fn:v},2:{fn(){if("<"==f)return r.p=_(r.p),void(c=3)
r.p[r.x]+=f}},3:{"/":4,fn(){let e=s(f)
u.push(r),m(e),r=e,c=0}},4:{fn(){">"==f&&(r=u.pop(),c=2)}}},h=0
for(var p=0;;p++){if(p>=e[h].length){if(h>=t.length)break
let s=t[h]
if(6!=c&&7!=c||(r.M[0][1]=s,c=1),2==c&&(s==o?n(o):m(s.toString())),p=0,h++,i(e[h][0]))break}f=e[h][p],0!=c&&1!=c||(f=f.replace(/\s/," "))
let s=b[c]
f in s?c=s[f]:s.fn()}return l.p=_(l.p),l},i=e=>void 0===e
let f=new Map,c={}
let u=(e,t)=>{e.map((e=>{let n=e[0],r=e[1]
if("class"!=n||r.trim)if("ref"!=n){if((e=>"on"==e.substr(0,2))(n)&&!r.trim){let e=n.toLowerCase().substr(2),s=f.get(t)||{[e]:null}
return t.removeEventListener(e,s[e]),t.addEventListener(e,r),s[e]=r,void f.set(t,s)}t.setAttribute(n,r)}else c[r]=t
else{let e=t.classList
for(var s in e.forEach((e=>e in r?null:r[e]=0)),r)r[s]?e.add(s):e.remove(s)}}))},a=e=>{if(""===e)return""
let t=e.trim(),n="",r=""
return e[0]!==t[0]&&(n=" "),e.substr(-1)!==t.substr(-1)&&(r=" "),""==t&&n==r?n:n+t+r}
export{e as createElement,l as h}
