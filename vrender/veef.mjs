let e=(e,n)=>{customElements.define(e,class extends HTMLElement{constructor(){super(),this.t=this.attachShadow({mode:"open"})}connectedCallback(){let e=this.t,l=0,i=s=>{f.o()
let o=d(n(a,s))
l?r(l,o,e):t(o,e),l=o,f.l.map((t=>t(e)))}
this.$r=i
let f={i:"",l:[],u:[],o(){f.i="",f.l=[]}}
let a={init:e=>(f.v||(f.v=e),new Proxy(f.v,{set:(e,t,n)=>(e[t]=n,i(),1)})),addStyle(e){f.i+=e},slot:(e,t)=>(o.m=e||"",[...this.children].map((n=>n.slot==e&&n.$r?n.$r(t):0)),o),ref(e){return c[e]},after(e){f.l.push(e)}},d=e=>{let t=s("style")
return t.h[0]=f.i,e.h.unshift(t),e}
i(),u([["vf",""]],this),new MutationObserver(i).observe(this,{attributes:!0,subtree:!0})}})},t=(e,n)=>{if(!e._)return document.createTextNode(e)
let r,s=e.m
return r="root"!=s?document.createElement(s):n,u(e.p,r),r.append(...e.h.map((e=>t(e)))),r},n=(e,r,s,o)=>{if(i(r))s&&s.remove()
else if(i(e))r&&o.append(t(r))
else{if(!r._||!e._)return e!==r?void s.replaceWith(t(r)):void 0
if(e.m==r.m){u(r.p.filter((t=>{return t[1]!=(n=t[0],e.p.find((e=>e[0]==n))[1])
var n})),s)
for(let t=0;;t++){let o=e.h[t],l=r.h[t]
if(i(o)&&i(l))break
n(o,l,s.childNodes[t],s)}}else s.replaceWith(t(r))}},r=(e,t,r)=>n(e,t,r),s=e=>({m:e,p:[],h:[""],x:0,_:1}),o={},l=(e,...t)=>{let n=e=>{let t=s("slot")
t.p=[["name",e.m]],r.h.push(t)}
let r=s("root"),l=r,f=null,c=2
let u=[r],d=e=>r.h.push(e),v=e=>{r.x=d(e),d("")},m=()=>{r.p[0][1]+=f},b=e=>e.map((e=>e._?e:a(e))).filter((e=>""!==e))
let h={0:{">":2," ":1,"/":4,fn(){r.m+=f}},1:{">":2," ":1,"/":4,fn(){r.p.unshift([f,""]),c=6}},6:{"=":7,fn(){r.p[0][0]+=f}},7:{'"':8,"'":9,fn:m},8:{'"':1,fn:m},9:{"'":1,fn:m},2:{fn(){if("<"==f)return r.h=b(r.h),void(c=3)
r.h[r.x]+=f}},3:{"/":4,fn(){let e=s(f)
u.push(r),v(e),r=e,c=0}},4:{fn(){">"==f&&(r=u.pop(),c=2)}}},_=0
for(var p=0;;p++){if(p>=e[_].length){if(_>=t.length)break
let s=t[_]
if(6!=c&&7!=c||(r.p[0][1]=s,c=1),2==c&&(s==o?n(o):v(s.toString())),p=0,_++,i(e[_][0]))break}f=e[_][p],0!=c&&1!=c||(f=f.replace(/\s/," "))
let s=h[c]
f in s?c=s[f]:s.fn()}return l.h=b(l.h),l},i=e=>void 0===e
let f=new Map,c={}
let u=(e,t)=>{e.map((e=>{let n=e[0],r=e[1]
if("class"!=n||r.trim)if("ref"!=n){if((e=>"on"==e.substr(0,2))(n)&&!r.trim){let e=n.toLowerCase().substr(2),s=f.get(t)||{[e]:null}
return t.removeEventListener(e,s[e]),t.addEventListener(e,r),s[e]=r,void f.set(t,s)}t.setAttribute(n,r)}else c[r]=t
else{let e=t.classList
for(var s in e.forEach((e=>e in r?null:r[e]=0)),r)r[s]?e.add(s):e.remove(s)}}))},a=e=>{if(""===e)return""
let t=e.trim(),n="",r=""
return e[0]!==t[0]&&(n=" "),e.substr(-1)!==t.substr(-1)&&(r=" "),""==t&&n==r?n:n+t+r}
export{e as createElement,l as h}
