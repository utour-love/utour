var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t,r)=>new Promise(((a,l)=>{var n=e=>{try{i(r.next(e))}catch(t){l(t)}},o=e=>{try{i(r.throw(e))}catch(t){l(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,o);i((r=r.apply(e,t)).next())}));import{R as u,h as s,S as c,g as v,r as d,i as f,U as p,V as h,W as g,X as m,k as y,B as b,Y as P,Z as x,_ as S,H as q,M as C,$ as O,a0 as _,a1 as j,a2 as w}from"./entry.BGqrFlru.js";function R(e){return i(this,arguments,(function*(e,t=u()){const{path:r,matched:a}=t.resolve(e);if(!a.length)return;if(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(r))return;const l=t._preloadPromises=t._preloadPromises||[];if(l.length>4)return Promise.all(l).then((()=>R(e,t)));t._routePreloaded.add(r);const n=a.map((e=>{var t;return null==(t=e.components)?void 0:t.default})).filter((e=>"function"==typeof e));for(const o of n){const e=Promise.resolve(o()).catch((()=>{})).finally((()=>l.splice(l.indexOf(e))));l.push(e)}yield Promise.all(l)}))}function k(e){const c=e.componentName||"NuxtLink";function j(i,u){if(!i||"append"!==e.trailingSlash&&"remove"!==e.trailingSlash)return i;if("string"==typeof i)return B(i,e.trailingSlash);const s="path"in i&&void 0!==i.path?i.path:u(i).path,c=(v=((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))n.call(t,r)&&o(e,r,t[r]);return e})({},i),d={path:B(s,e.trailingSlash)},t(v,r(d)));var v,d;return"name"in c&&delete c.name,c}return s({name:c,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:r}){const a=u(),l=q(),n=v((()=>j(t.to||t.href||"",a.resolve))),o=v((()=>"string"==typeof n.value&&_(n.value,{acceptRelative:!0}))),s=v((()=>t.target&&"_self"!==t.target)),c=v((()=>!!t.external||(!!s.value||"object"!=typeof n.value&&(""===n.value||o.value)))),w=d(!1),k=d(null),A=e=>{var r;k.value=t.custom?null==(r=null==e?void 0:e.$el)?void 0:r.nextElementSibling:null==e?void 0:e.$el};if(!1!==t.prefetch&&!0!==t.noPrefetch&&"_blank"!==t.target&&!function(){const e=navigator.connection;if(e&&(e.saveData||/2g/.test(e.effectiveType)))return!0;return!1}()){const e=C();let t,r=null;f((()=>{const l=function(){const e=C();if(e._observer)return e._observer;let t=null;const r=new Map,a=(e,a)=>(t||(t=new IntersectionObserver((e=>{for(const t of e){const e=r.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&e&&e()}}))),r.set(e,a),t.observe(e),()=>{r.delete(e),t.unobserve(e),0===r.size&&(t.disconnect(),t=null)}),l=e._observer={observe:a};return l}();p((()=>{t=h((()=>{var t;(null==(t=null==k?void 0:k.value)?void 0:t.tagName)&&(r=l.observe(k.value,(()=>i(this,null,(function*(){null==r||r(),r=null;const t="string"==typeof n.value?n.value:a.resolve(n.value).fullPath;yield Promise.all([e.hooks.callHook("link:prefetch",t).catch((()=>{})),!c.value&&R(n.value,a).catch((()=>{}))]),w.value=!0})))))}))}))})),g((()=>{t&&m(t),null==r||r(),r=null}))}return()=>{var i,u,v;if(!c.value){const a={ref:A,to:n.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(w.value&&(a.class=t.prefetchedClass||e.prefetchedClass),a.rel=t.rel||void 0),y(b("RouterLink"),a,r.default)}const d="object"==typeof n.value?null!=(u=null==(i=a.resolve(n.value))?void 0:i.href)?u:null:!n.value||t.external||o.value?n.value||null:j(P(l.app.baseURL,n.value),a.resolve),f=t.target||null,p=((...e)=>e.find((e=>void 0!==e)))(t.noRel?"":t.rel,e.externalRelAttribute,o.value||s.value?"noopener noreferrer":"")||null;if(t.custom){if(!r.default)return null;const e=()=>O(d,{replace:t.replace,external:t.external});return r.default({href:d,navigate:e,get route(){if(!d)return;const e=x(d);return{path:e.pathname,fullPath:e.pathname,get query(){return S(e.search)},hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:d}},rel:p,target:f,isExternal:c.value,isActive:!1,isExactActive:!1})}return y("a",{ref:k,href:d,rel:p,target:f},null==(v=r.default)?void 0:v.call(r))}}})}const A=k(c);function B(e,t){const r="append"===t?j:w;return _(e)&&!e.startsWith("http")?e:r(e,!0)}export{A as _};