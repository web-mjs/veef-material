let e=(e,n)=>{customElements.define(e,class extends HTMLElement{constructor(){super(),this.t=this.attachShadow({mode:"open"}),this.$ctx=null}connectedCallback(){let e=this.t,l=0,i=()=>{f.o()
let s=u(n(f,this.$ctx))
l?r(l,s,e):e.append(t(s)),l=s,f.l.map((t=>t(e)))},f={i:"",l:[],o(){f.i="",f.l=[]},init(e){return f.u||(f.u=e),new Proxy(f.u,{set(e,t,n){return e[t]=n,i(),1}})},addStyle(e){f.i+=e},slot:(e,t)=>(o.m=e||"",o.v=e=>e.target.assignedNodes().map((e=>e.$ctx=t)),o),ref:e=>c[e],after(e){f.l.push(e)}}
let u=e=>{let t=s("style")
return t.h[0]=f.i,e.h.unshift(t),e}
i()}})},t=e=>{if(!e._)return document.createTextNode(e)
let n=e.m
"root"==n&&(n="div")
let r=document.createElement(n)
return u(e.p,r),r.append(...e.h.map((e=>t(e)))),r},n=(e,r,s,o)=>{if(i(r))s&&s.remove()
else if(i(e))r&&o.append(t(r))
else{if(!r._||!e._)return e!==r?void s.replaceWith(t(r)):void 0
if(e.m==r.m){u(r.p.filter((t=>{return t[1]!=(n=t[0],e.p.find((e=>e[0]==n))[1])
var n})),s)
for(let t=0;;t++){let o=e.h[t],l=r.h[t]
if(i(o)&&i(l))break
n(o,l,s.childNodes[t],s)}}else s.replaceWith(t(r))}},r=(e,t,r)=>n(e,t,r.children[0]),s=e=>({m:e,p:[],h:[""],x:0,_:1}),o={},l=(e,...t)=>{let n=e=>{let t=s("slot")
t.p=[["onslotchange",e.v],["name",e.m]],r.h.push(t)}
let r=s("root"),l=r,f=null,c=2
let u=[r],d=e=>r.h.push(e),m=e=>{r.x=d(e),d("")},v=()=>{r.p[0][1]+=f},h=e=>e.map((e=>e._?e:a(e))).filter((e=>""!==e))
let _={0:{">":2," ":1,"/":4,fn(){r.m+=f}},1:{">":2," ":1,"/":4,fn(){r.p.unshift([f,""]),c=6}},6:{"=":7,fn(){r.p[0][0]+=f}},7:{'"':8,"'":9,fn:v},8:{'"':1,fn:v},9:{"'":1,fn:v},2:{fn(){if("<"==f)return r.h=h(r.h),void(c=3)
r.h[r.x]+=f}},3:{"/":4,fn(){let e=s(f)
u.push(r),m(e),r=e,c=0}},4:{fn(){">"==f&&(r=u.pop(),c=2)}}},p=0
for(var b=0;;b++){if(b>=e[p].length){if(p>=t.length)break
let s=t[p]
if(6!=c&&7!=c||(r.p[0][1]=s,c=1),2==c&&(s==o?n(o):m(s.toString())),b=0,p++,i(e[p][0]))break}f=e[p][b],0!=c&&1!=c||(f=f.replace(/\s/," "))
let s=_[c]
f in s?c=s[f]:s.fn()}return l.h=h(l.h),l},i=e=>void 0===e
let f=new Map,c={}
let u=(e,t)=>{e.map((e=>{let n=e[0],r=e[1]
if("class"!=n||r.trim)if("ref"!=n){if((e=>"on"==e.substr(0,2))(n)&&!r.trim){let e=n.toLowerCase().substr(2),s=f.get(t)||{[e]:null}
return t.removeEventListener(e,s[e]),t.addEventListener(e,r),s[e]=r,void f.set(t,s)}t.setAttribute(n,r)}else c[r]=t
else{let e=t.classList
for(var s in e.forEach((e=>e in r?null:r[e]=0)),r)r[s]?e.add(s):e.remove(s)}}))},a=e=>{if(""===e)return""
let t=e.trim(),n="",r=""
return e[0]!==t[0]&&(n=" "),e.substr(-1)!==t.substr(-1)&&(r=" "),""==t&&n==r?n:n+t+r}
export{e as createElement,l as h}
