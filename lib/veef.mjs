const e=(e,n)=>{customElements.define(e,class extends HTMLElement{constructor(){super(),this.t=this.attachShadow({mode:"open"})}connectedCallback(){const e=this.t;let l={o:"",l:0,i:[],u(){l.o="",l.l=0,l.i=[]},v:{},addStyle:e=>l.o+=e,slot:(e,t)=>(s.n=e,s),ref:e=>d[e],add(t){let o=++l.l;const s=t=>{l.v[o]=t,(()=>{let t=l.i;l.u();let o=i(n(l));r(c,o,e),c=o,t.map((t=>t(e)))})()};return o in l.v?{val:l.v[o],set:s}:(l.v[o]=t,{val:t,set:s})},onRender(e){l.i.push(e)}};const i=e=>{const t=o("style");return t.children[0]=l.o,e.children.unshift(t),e};let c=i(n(l));e.append(t(c)),l.i.map((t=>t(e)))}})},t=e=>{if(e.charAt)return document.createTextNode(e);let n=e.name;"root"==n&&(n="div");let r=document.createElement(n);return"slot"==n&&(r.name=e.n),a(e.props,r),r.append(...e.children.map((e=>t(e)))),r},n=(e,r,o,s)=>{if(i(r))o&&o.remove();else if(i(e))r&&s.append(t(r));else{if(!r.el||!e.el)return e!==r?void o.replaceWith(t(r)):void 0;if(e.name==r.name){a(r.props.filter((t=>{return t[1]!=(n=t,e.props.find((e=>e[0]==n[0]))[1]);var n})),o);for(let t=0;;t++){const s=e.children[t],l=r.children[t];if(i(s)&&i(l))break;n(s,l,o.childNodes[t],o)}}else o.replaceWith(t(r))}},r=(e,t,r)=>n(e,t,r.children[0]),o=e=>({name:e,props:[],children:[""],x:0,el:1}),s={},l=(e,...t)=>{const n=15,r=e=>{const t=o("slot");t.n=e||"",l[v].push(t)};let l=o("root"),c=l,d=null,a=2;const u=[l],v="children",m=e=>l[v].push(e),_=e=>{l.x=m(e),m("")},h=e=>l.props[0][1]+=d,k=e=>e.map((e=>e.el?e:f(e))).filter((e=>""!==e));let p={0:{">":2," ":1,"/":4,[n](){l.name+=d}},1:{">":2," ":1,"/":4,[n](){l.props.unshift([d,""]),a=6}},6:{"=":7,[n](){l.props[0][0]+=d}},7:{'"':8,"'":9,[n]:h},8:{'"':1,[n]:h},9:{"'":1,[n]:h},2:{[n](){if("<"==d)return l[v]=k(l[v]),void(a=3);l[v][l.x]+=d}},3:{"/":4,[n](){const e=o(d);u.push(l),_(e),l=e,a=0}},4:{[n](){">"==d&&(l=u.pop(),a=2)}}},b=0;for(var x=0;;x++){if(x>=e[b].length){if(b>=t.length)break;const n=t[b];if(6!=a&&7!=a||(l.props[0][1]=n,a=1),2==a&&(n===s?r(s.n):_(n.toString())),x=0,b++,i(e[b][0]))break}d=e[b][x],0!=a&&1!=a||(d=d.replace(/\s/," "));let n=p[a];d in n?a=n[d]:n[15]()}return c[v]=k(c[v]),c},i=e=>void 0===e;let c=[],d={};const a=(e,t)=>{e.map((e=>{const n=e[0],r=e[1];if("class"!=n||r.trim)if("ref"!=n){if((e=>"on"==e.substr(0,2))(n)&&!r.trim){let e=n.toLowerCase().substr(2);return c.filter((n=>n.m==e&&n._==t)).map((n=>t.removeEventListener(e,n.h))),c.push({m:e,_:t,h:r}),void t.addEventListener(e,r)}t.setAttribute(n,r)}else d[r]=t;else{const e=t.classList;for(var o in e.forEach((e=>e in r?null:r[e]=!1)),r)r[o]?e.add(o):e.remove(o)}}))},f=e=>{if(""===e)return"";let t=e.trim(),n="",r="";return e[0]!==t[0]&&(n=" "),e.substr(-1)!==t.substr(-1)&&(r=" "),""==t&&n==r?n:n+t+r};export{e as createElement,l as h};
