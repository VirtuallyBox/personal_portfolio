(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ro(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const it={},Fi=[],rn=()=>{},lf=()=>!1,cf=/^on[^a-z]/,ys=n=>cf.test(n),so=n=>n.startsWith("onUpdate:"),yt=Object.assign,ao=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},uf=Object.prototype.hasOwnProperty,Ye=(n,e)=>uf.call(n,e),Oe=Array.isArray,dr=n=>bs(n)==="[object Map]",ff=n=>bs(n)==="[object Set]",ke=n=>typeof n=="function",pt=n=>typeof n=="string",Ts=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",Oc=n=>(at(n)||ke(n))&&ke(n.then)&&ke(n.catch),df=Object.prototype.toString,bs=n=>df.call(n),hf=n=>bs(n).slice(8,-1),pf=n=>bs(n)==="[object Object]",oo=n=>pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,os=ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),As=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},mf=/-(\w)/g,Gi=As(n=>n.replace(mf,(e,t)=>t?t.toUpperCase():"")),_f=/\B([A-Z])/g,Ki=As(n=>n.replace(_f,"-$1").toLowerCase()),Bc=As(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xs=As(n=>n?`on${Bc(n)}`:""),Vi=(n,e)=>!Object.is(n,e),qs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ps=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},gf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ho;const Pa=()=>Ho||(Ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lo(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=pt(i)?Sf(i):lo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(pt(n)||at(n))return n}const vf=/;(?![^(]*\))/g,xf=/:([^]+)/,Mf=/\/\*[^]*?\*\//g;function Sf(n){const e={};return n.replace(Mf,"").split(vf).forEach(t=>{if(t){const i=t.split(xf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ws(n){let e="";if(pt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=ws(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ef="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yf=ro(Ef);function zc(n){return!!n||n===""}let Kt;class Tf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function bf(n,e=Kt){e&&e.active&&e.effects.push(n)}function Af(){return Kt}const co=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Hc=n=>(n.w&qn)>0,Gc=n=>(n.n&qn)>0,wf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=qn},Rf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Hc(r)&&!Gc(r)?r.delete(n):e[t++]=r,r.w&=~qn,r.n&=~qn}e.length=t}},La=new WeakMap;let lr=0,qn=1;const Ua=30;let Jt;const ci=Symbol(""),Da=Symbol("");class uo{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,bf(this,i)}run(){if(!this.active)return this.fn();let e=Jt,t=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Jt,Jt=this,Gn=!0,qn=1<<++lr,lr<=Ua?wf(this):Go(this),this.fn()}finally{lr<=Ua&&Rf(this),qn=1<<--lr,Jt=this.parent,Gn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Jt===this?this.deferStop=!0:this.active&&(Go(this),this.onStop&&this.onStop(),this.active=!1)}}function Go(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Gn=!0;const Vc=[];function $i(){Vc.push(Gn),Gn=!1}function Zi(){const n=Vc.pop();Gn=n===void 0?!0:n}function It(n,e,t){if(Gn&&Jt){let i=La.get(n);i||La.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=co()),kc(r)}}function kc(n,e){let t=!1;lr<=Ua?Gc(n)||(n.n|=qn,t=!Hc(n)):t=!n.has(Jt),t&&(n.add(Jt),Jt.deps.push(n))}function wn(n,e,t,i,r,s){const o=La.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Oe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Ts(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Oe(n)?oo(t)&&a.push(o.get("length")):(a.push(o.get(ci)),dr(n)&&a.push(o.get(Da)));break;case"delete":Oe(n)||(a.push(o.get(ci)),dr(n)&&a.push(o.get(Da)));break;case"set":dr(n)&&a.push(o.get(ci));break}if(a.length===1)a[0]&&Ia(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ia(co(l))}}function Ia(n,e){const t=Oe(n)?n:[...n];for(const i of t)i.computed&&Vo(i);for(const i of t)i.computed||Vo(i)}function Vo(n,e){(n!==Jt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Cf=ro("__proto__,__v_isRef,__isVue"),Wc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ts)),ko=Pf();function Pf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let s=0,o=this.length;s<o;s++)It(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){$i();const i=Ke(this)[e].apply(this,t);return Zi(),i}}),n}function Lf(n){const e=Ke(this);return It(e,"has",n),e.hasOwnProperty(n)}class Xc{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw"&&i===(r?s?Wf:Kc:s?jc:Yc).get(e))return e;const o=Oe(e);if(!r){if(o&&Ye(ko,t))return Reflect.get(ko,t,i);if(t==="hasOwnProperty")return Lf}const a=Reflect.get(e,t,i);return(Ts(t)?Wc.has(t):Cf(t))||(r||It(e,"get",t),s)?a:Rt(a)?o&&oo(t)?a:a.value:at(a)?r?$c(a):po(a):a}}class qc extends Xc{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(vr(s)&&Rt(s)&&!Rt(i))return!1;if(!this._shallow&&(!Na(i)&&!vr(i)&&(s=Ke(s),i=Ke(i)),!Oe(e)&&Rt(s)&&!Rt(i)))return s.value=i,!0;const o=Oe(e)&&oo(t)?Number(t)<e.length:Ye(e,t),a=Reflect.set(e,t,i,r);return e===Ke(r)&&(o?Vi(i,s)&&wn(e,"set",t,i):wn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ye(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&wn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ts(t)||!Wc.has(t))&&It(e,"has",t),i}ownKeys(e){return It(e,"iterate",Oe(e)?"length":ci),Reflect.ownKeys(e)}}class Uf extends Xc{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Df=new qc,If=new Uf,Nf=new qc(!0),fo=n=>n,Rs=n=>Reflect.getPrototypeOf(n);function Ur(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ke(n),s=Ke(e);t||(Vi(e,s)&&It(r,"get",e),It(r,"get",s));const{has:o}=Rs(r),a=i?fo:t?go:_o;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Dr(n,e=!1){const t=this.__v_raw,i=Ke(t),r=Ke(n);return e||(Vi(n,r)&&It(i,"has",n),It(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ir(n,e=!1){return n=n.__v_raw,!e&&It(Ke(n),"iterate",ci),Reflect.get(n,"size",n)}function Wo(n){n=Ke(n);const e=Ke(this);return Rs(e).has.call(e,n)||(e.add(n),wn(e,"add",n,n)),this}function Xo(n,e){e=Ke(e);const t=Ke(this),{has:i,get:r}=Rs(t);let s=i.call(t,n);s||(n=Ke(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Vi(e,o)&&wn(t,"set",n,e):wn(t,"add",n,e),this}function qo(n){const e=Ke(this),{has:t,get:i}=Rs(e);let r=t.call(e,n);r||(n=Ke(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&wn(e,"delete",n,void 0),s}function Yo(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&wn(n,"clear",void 0,void 0),t}function Nr(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ke(o),l=e?fo:n?go:_o;return!n&&It(a,"iterate",ci),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Fr(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),o=dr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?fo:e?go:_o;return!e&&It(s,"iterate",l?Da:ci),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ln(n){return function(...e){return n==="delete"?!1:this}}function Ff(){const n={get(s){return Ur(this,s)},get size(){return Ir(this)},has:Dr,add:Wo,set:Xo,delete:qo,clear:Yo,forEach:Nr(!1,!1)},e={get(s){return Ur(this,s,!1,!0)},get size(){return Ir(this)},has:Dr,add:Wo,set:Xo,delete:qo,clear:Yo,forEach:Nr(!1,!0)},t={get(s){return Ur(this,s,!0)},get size(){return Ir(this,!0)},has(s){return Dr.call(this,s,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:Nr(!0,!1)},i={get(s){return Ur(this,s,!0,!0)},get size(){return Ir(this,!0)},has(s){return Dr.call(this,s,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:Nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Fr(s,!1,!1),t[s]=Fr(s,!0,!1),e[s]=Fr(s,!1,!0),i[s]=Fr(s,!0,!0)}),[n,t,e,i]}const[Of,Bf,zf,Hf]=Ff();function ho(n,e){const t=e?n?Hf:zf:n?Bf:Of;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ye(t,r)&&r in i?t:i,r,s)}const Gf={get:ho(!1,!1)},Vf={get:ho(!1,!0)},kf={get:ho(!0,!1)},Yc=new WeakMap,jc=new WeakMap,Kc=new WeakMap,Wf=new WeakMap;function Xf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qf(n){return n.__v_skip||!Object.isExtensible(n)?0:Xf(hf(n))}function po(n){return vr(n)?n:mo(n,!1,Df,Gf,Yc)}function Yf(n){return mo(n,!1,Nf,Vf,jc)}function $c(n){return mo(n,!0,If,kf,Kc)}function mo(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=qf(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Oi(n){return vr(n)?Oi(n.__v_raw):!!(n&&n.__v_isReactive)}function vr(n){return!!(n&&n.__v_isReadonly)}function Na(n){return!!(n&&n.__v_isShallow)}function Zc(n){return Oi(n)||vr(n)}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function Jc(n){return ps(n,"__v_skip",!0),n}const _o=n=>at(n)?po(n):n,go=n=>at(n)?$c(n):n;function jf(n){Gn&&Jt&&(n=Ke(n),kc(n.dep||(n.dep=co())))}function Kf(n,e){n=Ke(n);const t=n.dep;t&&Ia(t)}function Rt(n){return!!(n&&n.__v_isRef===!0)}function $f(n){return Rt(n)?n.value:n}const Zf={get:(n,e,t)=>$f(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Qc(n){return Oi(n)?n:new Proxy(n,Zf)}class Jf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new uo(e,()=>{this._dirty||(this._dirty=!0,Kf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ke(this);return jf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qf(n,e,t=!1){let i,r;const s=ke(n);return s?(i=n,r=rn):(i=n.get,r=n.set),new Jf(i,r,s||!r,t)}function Vn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Cs(s,e,t)}return r}function sn(n,e,t,i){if(ke(n)){const s=Vn(n,e,t,i);return s&&Oc(s)&&s.catch(o=>{Cs(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(sn(n[s],e,t,i));return r}function Cs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Vn(l,null,10,[n,o,a]);return}}ed(n,t,r,i)}function ed(n,e,t,i=!0){console.error(n)}let xr=!1,Fa=!1;const St=[];let fn=0;const Bi=[];let Tn=null,si=0;const eu=Promise.resolve();let vo=null;function td(n){const e=vo||eu;return n?e.then(this?n.bind(this):n):e}function nd(n){let e=fn+1,t=St.length;for(;e<t;){const i=e+t>>>1,r=St[i],s=Mr(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function xo(n){(!St.length||!St.includes(n,xr&&n.allowRecurse?fn+1:fn))&&(n.id==null?St.push(n):St.splice(nd(n.id),0,n),tu())}function tu(){!xr&&!Fa&&(Fa=!0,vo=eu.then(iu))}function id(n){const e=St.indexOf(n);e>fn&&St.splice(e,1)}function rd(n){Oe(n)?Bi.push(...n):(!Tn||!Tn.includes(n,n.allowRecurse?si+1:si))&&Bi.push(n),tu()}function jo(n,e=xr?fn+1:0){for(;e<St.length;e++){const t=St[e];t&&t.pre&&(St.splice(e,1),e--,t())}}function nu(n){if(Bi.length){const e=[...new Set(Bi)];if(Bi.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((t,i)=>Mr(t)-Mr(i)),si=0;si<Tn.length;si++)Tn[si]();Tn=null,si=0}}const Mr=n=>n.id==null?1/0:n.id,sd=(n,e)=>{const t=Mr(n)-Mr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function iu(n){Fa=!1,xr=!0,St.sort(sd);const e=rn;try{for(fn=0;fn<St.length;fn++){const t=St[fn];t&&t.active!==!1&&Vn(t,null,14)}}finally{fn=0,St.length=0,nu(),xr=!1,vo=null,(St.length||Bi.length)&&iu()}}function ad(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||it;h&&(r=t.map(m=>pt(m)?m.trim():m)),f&&(r=t.map(gf))}let a,l=i[a=Xs(e)]||i[a=Xs(Gi(e))];!l&&s&&(l=i[a=Xs(Ki(e))]),l&&sn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,sn(c,n,6,r)}}function ru(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=ru(c,e,!0);u&&(a=!0,yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(at(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>o[l]=null):yt(o,s),at(n)&&i.set(n,o),o)}function Ps(n,e){return!n||!ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,Ki(e))||Ye(n,e))}let dn=null,Ls=null;function ms(n){const e=dn;return dn=n,Ls=n&&n.type.__scopeId||null,e}function od(n){Ls=n}function ld(){Ls=null}function cd(n,e=dn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&rl(-1);const s=ms(e);let o;try{o=n(...r)}finally{ms(s),i._d&&rl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ys(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:M,inheritAttrs:v}=n;let p,d;const b=ms(n);try{if(t.shapeFlag&4){const T=r||i;p=cn(u.call(T,T,f,s,m,h,M)),d=l}else{const T=e;p=cn(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),d=e.props?l:ud(l)}}catch(T){pr.length=0,Cs(T,n,1),p=tt(pi)}let y=p;if(d&&v!==!1){const T=Object.keys(d),{shapeFlag:w}=y;T.length&&w&7&&(o&&T.some(so)&&(d=fd(d,o)),y=ki(y,d))}return t.dirs&&(y=ki(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),p=y,ms(b),p}const ud=n=>{let e;for(const t in n)(t==="class"||t==="style"||ys(t))&&((e||(e={}))[t]=n[t]);return e},fd=(n,e)=>{const t={};for(const i in n)(!so(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function dd(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ko(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Ps(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ko(i,o,c):!0:!!o;return!1}function Ko(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ps(t,s))return!0}return!1}function hd({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const pd=n=>n.__isSuspense;function md(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):rd(n)}const Or={};function js(n,e,t){return su(n,e,t)}function su(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=it){var a;const l=Af()===((a=Et)==null?void 0:a.scope)?Et:null;let c,u=!1,f=!1;if(Rt(n)?(c=()=>n.value,u=Na(n)):Oi(n)?(c=()=>n,i=!0):Oe(n)?(f=!0,u=n.some(T=>Oi(T)||Na(T)),c=()=>n.map(T=>{if(Rt(T))return T.value;if(Oi(T))return Ii(T);if(ke(T))return Vn(T,l,2)})):ke(n)?e?c=()=>Vn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),sn(n,l,3,[m])}:c=rn,e&&i){const T=c;c=()=>Ii(T())}let h,m=T=>{h=b.onStop=()=>{Vn(T,l,4)}},M;if(Er)if(m=rn,e?t&&sn(e,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const T=hh();M=T.__watcherHandles||(T.__watcherHandles=[])}else return rn;let v=f?new Array(n.length).fill(Or):Or;const p=()=>{if(b.active)if(e){const T=b.run();(i||u||(f?T.some((w,U)=>Vi(w,v[U])):Vi(T,v)))&&(h&&h(),sn(e,l,3,[T,v===Or?void 0:f&&v[0]===Or?[]:v,m]),v=T)}else b.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>Pt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),d=()=>xo(p));const b=new uo(c,d);e?t?p():v=b.run():r==="post"?Pt(b.run.bind(b),l&&l.suspense):b.run();const y=()=>{b.stop(),l&&l.scope&&ao(l.scope.effects,b)};return M&&M.push(y),y}function _d(n,e,t){const i=this.proxy,r=pt(n)?n.includes(".")?au(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const o=Et;Wi(this);const a=su(r,s.bind(i),t);return o?Wi(o):ui(),a}function au(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ii(n,e){if(!at(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Rt(n))Ii(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)Ii(n[t],e);else if(ff(n)||dr(n))n.forEach(t=>{Ii(t,e)});else if(pf(n))for(const t in n)Ii(n[t],e);return n}function Zn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&($i(),sn(l,t,8,[n.el,a,n,e]),Zi())}}const ls=n=>!!n.type.__asyncLoader,ou=n=>n.type.__isKeepAlive;function gd(n,e){lu(n,"a",e)}function vd(n,e){lu(n,"da",e)}function lu(n,e,t=Et){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Us(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ou(r.parent.vnode)&&xd(i,e,t,r),r=r.parent}}function xd(n,e,t,i){const r=Us(e,n,i,!0);cu(()=>{ao(i[e],r)},t)}function Us(n,e,t=Et,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;$i(),Wi(t);const a=sn(e,t,n,o);return ui(),Zi(),a});return i?r.unshift(s):r.push(s),s}}const Cn=n=>(e,t=Et)=>(!Er||n==="sp")&&Us(n,(...i)=>e(...i),t),Md=Cn("bm"),Sd=Cn("m"),Ed=Cn("bu"),yd=Cn("u"),Td=Cn("bum"),cu=Cn("um"),bd=Cn("sp"),Ad=Cn("rtg"),wd=Cn("rtc");function Rd(n,e=Et){Us("ec",n,e)}const Cd=Symbol.for("v-ndc");function Pd(n,e,t,i){let r;const s=t&&t[i];if(Oe(n)||pt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(at(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const Oa=n=>n?Mu(n)?To(n)||n.proxy:Oa(n.parent):null,hr=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Oa(n.parent),$root:n=>Oa(n.root),$emit:n=>n.emit,$options:n=>Mo(n),$forceUpdate:n=>n.f||(n.f=()=>xo(n.update)),$nextTick:n=>n.n||(n.n=td.bind(n.proxy)),$watch:n=>_d.bind(n)}),Ks=(n,e)=>n!==it&&!n.__isScriptSetup&&Ye(n,e),Ld={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ks(i,e))return o[e]=1,i[e];if(r!==it&&Ye(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ye(c,e))return o[e]=3,s[e];if(t!==it&&Ye(t,e))return o[e]=4,t[e];Ba&&(o[e]=0)}}const u=hr[e];let f,h;if(u)return e==="$attrs"&&It(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==it&&Ye(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ks(r,e)?(r[e]=t,!0):i!==it&&Ye(i,e)?(i[e]=t,!0):Ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==it&&Ye(n,o)||Ks(e,o)||(a=s[0])&&Ye(a,o)||Ye(i,o)||Ye(hr,o)||Ye(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function $o(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ba=!0;function Ud(n){const e=Mo(n),t=n.proxy,i=n.ctx;Ba=!1,e.beforeCreate&&Zo(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:M,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:b,destroyed:y,unmounted:T,render:w,renderTracked:U,renderTriggered:C,errorCaptured:Z,serverPrefetch:E,expose:A,inheritAttrs:ee,components:oe,directives:le,filters:I}=e;if(c&&Dd(c,i,null),o)for(const V in o){const te=o[V];ke(te)&&(i[V]=te.bind(t))}if(r){const V=r.call(t,t);at(V)&&(n.data=po(V))}if(Ba=!0,s)for(const V in s){const te=s[V],ae=ke(te)?te.bind(t,t):ke(te.get)?te.get.bind(t,t):rn,se=!ke(te)&&ke(te.set)?te.set.bind(t):rn,N=fh({get:ae,set:se});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>N.value,set:G=>N.value=G})}if(a)for(const V in a)uu(a[V],i,t,V);if(l){const V=ke(l)?l.call(t):l;Reflect.ownKeys(V).forEach(te=>{zd(te,V[te])})}u&&Zo(u,n,"c");function K(V,te){Oe(te)?te.forEach(ae=>V(ae.bind(t))):te&&V(te.bind(t))}if(K(Md,f),K(Sd,h),K(Ed,m),K(yd,M),K(gd,v),K(vd,p),K(Rd,Z),K(wd,U),K(Ad,C),K(Td,b),K(cu,T),K(bd,E),Oe(A))if(A.length){const V=n.exposed||(n.exposed={});A.forEach(te=>{Object.defineProperty(V,te,{get:()=>t[te],set:ae=>t[te]=ae})})}else n.exposed||(n.exposed={});w&&n.render===rn&&(n.render=w),ee!=null&&(n.inheritAttrs=ee),oe&&(n.components=oe),le&&(n.directives=le)}function Dd(n,e,t=rn){Oe(n)&&(n=za(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=cs(r.from||i,r.default,!0):s=cs(r.from||i):s=cs(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Zo(n,e,t){sn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function uu(n,e,t,i){const r=i.includes(".")?au(t,i):()=>t[i];if(pt(n)){const s=e[n];ke(s)&&js(r,s)}else if(ke(n))js(r,n.bind(t));else if(at(n))if(Oe(n))n.forEach(s=>uu(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&js(r,s,n)}}function Mo(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>_s(l,c,o,!0)),_s(l,e,o)),at(e)&&s.set(e,l),l}function _s(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&_s(n,s,t,!0),r&&r.forEach(o=>_s(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Id[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Id={data:Jo,props:Qo,emits:Qo,methods:cr,computed:cr,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:cr,directives:cr,watch:Fd,provide:Jo,inject:Nd};function Jo(n,e){return e?n?function(){return yt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Nd(n,e){return cr(za(n),za(e))}function za(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function At(n,e){return n?[...new Set([].concat(n,e))]:e}function cr(n,e){return n?yt(Object.create(null),n,e):e}function Qo(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:yt(Object.create(null),$o(n),$o(e??{})):e}function Fd(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const i in e)t[i]=At(n[i],e[i]);return t}function fu(){return{app:null,config:{isNativeTag:lf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Od=0;function Bd(n,e){return function(i,r=null){ke(i)||(i=yt({},i)),r!=null&&!at(r)&&(r=null);const s=fu(),o=new WeakSet;let a=!1;const l=s.app={_uid:Od++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ph,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(l,...u)):ke(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=tt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,To(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){gs=l;try{return c()}finally{gs=null}}};return l}}let gs=null;function zd(n,e){if(Et){let t=Et.provides;const i=Et.parent&&Et.parent.provides;i===t&&(t=Et.provides=Object.create(i)),t[n]=e}}function cs(n,e,t=!1){const i=Et||dn;if(i||gs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:gs._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}function Hd(n,e,t,i=!1){const r={},s={};ps(s,Is,1),n.propsDefaults=Object.create(null),du(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Yf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Gd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ke(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ps(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ye(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const M=Gi(h);r[M]=Ha(l,a,M,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{du(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ye(e,f)&&((u=Ki(f))===f||!Ye(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ha(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ye(e,f))&&(delete s[f],c=!0)}c&&wn(n,"set","$attrs")}function du(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(os(l))continue;const c=e[l];let u;r&&Ye(r,u=Gi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ps(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ke(t),c=a||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ha(r,l,f,c[f],n,!Ye(c,f))}}return o}function Ha(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Wi(r),i=c[t]=l.call(null,e),ui())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ki(t))&&(i=!0))}return i}function hu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[h,m]=hu(f,e,!0);yt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,Fi),Fi;if(Oe(s))for(let u=0;u<s.length;u++){const f=Gi(s[u]);el(f)&&(o[f]=it)}else if(s)for(const u in s){const f=Gi(u);if(el(f)){const h=s[u],m=o[f]=Oe(h)||ke(h)?{type:h}:yt({},h);if(m){const M=il(Boolean,m.type),v=il(String,m.type);m[0]=M>-1,m[1]=v<0||M<v,(M>-1||Ye(m,"default"))&&a.push(f)}}}const c=[o,a];return at(n)&&i.set(n,c),c}function el(n){return n[0]!=="$"}function tl(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function nl(n,e){return tl(n)===tl(e)}function il(n,e){return Oe(e)?e.findIndex(t=>nl(t,n)):ke(e)&&nl(e,n)?0:-1}const pu=n=>n[0]==="_"||n==="$stable",So=n=>Oe(n)?n.map(cn):[cn(n)],Vd=(n,e,t)=>{if(e._n)return e;const i=cd((...r)=>So(e(...r)),t);return i._c=!1,i},mu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(pu(r))continue;const s=n[r];if(ke(s))e[r]=Vd(r,s,i);else if(s!=null){const o=So(s);e[r]=()=>o}}},_u=(n,e)=>{const t=So(e);n.slots.default=()=>t},kd=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ke(e),ps(e,"_",t)):mu(e,n.slots={})}else n.slots={},e&&_u(n,e);ps(n.slots,Is,1)},Wd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(yt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,mu(e,r)),o=e}else e&&(_u(n,e),o={default:1});if(s)for(const a in r)!pu(a)&&o[a]==null&&delete r[a]};function Ga(n,e,t,i,r=!1){if(Oe(n)){n.forEach((h,m)=>Ga(h,e&&(Oe(e)?e[m]:e),t,i,r));return}if(ls(i)&&!r)return;const s=i.shapeFlag&4?To(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):Rt(c)&&(c.value=null)),ke(l))Vn(l,a,12,[o,u]);else{const h=pt(l),m=Rt(l);if(h||m){const M=()=>{if(n.f){const v=h?Ye(f,l)?f[l]:u[l]:l.value;r?Oe(v)&&ao(v,s):Oe(v)?v.includes(s)||v.push(s):h?(u[l]=[s],Ye(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ye(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(M.id=-1,Pt(M,t)):M()}}}const Pt=md;function Xd(n){return qd(n)}function qd(n,e){const t=Pa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=rn,insertStaticContent:M}=n,v=(g,R,D,O=null,B=null,ie=null,ne=!1,X=null,re=!!R.dynamicChildren)=>{if(g===R)return;g&&!nr(g,R)&&(O=ze(g),G(g,B,ie,!0),g=null),R.patchFlag===-2&&(re=!1,R.dynamicChildren=null);const{type:J,ref:ge,shapeFlag:x}=R;switch(J){case Ds:p(g,R,D,O);break;case pi:d(g,R,D,O);break;case us:g==null&&b(R,D,O,ne);break;case ln:oe(g,R,D,O,B,ie,ne,X,re);break;default:x&1?w(g,R,D,O,B,ie,ne,X,re):x&6?le(g,R,D,O,B,ie,ne,X,re):(x&64||x&128)&&J.process(g,R,D,O,B,ie,ne,X,re,Le)}ge!=null&&B&&Ga(ge,g&&g.ref,ie,R||g,!R)},p=(g,R,D,O)=>{if(g==null)i(R.el=a(R.children),D,O);else{const B=R.el=g.el;R.children!==g.children&&c(B,R.children)}},d=(g,R,D,O)=>{g==null?i(R.el=l(R.children||""),D,O):R.el=g.el},b=(g,R,D,O)=>{[g.el,g.anchor]=M(g.children,R,D,O,g.el,g.anchor)},y=({el:g,anchor:R},D,O)=>{let B;for(;g&&g!==R;)B=h(g),i(g,D,O),g=B;i(R,D,O)},T=({el:g,anchor:R})=>{let D;for(;g&&g!==R;)D=h(g),r(g),g=D;r(R)},w=(g,R,D,O,B,ie,ne,X,re)=>{ne=ne||R.type==="svg",g==null?U(R,D,O,B,ie,ne,X,re):E(g,R,B,ie,ne,X,re)},U=(g,R,D,O,B,ie,ne,X)=>{let re,J;const{type:ge,props:x,shapeFlag:_,transition:L,dirs:Y}=g;if(re=g.el=o(g.type,ie,x&&x.is,x),_&8?u(re,g.children):_&16&&Z(g.children,re,null,O,B,ie&&ge!=="foreignObject",ne,X),Y&&Zn(g,null,O,"created"),C(re,g,g.scopeId,ne,O),x){for(const Q in x)Q!=="value"&&!os(Q)&&s(re,Q,null,x[Q],ie,g.children,O,B,ye);"value"in x&&s(re,"value",null,x.value),(J=x.onVnodeBeforeMount)&&on(J,O,g)}Y&&Zn(g,null,O,"beforeMount");const j=Yd(B,L);j&&L.beforeEnter(re),i(re,R,D),((J=x&&x.onVnodeMounted)||j||Y)&&Pt(()=>{J&&on(J,O,g),j&&L.enter(re),Y&&Zn(g,null,O,"mounted")},B)},C=(g,R,D,O,B)=>{if(D&&m(g,D),O)for(let ie=0;ie<O.length;ie++)m(g,O[ie]);if(B){let ie=B.subTree;if(R===ie){const ne=B.vnode;C(g,ne,ne.scopeId,ne.slotScopeIds,B.parent)}}},Z=(g,R,D,O,B,ie,ne,X,re=0)=>{for(let J=re;J<g.length;J++){const ge=g[J]=X?Bn(g[J]):cn(g[J]);v(null,ge,R,D,O,B,ie,ne,X)}},E=(g,R,D,O,B,ie,ne)=>{const X=R.el=g.el;let{patchFlag:re,dynamicChildren:J,dirs:ge}=R;re|=g.patchFlag&16;const x=g.props||it,_=R.props||it;let L;D&&Jn(D,!1),(L=_.onVnodeBeforeUpdate)&&on(L,D,R,g),ge&&Zn(R,g,D,"beforeUpdate"),D&&Jn(D,!0);const Y=B&&R.type!=="foreignObject";if(J?A(g.dynamicChildren,J,X,D,O,Y,ie):ne||te(g,R,X,null,D,O,Y,ie,!1),re>0){if(re&16)ee(X,R,x,_,D,O,B);else if(re&2&&x.class!==_.class&&s(X,"class",null,_.class,B),re&4&&s(X,"style",x.style,_.style,B),re&8){const j=R.dynamicProps;for(let Q=0;Q<j.length;Q++){const pe=j[Q],ce=x[pe],me=_[pe];(me!==ce||pe==="value")&&s(X,pe,ce,me,B,g.children,D,O,ye)}}re&1&&g.children!==R.children&&u(X,R.children)}else!ne&&J==null&&ee(X,R,x,_,D,O,B);((L=_.onVnodeUpdated)||ge)&&Pt(()=>{L&&on(L,D,R,g),ge&&Zn(R,g,D,"updated")},O)},A=(g,R,D,O,B,ie,ne)=>{for(let X=0;X<R.length;X++){const re=g[X],J=R[X],ge=re.el&&(re.type===ln||!nr(re,J)||re.shapeFlag&70)?f(re.el):D;v(re,J,ge,null,O,B,ie,ne,!0)}},ee=(g,R,D,O,B,ie,ne)=>{if(D!==O){if(D!==it)for(const X in D)!os(X)&&!(X in O)&&s(g,X,D[X],null,ne,R.children,B,ie,ye);for(const X in O){if(os(X))continue;const re=O[X],J=D[X];re!==J&&X!=="value"&&s(g,X,J,re,ne,R.children,B,ie,ye)}"value"in O&&s(g,"value",D.value,O.value)}},oe=(g,R,D,O,B,ie,ne,X,re)=>{const J=R.el=g?g.el:a(""),ge=R.anchor=g?g.anchor:a("");let{patchFlag:x,dynamicChildren:_,slotScopeIds:L}=R;L&&(X=X?X.concat(L):L),g==null?(i(J,D,O),i(ge,D,O),Z(R.children,D,ge,B,ie,ne,X,re)):x>0&&x&64&&_&&g.dynamicChildren?(A(g.dynamicChildren,_,D,B,ie,ne,X),(R.key!=null||B&&R===B.subTree)&&gu(g,R,!0)):te(g,R,D,ge,B,ie,ne,X,re)},le=(g,R,D,O,B,ie,ne,X,re)=>{R.slotScopeIds=X,g==null?R.shapeFlag&512?B.ctx.activate(R,D,O,ne,re):I(R,D,O,B,ie,ne,re):q(g,R,re)},I=(g,R,D,O,B,ie,ne)=>{const X=g.component=sh(g,O,B);if(ou(g)&&(X.ctx.renderer=Le),ah(X),X.asyncDep){if(B&&B.registerDep(X,K),!g.el){const re=X.subTree=tt(pi);d(null,re,R,D)}return}K(X,g,R,D,B,ie,ne)},q=(g,R,D)=>{const O=R.component=g.component;if(dd(g,R,D))if(O.asyncDep&&!O.asyncResolved){V(O,R,D);return}else O.next=R,id(O.update),O.update();else R.el=g.el,O.vnode=R},K=(g,R,D,O,B,ie,ne)=>{const X=()=>{if(g.isMounted){let{next:ge,bu:x,u:_,parent:L,vnode:Y}=g,j=ge,Q;Jn(g,!1),ge?(ge.el=Y.el,V(g,ge,ne)):ge=Y,x&&qs(x),(Q=ge.props&&ge.props.onVnodeBeforeUpdate)&&on(Q,L,ge,Y),Jn(g,!0);const pe=Ys(g),ce=g.subTree;g.subTree=pe,v(ce,pe,f(ce.el),ze(ce),g,B,ie),ge.el=pe.el,j===null&&hd(g,pe.el),_&&Pt(_,B),(Q=ge.props&&ge.props.onVnodeUpdated)&&Pt(()=>on(Q,L,ge,Y),B)}else{let ge;const{el:x,props:_}=R,{bm:L,m:Y,parent:j}=g,Q=ls(R);if(Jn(g,!1),L&&qs(L),!Q&&(ge=_&&_.onVnodeBeforeMount)&&on(ge,j,R),Jn(g,!0),x&&Ie){const pe=()=>{g.subTree=Ys(g),Ie(x,g.subTree,g,B,null)};Q?R.type.__asyncLoader().then(()=>!g.isUnmounted&&pe()):pe()}else{const pe=g.subTree=Ys(g);v(null,pe,D,O,g,B,ie),R.el=pe.el}if(Y&&Pt(Y,B),!Q&&(ge=_&&_.onVnodeMounted)){const pe=R;Pt(()=>on(ge,j,pe),B)}(R.shapeFlag&256||j&&ls(j.vnode)&&j.vnode.shapeFlag&256)&&g.a&&Pt(g.a,B),g.isMounted=!0,R=D=O=null}},re=g.effect=new uo(X,()=>xo(J),g.scope),J=g.update=()=>re.run();J.id=g.uid,Jn(g,!0),J()},V=(g,R,D)=>{R.component=g;const O=g.vnode.props;g.vnode=R,g.next=null,Gd(g,R.props,O,D),Wd(g,R.children,D),$i(),jo(),Zi()},te=(g,R,D,O,B,ie,ne,X,re=!1)=>{const J=g&&g.children,ge=g?g.shapeFlag:0,x=R.children,{patchFlag:_,shapeFlag:L}=R;if(_>0){if(_&128){se(J,x,D,O,B,ie,ne,X,re);return}else if(_&256){ae(J,x,D,O,B,ie,ne,X,re);return}}L&8?(ge&16&&ye(J,B,ie),x!==J&&u(D,x)):ge&16?L&16?se(J,x,D,O,B,ie,ne,X,re):ye(J,B,ie,!0):(ge&8&&u(D,""),L&16&&Z(x,D,O,B,ie,ne,X,re))},ae=(g,R,D,O,B,ie,ne,X,re)=>{g=g||Fi,R=R||Fi;const J=g.length,ge=R.length,x=Math.min(J,ge);let _;for(_=0;_<x;_++){const L=R[_]=re?Bn(R[_]):cn(R[_]);v(g[_],L,D,null,B,ie,ne,X,re)}J>ge?ye(g,B,ie,!0,!1,x):Z(R,D,O,B,ie,ne,X,re,x)},se=(g,R,D,O,B,ie,ne,X,re)=>{let J=0;const ge=R.length;let x=g.length-1,_=ge-1;for(;J<=x&&J<=_;){const L=g[J],Y=R[J]=re?Bn(R[J]):cn(R[J]);if(nr(L,Y))v(L,Y,D,null,B,ie,ne,X,re);else break;J++}for(;J<=x&&J<=_;){const L=g[x],Y=R[_]=re?Bn(R[_]):cn(R[_]);if(nr(L,Y))v(L,Y,D,null,B,ie,ne,X,re);else break;x--,_--}if(J>x){if(J<=_){const L=_+1,Y=L<ge?R[L].el:O;for(;J<=_;)v(null,R[J]=re?Bn(R[J]):cn(R[J]),D,Y,B,ie,ne,X,re),J++}}else if(J>_)for(;J<=x;)G(g[J],B,ie,!0),J++;else{const L=J,Y=J,j=new Map;for(J=Y;J<=_;J++){const Ne=R[J]=re?Bn(R[J]):cn(R[J]);Ne.key!=null&&j.set(Ne.key,J)}let Q,pe=0;const ce=_-Y+1;let me=!1,we=0;const We=new Array(ce);for(J=0;J<ce;J++)We[J]=0;for(J=L;J<=x;J++){const Ne=g[J];if(pe>=ce){G(Ne,B,ie,!0);continue}let be;if(Ne.key!=null)be=j.get(Ne.key);else for(Q=Y;Q<=_;Q++)if(We[Q-Y]===0&&nr(Ne,R[Q])){be=Q;break}be===void 0?G(Ne,B,ie,!0):(We[be-Y]=J+1,be>=we?we=be:me=!0,v(Ne,R[be],D,null,B,ie,ne,X,re),pe++)}const ue=me?jd(We):Fi;for(Q=ue.length-1,J=ce-1;J>=0;J--){const Ne=Y+J,be=R[Ne],Re=Ne+1<ge?R[Ne+1].el:O;We[J]===0?v(null,be,D,Re,B,ie,ne,X,re):me&&(Q<0||J!==ue[Q]?N(be,D,Re,2):Q--)}}},N=(g,R,D,O,B=null)=>{const{el:ie,type:ne,transition:X,children:re,shapeFlag:J}=g;if(J&6){N(g.component.subTree,R,D,O);return}if(J&128){g.suspense.move(R,D,O);return}if(J&64){ne.move(g,R,D,Le);return}if(ne===ln){i(ie,R,D);for(let x=0;x<re.length;x++)N(re[x],R,D,O);i(g.anchor,R,D);return}if(ne===us){y(g,R,D);return}if(O!==2&&J&1&&X)if(O===0)X.beforeEnter(ie),i(ie,R,D),Pt(()=>X.enter(ie),B);else{const{leave:x,delayLeave:_,afterLeave:L}=X,Y=()=>i(ie,R,D),j=()=>{x(ie,()=>{Y(),L&&L()})};_?_(ie,Y,j):j()}else i(ie,R,D)},G=(g,R,D,O=!1,B=!1)=>{const{type:ie,props:ne,ref:X,children:re,dynamicChildren:J,shapeFlag:ge,patchFlag:x,dirs:_}=g;if(X!=null&&Ga(X,null,D,g,!0),ge&256){R.ctx.deactivate(g);return}const L=ge&1&&_,Y=!ls(g);let j;if(Y&&(j=ne&&ne.onVnodeBeforeUnmount)&&on(j,R,g),ge&6)Ee(g.component,D,O);else{if(ge&128){g.suspense.unmount(D,O);return}L&&Zn(g,null,R,"beforeUnmount"),ge&64?g.type.remove(g,R,D,B,Le,O):J&&(ie!==ln||x>0&&x&64)?ye(J,R,D,!1,!0):(ie===ln&&x&384||!B&&ge&16)&&ye(re,R,D),O&&_e(g)}(Y&&(j=ne&&ne.onVnodeUnmounted)||L)&&Pt(()=>{j&&on(j,R,g),L&&Zn(g,null,R,"unmounted")},D)},_e=g=>{const{type:R,el:D,anchor:O,transition:B}=g;if(R===ln){xe(D,O);return}if(R===us){T(g);return}const ie=()=>{r(D),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(g.shapeFlag&1&&B&&!B.persisted){const{leave:ne,delayLeave:X}=B,re=()=>ne(D,ie);X?X(g.el,ie,re):re()}else ie()},xe=(g,R)=>{let D;for(;g!==R;)D=h(g),r(g),g=D;r(R)},Ee=(g,R,D)=>{const{bum:O,scope:B,update:ie,subTree:ne,um:X}=g;O&&qs(O),B.stop(),ie&&(ie.active=!1,G(ne,g,R,D)),X&&Pt(X,R),Pt(()=>{g.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ye=(g,R,D,O=!1,B=!1,ie=0)=>{for(let ne=ie;ne<g.length;ne++)G(g[ne],R,D,O,B)},ze=g=>g.shapeFlag&6?ze(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),Ue=(g,R,D)=>{g==null?R._vnode&&G(R._vnode,null,null,!0):v(R._vnode||null,g,R,null,null,null,D),jo(),nu(),R._vnode=g},Le={p:v,um:G,m:N,r:_e,mt:I,mc:Z,pc:te,pbc:A,n:ze,o:n};let Qe,Ie;return e&&([Qe,Ie]=e(Le)),{render:Ue,hydrate:Qe,createApp:Bd(Ue,Qe)}}function Jn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Yd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function gu(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Bn(r[s]),a.el=o.el),t||gu(o,a)),a.type===Ds&&(a.el=o.el)}}function jd(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Kd=n=>n.__isTeleport,ln=Symbol.for("v-fgt"),Ds=Symbol.for("v-txt"),pi=Symbol.for("v-cmt"),us=Symbol.for("v-stc"),pr=[];let nn=null;function Wt(n=!1){pr.push(nn=n?null:[])}function $d(){pr.pop(),nn=pr[pr.length-1]||null}let Sr=1;function rl(n){Sr+=n}function vu(n){return n.dynamicChildren=Sr>0?nn||Fi:null,$d(),Sr>0&&nn&&nn.push(n),n}function Qt(n,e,t,i,r,s){return vu($t(n,e,t,i,r,s,!0))}function Zd(n,e,t,i,r){return vu(tt(n,e,t,i,r,!0))}function Jd(n){return n?n.__v_isVNode===!0:!1}function nr(n,e){return n.type===e.type&&n.key===e.key}const Is="__vInternal",xu=({key:n})=>n??null,fs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?pt(n)||Rt(n)||ke(n)?{i:dn,r:n,k:e,f:!!t}:n:null);function $t(n,e=null,t=null,i=0,r=null,s=n===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xu(e),ref:e&&fs(e),scopeId:Ls,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dn};return a?(Eo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),Sr>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const tt=Qd;function Qd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Cd)&&(n=pi),Jd(n)){const a=ki(n,e,!0);return t&&Eo(a,t),Sr>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag|=-2,a}if(uh(n)&&(n=n.__vccOpts),e){e=eh(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=ws(a)),at(l)&&(Zc(l)&&!Oe(l)&&(l=yt({},l)),e.style=lo(l))}const o=pt(n)?1:pd(n)?128:Kd(n)?64:at(n)?4:ke(n)?2:0;return $t(n,e,t,i,r,o,s,!0)}function eh(n){return n?Zc(n)||Is in n?yt({},n):n:null}function ki(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?nh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&xu(a),ref:e&&e.ref?t&&r?Oe(r)?r.concat(fs(e)):[r,fs(e)]:fs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ln?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ki(n.ssContent),ssFallback:n.ssFallback&&ki(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function th(n=" ",e=0){return tt(Ds,null,n,e)}function _n(n,e){const t=tt(us,null,n);return t.staticCount=e,t}function $s(n="",e=!1){return e?(Wt(),Zd(pi,null,n)):tt(pi,null,n)}function cn(n){return n==null||typeof n=="boolean"?tt(pi):Oe(n)?tt(ln,null,n.slice()):typeof n=="object"?Bn(n):tt(Ds,null,String(n))}function Bn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ki(n)}function Eo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Eo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Is in e)?e._ctx=dn:r===3&&dn&&(dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:dn},t=32):(e=String(e),i&64?(t=16,e=[th(e)]):t=8);n.children=e,n.shapeFlag|=t}function nh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ws([e.class,i.class]));else if(r==="style")e.style=lo([e.style,i.style]);else if(ys(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function on(n,e,t,i=null){sn(n,e,7,[t,i])}const ih=fu();let rh=0;function sh(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ih,s={uid:rh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hu(i,r),emitsOptions:ru(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ad.bind(null,s),n.ce&&n.ce(s),s}let Et=null,yo,gi,sl="__VUE_INSTANCE_SETTERS__";(gi=Pa()[sl])||(gi=Pa()[sl]=[]),gi.push(n=>Et=n),yo=n=>{gi.length>1?gi.forEach(e=>e(n)):gi[0](n)};const Wi=n=>{yo(n),n.scope.on()},ui=()=>{Et&&Et.scope.off(),yo(null)};function Mu(n){return n.vnode.shapeFlag&4}let Er=!1;function ah(n,e=!1){Er=e;const{props:t,children:i}=n.vnode,r=Mu(n);Hd(n,t,r,e),kd(n,i);const s=r?oh(n,e):void 0;return Er=!1,s}function oh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Jc(new Proxy(n.ctx,Ld));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?ch(n):null;Wi(n),$i();const s=Vn(i,n,0,[n.props,r]);if(Zi(),ui(),Oc(s)){if(s.then(ui,ui),e)return s.then(o=>{al(n,o,e)}).catch(o=>{Cs(o,n,0)});n.asyncDep=s}else al(n,s,e)}else Su(n,e)}function al(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=Qc(e)),Su(n,t)}let ol;function Su(n,e,t){const i=n.type;if(!n.render){if(!e&&ol&&!i.render){const r=i.template||Mo(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=yt(yt({isCustomElement:s,delimiters:a},o),l);i.render=ol(r,c)}}n.render=i.render||rn}{Wi(n),$i();try{Ud(n)}finally{Zi(),ui()}}}function lh(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return It(n,"get","$attrs"),e[t]}}))}function ch(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return lh(n)},slots:n.slots,emit:n.emit,expose:e}}function To(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Qc(Jc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hr)return hr[t](n)},has(e,t){return t in e||t in hr}}))}function uh(n){return ke(n)&&"__vccOpts"in n}const fh=(n,e)=>Qf(n,e,Er),dh=Symbol.for("v-scx"),hh=()=>cs(dh),ph="3.3.7",mh="http://www.w3.org/2000/svg",ai=typeof document<"u"?document:null,ll=ai&&ai.createElement("template"),_h={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ai.createElementNS(mh,n):ai.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ai.createTextNode(n),createComment:n=>ai.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ai.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ll.innerHTML=i?`<svg>${n}</svg>`:n;const a=ll.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gh=Symbol("_vtc");function vh(n,e,t){const i=n[gh];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const xh=Symbol("_vod");function Mh(n,e,t){const i=n.style,r=pt(t);if(t&&!r){if(e&&!pt(e))for(const s in e)t[s]==null&&Va(i,s,"");for(const s in t)Va(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),xh in n&&(i.display=s)}}const cl=/\s*!important$/;function Va(n,e,t){if(Oe(t))t.forEach(i=>Va(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Sh(n,e);cl.test(t)?n.setProperty(Ki(i),t.replace(cl,""),"important"):n[i]=t}}const ul=["Webkit","Moz","ms"],Zs={};function Sh(n,e){const t=Zs[e];if(t)return t;let i=Gi(e);if(i!=="filter"&&i in n)return Zs[e]=i;i=Bc(i);for(let r=0;r<ul.length;r++){const s=ul[r]+i;if(s in n)return Zs[e]=s}return e}const fl="http://www.w3.org/1999/xlink";function Eh(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(fl,e.slice(6,e.length)):n.setAttributeNS(fl,e,t);else{const s=yf(e);t==null||s&&!zc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function yh(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=zc(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Th(n,e,t,i){n.addEventListener(e,t,i)}function bh(n,e,t,i){n.removeEventListener(e,t,i)}const dl=Symbol("_vei");function Ah(n,e,t,i,r=null){const s=n[dl]||(n[dl]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=wh(e);if(i){const c=s[e]=Ph(i,r);Th(n,a,c,l)}else o&&(bh(n,a,o,l),s[e]=void 0)}}const hl=/(?:Once|Passive|Capture)$/;function wh(n){let e;if(hl.test(n)){e={};let i;for(;i=n.match(hl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ki(n.slice(2)),e]}let Js=0;const Rh=Promise.resolve(),Ch=()=>Js||(Rh.then(()=>Js=0),Js=Date.now());function Ph(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;sn(Lh(i,t.value),e,5,[i])};return t.value=n,t.attached=Ch(),t}function Lh(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const pl=/^on[a-z]/,Uh=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?vh(n,i,r):e==="style"?Mh(n,t,i):ys(e)?so(e)||Ah(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dh(n,e,i,r))?yh(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Eh(n,e,i,r))};function Dh(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&pl.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||pl.test(e)&&pt(t)?!1:e in n}const Ih=yt({patchProp:Uh},_h);let ml;function Nh(){return ml||(ml=Xd(Ih))}const Fh=(...n)=>{const e=Nh().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Oh(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Oh(n){return pt(n)?document.querySelector(n):n}const Pn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Bh={},zh={class:"max-w-screen-xl h-48"};function Hh(n,e){return Wt(),Qt("div",zh)}const Un=Pn(Bh,[["render",Hh]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="158",Gh=0,_l=1,Vh=2,Eu=1,kh=2,yn=3,Yn=0,Ut=1,bn=2,kn=0,zi=1,gl=2,vl=3,xl=4,Wh=5,oi=100,Xh=101,qh=102,Ml=103,Sl=104,Yh=200,jh=201,Kh=202,$h=203,ka=204,Wa=205,Zh=206,Jh=207,Qh=208,ep=209,tp=210,np=211,ip=212,rp=213,sp=214,ap=0,op=1,lp=2,vs=3,cp=4,up=5,fp=6,dp=7,yu=0,hp=1,pp=2,Wn=0,mp=1,_p=2,gp=3,vp=4,xp=5,Tu=300,Xi=301,qi=302,Xa=303,qa=304,Ns=306,Ya=1e3,en=1001,ja=1002,Mt=1003,El=1004,Qs=1005,kt=1006,Mp=1007,yr=1008,Xn=1009,Sp=1010,Ep=1011,Ao=1012,bu=1013,zn=1014,Hn=1015,Tr=1016,Au=1017,wu=1018,fi=1020,yp=1021,tn=1023,Tp=1024,bp=1025,di=1026,Yi=1027,Ap=1028,Ru=1029,wp=1030,Cu=1031,Pu=1033,ea=33776,ta=33777,na=33778,ia=33779,yl=35840,Tl=35841,bl=35842,Al=35843,Rp=36196,wl=37492,Rl=37496,Cl=37808,Pl=37809,Ll=37810,Ul=37811,Dl=37812,Il=37813,Nl=37814,Fl=37815,Ol=37816,Bl=37817,zl=37818,Hl=37819,Gl=37820,Vl=37821,ra=36492,kl=36494,Wl=36495,Cp=36283,Xl=36284,ql=36285,Yl=36286,Lu=3e3,hi=3001,Pp=3200,Lp=3201,Up=0,Dp=1,Xt="",mt="srgb",Rn="srgb-linear",wo="display-p3",Fs="display-p3-linear",xs="linear",nt="srgb",Ms="rec709",Ss="p3",vi=7680,jl=519,Ip=512,Np=513,Fp=514,Op=515,Bp=516,zp=517,Hp=518,Gp=519,Kl=35044,$l="300 es",Ka=1035,An=2e3,Es=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,$a=180/Math.PI;function wr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Vp(n,e){return(n%e+e)%e}function aa(n,e,t){return(1-t)*n+t*e}function Zl(n){return(n&n-1)===0&&n!==0}function Za(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],M=i[8],v=r[0],p=r[3],d=r[6],b=r[1],y=r[4],T=r[7],w=r[2],U=r[5],C=r[8];return s[0]=o*v+a*b+l*w,s[3]=o*p+a*y+l*U,s[6]=o*d+a*T+l*C,s[1]=c*v+u*b+f*w,s[4]=c*p+u*y+f*U,s[7]=c*d+u*T+f*C,s[2]=h*v+m*b+M*w,s[5]=h*p+m*y+M*U,s[8]=h*d+m*T+M*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,M=t*f+i*h+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/M;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Ve;function Uu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kp(){const n=br("canvas");return n.style.display="block",n}const Jl={};function mr(n){n in Jl||(Jl[n]=!0,console.warn(n))}const Ql=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ec=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Rn]:{transfer:xs,primaries:Ms,toReference:n=>n,fromReference:n=>n},[mt]:{transfer:nt,primaries:Ms,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Fs]:{transfer:xs,primaries:Ss,toReference:n=>n.applyMatrix3(ec),fromReference:n=>n.applyMatrix3(Ql)},[wo]:{transfer:nt,primaries:Ss,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ec),fromReference:n=>n.applyMatrix3(Ql).convertLinearToSRGB()}},Wp=new Set([Rn,Fs]),$e={enabled:!0,_workingColorSpace:Rn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Br[e].toReference,r=Br[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Br[n].primaries},getTransfer:function(n){return n===Xt?xs:Br[n].transfer}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function la(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xi;class Du{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=br("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xp=0;class Iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ca(r[o].image)):s.push(ca(r[o]))}else s=ca(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Du.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;class Dt extends Ji{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=en,r=en,s=kt,o=yr,a=tn,l=Xn,c=Dt.DEFAULT_ANISOTROPY,u=Xt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=wr(),this.name="",this.source=new Iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===hi?mt:Xt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?hi:Lu}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hi?mt:Xt}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Tu;Dt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],M=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(M-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(M+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(m+1)/2,w=(d+1)/2,U=(u+h)/4,C=(f+v)/4,Z=(M+p)/4;return y>T&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=U/i,s=C/i):T>w?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=U/r,s=Z/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=Z/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-M)*(p-M)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-M)/b,this.y=(f-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yp extends Ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===hi?mt:Xt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Yp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nu extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jp extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],M=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=M,e[t+3]=v;return}if(f!==v||l!==h||c!==m||u!==M){let p=1-a;const d=l*h+c*m+u*M+f*v,b=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const w=Math.sqrt(y),U=Math.atan2(w,d*b);p=Math.sin(p*U)/w,a=Math.sin(a*U)/w}const T=a*b;if(l=l*p+h*T,c=c*p+m*T,u=u*p+M*T,f=f*p+v*T,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],M=s[o+3];return e[t]=a*M+u*f+l*m-c*h,e[t+1]=l*M+u*h+c*f-a*m,e[t+2]=c*M+u*m+a*h-l*f,e[t+3]=u*M-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),M=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*M,this._y=c*m*f-h*u*M,this._z=c*u*M+h*m*f,this._w=c*u*f-h*m*M;break;case"YXZ":this._x=h*u*f+c*m*M,this._y=c*m*f-h*u*M,this._z=c*u*M-h*m*f,this._w=c*u*f+h*m*M;break;case"ZXY":this._x=h*u*f-c*m*M,this._y=c*m*f+h*u*M,this._z=c*u*M+h*m*f,this._w=c*u*f-h*m*M;break;case"ZYX":this._x=h*u*f-c*m*M,this._y=c*m*f+h*u*M,this._z=c*u*M-h*m*f,this._w=c*u*f+h*m*M;break;case"YZX":this._x=h*u*f+c*m*M,this._y=c*m*f+h*u*M,this._z=c*u*M-h*m*f,this._w=c*u*f-h*m*M;break;case"XZY":this._x=h*u*f-c*m*M,this._y=c*m*f-h*u*M,this._z=c*u*M+h*m*f,this._w=c*u*f+h*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new z,tc=new Rr;class Cr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(s,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zr.copy(i.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Hr.subVectors(this.max,rr),Mi.subVectors(e.a,rr),Si.subVectors(e.b,rr),Ei.subVectors(e.c,rr),Dn.subVectors(Si,Mi),In.subVectors(Ei,Si),Qn.subVectors(Mi,Ei);let t=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-Qn.z,Qn.y,Dn.z,0,-Dn.x,In.z,0,-In.x,Qn.z,0,-Qn.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-Qn.y,Qn.x,0];return!fa(t,Mi,Si,Ei,Hr)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Mi,Si,Ei,Hr))?!1:(Gr.crossVectors(Dn,In),t=[Gr.x,Gr.y,Gr.z],fa(t,Mi,Si,Ei,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new z,new z,new z,new z,new z,new z,new z,new z],qt=new z,zr=new Cr,Mi=new z,Si=new z,Ei=new z,Dn=new z,In=new z,Qn=new z,rr=new z,Hr=new z,Gr=new z,ei=new z;function fa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ei.fromArray(n,s);const a=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),u=i.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Kp=new Cr,sr=new z,da=new z;class Ro{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(da)),this.expandByPoint(sr.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new z,ha=new z,Vr=new z,Nn=new z,pa=new z,kr=new z,ma=new z;class $p{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ha.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vr),a=Nn.dot(this.direction),l=-Nn.dot(Vr),c=Nn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,M;if(u>0)if(f=o*l-a,h=o*a-l,M=s*u,f>=0)if(h>=-M)if(h<=M){const v=1/u;f*=v,h*=v,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-M?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=M?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ha).addScaledVector(Vr,h),m}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),r=xn.dot(xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,r,s){pa.subVectors(t,e),kr.subVectors(i,e),ma.crossVectors(pa,kr);let o=this.direction.dot(ma),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,e);const l=a*this.direction.dot(kr.crossVectors(Nn,kr));if(l<0)return null;const c=a*this.direction.dot(pa.cross(Nn));if(c<0||l+c>o)return null;const u=-a*Nn.dot(ma);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,m,M,v,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,m,M,v,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,m,M,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=M,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),o=1/yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,M=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+M*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=M+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,M=c*u,v=c*f;t[0]=h+v*a,t[4]=M*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-M,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,M=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=M+m*a,t[1]=m+M*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,M=a*u,v=a*f;t[0]=l*u,t[4]=M*c-m,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=m*c-M,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,M=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=M*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+M,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,m=o*c,M=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=m*f-M,t[2]=M*f-m,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zp,e,Jp)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Fn.crossVectors(i,Ot),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Fn.crossVectors(i,Ot)),Fn.normalize(),Wr.crossVectors(Ot,Fn),r[0]=Fn.x,r[4]=Wr.x,r[8]=Ot.x,r[1]=Fn.y,r[5]=Wr.y,r[9]=Ot.y,r[2]=Fn.z,r[6]=Wr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],M=i[2],v=i[6],p=i[10],d=i[14],b=i[3],y=i[7],T=i[11],w=i[15],U=r[0],C=r[4],Z=r[8],E=r[12],A=r[1],ee=r[5],oe=r[9],le=r[13],I=r[2],q=r[6],K=r[10],V=r[14],te=r[3],ae=r[7],se=r[11],N=r[15];return s[0]=o*U+a*A+l*I+c*te,s[4]=o*C+a*ee+l*q+c*ae,s[8]=o*Z+a*oe+l*K+c*se,s[12]=o*E+a*le+l*V+c*N,s[1]=u*U+f*A+h*I+m*te,s[5]=u*C+f*ee+h*q+m*ae,s[9]=u*Z+f*oe+h*K+m*se,s[13]=u*E+f*le+h*V+m*N,s[2]=M*U+v*A+p*I+d*te,s[6]=M*C+v*ee+p*q+d*ae,s[10]=M*Z+v*oe+p*K+d*se,s[14]=M*E+v*le+p*V+d*N,s[3]=b*U+y*A+T*I+w*te,s[7]=b*C+y*ee+T*q+w*ae,s[11]=b*Z+y*oe+T*K+w*se,s[15]=b*E+y*le+T*V+w*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],M=e[3],v=e[7],p=e[11],d=e[15];return M*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+v*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],M=e[12],v=e[13],p=e[14],d=e[15],b=f*p*c-v*h*c+v*l*m-a*p*m-f*l*d+a*h*d,y=M*h*c-u*p*c-M*l*m+o*p*m+u*l*d-o*h*d,T=u*v*c-M*f*c+M*a*m-o*v*m-u*a*d+o*f*d,w=M*f*l-u*v*l-M*a*h+o*v*h+u*a*p-o*f*p,U=t*b+i*y+r*T+s*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/U;return e[0]=b*C,e[1]=(v*h*s-f*p*s-v*r*m+i*p*m+f*r*d-i*h*d)*C,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*C,e[4]=y*C,e[5]=(u*p*s-M*h*s+M*r*m-t*p*m-u*r*d+t*h*d)*C,e[6]=(M*l*s-o*p*s-M*r*c+t*p*c+o*r*d-t*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*C,e[8]=T*C,e[9]=(M*f*s-u*v*s-M*i*m+t*v*m+u*i*d-t*f*d)*C,e[10]=(o*v*s-M*a*s+M*i*c-t*v*c-o*i*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*C,e[12]=w*C,e[13]=(u*v*r-M*f*r+M*i*h-t*v*h-u*i*p+t*f*p)*C,e[14]=(M*a*r-o*v*r-M*i*l+t*v*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,M=s*f,v=o*u,p=o*f,d=a*f,b=l*c,y=l*u,T=l*f,w=i.x,U=i.y,C=i.z;return r[0]=(1-(v+d))*w,r[1]=(m+T)*w,r[2]=(M-y)*w,r[3]=0,r[4]=(m-T)*U,r[5]=(1-(h+d))*U,r[6]=(p+b)*U,r[7]=0,r[8]=(M+y)*C,r[9]=(p-b)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yi.set(r[0],r[1],r[2]).length();const o=yi.set(r[4],r[5],r[6]).length(),a=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const c=1/s,u=1/o,f=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=An){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,M;if(a===An)m=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Es)m=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=An){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,m=(i+r)*u;let M,v;if(a===An)M=(o+s)*f,v=-2*f;else if(a===Es)M=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yi=new z,Yt=new gt,Zp=new z(0,0,0),Jp=new z(1,1,1),Fn=new z,Wr=new z,Ot=new z,nc=new gt,ic=new Rr;class Os{constructor(e=0,t=0,i=0,r=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class Fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qp=0;const rc=new z,Ti=new Rr,Mn=new gt,Xr=new z,ar=new z,em=new z,tm=new Rr,sc=new z(1,0,0),ac=new z(0,1,0),oc=new z(0,0,1),nm={type:"added"},im={type:"removed"};class Ht extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new z,t=new Os,i=new Rr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ve}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ar,Xr,this.up):Mn.lookAt(Xr,ar,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(im)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),M=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new z(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new z,Sn=new z,_a=new z,En=new z,bi=new z,Ai=new z,lc=new z,ga=new z,va=new z,xa=new z;let qr=!1;class Zt{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),Sn.subVectors(i,t),_a.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(Sn),l=jt.dot(_a),c=Sn.dot(Sn),u=Sn.dot(_a),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,M=(o*u-a*l)*h;return s.set(1-m-M,M,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,i,r,s,o,a,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,En),l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),Sn.subVectors(e,t),jt.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),jt.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;bi.subVectors(r,i),Ai.subVectors(s,i),ga.subVectors(e,i);const l=bi.dot(ga),c=Ai.dot(ga);if(l<=0&&c<=0)return t.copy(i);va.subVectors(e,r);const u=bi.dot(va),f=Ai.dot(va);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(bi,o);xa.subVectors(e,s);const m=bi.dot(xa),M=Ai.dot(xa);if(M>=0&&m<=M)return t.copy(s);const v=m*c-l*M;if(v<=0&&c>=0&&M<=0)return a=c/(c-M),t.copy(i).addScaledVector(Ai,a);const p=u*M-m*f;if(p<=0&&f-u>=0&&m-M>=0)return lc.subVectors(s,r),a=(f-u)/(f-u+(m-M)),t.copy(r).addScaledVector(lc,a);const d=1/(p+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(bi,o).addScaledVector(Ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Vp(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ma(o,s,e+1/3),this.g=Ma(o,s,e),this.b=Ma(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const i=Ou[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return $e.fromWorkingColorSpace(xt.copy(this),e),Math.round(Lt(xt.r*255,0,255))*65536+Math.round(Lt(xt.g*255,0,255))*256+Math.round(Lt(xt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,s=xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=mt){$e.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Yr);const i=aa(On.h,Yr.h,t),r=aa(On.s,Yr.s,t),s=aa(On.l,Yr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Ze;Ze.NAMES=Ou;let rm=0;class Bs extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=zi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Wa,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zs extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new z,jr=new Je;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kl,this.updateRange={offset:0,count:-1},this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Bu extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zu extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sm=0;const Vt=new gt,Sa=new Ht,wi=new z,Bt=new Cr,or=new Cr,ht=new z;class jn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?zu:Bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];or.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Bt.min,or.min),Bt.expandByPoint(ht),ht.addVectors(Bt.max,or.max),Bt.expandByPoint(ht)):(Bt.expandByPoint(or.min),Bt.expandByPoint(or.max))}Bt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(e,c),ht.add(wi)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new z,u[A]=new z;const f=new z,h=new z,m=new z,M=new Je,v=new Je,p=new Je,d=new z,b=new z;function y(A,ee,oe){f.fromArray(r,A*3),h.fromArray(r,ee*3),m.fromArray(r,oe*3),M.fromArray(o,A*2),v.fromArray(o,ee*2),p.fromArray(o,oe*2),h.sub(f),m.sub(f),v.sub(M),p.sub(M);const le=1/(v.x*p.y-p.x*v.y);isFinite(le)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(le),b.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(le),c[A].add(d),c[ee].add(d),c[oe].add(d),u[A].add(b),u[ee].add(b),u[oe].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let A=0,ee=T.length;A<ee;++A){const oe=T[A],le=oe.start,I=oe.count;for(let q=le,K=le+I;q<K;q+=3)y(i[q+0],i[q+1],i[q+2])}const w=new z,U=new z,C=new z,Z=new z;function E(A){C.fromArray(s,A*3),Z.copy(C);const ee=c[A];w.copy(ee),w.sub(C.multiplyScalar(C.dot(ee))).normalize(),U.crossVectors(Z,ee);const le=U.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=le}for(let A=0,ee=T.length;A<ee;++A){const oe=T[A],le=oe.start,I=oe.count;for(let q=le,K=le+I;q<K;q+=3)E(i[q+0]),E(i[q+1]),E(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const M=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,M=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)h[M++]=c[m++]}return new pn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new gt,ti=new $p,Kr=new Ro,uc=new z,Ri=new z,Ci=new z,Pi=new z,Ea=new z,$r=new z,Zr=new Je,Jr=new Je,Qr=new Je,fc=new z,dc=new z,hc=new z,es=new z,ts=new z;class hn extends Ht{constructor(e=new jn,t=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ea.fromBufferAttribute(f,e),o?$r.addScaledVector(Ea,u):$r.addScaledVector(Ea.sub(t),u))}t.add($r)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Kr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Kr,uc)===null||ti.origin.distanceToSquared(uc)>(e.far-e.near)**2))&&(cc.copy(s).invert(),ti.copy(e.ray).applyMatrix4(cc),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,v=h.length;M<v;M++){const p=h[M],d=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,w=y;T<w;T+=3){const U=a.getX(T),C=a.getX(T+1),Z=a.getX(T+2);r=ns(this,d,e,i,c,u,f,U,C,Z),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=M,d=v;p<d;p+=3){const b=a.getX(p),y=a.getX(p+1),T=a.getX(p+2);r=ns(this,o,e,i,c,u,f,b,y,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,v=h.length;M<v;M++){const p=h[M],d=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,w=y;T<w;T+=3){const U=T,C=T+1,Z=T+2;r=ns(this,d,e,i,c,u,f,U,C,Z),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=M,d=v;p<d;p+=3){const b=p,y=p+1,T=p+2;r=ns(this,o,e,i,c,u,f,b,y,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function am(n,e,t,i,r,s,o,a){let l;if(e.side===Ut?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yn,a),l===null)return null;ts.copy(a),ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:n}}function ns(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ri),n.getVertexPosition(l,Ci),n.getVertexPosition(c,Pi);const u=am(n,e,t,i,Ri,Ci,Pi,es);if(u){r&&(Zr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),u.uv=Zt.getInterpolation(es,Ri,Ci,Pi,Zr,Jr,Qr,new Je)),s&&(Zr.fromBufferAttribute(s,a),Jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),u.uv1=Zt.getInterpolation(es,Ri,Ci,Pi,Zr,Jr,Qr,new Je),u.uv2=u.uv1),o&&(fc.fromBufferAttribute(o,a),dc.fromBufferAttribute(o,l),hc.fromBufferAttribute(o,c),u.normal=Zt.getInterpolation(es,Ri,Ci,Pi,fc,dc,hc,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Zt.getNormal(Ri,Ci,Pi,f.normal),u.face=f}return u}class Qi extends jn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;M("z","y","x",-1,-1,i,t,e,o,s,0),M("z","y","x",1,-1,i,t,-e,o,s,1),M("x","z","y",1,1,e,i,t,r,o,2),M("x","z","y",1,-1,e,i,-t,r,o,3),M("x","y","z",1,-1,e,t,i,r,s,4),M("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(f,2));function M(v,p,d,b,y,T,w,U,C,Z,E){const A=T/C,ee=w/Z,oe=T/2,le=w/2,I=U/2,q=C+1,K=Z+1;let V=0,te=0;const ae=new z;for(let se=0;se<K;se++){const N=se*ee-le;for(let G=0;G<q;G++){const _e=G*A-oe;ae[v]=_e*b,ae[p]=N*y,ae[d]=I,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[p]=0,ae[d]=U>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(G/C),f.push(1-se/Z),V+=1}}for(let se=0;se<Z;se++)for(let N=0;N<C;N++){const G=h+N+q*se,_e=h+N+q*(se+1),xe=h+(N+1)+q*(se+1),Ee=h+(N+1)+q*se;l.push(G,_e,Ee),l.push(_e,xe,Ee),te+=6}a.addGroup(m,te,E),m+=te,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=ji(n[t]);for(const r in i)e[r]=i[r]}return e}function om(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hu(n){return n.getRenderTarget()===null?n.outputColorSpace:$e.workingColorSpace}const lm={clone:ji,merge:wt};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gu extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Gu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ui=1;class fm extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(Li,Ui,e,t);r.layers=this.layers,this.add(r);const s=new zt(Li,Ui,e,t);s.layers=this.layers,this.add(s);const o=new zt(Li,Ui,e,t);o.layers=this.layers,this.add(o);const a=new zt(Li,Ui,e,t);a.layers=this.layers,this.add(a);const l=new zt(Li,Ui,e,t);l.layers=this.layers,this.add(l);const c=new zt(Li,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Vu extends Dt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dm extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===hi?mt:Xt),this.texture=new Vu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qi(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:kn});s.uniforms.tEquirect.value=t;const o=new hn(r,s),a=t.minFilter;return t.minFilter===yr&&(t.minFilter=kt),new fm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ya=new z,hm=new z,pm=new Ve;class ii{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ya.subVectors(i,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ya),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pm.getNormalMatrix(e),r=this.coplanarPoint(ya).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Ro,is=new z;class ku{constructor(e=new ii,t=new ii,i=new ii,r=new ii,s=new ii,o=new ii){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],M=r[9],v=r[10],p=r[11],d=r[12],b=r[13],y=r[14],T=r[15];if(i[0].setComponents(l-s,h-c,p-m,T-d).normalize(),i[1].setComponents(l+s,h+c,p+m,T+d).normalize(),i[2].setComponents(l+o,h+u,p+M,T+b).normalize(),i[3].setComponents(l-o,h-u,p-M,T-b).normalize(),i[4].setComponents(l-a,h-f,p-v,T-y).normalize(),t===An)i[5].setComponents(l+a,h+f,p+v,T+y).normalize();else if(t===Es)i[5].setComponents(a,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let M;if(f instanceof Float32Array)M=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=n.SHORT;else if(f instanceof Uint32Array)M=n.UNSIGNED_INT;else if(f instanceof Int32Array)M=n.INT;else if(f instanceof Int8Array)M=n.BYTE;else if(f instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Co extends jn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],M=[],v=[],p=[];for(let d=0;d<u;d++){const b=d*h-o;for(let y=0;y<c;y++){const T=y*f-s;M.push(T,-b,0),v.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const y=b+c*d,T=b+c*(d+1),w=b+1+c*(d+1),U=b+1+c*d;m.push(y,T,U),m.push(T,w,U)}this.setIndex(m),this.setAttribute("position",new mn(M,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,h_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,M_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,C_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,P_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,L_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:_m,alphahash_pars_fragment:gm,alphamap_fragment:vm,alphamap_pars_fragment:xm,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:Em,aomap_pars_fragment:ym,begin_vertex:Tm,beginnormal_vertex:bm,bsdfs:Am,iridescence_fragment:wm,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Um,color_fragment:Dm,color_pars_fragment:Im,color_pars_vertex:Nm,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Gm,emissivemap_fragment:Vm,emissivemap_pars_fragment:km,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:jm,envmap_pars_vertex:Km,envmap_physical_pars_fragment:o_,envmap_vertex:$m,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:e_,gradientmap_pars_fragment:t_,lightmap_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:s_,lights_pars_begin:a_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:u_,lights_phong_pars_fragment:f_,lights_physical_fragment:d_,lights_physical_pars_fragment:h_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:__,logdepthbuf_fragment:g_,logdepthbuf_pars_fragment:v_,logdepthbuf_pars_vertex:x_,logdepthbuf_vertex:M_,map_fragment:S_,map_pars_fragment:E_,map_particle_fragment:y_,map_particle_pars_fragment:T_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:A_,morphcolor_vertex:w_,morphnormal_vertex:R_,morphtarget_pars_vertex:C_,morphtarget_vertex:P_,normal_fragment_begin:L_,normal_fragment_maps:U_,normal_pars_fragment:D_,normal_pars_vertex:I_,normal_vertex:N_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:H_,opaque_fragment:G_,packing:V_,premultiplied_alpha_fragment:k_,project_vertex:W_,dithering_fragment:X_,dithering_pars_fragment:q_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:$_,shadowmap_vertex:Z_,shadowmask_pars_fragment:J_,skinbase_vertex:Q_,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:rg,tonemapping_fragment:sg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:ug,uv_vertex:fg,worldpos_vertex:dg,background_vert:hg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:_g,cube_vert:gg,cube_frag:vg,depth_vert:xg,depth_frag:Mg,distanceRGBA_vert:Sg,distanceRGBA_frag:Eg,equirect_vert:yg,equirect_frag:Tg,linedashed_vert:bg,linedashed_frag:Ag,meshbasic_vert:wg,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Lg,meshmatcap_frag:Ug,meshnormal_vert:Dg,meshnormal_frag:Ig,meshphong_vert:Ng,meshphong_frag:Fg,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:Hg,points_vert:Gg,points_frag:Vg,shadow_vert:kg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},he={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},un={basic:{uniforms:wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:wt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:wt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:wt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:wt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:wt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:wt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:wt([he.common,he.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:wt([he.lights,he.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};un.physical={uniforms:wt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const rs={r:0,b:0,g:0};function Yg(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function M(p,d){let b=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ns)?(u===void 0&&(u=new hn(new Qi(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ji(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,U,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=$e.getTransfer(y.colorSpace)!==nt,(f!==y||h!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new hn(new Co(2,2),new _i({name:"BackgroundMaterial",uniforms:ji(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=$e.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(rs,Hu(n)),i.buffers.color.setClear(rs.r,rs.g,rs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:M}}function jg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(I,q,K,V,te){let ae=!1;if(o){const se=v(V,K,q);c!==se&&(c=se,m(c.object)),ae=d(I,V,K,te),ae&&b(I,V,K,te)}else{const se=q.wireframe===!0;(c.geometry!==V.id||c.program!==K.id||c.wireframe!==se)&&(c.geometry=V.id,c.program=K.id,c.wireframe=se,ae=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,Z(I,q,K,V),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function M(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,q,K){const V=K.wireframe===!0;let te=a[I.id];te===void 0&&(te={},a[I.id]=te);let ae=te[q.id];ae===void 0&&(ae={},te[q.id]=ae);let se=ae[V];return se===void 0&&(se=p(h()),ae[V]=se),se}function p(I){const q=[],K=[],V=[];for(let te=0;te<r;te++)q[te]=0,K[te]=0,V[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:K,attributeDivisors:V,object:I,attributes:{},index:null}}function d(I,q,K,V){const te=c.attributes,ae=q.attributes;let se=0;const N=K.getAttributes();for(const G in N)if(N[G].location>=0){const xe=te[G];let Ee=ae[G];if(Ee===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor)),xe===void 0||xe.attribute!==Ee||Ee&&xe.data!==Ee.data)return!0;se++}return c.attributesNum!==se||c.index!==V}function b(I,q,K,V){const te={},ae=q.attributes;let se=0;const N=K.getAttributes();for(const G in N)if(N[G].location>=0){let xe=ae[G];xe===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor));const Ee={};Ee.attribute=xe,xe&&xe.data&&(Ee.data=xe.data),te[G]=Ee,se++}c.attributes=te,c.attributesNum=se,c.index=V}function y(){const I=c.newAttributes;for(let q=0,K=I.length;q<K;q++)I[q]=0}function T(I){w(I,0)}function w(I,q){const K=c.newAttributes,V=c.enabledAttributes,te=c.attributeDivisors;K[I]=1,V[I]===0&&(n.enableVertexAttribArray(I),V[I]=1),te[I]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),te[I]=q)}function U(){const I=c.newAttributes,q=c.enabledAttributes;for(let K=0,V=q.length;K<V;K++)q[K]!==I[K]&&(n.disableVertexAttribArray(K),q[K]=0)}function C(I,q,K,V,te,ae,se){se===!0?n.vertexAttribIPointer(I,q,K,te,ae):n.vertexAttribPointer(I,q,K,V,te,ae)}function Z(I,q,K,V){if(i.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const te=V.attributes,ae=K.getAttributes(),se=q.defaultAttributeValues;for(const N in ae){const G=ae[N];if(G.location>=0){let _e=te[N];if(_e===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),_e!==void 0){const xe=_e.normalized,Ee=_e.itemSize,ye=t.get(_e);if(ye===void 0)continue;const ze=ye.buffer,Ue=ye.type,Le=ye.bytesPerElement,Qe=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||_e.gpuType===bu);if(_e.isInterleavedBufferAttribute){const Ie=_e.data,g=Ie.stride,R=_e.offset;if(Ie.isInstancedInterleavedBuffer){for(let D=0;D<G.locationSize;D++)w(G.location+D,Ie.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let D=0;D<G.locationSize;D++)T(G.location+D);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let D=0;D<G.locationSize;D++)C(G.location+D,Ee/G.locationSize,Ue,xe,g*Le,(R+Ee/G.locationSize*D)*Le,Qe)}else{if(_e.isInstancedBufferAttribute){for(let Ie=0;Ie<G.locationSize;Ie++)w(G.location+Ie,_e.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)T(G.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Ie=0;Ie<G.locationSize;Ie++)C(G.location+Ie,Ee/G.locationSize,Ue,xe,Ee*Le,Ee/G.locationSize*Ie*Le,Qe)}}else if(se!==void 0){const xe=se[N];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(G.location,xe);break;case 3:n.vertexAttrib3fv(G.location,xe);break;case 4:n.vertexAttrib4fv(G.location,xe);break;default:n.vertexAttrib1fv(G.location,xe)}}}}U()}function E(){oe();for(const I in a){const q=a[I];for(const K in q){const V=q[K];for(const te in V)M(V[te].object),delete V[te];delete q[K]}delete a[I]}}function A(I){if(a[I.id]===void 0)return;const q=a[I.id];for(const K in q){const V=q[K];for(const te in V)M(V[te].object),delete V[te];delete q[K]}delete a[I.id]}function ee(I){for(const q in a){const K=a[q];if(K[I.id]===void 0)continue;const V=K[I.id];for(const te in V)M(V[te].object),delete V[te];delete K[I.id]}}function oe(){le(),u=!0,c!==l&&(c=l,m(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:oe,resetDefaultState:le,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:ee,initAttributes:y,enableAttribute:T,disableUnusedAttributes:U}}function Kg(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function $g(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,T=o||e.has("OES_texture_float"),w=y&&T,U=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:U}}function Zg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ii,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const M=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||M===null||M.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,y=b*4;let T=d.clippingState||null;l.value=T,T=u(M,h,y,m);for(let w=0;w!==y;++w)T[w]=t[w];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,M){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,M!==!0||p===null){const d=m+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,T=m;y!==v;++y,T+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Jg(n){let e=new WeakMap;function t(o,a){return a===Xa?o.mapping=Xi:a===qa&&(o.mapping=qi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Xa||a===qa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dm(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qg extends Gu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,pc=[.125,.215,.35,.446,.526,.582],li=20,Ta=new Qg,mc=new Ze;let ba=null,Aa=0,wa=0;const ri=(1+Math.sqrt(5))/2,Di=1/ri,_c=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ri,Di),new z(0,ri,-Di),new z(Di,0,ri),new z(-Di,0,ri),new z(ri,Di,0),new z(-ri,Di,0)];class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Aa,wa),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Tr,format:tn,colorSpace:Rn,depthBuffer:!1},r=vc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ev(s)),this._blurMaterial=tv(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,i,r){const a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(mc),u.toneMapping=Wn,u.autoClear=!1;const m=new zs({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),M=new hn(new Qi,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(mc),v=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;ss(r,b*y,d>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(M,a),u.render(e,a)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xi||e.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ta)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_c[(r-1)%_c.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new hn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*li-1),v=s/M,p=isFinite(s)?1+Math.floor(u*v):li;p>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const d=[];let b=0;for(let C=0;C<li;++C){const Z=C/v,E=Math.exp(-Z*Z/2);d.push(E),C===0?b+=E:C<p&&(b+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=M,h.mipInt.value=y-i;const T=this._sizeLods[r],w=3*T*(r>y-Ni?r-y+Ni:0),U=4*(this._cubeSize-T);ss(t,w,U,3*T,2*T),l.setRenderTarget(t),l.render(f,Ta)}}function ev(n){const e=[],t=[],i=[];let r=n;const s=n-Ni+1+pc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ni?l=pc[o-n+Ni-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,M=6,v=3,p=2,d=1,b=new Float32Array(v*M*m),y=new Float32Array(p*M*m),T=new Float32Array(d*M*m);for(let U=0;U<m;U++){const C=U%3*2/3-1,Z=U>2?0:-1,E=[C,Z,0,C+2/3,Z,0,C+2/3,Z+1,0,C,Z,0,C+2/3,Z+1,0,C,Z+1,0];b.set(E,v*M*U),y.set(h,p*M*U);const A=[U,U,U,U,U,U];T.set(A,d*M*U)}const w=new jn;w.setAttribute("position",new pn(b,v)),w.setAttribute("uv",new pn(y,p)),w.setAttribute("faceIndex",new pn(T,d)),e.push(w),r>Ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vc(n,e,t){const i=new mi(n,e,t);return i.texture.mapping=Ns,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tv(n,e,t){const i=new Float32Array(li),r=new z(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function xc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Mc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xa||l===qa,u=l===Xi||l===qi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new gc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new gc(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rv(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const M in h.attributes)e.remove(h.attributes[M]);for(const M in h.morphAttributes){const v=h.morphAttributes[M];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const M in h)e.update(h[M],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const M in m){const v=m[M];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,M=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let y=0,T=b.length;y<T;y+=3){const w=b[y+0],U=b[y+1],C=b[y+2];h.push(w,U,U,C,C,w)}}else if(M!==void 0){const b=M.array;v=M.version;for(let y=0,T=b.length/3-1;y<T;y+=3){const w=y+0,U=y+1,C=y+2;h.push(w,U,U,C,C,w)}}else return;const p=new(Uu(h)?zu:Bu)(h,1);p.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function sv(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,M){if(M===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,h*l,M),t.update(m,s,M)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function av(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ov(n,e){return n[0]-e[0]}function lv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function cv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const M=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=M!==void 0?M.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let q=function(){le.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var m=q;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],Z=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),T===!0&&(E=2),w===!0&&(E=3);let A=u.attributes.position.count*E,ee=1;A>e.maxTextureSize&&(ee=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const oe=new Float32Array(A*ee*4*v),le=new Nu(oe,A,ee,v);le.type=Hn,le.needsUpdate=!0;const I=E*4;for(let K=0;K<v;K++){const V=U[K],te=C[K],ae=Z[K],se=A*ee*4*K;for(let N=0;N<V.count;N++){const G=N*I;y===!0&&(o.fromBufferAttribute(V,N),oe[se+G+0]=o.x,oe[se+G+1]=o.y,oe[se+G+2]=o.z,oe[se+G+3]=0),T===!0&&(o.fromBufferAttribute(te,N),oe[se+G+4]=o.x,oe[se+G+5]=o.y,oe[se+G+6]=o.z,oe[se+G+7]=0),w===!0&&(o.fromBufferAttribute(ae,N),oe[se+G+8]=o.x,oe[se+G+9]=o.y,oe[se+G+10]=o.z,oe[se+G+11]=ae.itemSize===4?o.w:1)}}p={count:v,texture:le,size:new Je(A,ee)},s.set(u,p),u.addEventListener("dispose",q)}let d=0;for(let y=0;y<h.length;y++)d+=h[y];const b=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const M=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==M){v=[];for(let T=0;T<M;T++)v[T]=[T,0];i[u.id]=v}for(let T=0;T<M;T++){const w=v[T];w[0]=T,w[1]=h[T]}v.sort(lv);for(let T=0;T<8;T++)T<M&&v[T][1]?(a[T][0]=v[T][0],a[T][1]=v[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(ov);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const w=a[T],U=w[0],C=w[1];U!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+T)!==p[U]&&u.setAttribute("morphTarget"+T,p[U]),d&&u.getAttribute("morphNormal"+T)!==d[U]&&u.setAttribute("morphNormal"+T,d[U]),r[T]=C,b+=C):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),d&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const y=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function uv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Xu=new Dt,qu=new Nu,Yu=new jp,ju=new Vu,Sc=[],Ec=[],yc=new Float32Array(16),Tc=new Float32Array(9),bc=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sc[r];if(s===void 0&&(s=new Float32Array(r),Sc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hs(n,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function mv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;bc.set(i),n.uniformMatrix2fv(this.addr,!1,bc),ft(t,i)}}function _v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;Tc.set(i),n.uniformMatrix3fv(this.addr,!1,Tc),ft(t,i)}}function gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;yc.set(i),n.uniformMatrix4fv(this.addr,!1,yc),ft(t,i)}}function vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Ev(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function Av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Xu,r)}function wv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yu,r)}function Rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ju,r)}function Cv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qu,r)}function Pv(n){switch(n){case 5126:return fv;case 35664:return dv;case 35665:return hv;case 35666:return pv;case 35674:return mv;case 35675:return _v;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return Ev;case 36294:return yv;case 36295:return Tv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Lv(n,e){n.uniform1fv(this.addr,e)}function Uv(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function Dv(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function Iv(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Nv(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fv(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ov(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bv(n,e){n.uniform1iv(this.addr,e)}function zv(n,e){n.uniform2iv(this.addr,e)}function Hv(n,e){n.uniform3iv(this.addr,e)}function Gv(n,e){n.uniform4iv(this.addr,e)}function Vv(n,e){n.uniform1uiv(this.addr,e)}function kv(n,e){n.uniform2uiv(this.addr,e)}function Wv(n,e){n.uniform3uiv(this.addr,e)}function Xv(n,e){n.uniform4uiv(this.addr,e)}function qv(n,e,t){const i=this.cache,r=e.length,s=Hs(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Xu,s[o])}function Yv(n,e,t){const i=this.cache,r=e.length,s=Hs(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Yu,s[o])}function jv(n,e,t){const i=this.cache,r=e.length,s=Hs(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ju,s[o])}function Kv(n,e,t){const i=this.cache,r=e.length,s=Hs(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||qu,s[o])}function $v(n){switch(n){case 5126:return Lv;case 35664:return Uv;case 35665:return Dv;case 35666:return Iv;case 35674:return Nv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return Hv;case 35669:case 35673:return Gv;case 5125:return Vv;case 36294:return kv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Kv}}class Zv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Pv(t.type)}}class Jv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=$v(t.type)}}class Qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Ac(n,e){n.seq.push(e),n.map[e.id]=e}function ex(n,e,t){const i=n.name,r=i.length;for(Ra.lastIndex=0;;){const s=Ra.exec(i),o=Ra.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ac(t,c===void 0?new Zv(a,n,e):new Jv(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Qv(a),Ac(t,f)),t=f}}}class ds{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ex(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function wc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tx=37297;let nx=0;function ix(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function rx(n){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(n);let i;switch(e===t?i="":e===Ss&&t===Ms?i="LinearDisplayP3ToLinearSRGB":e===Ms&&t===Ss&&(i="LinearSRGBToLinearDisplayP3"),n){case Rn:case Fs:return[i,"LinearTransferOETF"];case mt:case wo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ix(n.getShaderSource(e),o)}else return r}function sx(n,e){const t=rx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ax(n,e){let t;switch(e){case mp:t="Linear";break;case _p:t="Reinhard";break;case gp:t="OptimizedCineon";break;case vp:t="ACESFilmic";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ox(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ur).join(`
`)}function lx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ur(n){return n!==""}function Cc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(n){return n.replace(ux,dx)}const fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dx(n,e){let t=He[e];if(t===void 0){const i=fx.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(n){return n.replace(hx,px)}function px(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function _x(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xi:case qi:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function vx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yu:e="ENVMAP_BLENDING_MULTIPLY";break;case hp:e="ENVMAP_BLENDING_MIX";break;case pp:e="ENVMAP_BLENDING_ADD";break}return e}function xx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Mx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mx(t),c=_x(t),u=gx(t),f=vx(t),h=xx(t),m=t.isWebGL2?"":ox(t),M=lx(s),v=r.createProgram();let p,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ur).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ur).join(`
`),d.length>0&&(d+=`
`)):(p=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),d=[m,Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?He.tonemapping_pars_fragment:"",t.toneMapping!==Wn?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,sx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=Ja(o),o=Cc(o,t),o=Pc(o,t),a=Ja(a),a=Cc(a,t),a=Pc(a,t),o=Lc(o),a=Lc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=b+p+o,T=b+d+a,w=wc(r,r.VERTEX_SHADER,y),U=wc(r,r.FRAGMENT_SHADER,T);r.attachShader(v,w),r.attachShader(v,U),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(ee){if(n.debug.checkShaderErrors){const oe=r.getProgramInfoLog(v).trim(),le=r.getShaderInfoLog(w).trim(),I=r.getShaderInfoLog(U).trim();let q=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,U);else{const V=Rc(r,w,"vertex"),te=Rc(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+V+`
`+te)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(le===""||I==="")&&(K=!1);K&&(ee.diagnostics={runnable:q,programLog:oe,vertexShader:{log:le,prefix:p},fragmentShader:{log:I,prefix:d}})}r.deleteShader(w),r.deleteShader(U),Z=new ds(r,v),E=cx(r,v)}let Z;this.getUniforms=function(){return Z===void 0&&C(this),Z};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,tx)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=U,this}let Sx=0;class Ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yx(e),t.set(e,i)),i}}class yx{constructor(e){this.id=Sx++,this.code=e,this.usedTimes=0}}function Tx(n,e,t,i,r,s,o){const a=new Fu,l=new Ex,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,A,ee,oe,le){const I=oe.fog,q=le.geometry,K=E.isMeshStandardMaterial?oe.environment:null,V=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),te=V&&V.mapping===Ns?V.image.height:null,ae=M[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,N=se!==void 0?se.length:0;let G=0;q.morphAttributes.position!==void 0&&(G=1),q.morphAttributes.normal!==void 0&&(G=2),q.morphAttributes.color!==void 0&&(G=3);let _e,xe,Ee,ye;if(ae){const ot=un[ae];_e=ot.vertexShader,xe=ot.fragmentShader}else _e=E.vertexShader,xe=E.fragmentShader,l.update(E),Ee=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);const ze=n.getRenderTarget(),Ue=le.isInstancedMesh===!0,Le=!!E.map,Qe=!!E.matcap,Ie=!!V,g=!!E.aoMap,R=!!E.lightMap,D=!!E.bumpMap,O=!!E.normalMap,B=!!E.displacementMap,ie=!!E.emissiveMap,ne=!!E.metalnessMap,X=!!E.roughnessMap,re=E.anisotropy>0,J=E.clearcoat>0,ge=E.iridescence>0,x=E.sheen>0,_=E.transmission>0,L=re&&!!E.anisotropyMap,Y=J&&!!E.clearcoatMap,j=J&&!!E.clearcoatNormalMap,Q=J&&!!E.clearcoatRoughnessMap,pe=ge&&!!E.iridescenceMap,ce=ge&&!!E.iridescenceThicknessMap,me=x&&!!E.sheenColorMap,we=x&&!!E.sheenRoughnessMap,We=!!E.specularMap,ue=!!E.specularColorMap,Ne=!!E.specularIntensityMap,be=_&&!!E.transmissionMap,Re=_&&!!E.thicknessMap,Ae=!!E.gradientMap,Se=!!E.alphaMap,qe=E.alphaTest>0,P=!!E.alphaHash,ve=!!E.extensions,fe=!!q.attributes.uv1,$=!!q.attributes.uv2,de=!!q.attributes.uv3;let Ce=Wn;return E.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(Ce=n.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:_e,fragmentShader:xe,defines:E.defines,customVertexShaderID:Ee,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:Ue,instancingColor:Ue&&le.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:Rn,map:Le,matcap:Qe,envMap:Ie,envMapMode:Ie&&V.mapping,envMapCubeUVHeight:te,aoMap:g,lightMap:R,bumpMap:D,normalMap:O,displacementMap:h&&B,emissiveMap:ie,normalMapObjectSpace:O&&E.normalMapType===Dp,normalMapTangentSpace:O&&E.normalMapType===Up,metalnessMap:ne,roughnessMap:X,anisotropy:re,anisotropyMap:L,clearcoat:J,clearcoatMap:Y,clearcoatNormalMap:j,clearcoatRoughnessMap:Q,iridescence:ge,iridescenceMap:pe,iridescenceThicknessMap:ce,sheen:x,sheenColorMap:me,sheenRoughnessMap:we,specularMap:We,specularColorMap:ue,specularIntensityMap:Ne,transmission:_,transmissionMap:be,thicknessMap:Re,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===zi,alphaMap:Se,alphaTest:qe,alphaHash:P,combine:E.combine,mapUv:Le&&v(E.map.channel),aoMapUv:g&&v(E.aoMap.channel),lightMapUv:R&&v(E.lightMap.channel),bumpMapUv:D&&v(E.bumpMap.channel),normalMapUv:O&&v(E.normalMap.channel),displacementMapUv:B&&v(E.displacementMap.channel),emissiveMapUv:ie&&v(E.emissiveMap.channel),metalnessMapUv:ne&&v(E.metalnessMap.channel),roughnessMapUv:X&&v(E.roughnessMap.channel),anisotropyMapUv:L&&v(E.anisotropyMap.channel),clearcoatMapUv:Y&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:j&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(E.sheenRoughnessMap.channel),specularMapUv:We&&v(E.specularMap.channel),specularColorMapUv:ue&&v(E.specularColorMap.channel),specularIntensityMapUv:Ne&&v(E.specularIntensityMap.channel),transmissionMapUv:be&&v(E.transmissionMap.channel),thicknessMapUv:Re&&v(E.thicknessMap.channel),alphaMapUv:Se&&v(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(O||re),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:$,vertexUv3s:de,pointsUvs:le.isPoints===!0&&!!q.attributes.uv&&(Le||Se),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:le.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:G,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Le&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===Ut,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ve&&E.extensions.derivatives===!0,extensionFragDepth:ve&&E.extensions.fragDepth===!0,extensionDrawBuffers:ve&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ee in E.defines)A.push(ee),A.push(E.defines[ee]);return E.isRawShaderMaterial===!1&&(b(A,E),y(A,E),A.push(n.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function b(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function y(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){const A=M[E.type];let ee;if(A){const oe=un[A];ee=lm.clone(oe.uniforms)}else ee=E.uniforms;return ee}function w(E,A){let ee;for(let oe=0,le=c.length;oe<le;oe++){const I=c[oe];if(I.cacheKey===A){ee=I,++ee.usedTimes;break}}return ee===void 0&&(ee=new Mx(n,A,E,s),c.push(ee)),ee}function U(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function Z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:w,releaseProgram:U,releaseShaderCache:C,programs:c,dispose:Z}}function bx(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ax(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ic(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,M,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:M,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=M,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function a(f,h,m,M,v,p){const d=o(f,h,m,M,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,M,v,p){const d=o(f,h,m,M,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Ax),i.length>1&&i.sort(h||Dc),r.length>1&&r.sort(h||Dc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function wx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ic,n.set(i,[o])):r>=s.length?(o=new Ic,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ze};break;case"SpotLight":t={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Cx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Px=0;function Lx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ux(n,e){const t=new Rx,i=Cx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new gt,a=new gt;function l(u,f){let h=0,m=0,M=0;for(let oe=0;oe<9;oe++)r.probe[oe].set(0,0,0);let v=0,p=0,d=0,b=0,y=0,T=0,w=0,U=0,C=0,Z=0,E=0;u.sort(Lx);const A=f===!0?Math.PI:1;for(let oe=0,le=u.length;oe<le;oe++){const I=u[oe],q=I.color,K=I.intensity,V=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=q.r*K*A,m+=q.g*K*A,M+=q.b*K*A;else if(I.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(I.sh.coefficients[ae],K);E++}else if(I.isDirectionalLight){const ae=t.get(I);if(ae.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const se=I.shadow,N=i.get(I);N.shadowBias=se.bias,N.shadowNormalBias=se.normalBias,N.shadowRadius=se.radius,N.shadowMapSize=se.mapSize,r.directionalShadow[v]=N,r.directionalShadowMap[v]=te,r.directionalShadowMatrix[v]=I.shadow.matrix,T++}r.directional[v]=ae,v++}else if(I.isSpotLight){const ae=t.get(I);ae.position.setFromMatrixPosition(I.matrixWorld),ae.color.copy(q).multiplyScalar(K*A),ae.distance=V,ae.coneCos=Math.cos(I.angle),ae.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ae.decay=I.decay,r.spot[d]=ae;const se=I.shadow;if(I.map&&(r.spotLightMap[C]=I.map,C++,se.updateMatrices(I),I.castShadow&&Z++),r.spotLightMatrix[d]=se.matrix,I.castShadow){const N=i.get(I);N.shadowBias=se.bias,N.shadowNormalBias=se.normalBias,N.shadowRadius=se.radius,N.shadowMapSize=se.mapSize,r.spotShadow[d]=N,r.spotShadowMap[d]=te,U++}d++}else if(I.isRectAreaLight){const ae=t.get(I);ae.color.copy(q).multiplyScalar(K),ae.halfWidth.set(I.width*.5,0,0),ae.halfHeight.set(0,I.height*.5,0),r.rectArea[b]=ae,b++}else if(I.isPointLight){const ae=t.get(I);if(ae.color.copy(I.color).multiplyScalar(I.intensity*A),ae.distance=I.distance,ae.decay=I.decay,I.castShadow){const se=I.shadow,N=i.get(I);N.shadowBias=se.bias,N.shadowNormalBias=se.normalBias,N.shadowRadius=se.radius,N.shadowMapSize=se.mapSize,N.shadowCameraNear=se.camera.near,N.shadowCameraFar=se.camera.far,r.pointShadow[p]=N,r.pointShadowMap[p]=te,r.pointShadowMatrix[p]=I.shadow.matrix,w++}r.point[p]=ae,p++}else if(I.isHemisphereLight){const ae=t.get(I);ae.skyColor.copy(I.color).multiplyScalar(K*A),ae.groundColor.copy(I.groundColor).multiplyScalar(K*A),r.hemi[y]=ae,y++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=M;const ee=r.hash;(ee.directionalLength!==v||ee.pointLength!==p||ee.spotLength!==d||ee.rectAreaLength!==b||ee.hemiLength!==y||ee.numDirectionalShadows!==T||ee.numPointShadows!==w||ee.numSpotShadows!==U||ee.numSpotMaps!==C||ee.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=b,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=U+C-Z,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=Z,r.numLightProbes=E,ee.directionalLength=v,ee.pointLength=p,ee.spotLength=d,ee.rectAreaLength=b,ee.hemiLength=y,ee.numDirectionalShadows=T,ee.numPointShadows=w,ee.numSpotShadows=U,ee.numSpotMaps=C,ee.numLightProbes=E,r.version=Px++)}function c(u,f){let h=0,m=0,M=0,v=0,p=0;const d=f.matrixWorldInverse;for(let b=0,y=u.length;b<y;b++){const T=u[b];if(T.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(T.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),M++}else if(T.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Nc(n,e){const t=new Ux(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dx(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Nc(n,e),t.set(s,[l])):o>=a.length?(l=new Nc(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ix extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nx extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bx(n,e,t){let i=new ku;const r=new Je,s=new Je,o=new _t,a=new Ix({depthPacking:Lp}),l=new Nx,c={},u=t.maxTextureSize,f={[Yn]:Ut,[Ut]:Yn,[bn]:bn},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Fx,fragmentShader:Ox}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const M=new jn;M.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new hn(M,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let d=this.type;this.render=function(w,U,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const Z=n.getRenderTarget(),E=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(kn),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const oe=d!==yn&&this.type===yn,le=d===yn&&this.type!==yn;for(let I=0,q=w.length;I<q;I++){const K=w[I],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const te=V.getFrameExtents();if(r.multiply(te),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,V.mapSize.y=s.y)),V.map===null||oe===!0||le===!0){const se=this.type!==yn?{minFilter:Mt,magFilter:Mt}:{};V.map!==null&&V.map.dispose(),V.map=new mi(r.x,r.y,se),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ae=V.getViewportCount();for(let se=0;se<ae;se++){const N=V.getViewport(se);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),ee.viewport(o),V.updateMatrices(K,se),i=V.getFrustum(),T(U,C,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&b(V,C),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(Z,E,A)};function b(w,U){const C=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mi(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(U,null,C,h,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(U,null,C,m,v,null)}function y(w,U,C,Z){let E=null;const A=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)E=A;else if(E=C.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ee=E.uuid,oe=U.uuid;let le=c[ee];le===void 0&&(le={},c[ee]=le);let I=le[oe];I===void 0&&(I=E.clone(),le[oe]=I),E=I}if(E.visible=U.visible,E.wireframe=U.wireframe,Z===yn?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:f[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ee=n.properties.get(E);ee.light=C}return E}function T(w,U,C,Z,E){if(w.visible===!1)return;if(w.layers.test(U.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===yn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const oe=e.update(w),le=w.material;if(Array.isArray(le)){const I=oe.groups;for(let q=0,K=I.length;q<K;q++){const V=I[q],te=le[V.materialIndex];if(te&&te.visible){const ae=y(w,te,Z,E);n.renderBufferDirect(C,null,oe,ae,w,V)}}}else if(le.visible){const I=y(w,le,Z,E);n.renderBufferDirect(C,null,oe,I,w,null)}}const ee=w.children;for(let oe=0,le=ee.length;oe<le;oe++)T(ee[oe],U,C,Z,E)}}function zx(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const ve=new _t;let fe=null;const $=new _t(0,0,0,0);return{setMask:function(de){fe!==de&&!P&&(n.colorMask(de,de,de,de),fe=de)},setLocked:function(de){P=de},setClear:function(de,Ce,je,ot,Gt){Gt===!0&&(de*=ot,Ce*=ot,je*=ot),ve.set(de,Ce,je,ot),$.equals(ve)===!1&&(n.clearColor(de,Ce,je,ot),$.copy(ve))},reset:function(){P=!1,fe=null,$.set(-1,0,0,0)}}}function s(){let P=!1,ve=null,fe=null,$=null;return{setTest:function(de){de?Le(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(de){ve!==de&&!P&&(n.depthMask(de),ve=de)},setFunc:function(de){if(fe!==de){switch(de){case ap:n.depthFunc(n.NEVER);break;case op:n.depthFunc(n.ALWAYS);break;case lp:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case cp:n.depthFunc(n.EQUAL);break;case up:n.depthFunc(n.GEQUAL);break;case fp:n.depthFunc(n.GREATER);break;case dp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=de}},setLocked:function(de){P=de},setClear:function(de){$!==de&&(n.clearDepth(de),$=de)},reset:function(){P=!1,ve=null,fe=null,$=null}}}function o(){let P=!1,ve=null,fe=null,$=null,de=null,Ce=null,je=null,ot=null,Gt=null;return{setTest:function(et){P||(et?Le(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(et){ve!==et&&!P&&(n.stencilMask(et),ve=et)},setFunc:function(et,Tt,an){(fe!==et||$!==Tt||de!==an)&&(n.stencilFunc(et,Tt,an),fe=et,$=Tt,de=an)},setOp:function(et,Tt,an){(Ce!==et||je!==Tt||ot!==an)&&(n.stencilOp(et,Tt,an),Ce=et,je=Tt,ot=an)},setLocked:function(et){P=et},setClear:function(et){Gt!==et&&(n.clearStencil(et),Gt=et)},reset:function(){P=!1,ve=null,fe=null,$=null,de=null,Ce=null,je=null,ot=null,Gt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},M=new WeakMap,v=[],p=null,d=!1,b=null,y=null,T=null,w=null,U=null,C=null,Z=null,E=new Ze(0,0,0),A=0,ee=!1,oe=null,le=null,I=null,q=null,K=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ae=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(se)[1]),te=ae>=1):se.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),te=ae>=2);let N=null,G={};const _e=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Ee=new _t().fromArray(_e),ye=new _t().fromArray(xe);function ze(P,ve,fe,$){const de=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(P,Ce),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<fe;je++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ve+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Ce}const Ue={};Ue[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(n.DEPTH_TEST),l.setFunc(vs),ne(!1),X(_l),Le(n.CULL_FACE),B(kn);function Le(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Qe(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Ie(P,ve){return m[P]!==ve?(n.bindFramebuffer(P,ve),m[P]=ve,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function g(P,ve){let fe=v,$=!1;if(P)if(fe=M.get(ve),fe===void 0&&(fe=[],M.set(ve,fe)),P.isWebGLMultipleRenderTargets){const de=P.texture;if(fe.length!==de.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,je=de.length;Ce<je;Ce++)fe[Ce]=n.COLOR_ATTACHMENT0+Ce;fe.length=de.length,$=!0}}else fe[0]!==n.COLOR_ATTACHMENT0&&(fe[0]=n.COLOR_ATTACHMENT0,$=!0);else fe[0]!==n.BACK&&(fe[0]=n.BACK,$=!0);$&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function R(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const D={[oi]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};if(i)D[Ml]=n.MIN,D[Sl]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(D[Ml]=P.MIN_EXT,D[Sl]=P.MAX_EXT)}const O={[Yh]:n.ZERO,[jh]:n.ONE,[Kh]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[tp]:n.SRC_ALPHA_SATURATE,[Qh]:n.DST_COLOR,[Zh]:n.DST_ALPHA,[$h]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[ep]:n.ONE_MINUS_DST_COLOR,[Jh]:n.ONE_MINUS_DST_ALPHA,[np]:n.CONSTANT_COLOR,[ip]:n.ONE_MINUS_CONSTANT_COLOR,[rp]:n.CONSTANT_ALPHA,[sp]:n.ONE_MINUS_CONSTANT_ALPHA};function B(P,ve,fe,$,de,Ce,je,ot,Gt,et){if(P===kn){d===!0&&(Qe(n.BLEND),d=!1);return}if(d===!1&&(Le(n.BLEND),d=!0),P!==Wh){if(P!==b||et!==ee){if((y!==oi||U!==oi)&&(n.blendEquation(n.FUNC_ADD),y=oi,U=oi),et)switch(P){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFunc(n.ONE,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,w=null,C=null,Z=null,E.set(0,0,0),A=0,b=P,ee=et}return}de=de||ve,Ce=Ce||fe,je=je||$,(ve!==y||de!==U)&&(n.blendEquationSeparate(D[ve],D[de]),y=ve,U=de),(fe!==T||$!==w||Ce!==C||je!==Z)&&(n.blendFuncSeparate(O[fe],O[$],O[Ce],O[je]),T=fe,w=$,C=Ce,Z=je),(ot.equals(E)===!1||Gt!==A)&&(n.blendColor(ot.r,ot.g,ot.b,Gt),E.copy(ot),A=Gt),b=P,ee=!1}function ie(P,ve){P.side===bn?Qe(n.CULL_FACE):Le(n.CULL_FACE);let fe=P.side===Ut;ve&&(fe=!fe),ne(fe),P.blending===zi&&P.transparent===!1?B(kn):B(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const $=P.stencilWrite;c.setTest($),$&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),J(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Le(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(P){oe!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),oe=P)}function X(P){P!==Gh?(Le(n.CULL_FACE),P!==le&&(P===_l?n.cullFace(n.BACK):P===Vh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),le=P}function re(P){P!==I&&(te&&n.lineWidth(P),I=P)}function J(P,ve,fe){P?(Le(n.POLYGON_OFFSET_FILL),(q!==ve||K!==fe)&&(n.polygonOffset(ve,fe),q=ve,K=fe)):Qe(n.POLYGON_OFFSET_FILL)}function ge(P){P?Le(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function x(P){P===void 0&&(P=n.TEXTURE0+V-1),N!==P&&(n.activeTexture(P),N=P)}function _(P,ve,fe){fe===void 0&&(N===null?fe=n.TEXTURE0+V-1:fe=N);let $=G[fe];$===void 0&&($={type:void 0,texture:void 0},G[fe]=$),($.type!==P||$.texture!==ve)&&(N!==fe&&(n.activeTexture(fe),N=fe),n.bindTexture(P,ve||Ue[P]),$.type=P,$.texture=ve)}function L(){const P=G[N];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(P){Ee.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ee.copy(P))}function Re(P){ye.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ye.copy(P))}function Ae(P,ve){let fe=f.get(ve);fe===void 0&&(fe=new WeakMap,f.set(ve,fe));let $=fe.get(P);$===void 0&&($=n.getUniformBlockIndex(ve,P.name),fe.set(P,$))}function Se(P,ve){const $=f.get(ve).get(P);u.get(ve)!==$&&(n.uniformBlockBinding(ve,$,P.__bindingPointIndex),u.set(ve,$))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},N=null,G={},m={},M=new WeakMap,v=[],p=null,d=!1,b=null,y=null,T=null,w=null,U=null,C=null,Z=null,E=new Ze(0,0,0),A=0,ee=!1,oe=null,le=null,I=null,q=null,K=null,Ee.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Qe,bindFramebuffer:Ie,drawBuffers:g,useProgram:R,setBlending:B,setMaterial:ie,setFlipSided:ne,setCullFace:X,setLineWidth:re,setPolygonOffset:J,setScissorTest:ge,activeTexture:x,bindTexture:_,unbindTexture:L,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:ue,texImage3D:Ne,updateUBOMapping:Ae,uniformBlockBinding:Se,texStorage2D:we,texStorage3D:We,texSubImage2D:Q,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:be,viewport:Re,reset:qe}}function Hx(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let v;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(x,_){return d?new OffscreenCanvas(x,_):br("canvas")}function y(x,_,L,Y){let j=1;if((x.width>Y||x.height>Y)&&(j=Y/Math.max(x.width,x.height)),j<1||_===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const Q=_?Za:Math.floor,pe=Q(j*x.width),ce=Q(j*x.height);v===void 0&&(v=b(pe,ce));const me=L?b(pe,ce):v;return me.width=pe,me.height=ce,me.getContext("2d").drawImage(x,0,0,pe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+pe+"x"+ce+")."),me}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function T(x){return Zl(x.width)&&Zl(x.height)}function w(x){return a?!1:x.wrapS!==en||x.wrapT!==en||x.minFilter!==Mt&&x.minFilter!==kt}function U(x,_){return x.generateMipmaps&&_&&x.minFilter!==Mt&&x.minFilter!==kt}function C(x){n.generateMipmap(x)}function Z(x,_,L,Y,j=!1){if(a===!1)return _;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Q=_;if(_===n.RED&&(L===n.FLOAT&&(Q=n.R32F),L===n.HALF_FLOAT&&(Q=n.R16F),L===n.UNSIGNED_BYTE&&(Q=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.R8UI),L===n.UNSIGNED_SHORT&&(Q=n.R16UI),L===n.UNSIGNED_INT&&(Q=n.R32UI),L===n.BYTE&&(Q=n.R8I),L===n.SHORT&&(Q=n.R16I),L===n.INT&&(Q=n.R32I)),_===n.RG&&(L===n.FLOAT&&(Q=n.RG32F),L===n.HALF_FLOAT&&(Q=n.RG16F),L===n.UNSIGNED_BYTE&&(Q=n.RG8)),_===n.RGBA){const pe=j?xs:$e.getTransfer(Y);L===n.FLOAT&&(Q=n.RGBA32F),L===n.HALF_FLOAT&&(Q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Q=pe===nt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(x,_,L){return U(x,L)===!0||x.isFramebufferTexture&&x.minFilter!==Mt&&x.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function A(x){return x===Mt||x===El||x===Qs?n.NEAREST:n.LINEAR}function ee(x){const _=x.target;_.removeEventListener("dispose",ee),le(_),_.isVideoTexture&&M.delete(_)}function oe(x){const _=x.target;_.removeEventListener("dispose",oe),q(_)}function le(x){const _=i.get(x);if(_.__webglInit===void 0)return;const L=x.source,Y=p.get(L);if(Y){const j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&I(x),Object.keys(Y).length===0&&p.delete(L)}i.remove(x)}function I(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const L=x.source,Y=p.get(L);delete Y[_.__cacheKey],o.memory.textures--}function q(x){const _=x.texture,L=i.get(x),Y=i.get(_);if(Y.__webglTexture!==void 0&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(L.__webglFramebuffer[j]))for(let Q=0;Q<L.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(L.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(L.__webglFramebuffer[j]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[j])}else{if(Array.isArray(L.__webglFramebuffer))for(let j=0;j<L.__webglFramebuffer.length;j++)n.deleteFramebuffer(L.__webglFramebuffer[j]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let j=0;j<L.__webglColorRenderbuffer.length;j++)L.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[j]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let j=0,Q=_.length;j<Q;j++){const pe=i.get(_[j]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(_[j])}i.remove(_),i.remove(x)}let K=0;function V(){K=0}function te(){const x=K;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),K+=1,x}function ae(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function se(x,_){const L=i.get(x);if(x.isVideoTexture&&J(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const Y=x.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(L,x,_);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function N(x,_){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Le(L,x,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function G(x,_){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Le(L,x,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function _e(x,_){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Qe(L,x,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const xe={[Ya]:n.REPEAT,[en]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},Ee={[Mt]:n.NEAREST,[El]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[Mp]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},ye={[Ip]:n.NEVER,[Gp]:n.ALWAYS,[Np]:n.LESS,[Op]:n.LEQUAL,[Fp]:n.EQUAL,[Hp]:n.GEQUAL,[Bp]:n.GREATER,[zp]:n.NOTEQUAL};function ze(x,_,L){if(L?(n.texParameteri(x,n.TEXTURE_WRAP_S,xe[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,xe[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,xe[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Ee[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Ee[_.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==en||_.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,A(_.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==Mt&&_.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Mt||_.minFilter!==Qs&&_.minFilter!==yr||_.type===Hn&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(x,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Ue(x,_){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",ee));const Y=_.source;let j=p.get(Y);j===void 0&&(j={},p.set(Y,j));const Q=ae(_);if(Q!==x.__cacheKey){j[Q]===void 0&&(j[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[Q].usedTimes++;const pe=j[x.__cacheKey];pe!==void 0&&(j[x.__cacheKey].usedTimes--,pe.usedTimes===0&&I(_)),x.__cacheKey=Q,x.__webglTexture=j[Q].texture}return L}function Le(x,_,L){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const j=Ue(x,_),Q=_.source;t.bindTexture(Y,x.__webglTexture,n.TEXTURE0+L);const pe=i.get(Q);if(Q.version!==pe.__version||j===!0){t.activeTexture(n.TEXTURE0+L);const ce=$e.getPrimaries($e.workingColorSpace),me=_.colorSpace===Xt?null:$e.getPrimaries(_.colorSpace),we=_.colorSpace===Xt||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const We=w(_)&&T(_.image)===!1;let ue=y(_.image,We,!1,u);ue=ge(_,ue);const Ne=T(ue)||a,be=s.convert(_.format,_.colorSpace);let Re=s.convert(_.type),Ae=Z(_.internalFormat,be,Re,_.colorSpace,_.isVideoTexture);ze(Y,_,Ne);let Se;const qe=_.mipmaps,P=a&&_.isVideoTexture!==!0,ve=pe.__version===void 0||j===!0,fe=E(_,ue,Ne);if(_.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?_.type===Hn?Ae=n.DEPTH_COMPONENT32F:_.type===zn?Ae=n.DEPTH_COMPONENT24:_.type===fi?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:_.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===di&&Ae===n.DEPTH_COMPONENT&&_.type!==Ao&&_.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=zn,Re=s.convert(_.type)),_.format===Yi&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,_.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=fi,Re=s.convert(_.type))),ve&&(P?t.texStorage2D(n.TEXTURE_2D,1,Ae,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ue.width,ue.height,0,be,Re,null));else if(_.isDataTexture)if(qe.length>0&&Ne){P&&ve&&t.texStorage2D(n.TEXTURE_2D,fe,Ae,qe[0].width,qe[0].height);for(let $=0,de=qe.length;$<de;$++)Se=qe[$],P?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Se.width,Se.height,be,Re,Se.data):t.texImage2D(n.TEXTURE_2D,$,Ae,Se.width,Se.height,0,be,Re,Se.data);_.generateMipmaps=!1}else P?(ve&&t.texStorage2D(n.TEXTURE_2D,fe,Ae,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,be,Re,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ue.width,ue.height,0,be,Re,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ae,qe[0].width,qe[0].height,ue.depth);for(let $=0,de=qe.length;$<de;$++)Se=qe[$],_.format!==tn?be!==null?P?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,ue.depth,be,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ae,Se.width,Se.height,ue.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,ue.depth,be,Re,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Ae,Se.width,Se.height,ue.depth,0,be,Re,Se.data)}else{P&&ve&&t.texStorage2D(n.TEXTURE_2D,fe,Ae,qe[0].width,qe[0].height);for(let $=0,de=qe.length;$<de;$++)Se=qe[$],_.format!==tn?be!==null?P?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Se.width,Se.height,be,Re,Se.data):t.texImage2D(n.TEXTURE_2D,$,Ae,Se.width,Se.height,0,be,Re,Se.data)}else if(_.isDataArrayTexture)P?(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ae,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,Re,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ue.width,ue.height,ue.depth,0,be,Re,ue.data);else if(_.isData3DTexture)P?(ve&&t.texStorage3D(n.TEXTURE_3D,fe,Ae,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,Re,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ue.width,ue.height,ue.depth,0,be,Re,ue.data);else if(_.isFramebufferTexture){if(ve)if(P)t.texStorage2D(n.TEXTURE_2D,fe,Ae,ue.width,ue.height);else{let $=ue.width,de=ue.height;for(let Ce=0;Ce<fe;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ae,$,de,0,be,Re,null),$>>=1,de>>=1}}else if(qe.length>0&&Ne){P&&ve&&t.texStorage2D(n.TEXTURE_2D,fe,Ae,qe[0].width,qe[0].height);for(let $=0,de=qe.length;$<de;$++)Se=qe[$],P?t.texSubImage2D(n.TEXTURE_2D,$,0,0,be,Re,Se):t.texImage2D(n.TEXTURE_2D,$,Ae,be,Re,Se);_.generateMipmaps=!1}else P?(ve&&t.texStorage2D(n.TEXTURE_2D,fe,Ae,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Re,ue)):t.texImage2D(n.TEXTURE_2D,0,Ae,be,Re,ue);U(_,Ne)&&C(Y),pe.__version=Q.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Qe(x,_,L){if(_.image.length!==6)return;const Y=Ue(x,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+L);const Q=i.get(j);if(j.version!==Q.__version||Y===!0){t.activeTexture(n.TEXTURE0+L);const pe=$e.getPrimaries($e.workingColorSpace),ce=_.colorSpace===Xt?null:$e.getPrimaries(_.colorSpace),me=_.colorSpace===Xt||pe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,We=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!we&&!We?ue[$]=y(_.image[$],!1,!0,c):ue[$]=We?_.image[$].image:_.image[$],ue[$]=ge(_,ue[$]);const Ne=ue[0],be=T(Ne)||a,Re=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type),Se=Z(_.internalFormat,Re,Ae,_.colorSpace),qe=a&&_.isVideoTexture!==!0,P=Q.__version===void 0||Y===!0;let ve=E(_,Ne,be);ze(n.TEXTURE_CUBE_MAP,_,be);let fe;if(we){qe&&P&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Se,Ne.width,Ne.height);for(let $=0;$<6;$++){fe=ue[$].mipmaps;for(let de=0;de<fe.length;de++){const Ce=fe[de];_.format!==tn?Re!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Se,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,Ce.width,Ce.height,Re,Ae,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Se,Ce.width,Ce.height,0,Re,Ae,Ce.data)}}}else{fe=_.mipmaps,qe&&P&&(fe.length>0&&ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Se,ue[0].width,ue[0].height));for(let $=0;$<6;$++)if(We){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,Re,Ae,ue[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Se,ue[$].width,ue[$].height,0,Re,Ae,ue[$].data);for(let de=0;de<fe.length;de++){const je=fe[de].image[$].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,je.width,je.height,Re,Ae,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Se,je.width,je.height,0,Re,Ae,je.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Re,Ae,ue[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Se,Re,Ae,ue[$]);for(let de=0;de<fe.length;de++){const Ce=fe[de];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Re,Ae,Ce.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Se,Re,Ae,Ce.image[$])}}}U(_,be)&&C(n.TEXTURE_CUBE_MAP),Q.__version=j.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Ie(x,_,L,Y,j,Q){const pe=s.convert(L.format,L.colorSpace),ce=s.convert(L.type),me=Z(L.internalFormat,pe,ce,L.colorSpace);if(!i.get(_).__hasExternalTextures){const We=Math.max(1,_.width>>Q),ue=Math.max(1,_.height>>Q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Q,me,We,ue,_.depth,0,pe,ce,null):t.texImage2D(j,Q,me,We,ue,0,pe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),re(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,i.get(L).__webglTexture,0,X(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,i.get(L).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(x,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer&&!_.stencilBuffer){let Y=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(L||re(_)){const j=_.depthTexture;j&&j.isDepthTexture&&(j.type===Hn?Y=n.DEPTH_COMPONENT32F:j.type===zn&&(Y=n.DEPTH_COMPONENT24));const Q=X(_);re(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,Y,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,Y,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(_.depthBuffer&&_.stencilBuffer){const Y=X(_);L&&re(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,_.width,_.height):re(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const Y=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let j=0;j<Y.length;j++){const Q=Y[j],pe=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),me=Z(Q.internalFormat,pe,ce,Q.colorSpace),we=X(_);L&&re(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,me,_.width,_.height):re(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function R(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),se(_.depthTexture,0);const Y=i.get(_.depthTexture).__webglTexture,j=X(_);if(_.depthTexture.format===di)re(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(_.depthTexture.format===Yi)re(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function D(x){const _=i.get(x),L=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");R(_.__webglFramebuffer,x)}else if(L){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]=n.createRenderbuffer(),g(_.__webglDepthbuffer[Y],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),g(_.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(x,_,L){const Y=i.get(x);_!==void 0&&Ie(Y.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&D(x)}function B(x){const _=x.texture,L=i.get(x),Y=i.get(_);x.addEventListener("dispose",oe),x.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++);const j=x.isWebGLCubeRenderTarget===!0,Q=x.isWebGLMultipleRenderTargets===!0,pe=T(x)||a;if(j){L.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ce]=[];for(let me=0;me<_.mipmaps.length;me++)L.__webglFramebuffer[ce][me]=n.createFramebuffer()}else L.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)L.__webglFramebuffer[ce]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Q)if(r.drawBuffers){const ce=x.texture;for(let me=0,we=ce.length;me<we;me++){const We=i.get(ce[me]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&re(x)===!1){const ce=Q?_:[_];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const we=ce[me];L.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[me]);const We=s.convert(we.format,we.colorSpace),ue=s.convert(we.type),Ne=Z(we.internalFormat,We,ue,we.colorSpace,x.isXRRenderTarget===!0),be=X(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Ne,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,L.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),g(L.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(n.TEXTURE_CUBE_MAP,_,pe);for(let ce=0;ce<6;ce++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Ie(L.__webglFramebuffer[ce][me],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else Ie(L.__webglFramebuffer[ce],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);U(_,pe)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ce=x.texture;for(let me=0,we=ce.length;me<we;me++){const We=ce[me],ue=i.get(We);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),ze(n.TEXTURE_2D,We,pe),Ie(L.__webglFramebuffer,x,We,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),U(We,pe)&&C(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?ce=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Y.__webglTexture),ze(ce,_,pe),a&&_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Ie(L.__webglFramebuffer[me],x,_,n.COLOR_ATTACHMENT0,ce,me);else Ie(L.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,ce,0);U(_,pe)&&C(ce),t.unbindTexture()}x.depthBuffer&&D(x)}function ie(x){const _=T(x)||a,L=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Y=0,j=L.length;Y<j;Y++){const Q=L[Y];if(U(Q,_)){const pe=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(Q).__webglTexture;t.bindTexture(pe,ce),C(pe),t.unbindTexture()}}}function ne(x){if(a&&x.samples>0&&re(x)===!1){const _=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],L=x.width,Y=x.height;let j=n.COLOR_BUFFER_BIT;const Q=[],pe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(x),me=x.isWebGLMultipleRenderTargets===!0;if(me)for(let we=0;we<_.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let we=0;we<_.length;we++){Q.push(n.COLOR_ATTACHMENT0+we),x.depthBuffer&&Q.push(pe);const We=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(We===!1&&(x.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[we]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),me){const ue=i.get(_[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,L,Y,0,0,L,Y,j,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<_.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ce.__webglColorRenderbuffer[we]);const We=i.get(_[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function X(x){return Math.min(f,x.samples)}function re(x){const _=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function J(x){const _=o.render.frame;M.get(x)!==_&&(M.set(x,_),x.update())}function ge(x,_){const L=x.colorSpace,Y=x.format,j=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Ka||L!==Rn&&L!==Xt&&($e.getTransfer(L)===nt?a===!1?e.has("EXT_sRGB")===!0&&Y===tn?(x.format=Ka,x.minFilter=kt,x.generateMipmaps=!1):_=Du.sRGBToLinear(_):(Y!==tn||j!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}this.allocateTextureUnit=te,this.resetTextureUnits=V,this.setTexture2D=se,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=_e,this.rebindTextures=O,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=re}function Gx(n,e,t){const i=t.isWebGL2;function r(s,o=Xt){let a;const l=$e.getTransfer(o);if(s===Xn)return n.UNSIGNED_BYTE;if(s===Au)return n.UNSIGNED_SHORT_4_4_4_4;if(s===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Sp)return n.BYTE;if(s===Ep)return n.SHORT;if(s===Ao)return n.UNSIGNED_SHORT;if(s===bu)return n.INT;if(s===zn)return n.UNSIGNED_INT;if(s===Hn)return n.FLOAT;if(s===Tr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yp)return n.ALPHA;if(s===tn)return n.RGBA;if(s===Tp)return n.LUMINANCE;if(s===bp)return n.LUMINANCE_ALPHA;if(s===di)return n.DEPTH_COMPONENT;if(s===Yi)return n.DEPTH_STENCIL;if(s===Ka)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ap)return n.RED;if(s===Ru)return n.RED_INTEGER;if(s===wp)return n.RG;if(s===Cu)return n.RG_INTEGER;if(s===Pu)return n.RGBA_INTEGER;if(s===ea||s===ta||s===na||s===ia)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yl||s===Tl||s===bl||s===Al)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wl||s===Rl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wl)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Rl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cl||s===Pl||s===Ll||s===Ul||s===Dl||s===Il||s===Nl||s===Fl||s===Ol||s===Bl||s===zl||s===Hl||s===Gl||s===Vl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Cl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ll)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ul)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Il)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ol)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ra||s===kl||s===Wl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ra)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cp||s===Xl||s===ql||s===Yl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ra)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Xl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ql)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Vx extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class as extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kx={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,M=.005;c.inputState.pinching&&h>m+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new as;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Wx extends Dt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:di,u!==di&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===di&&(i=zn),i===void 0&&u===Yi&&(i=fi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xx extends Ji{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,M=null;const v=t.getContextAttributes();let p=null,d=null;const b=[],y=[],T=new zt;T.layers.enable(1),T.viewport=new _t;const w=new zt;w.layers.enable(2),w.viewport=new _t;const U=[T,w],C=new Vx;C.layers.enable(1),C.layers.enable(2);let Z=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=b[N];return G===void 0&&(G=new Ca,b[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=b[N];return G===void 0&&(G=new Ca,b[N]=G),G.getGripSpace()},this.getHand=function(N){let G=b[N];return G===void 0&&(G=new Ca,b[N]=G),G.getHandSpace()};function A(N){const G=y.indexOf(N.inputSource);if(G===-1)return;const _e=b[G];_e!==void 0&&(_e.update(N.inputSource,N.frame,c||o),_e.dispatchEvent({type:N.type,data:N.inputSource}))}function ee(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",oe);for(let N=0;N<b.length;N++){const G=y[N];G!==null&&(y[N]=null,b[N].disconnect(G))}Z=null,E=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,d=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",oe),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:m}),d=new mi(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let G=null,_e=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=v.stencil?Yi:di,_e=v.stencil?fi:zn);const Ee={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),d=new mi(h.textureWidth,h.textureHeight,{format:tn,type:Xn,depthTexture:new Wx(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ye=e.properties.get(d);ye.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function oe(N){for(let G=0;G<N.removed.length;G++){const _e=N.removed[G],xe=y.indexOf(_e);xe>=0&&(y[xe]=null,b[xe].disconnect(_e))}for(let G=0;G<N.added.length;G++){const _e=N.added[G];let xe=y.indexOf(_e);if(xe===-1){for(let ye=0;ye<b.length;ye++)if(ye>=y.length){y.push(_e),xe=ye;break}else if(y[ye]===null){y[ye]=_e,xe=ye;break}if(xe===-1)break}const Ee=b[xe];Ee&&Ee.connect(_e)}}const le=new z,I=new z;function q(N,G,_e){le.setFromMatrixPosition(G.matrixWorld),I.setFromMatrixPosition(_e.matrixWorld);const xe=le.distanceTo(I),Ee=G.projectionMatrix.elements,ye=_e.projectionMatrix.elements,ze=Ee[14]/(Ee[10]-1),Ue=Ee[14]/(Ee[10]+1),Le=(Ee[9]+1)/Ee[5],Qe=(Ee[9]-1)/Ee[5],Ie=(Ee[8]-1)/Ee[0],g=(ye[8]+1)/ye[0],R=ze*Ie,D=ze*g,O=xe/(-Ie+g),B=O*-Ie;G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(B),N.translateZ(O),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const ie=ze+O,ne=Ue+O,X=R-B,re=D+(xe-B),J=Le*Ue/ne*ie,ge=Qe*Ue/ne*ie;N.projectionMatrix.makePerspective(X,re,J,ge,ie,ne),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function K(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;C.near=w.near=T.near=N.near,C.far=w.far=T.far=N.far,(Z!==C.near||E!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),Z=C.near,E=C.far);const G=N.parent,_e=C.cameras;K(C,G);for(let xe=0;xe<_e.length;xe++)K(_e[xe],G);_e.length===2?q(C,T,w):C.projectionMatrix.copy(T.projectionMatrix),V(N,C,G)};function V(N,G,_e){_e===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(_e.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=$a*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let te=null;function ae(N,G){if(u=G.getViewerPose(c||o),M=G,u!==null){const _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let xe=!1;_e.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ee=0;Ee<_e.length;Ee++){const ye=_e[Ee];let ze=null;if(m!==null)ze=m.getViewport(ye);else{const Le=f.getViewSubImage(h,ye);ze=Le.viewport,Ee===0&&(e.setRenderTargetTextures(d,Le.colorTexture,h.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(d))}let Ue=U[Ee];Ue===void 0&&(Ue=new zt,Ue.layers.enable(Ee),Ue.viewport=new _t,U[Ee]=Ue),Ue.matrix.fromArray(ye.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(ye.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ze.x,ze.y,ze.width,ze.height),Ee===0&&(C.matrix.copy(Ue.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(Ue)}}for(let _e=0;_e<b.length;_e++){const xe=y[_e],Ee=b[_e];xe!==null&&Ee!==void 0&&Ee.update(xe,G,c||o)}te&&te(N,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),M=null}const se=new Wu;se.setAnimationLoop(ae),this.setAnimationLoop=function(N){te=N},this.dispose=function(){}}}function qx(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Hu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,y,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,T)):d.isMeshMatcapMaterial?(s(p,d),M(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ut&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ut&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yx(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,y){const T=y.program;i.uniformBlockBinding(b,T)}function c(b,y){let T=r[b.id];T===void 0&&(M(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",p));const w=y.program;i.updateUBOMapping(b,w);const U=e.render.frame;s[b.id]!==U&&(h(b),s[b.id]=U)}function u(b){const y=f();b.__bindingPointIndex=y;const T=n.createBuffer(),w=b.__size,U=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=r[b.id],T=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let U=0,C=T.length;U<C;U++){const Z=T[U];if(m(Z,U,w)===!0){const E=Z.__offset,A=Array.isArray(Z.value)?Z.value:[Z.value];let ee=0;for(let oe=0;oe<A.length;oe++){const le=A[oe],I=v(le);typeof le=="number"?(Z.__data[0]=le,n.bufferSubData(n.UNIFORM_BUFFER,E+ee,Z.__data)):le.isMatrix3?(Z.__data[0]=le.elements[0],Z.__data[1]=le.elements[1],Z.__data[2]=le.elements[2],Z.__data[3]=le.elements[0],Z.__data[4]=le.elements[3],Z.__data[5]=le.elements[4],Z.__data[6]=le.elements[5],Z.__data[7]=le.elements[0],Z.__data[8]=le.elements[6],Z.__data[9]=le.elements[7],Z.__data[10]=le.elements[8],Z.__data[11]=le.elements[0]):(le.toArray(Z.__data,ee),ee+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,Z.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,T){const w=b.value;if(T[y]===void 0){if(typeof w=="number")T[y]=w;else{const U=Array.isArray(w)?w:[w],C=[];for(let Z=0;Z<U.length;Z++)C.push(U[Z].clone());T[y]=C}return!0}else if(typeof w=="number"){if(T[y]!==w)return T[y]=w,!0}else{const U=Array.isArray(T[y])?T[y]:[T[y]],C=Array.isArray(w)?w:[w];for(let Z=0;Z<U.length;Z++){const E=U[Z];if(E.equals(C[Z])===!1)return E.copy(C[Z]),!0}}return!1}function M(b){const y=b.uniforms;let T=0;const w=16;let U=0;for(let C=0,Z=y.length;C<Z;C++){const E=y[C],A={boundary:0,storage:0},ee=Array.isArray(E.value)?E.value:[E.value];for(let oe=0,le=ee.length;oe<le;oe++){const I=ee[oe],q=v(I);A.boundary+=q.boundary,A.storage+=q.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,C>0){U=T%w;const oe=w-U;U!==0&&oe-A.boundary<0&&(T+=w-U,E.__offset=T)}T+=A.storage}return U=T%w,U>0&&(T+=w-U),b.__size=T,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Lo{constructor(e={}){const{canvas:t=kp(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),M=new Int32Array(4);let v=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const y=this;let T=!1,w=0,U=0,C=null,Z=-1,E=null;const A=new _t,ee=new _t;let oe=null;const le=new Ze(0);let I=0,q=t.width,K=t.height,V=1,te=null,ae=null;const se=new _t(0,0,q,K),N=new _t(0,0,q,K);let G=!1;const _e=new ku;let xe=!1,Ee=!1,ye=null;const ze=new gt,Ue=new Je,Le=new z,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return C===null?V:1}let g=i;function R(S,F){for(let H=0;H<S.length;H++){const k=S[H],W=t.getContext(k,F);if(W!==null)return W}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bo}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ve,!1),g===null){const F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),g=R(F,S),g===null)throw R(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let D,O,B,ie,ne,X,re,J,ge,x,_,L,Y,j,Q,pe,ce,me,we,We,ue,Ne,be,Re;function Ae(){D=new iv(g),O=new $g(g,D,e),D.init(O),Ne=new Gx(g,D,O),B=new zx(g,D,O),ie=new av(g),ne=new bx,X=new Hx(g,D,B,ne,O,Ne,ie),re=new Jg(y),J=new nv(y),ge=new mm(g,O),be=new jg(g,D,ge,O),x=new rv(g,ge,ie,be),_=new uv(g,x,ge,ie),we=new cv(g,O,X),pe=new Zg(ne),L=new Tx(y,re,J,D,O,be,pe),Y=new qx(y,ne),j=new wx,Q=new Dx(D,O),me=new Yg(y,re,J,B,_,h,l),ce=new Bx(y,_,O),Re=new Yx(g,ie,O,B),We=new Kg(g,D,ie,O),ue=new sv(g,D,ie,O),ie.programs=L.programs,y.capabilities=O,y.extensions=D,y.properties=ne,y.renderLists=j,y.shadowMap=ce,y.state=B,y.info=ie}Ae();const Se=new Xx(y,g);this.xr=Se,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const S=D.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=D.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(q,K,!1))},this.getSize=function(S){return S.set(q,K)},this.setSize=function(S,F,H=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,K=F,t.width=Math.floor(S*V),t.height=Math.floor(F*V),H===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(q*V,K*V).floor()},this.setDrawingBufferSize=function(S,F,H){q=S,K=F,V=H,t.width=Math.floor(S*H),t.height=Math.floor(F*H),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(se)},this.setViewport=function(S,F,H,k){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,F,H,k),B.viewport(A.copy(se).multiplyScalar(V).floor())},this.getScissor=function(S){return S.copy(N)},this.setScissor=function(S,F,H,k){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,F,H,k),B.scissor(ee.copy(N).multiplyScalar(V).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(S){B.setScissorTest(G=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){ae=S},this.getClearColor=function(S){return S.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(S=!0,F=!0,H=!0){let k=0;if(S){let W=!1;if(C!==null){const Me=C.texture.format;W=Me===Pu||Me===Cu||Me===Ru}if(W){const Me=C.texture.type,Te=Me===Xn||Me===zn||Me===Ao||Me===fi||Me===Au||Me===wu,Pe=me.getClearColor(),De=me.getClearAlpha(),Ge=Pe.r,Fe=Pe.g,Be=Pe.b;Te?(m[0]=Ge,m[1]=Fe,m[2]=Be,m[3]=De,g.clearBufferuiv(g.COLOR,0,m)):(M[0]=Ge,M[1]=Fe,M[2]=Be,M[3]=De,g.clearBufferiv(g.COLOR,0,M))}else k|=g.COLOR_BUFFER_BIT}F&&(k|=g.DEPTH_BUFFER_BIT),H&&(k|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),j.dispose(),Q.dispose(),ne.dispose(),re.dispose(),J.dispose(),_.dispose(),be.dispose(),Re.dispose(),L.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Gt),Se.removeEventListener("sessionend",et),ye&&(ye.dispose(),ye=null),Tt.stop()};function qe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=ie.autoReset,F=ce.enabled,H=ce.autoUpdate,k=ce.needsUpdate,W=ce.type;Ae(),ie.autoReset=S,ce.enabled=F,ce.autoUpdate=H,ce.needsUpdate=k,ce.type=W}function ve(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){const F=S.target;F.removeEventListener("dispose",fe),$(F)}function $(S){de(S),ne.remove(S)}function de(S){const F=ne.get(S).programs;F!==void 0&&(F.forEach(function(H){L.releaseProgram(H)}),S.isShaderMaterial&&L.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,H,k,W,Me){F===null&&(F=Qe);const Te=W.isMesh&&W.matrixWorld.determinant()<0,Pe=rf(S,F,H,k,W);B.setMaterial(k,Te);let De=H.index,Ge=1;if(k.wireframe===!0){if(De=x.getWireframeAttribute(H),De===void 0)return;Ge=2}const Fe=H.drawRange,Be=H.attributes.position;let st=Fe.start*Ge,Nt=(Fe.start+Fe.count)*Ge;Me!==null&&(st=Math.max(st,Me.start*Ge),Nt=Math.min(Nt,(Me.start+Me.count)*Ge)),De!==null?(st=Math.max(st,0),Nt=Math.min(Nt,De.count)):Be!=null&&(st=Math.max(st,0),Nt=Math.min(Nt,Be.count));const dt=Nt-st;if(dt<0||dt===1/0)return;be.setup(W,k,Pe,H,De);let gn,rt=We;if(De!==null&&(gn=ge.get(De),rt=ue,rt.setIndex(gn)),W.isMesh)k.wireframe===!0?(B.setLineWidth(k.wireframeLinewidth*Ie()),rt.setMode(g.LINES)):rt.setMode(g.TRIANGLES);else if(W.isLine){let Xe=k.linewidth;Xe===void 0&&(Xe=1),B.setLineWidth(Xe*Ie()),W.isLineSegments?rt.setMode(g.LINES):W.isLineLoop?rt.setMode(g.LINE_LOOP):rt.setMode(g.LINE_STRIP)}else W.isPoints?rt.setMode(g.POINTS):W.isSprite&&rt.setMode(g.TRIANGLES);if(W.isInstancedMesh)rt.renderInstances(st,dt,W.count);else if(H.isInstancedBufferGeometry){const Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Gs=Math.min(H.instanceCount,Xe);rt.renderInstances(st,dt,Gs)}else rt.render(st,dt)};function Ce(S,F,H){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=Ut,S.needsUpdate=!0,Lr(S,F,H),S.side=Yn,S.needsUpdate=!0,Lr(S,F,H),S.side=bn):Lr(S,F,H)}this.compile=function(S,F,H=null){H===null&&(H=S),p=Q.get(H),p.init(),b.push(p),H.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),S!==H&&S.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(y._useLegacyLights);const k=new Set;return S.traverse(function(W){const Me=W.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const Pe=Me[Te];Ce(Pe,H,W),k.add(Pe)}else Ce(Me,H,W),k.add(Me)}),b.pop(),p=null,k},this.compileAsync=function(S,F,H=null){const k=this.compile(S,F,H);return new Promise(W=>{function Me(){if(k.forEach(function(Te){ne.get(Te).currentProgram.isReady()&&k.delete(Te)}),k.size===0){W(S);return}setTimeout(Me,10)}D.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let je=null;function ot(S){je&&je(S)}function Gt(){Tt.stop()}function et(){Tt.start()}const Tt=new Wu;Tt.setAnimationLoop(ot),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(S){je=S,Se.setAnimationLoop(S),S===null?Tt.stop():Tt.start()},Se.addEventListener("sessionstart",Gt),Se.addEventListener("sessionend",et),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(F),F=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,F,C),p=Q.get(S,b.length),p.init(),b.push(p),ze.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),_e.setFromProjectionMatrix(ze),Ee=this.localClippingEnabled,xe=pe.init(this.clippingPlanes,Ee),v=j.get(S,d.length),v.init(),d.push(v),an(S,F,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(te,ae),this.info.render.frame++,xe===!0&&pe.beginShadows();const H=p.state.shadowsArray;if(ce.render(H,S,F),xe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(v,S),p.setupLights(y._useLegacyLights),F.isArrayCamera){const k=F.cameras;for(let W=0,Me=k.length;W<Me;W++){const Te=k[W];Io(v,S,Te,Te.viewport)}}else Io(v,S,F);C!==null&&(X.updateMultisampleRenderTarget(C),X.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(y,S,F),be.resetDefaultState(),Z=-1,E=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function an(S,F,H,k){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||_e.intersectsSprite(S)){k&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ze);const Te=_.update(S),Pe=S.material;Pe.visible&&v.push(S,Te,Pe,H,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||_e.intersectsObject(S))){const Te=_.update(S),Pe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Le.copy(Te.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(ze)),Array.isArray(Pe)){const De=Te.groups;for(let Ge=0,Fe=De.length;Ge<Fe;Ge++){const Be=De[Ge],st=Pe[Be.materialIndex];st&&st.visible&&v.push(S,Te,st,H,Le.z,Be)}}else Pe.visible&&v.push(S,Te,Pe,H,Le.z,null)}}const Me=S.children;for(let Te=0,Pe=Me.length;Te<Pe;Te++)an(Me[Te],F,H,k)}function Io(S,F,H,k){const W=S.opaque,Me=S.transmissive,Te=S.transparent;p.setupLightsView(H),xe===!0&&pe.setGlobalState(y.clippingPlanes,H),Me.length>0&&nf(W,Me,F,H),k&&B.viewport(A.copy(k)),W.length>0&&Pr(W,F,H),Me.length>0&&Pr(Me,F,H),Te.length>0&&Pr(Te,F,H),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function nf(S,F,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const Me=O.isWebGL2;ye===null&&(ye=new mi(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?Tr:Xn,minFilter:yr,samples:Me?4:0})),y.getDrawingBufferSize(Ue),Me?ye.setSize(Ue.x,Ue.y):ye.setSize(Za(Ue.x),Za(Ue.y));const Te=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(le),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const Pe=y.toneMapping;y.toneMapping=Wn,Pr(S,H,k),X.updateMultisampleRenderTarget(ye),X.updateRenderTargetMipmap(ye);let De=!1;for(let Ge=0,Fe=F.length;Ge<Fe;Ge++){const Be=F[Ge],st=Be.object,Nt=Be.geometry,dt=Be.material,gn=Be.group;if(dt.side===bn&&st.layers.test(k.layers)){const rt=dt.side;dt.side=Ut,dt.needsUpdate=!0,No(st,H,k,Nt,dt,gn),dt.side=rt,dt.needsUpdate=!0,De=!0}}De===!0&&(X.updateMultisampleRenderTarget(ye),X.updateRenderTargetMipmap(ye)),y.setRenderTarget(Te),y.setClearColor(le,I),y.toneMapping=Pe}function Pr(S,F,H){const k=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Me=S.length;W<Me;W++){const Te=S[W],Pe=Te.object,De=Te.geometry,Ge=k===null?Te.material:k,Fe=Te.group;Pe.layers.test(H.layers)&&No(Pe,F,H,De,Ge,Fe)}}function No(S,F,H,k,W,Me){S.onBeforeRender(y,F,H,k,W,Me),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(y,F,H,k,S,Me),W.transparent===!0&&W.side===bn&&W.forceSinglePass===!1?(W.side=Ut,W.needsUpdate=!0,y.renderBufferDirect(H,F,k,W,S,Me),W.side=Yn,W.needsUpdate=!0,y.renderBufferDirect(H,F,k,W,S,Me),W.side=bn):y.renderBufferDirect(H,F,k,W,S,Me),S.onAfterRender(y,F,H,k,W,Me)}function Lr(S,F,H){F.isScene!==!0&&(F=Qe);const k=ne.get(S),W=p.state.lights,Me=p.state.shadowsArray,Te=W.state.version,Pe=L.getParameters(S,W.state,Me,F,H),De=L.getProgramCacheKey(Pe);let Ge=k.programs;k.environment=S.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(S.isMeshStandardMaterial?J:re).get(S.envMap||k.environment),Ge===void 0&&(S.addEventListener("dispose",fe),Ge=new Map,k.programs=Ge);let Fe=Ge.get(De);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===Te)return Oo(S,Pe),Fe}else Pe.uniforms=L.getUniforms(S),S.onBuild(H,Pe,y),S.onBeforeCompile(Pe,y),Fe=L.acquireProgram(Pe,De),Ge.set(De,Fe),k.uniforms=Pe.uniforms;const Be=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=pe.uniform),Oo(S,Pe),k.needsLights=af(S),k.lightsStateVersion=Te,k.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),k.currentProgram=Fe,k.uniformsList=null,Fe}function Fo(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=ds.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Oo(S,F){const H=ne.get(S);H.outputColorSpace=F.outputColorSpace,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function rf(S,F,H,k,W){F.isScene!==!0&&(F=Qe),X.resetTextureUnits();const Me=F.fog,Te=k.isMeshStandardMaterial?F.environment:null,Pe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rn,De=(k.isMeshStandardMaterial?J:re).get(k.envMap||Te),Ge=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Be=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,Nt=!!H.morphAttributes.color;let dt=Wn;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=y.toneMapping);const gn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=gn!==void 0?gn.length:0,Xe=ne.get(k),Gs=p.state.lights;if(xe===!0&&(Ee===!0||S!==E)){const Ft=S===E&&k.id===Z;pe.setState(k,S,Ft)}let lt=!1;k.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Gs.state.version||Xe.outputColorSpace!==Pe||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||Xe.envMap!==De||k.fog===!0&&Xe.fog!==Me||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==pe.numPlanes||Xe.numIntersection!==pe.numIntersection)||Xe.vertexAlphas!==Ge||Xe.vertexTangents!==Fe||Xe.morphTargets!==Be||Xe.morphNormals!==st||Xe.morphColors!==Nt||Xe.toneMapping!==dt||O.isWebGL2===!0&&Xe.morphTargetsCount!==rt)&&(lt=!0):(lt=!0,Xe.__version=k.version);let Kn=Xe.currentProgram;lt===!0&&(Kn=Lr(k,F,W));let Bo=!1,tr=!1,Vs=!1;const bt=Kn.getUniforms(),$n=Xe.uniforms;if(B.useProgram(Kn.program)&&(Bo=!0,tr=!0,Vs=!0),k.id!==Z&&(Z=k.id,tr=!0),Bo||E!==S){bt.setValue(g,"projectionMatrix",S.projectionMatrix),bt.setValue(g,"viewMatrix",S.matrixWorldInverse);const Ft=bt.map.cameraPosition;Ft!==void 0&&Ft.setValue(g,Le.setFromMatrixPosition(S.matrixWorld)),O.logarithmicDepthBuffer&&bt.setValue(g,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&bt.setValue(g,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,tr=!0,Vs=!0)}if(W.isSkinnedMesh){bt.setOptional(g,W,"bindMatrix"),bt.setOptional(g,W,"bindMatrixInverse");const Ft=W.skeleton;Ft&&(O.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),bt.setValue(g,"boneTexture",Ft.boneTexture,X),bt.setValue(g,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ks=H.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0&&O.isWebGL2===!0)&&we.update(W,H,Kn),(tr||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,bt.setValue(g,"receiveShadow",W.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&($n.envMap.value=De,$n.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),tr&&(bt.setValue(g,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&sf($n,Vs),Me&&k.fog===!0&&Y.refreshFogUniforms($n,Me),Y.refreshMaterialUniforms($n,k,V,K,ye),ds.upload(g,Fo(Xe),$n,X)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ds.upload(g,Fo(Xe),$n,X),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&bt.setValue(g,"center",W.center),bt.setValue(g,"modelViewMatrix",W.modelViewMatrix),bt.setValue(g,"normalMatrix",W.normalMatrix),bt.setValue(g,"modelMatrix",W.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ft=k.uniformsGroups;for(let Ws=0,of=Ft.length;Ws<of;Ws++)if(O.isWebGL2){const zo=Ft[Ws];Re.update(zo,Kn),Re.bind(zo,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function sf(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function af(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,F,H){ne.get(S.texture).__webglTexture=F,ne.get(S.depthTexture).__webglTexture=H;const k=ne.get(S);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=H===void 0,k.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){const H=ne.get(S);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,H=0){C=S,w=F,U=H;let k=!0,W=null,Me=!1,Te=!1;if(S){const De=ne.get(S);De.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(g.FRAMEBUFFER,null),k=!1):De.__webglFramebuffer===void 0?X.setupRenderTarget(S):De.__hasExternalTextures&&X.rebindTextures(S,ne.get(S.texture).__webglTexture,ne.get(S.depthTexture).__webglTexture);const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const Fe=ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?W=Fe[F][H]:W=Fe[F],Me=!0):O.isWebGL2&&S.samples>0&&X.useMultisampledRTT(S)===!1?W=ne.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[H]:W=Fe,A.copy(S.viewport),ee.copy(S.scissor),oe=S.scissorTest}else A.copy(se).multiplyScalar(V).floor(),ee.copy(N).multiplyScalar(V).floor(),oe=G;if(B.bindFramebuffer(g.FRAMEBUFFER,W)&&O.drawBuffers&&k&&B.drawBuffers(S,W),B.viewport(A),B.scissor(ee),B.setScissorTest(oe),Me){const De=ne.get(S.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,H)}else if(Te){const De=ne.get(S.texture),Ge=F||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,De.__webglTexture,H||0,Ge)}Z=-1},this.readRenderTargetPixels=function(S,F,H,k,W,Me,Te){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){B.bindFramebuffer(g.FRAMEBUFFER,Pe);try{const De=S.texture,Ge=De.format,Fe=De.type;if(Ge!==tn&&Ne.convert(Ge)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===Tr&&(D.has("EXT_color_buffer_half_float")||O.isWebGL2&&D.has("EXT_color_buffer_float"));if(Fe!==Xn&&Ne.convert(Fe)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Hn&&(O.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-k&&H>=0&&H<=S.height-W&&g.readPixels(F,H,k,W,Ne.convert(Ge),Ne.convert(Fe),Me)}finally{const De=C!==null?ne.get(C).__webglFramebuffer:null;B.bindFramebuffer(g.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(S,F,H=0){const k=Math.pow(2,-H),W=Math.floor(F.image.width*k),Me=Math.floor(F.image.height*k);X.setTexture2D(F,0),g.copyTexSubImage2D(g.TEXTURE_2D,H,0,0,S.x,S.y,W,Me),B.unbindTexture()},this.copyTextureToTexture=function(S,F,H,k=0){const W=F.image.width,Me=F.image.height,Te=Ne.convert(H.format),Pe=Ne.convert(H.type);X.setTexture2D(H,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,H.unpackAlignment),F.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,k,S.x,S.y,W,Me,Te,Pe,F.image.data):F.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,k,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Te,F.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,k,S.x,S.y,Te,Pe,F.image),k===0&&H.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(S,F,H,k,W=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=S.max.x-S.min.x+1,Te=S.max.y-S.min.y+1,Pe=S.max.z-S.min.z+1,De=Ne.convert(k.format),Ge=Ne.convert(k.type);let Fe;if(k.isData3DTexture)X.setTexture3D(k,0),Fe=g.TEXTURE_3D;else if(k.isDataArrayTexture)X.setTexture2DArray(k,0),Fe=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,k.unpackAlignment);const Be=g.getParameter(g.UNPACK_ROW_LENGTH),st=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Nt=g.getParameter(g.UNPACK_SKIP_PIXELS),dt=g.getParameter(g.UNPACK_SKIP_ROWS),gn=g.getParameter(g.UNPACK_SKIP_IMAGES),rt=H.isCompressedTexture?H.mipmaps[0]:H.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,rt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,rt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,S.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,S.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?g.texSubImage3D(Fe,W,F.x,F.y,F.z,Me,Te,Pe,De,Ge,rt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(Fe,W,F.x,F.y,F.z,Me,Te,Pe,De,rt.data)):g.texSubImage3D(Fe,W,F.x,F.y,F.z,Me,Te,Pe,De,Ge,rt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Be),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Nt),g.pixelStorei(g.UNPACK_SKIP_ROWS,dt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,gn),W===0&&k.generateMipmaps&&g.generateMipmap(Fe),B.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),B.unbindTexture()},this.resetState=function(){w=0,U=0,C=null,B.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wo?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Fs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?hi:Lu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hi?mt:Rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jx extends Lo{}jx.prototype.isWebGL1Renderer=!0;class Ku extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Uo extends jn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,h=new z,m=[],M=[],v=[],p=[];for(let d=0;d<=i;d++){const b=[],y=d/i;let T=0;d===0&&o===0?T=.5/t:d===i&&l===Math.PI&&(T=-.5/t);for(let w=0;w<=t;w++){const U=w/t;f.x=-e*Math.cos(r+U*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+U*s)*Math.sin(o+y*a),M.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),p.push(U+T,1-y),b.push(c++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){const y=u[d][b+1],T=u[d][b],w=u[d+1][b],U=u[d+1][b+1];(d!==0||o>0)&&m.push(y,T,U),(d!==i-1||l<Math.PI)&&m.push(T,w,U)}this.setIndex(m),this.setAttribute("position",new mn(M,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Fc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Kx{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],M=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return M}return null}}}const $x=new Kx;class Do{constructor(e){this.manager=e!==void 0?e:$x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Do.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zx extends Do{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=br("img");function l(){u(),Fc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Jx extends Do{constructor(e){super(e)}load(e,t,i,r){const s=new Dt,o=new Zx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);let Qa,hs,eo,_r,Ar;document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("characterContainer"),e=document.getElementById("contactButton");Qa=new Ku,hs=new zt(75,1,.1,1e3),eo=new Lo({canvas:n,alpha:!0}),eo.setSize(280,280);const t=new Uo(3,32,32),i=new Jx().load("../test4.png");i.magFilter=Mt;const r=new zs({map:i});r.map.repeat.set(1,1),r.map.offset.set(-.05,-.05),_r=new hn(t,r),Qa.add(_r),_r.position.set(0,0,0),hs.rotation.y=Math.PI,hs.position.set(0,0,-5),document.addEventListener("mousemove",Qx,!1),Ar=new Je,$u(.05),e.addEventListener("click",e0)});function Qx(n){Ar.x=n.clientX/260*2-1,Ar.y=-(n.clientY/260)*2+1}function $u(n){requestAnimationFrame(()=>$u(n)),_r.rotation.x=Ar.y*n*Math.PI,_r.rotation.y=Ar.x*n*Math.PI,eo.render(Qa,hs)}function e0(){window.scrollTo(0,document.body.scrollHeight),console.log("button pressed")}const t0={},n0={class:"max-w-screen-xl"},i0=_n('<div class="flex flex-col md:flex-row"><div class="flex-1 p-4 relative z-10"><div class="p-4 mt-6"><h2 class="text-4xl font-semibold font-heading">Bringing 3D To Web</h2><p class="mt-4 font-paragraph">With upcoming upgrades to rendering in web browsers. I am aiming to combine and integrate more 3D elements in websites.</p><button class="mt-8 font-paragraph bg-slate-800 text-slate-50 p-4 text-lg font-semibold rounded-full hover:bg-slate-200 hover:text-slate-800" id="contactButton"> Contact </button></div></div><div class="flex-1 p-12 relative z-20 order-first md:order-none"><canvas id="characterContainer" width="480" height="480" class="w-full h-full"></canvas></div></div>',1),r0=[i0];function s0(n,e,t,i,r,s){return Wt(),Qt("div",n0,r0)}const a0=Pn(t0,[["render",s0]]);const o0={},l0={class:"max-w-screen-xl mx-auto"},c0=_n('<div class="flex flex-col-reverse md:flex-row"><div class="md:flex-1 rounded p-4 flex items-center justify-center"><div id="cover" class="rounded-full bg-cover bg-center h-96 w-96"></div></div><div class="md:flex-1 rounded-md p-4"><h1 class="text-4xl font-semibold font-heading">I&#39;m Lucas Bleijenberg</h1><p class="mt-4 font-paragraph"> a 4th year design student at CMGT Saxion and an aspiring web developer. During my studies, I learned working with many different programming and design tools. Through my studies, I have gained an interest in web development and 3D modeling. With upcoming advancements to rendering in browsers, I want to integrate more 3D in the Web. </p></div></div>',1),u0=[c0];function f0(n,e){return Wt(),Qt("div",l0,u0)}const d0=Pn(o0,[["render",f0]]),h0="/assets/cmgt-938603bf.jpg",p0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX+6ABORzX/6wD/7QBORzb/5wD/7wD/7gDdyhBEPTb86ApPRjdORzNQRzPJuxn/5gdAODpORjtLRztMSDVRRTdMSTJOSC//8wBCPjRJQjZJSTZPREFNRj9NRzj/5BRUQztDQzRDPDlMSS/17AP05gXYyR3EtSyupy2imSuZjy2Uhy2onijQvwvq2gWdkBaAdC55azaIdyeqmBW+rxdZSjk/Mi9CMTmypRRNOjJYUi9BOjjs3whqXyU7OjNeUyhURy1LRE2DcC9NPEA3Nz1HOyZGSypANU2IfRs+N0ZjVCV8diFxZDWQfiillR05KTu4syNfRzCinRx9Ykd3YC5iUzpvZyGBczzYthiehyNcYSxLSyillTfhyhyNeDPf1ArBuhWa+ShUAAAJEUlEQVR4nO2bj3eaShbHYYZBGVBA/AEKCgTbaLQmMdFEo2mb1zaNTXffvnbf2+579v//LxbTNAJik33JqZOc+zmnpzkonvly5965987AcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAUIIZRSLvxHUfg/QoiQW29SSXhDeC9Hf8II78tWcDVKtADjUJzK4eCWe0KBKkFYrGSQWld/wiDvRTjSStB89ny71W5t7/Q7XYxvHzPCQf5Fb3dvv7mFf8IY/z6Ew6jbbx8cehPXNVzLMr3R4Kg3zHKLcZM1UxBxHN0/mkiOb2qT42fo6odYBFMVBV97pZGkCHwEwZK02XBc4dSt9Bsp7p6MZDn8Jq/w+qQdqJRJdyT1DN2Zapash+NMUtBO22OxnnrjltqdatXct6ciHL80X6E6+smDvxMo02+YBcORV+QtBu5Xvdfba3wsOHnpC/r1N3VF0V6IzEWbMBSK85OBYQhyWVF4YUVhruYYvnnQxOFKkgw8aGdUKt4YXsjJwlmTQRviflFR9FVp31EWXub8sh1watLHqJUrROe1YvuvMhsRsR4UxsLBGyFkrcLrKTjZDVZMmH97Wog9DNt/2d2MkPWo7879mi7fqlBoWMfdhDNmWq4eD01GcZJnappSzF2YSkoATUV630Wx5U7syUbiyRTNIVPrPkHvBnq6nBROX57UUdRC4m6tkHg6snnJlEJxe1S6s0C+6JsXKJq0iBdWQqGguwzZEKmZvmSXVm1YKizWxtzKdZnXz/ZxpIbAO0ohPktzstthyA/rXctJs1WjUS7nGo20jwQpG3FE1Hzrxx+QrOjjzQlKolZmbqqKqutpnuunRlezF10yMgcJhYb1QdycoiTicy3phKEoSeJn7cv9y/Zu+KfjxNZzR5GNj/mon/1DM/hlHiQrpbdjVrI2FanjfzpxMwlyVTpoN6mYwRhnRDrfPvCqEXcs+rY3zaPoeoH3TF2oXv9MzvHPh6yYEAVE3PG+FGMKncJRq4tvAoVKcLCTi0xk2zr6lcYiJeWCf1lV+9rQJWdwGeZIbEQaSsn41C5HiwmFlz5lRYRuCjyEOSKOZ9L1p7wzuuiSuspFCikUzoW9j99/xjschhc2omeVMIcemrIcmaWybb0KE8+6etN8IioJ1z5xT/Ib5WLN1953RA7FJYSlP6l0doWR6ZojfW9eIYxYMISKv8UDqeHOgtTR4Z6r2EL1YJhJXcqpisV5/vJyvzPOIIZaGKg+/hgLM4p9sGYhI8Gnqn3UHmfUNROQhB9kRIwRUTlmLBjOtuEklrQIo86ar1Ku+fFzFhMUpNpQpVuULESGE58lG3Liv11jacDal7N36xuH9HeKGRr6HcHTSEap6IqVxev6aSrC6PEJRHNLWS4Vhi5/xmudKJyCKmHHwe4IykuR6lwRtD7+8VL26IyIh24t4oeONn90RrqFzKVbXPqhU/iFtQ7ZvRFbZm7ph86b2SOMJT9G/GCeLis72eixUhI8GOKem4sq3GOnufJAJBX2Mk9wlkZKJ0F5JT45hWGkWa6HgjN9crEU75vRfrx9dNt2/aMDPTNr/o3AnKBlNz2ihwY1zyN9QKXmXiKC0/d5r/bmH6GXdovLpI03FHtKf5yWPjqJRHwfmaUlvaTlf7A9/RhzViJ+8JYKFd23p8EaMyFV/GMeLiYo9ZRFWN6TJeqab20ClD+PNbwV7cWaIp9wfe3jizFWUerYaRxWmomL/tLAiCrkS1I/PTcl44NqVSv3t1KS85UrCHF1NlyWUtyzYgrlqtRMk4jozKrl/Opo1hFX/JFwajYJI7NUJWrzsBht6gu8YPYX0SZiAkJV3P2P5JQXmy/WaHcuhhE3Og8pGsueFME6yzGikMN1OvO+xI8IOWet8eKg2vVXVFVFON+weP3byim4oz/GSEWRZVPFWSvWds3Zn5mpUkimP3oT3/wTvkifhmNRvZ6MWAw6u1aNL5ev87tiznwz3EIRI6q4b8Z+oui2WKk0w2HS37z4FrDcKDla7uLZnFYqFbH77MV7qeDkePt7Bqv7RuNwFj1NQvB/4wplr8+MDUOFzcMqv4JgeeeDwesj7dyXrCtpsU3SwnnsvAxKxCtFa7KUH4htb1VhiO+X/VKprOvC6kEbaU+NrgZ0GndlxUpPbjdDQIJja0XCYjbW9FKhVkw7xycI42hzmHSthMJjzNR5b/SnVTOMpAo+lKaErFw3lMbk91j6iptaPFi5f4kqGyv+gnAkOG86dz8TVTQml5VYboeHk/hGubfP2h4OGg7ufChKkUftxCYibrnxg0Vah7H+P6WZfc1u3HYu8Zs+22xj9eoVhRvwzI1MZkFRBuOVM6gbRkXi8Kh6FzM6BbOVSR7Zx5ISc2PnYKvOzk7+FVeJWdW7w/FLy3xeSR4SRvNROZI0KLrNXu88LFop6p6MUla+ONI0iylNFFAor/mRM8JlXdnGbFnwGwTRXzVPL+t+qjbfKOnWoBWqSw6e4B3TjsTSamPEUs4WQ+zuSaZfSzVkrWx5F+nbi2LPciKx1CiazG5D1rlK88ORFE/Ev+l1XO+iibjUPf7MsRV9x0bRj5k7xn4N3QqLdTwengw01zFKilIOUxrBLhRc7/DT5RxzKC1RoVzX0OVIwiA4M1ZNeA3mxv32yelrydM8yTRfn77/MOzidbGDUJSVYkbX3T3mQmkCSigWUTfb6eTzneY8qCAc1rvrkhSK+gmFjJ3TT2HRDSRX9d3iHcvFPPxRr5viVkKh1GSnmZgOWRG0euUGSsTdRPlrsxpo/h6UBNN48HWOWZ+k/y/dRP1s9UTG0u77gbjOKK7Q3E5v/D9WEDeMBxp+1N/0mB4Y/C7eSeQP50z1aO4NQbPE2wxHlaelUA1qsfdNeGeWYa3Avx9krsWrSquFn5TAxXGOeMfR6yPKVhvqnuBtt8wL31F0/yzLPa0TjpmeJeeW1MqvWWroPwSVtxMtwuhs+rS8MIylX/NR+l+bmx7RQ0PC0hgt4RDj9T0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADABP8DwqW/YtdAJ0MAAAAASUVORK5CYII=",m0={},_0=_n('<div class="flex justify-center mb-12 font-heading font"><h1 class="text-2xl font-semibold font-heading">Experience</h1></div><div class="flex justify-center"><div class="w-64 m-4"><div class="rounded-lg shadow-md"><img src="'+h0+'" alt="Card Image" class="w-full h-64 object-cover rounded-t-lg"><div class="p-4 font-paragraph"><h2 class="text-xl font-semibold">Creative Media and Game Technologies</h2><p class="text-gray-600">4th year student following the designer track at CMGT Saxion.</p></div><div class="p-4 flex justify-end"><a href="https://www.saxion.edu/programmes/bachelor/creative-media-and-game-technologies" class="text-blue-500 hover:underline cursor-pointer"> View Study </a></div></div></div><div class="w-64 m-4"><div class="rounded-lg shadow-md"><img src="'+p0+'" alt="Card Image" class="w-full h-64 object-cover rounded-t-lg"><div class="p-4 font-paragraph"><h2 class="text-xl font-semibold">Coddin</h2><p class="text-gray-600 font">5-6 month web development internship at Coddin, a company specializing in creating web based tools and applications. </p></div><div class="p-4 flex justify-end"><a href="https://coddin.nl/" class="text-blue-500 hover:underline cursor-pointer"> View Company </a></div></div></div></div>',2);function g0(n,e){return _0}const v0=Pn(m0,[["render",g0]]),x0="/assets/arrow-left-98fe2d10.svg",Zu="/assets/html-281ad198.svg",M0="/assets/css-02005660.svg",S0="/assets/javascript-40a27a1f.svg",Ju="/assets/vue-5532db34.svg",Qu="/assets/tailwindcss-0f9b2cf2.svg",E0="/assets/laravel-7c31bb23.svg",y0="/assets/jquery-371df99e.svg",fr="/assets/blender-72e78049.svg",T0="/assets/maya-29e2a13d.svg",b0="/assets/substance-4a7b0a14.svg",A0="/assets/figma-b3de6fa4.svg",w0="/assets/canva-9d33c438.svg",R0="/assets/unity-80620ae7.svg",C0="/assets/unreal-7b510142.svg",P0="/assets/arrow-right-dc940c7d.svg";const L0={data(){return{activeDiv:1}},methods:{prevDiv(){this.activeDiv>1&&this.activeDiv--},nextDiv(){this.activeDiv<3&&this.activeDiv++},selectDiv(n){this.activeDiv=n}}},ef=n=>(od("data-v-ac19a1ea"),n=n(),ld(),n),U0={class:"relative w-full h-[400px] flex flex-col items-center justify-center font-paragraph"},D0={class:"flex items-center justify-between w-full"},I0=ef(()=>$t("img",{src:x0,alt:"Image 2",class:"w-8 h-8"},null,-1)),N0=[I0],F0={class:"border p-4 rounded-md w-full font-paragraph"},O0={key:0},B0=_n('<h1 class="mb-6 font-bold" data-v-ac19a1ea>Web</h1><div class="flex flex-wrap -mx-4" data-v-ac19a1ea><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+Zu+'" alt="Image 1" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>HTML</h1><p class="text-sm" data-v-ac19a1ea>2 Years Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+M0+'" alt="Image 2" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>CSS</h1><p class="text-sm" data-v-ac19a1ea>2 Years Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+S0+'" alt="Image 3" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>JavaScript</h1><p class="text-sm" data-v-ac19a1ea>1 Year Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+Ju+'" alt="Image 3" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Vue3</h1><p class="text-sm" data-v-ac19a1ea>6 Months Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+Qu+'" alt="Image 3" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Tailwindcss</h1><p class="text-sm" data-v-ac19a1ea>6 Months Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+E0+'" alt="Image 3" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Laravel</h1><p class="text-sm" data-v-ac19a1ea>5 Months Experience</p></div></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+y0+'" alt="Image 3" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>JQuery</h1><p class="text-sm" data-v-ac19a1ea>6 Months Experience</p></div></div>',3),z0=[B0],H0={key:1},G0=_n('<h1 class="mb-6 font-bold" data-v-ac19a1ea>3D</h1><div class="flex flex-wrap -mx-4" data-v-ac19a1ea><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+fr+'" alt="Image 1" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Blender</h1><p class="text-sm" data-v-ac19a1ea>1 Year Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+T0+'" alt="Image 2" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Maya</h1><p class="text-sm" data-v-ac19a1ea>6 Months Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+b0+'" alt="Image 3" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Substance Painter / Designer</h1><p class="text-sm" data-v-ac19a1ea>6 Months Experience</p></div></div></div>',2),V0=[G0],k0={key:2},W0=_n('<h1 class="mb-6 font-bold" data-v-ac19a1ea>Other</h1><div class="flex flex-wrap -mx-4" data-v-ac19a1ea><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+A0+'" alt="Image 1" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Figma</h1><p class="text-sm" data-v-ac19a1ea>1 Year Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+w0+'" alt="Image 2" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Canva</h1><p class="text-sm" data-v-ac19a1ea> 1 Year Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+R0+'" alt="Image 3" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Unity</h1><p class="text-sm" data-v-ac19a1ea>6 Months Experience</p></div></div><div class="w-1/3 px-4 mb-4" data-v-ac19a1ea><div class="text-center" data-v-ac19a1ea><img src="'+C0+'" alt="Image 3" class="w-16 h-16 mb-2 mx-auto" data-v-ac19a1ea><h1 class="text-xl font-semibold" data-v-ac19a1ea>Unreal</h1><p class="text-sm" data-v-ac19a1ea>6 Months Experience</p></div></div></div>',2),X0=[W0],q0=ef(()=>$t("img",{src:P0,alt:"Image 2",class:"w-8 h-8"},null,-1)),Y0=[q0],j0={class:"flex justify-center mt-4"},K0=["onClick"];function $0(n,e,t,i,r,s){return Wt(),Qt("div",U0,[$t("div",D0,[$t("button",{class:"left-arrow",onClick:e[0]||(e[0]=(...o)=>s.prevDiv&&s.prevDiv(...o))},N0),$t("div",F0,[r.activeDiv===1?(Wt(),Qt("div",O0,z0)):$s("",!0),r.activeDiv===2?(Wt(),Qt("div",H0,V0)):$s("",!0),r.activeDiv===3?(Wt(),Qt("div",k0,X0)):$s("",!0)]),$t("button",{class:"right-arrow",onClick:e[1]||(e[1]=(...o)=>s.nextDiv&&s.nextDiv(...o))},Y0)]),$t("div",j0,[(Wt(),Qt(ln,null,Pd(3,o=>$t("div",{key:o,class:ws(["rounded-full w-4 h-4 mx-2 cursor-pointer",{"bg-slate-600":r.activeDiv===o,"bg-gray-400":r.activeDiv!==o}]),onClick:a=>s.selectDiv(o)},null,10,K0)),64))])])}const Z0=Pn(L0,[["render",$0],["__scopeId","data-v-ac19a1ea"]]),J0="/assets/nl-1ef75d9f.svg",Q0="/assets/uk-dd85f85e.svg",eM="/assets/de-797cabca.svg",tM={},nM=_n('<div class="flex justify-between font-paragraph"><div class="w-1/3 p-4"><div class="text-center"><img src="'+J0+'" alt="Image 1" class="w-24 h-24 mx-auto rounded"><h1 class="text-lg font-semibold mt-4">Dutch</h1><p class="mt-2">Native Language</p></div></div><div class="w-1/3 p-4"><div class="text-center"><img src="'+Q0+'" alt="Image 2" class="w-24 h-24 mx-auto rounded"><h1 class="text-lg font-semibold mt-4">English</h1><p class="mt-2">Fluent - Cambridge B2 certified</p></div></div><div class="w-1/3 p-4"><div class="text-center"><img src="'+eM+'" alt="Image 3" class="w-24 h-24 mx-auto rounded"><h1 class="text-lg font-semibold mt-4">German</h1><p class="mt-2">Fluent Verbally</p></div></div></div>',1),iM=[nM];function rM(n,e){return Wt(),Qt("div",null,iM)}const sM=Pn(tM,[["render",rM]]),aM="/assets/almelo-e1026b5d.jpg",oM={},lM=_n('<div class="flex justify-center mb-12"><h1 class="text-2xl font-semibold font-heading">Current Project</h1></div><div class="h-128 max-w-screen-xl font-paragraph"><div class="flex"><div class="flex-1 p-4"><div class="p-4"><h2 class="text-xl font-semibold">Almelo AR based history app</h2><p class="mt-2">In collaberation with MADlab and 100% FAT, I am working with a small team of students on creating a history based application, that utilizes AR techonlogy. The goal of the project is to bring interest in history and tourism in the local area by bringing history to life.</p></div></div><div class="flex-1 p-4"><img src="'+aM+'" alt="Image" class="w-full h-full object-cover"></div></div></div>',2);function cM(n,e){return lM}const uM=Pn(oM,[["render",cM]]),fM="/assets/workshop-adaa286f.jpg",dM="/assets/beach-a2a03506.jpg",hM="/assets/axe-ef7d886f.jpg",pM="/assets/helmet-bbf5356a.png",mM="/assets/web-d2c360c7.png",_M={},gM=_n('<div class="flex justify-center mb-12"><h1 class="text-2xl font-semibold font-heading">Recent Projects</h1></div><div class="max-w-screen-xl mx-auto p-4 font-paragraph"><div class="flex flex-wrap gap-2"><div class="hover:opacity-80 hover:pointer-cursor"><a href="https://www.artstation.com/artwork/JeNnJd"><div class="bg-gray-300 inline-block relative"><img src="'+fM+'" alt="Image 2" class="w-full h-full object-cover"><div class="absolute bottom-0 left-0 p-4 bg-slate-900 bg-opacity-40 rounded-r"><h1 class="text-xl font-semibold text-slate-50">Stylized Workshop</h1></div><div class="absolute top-0 right-0 p-4 flex space-x-2 bg-slate-900 rounded-l bg-opacity-40"><img src="'+fr+'" alt="SVG 1" class="w-6 h-6"></div></div></a></div><div class="hover:opacity-80 hover:pointer-cursor"><a href="https://www.artstation.com/artwork/obJKoJ"><div class="bg-gray-300 inline-block relative"><img src="'+dM+'" alt="Image 2" class="w-full h-full object-cover"><div class="absolute bottom-0 left-0 p-4 bg-slate-900 bg-opacity-40 rounded-r"><h1 class="text-xl font-semibold text-slate-50">Stylized Beach</h1></div><div class="absolute top-0 right-0 p-4 flex space-x-2 bg-slate-900 rounded-l bg-opacity-40"><img src="'+fr+'" alt="SVG 1" class="w-6 h-6"></div></div></a></div><div class="hover:opacity-80 hover:pointer-cursor"><a href="https://www.artstation.com/artwork/KOKLPG"><div class="bg-gray-300 inline-block relative"><img src="'+hM+'" alt="Image 2" class="w-full h-full object-cover"><div class="absolute bottom-0 left-0 p-4 bg-slate-900 bg-opacity-40 rounded-r"><h1 class="text-xl font-semibold text-slate-50">Stylized Axe</h1></div><div class="absolute top-0 right-0 p-4 flex space-x-2 bg-slate-900 rounded-l bg-opacity-40"><img src="'+fr+'" alt="SVG 1" class="w-6 h-6"></div></div></a></div><div class=""><div class="bg-gray-300 inline-block relative"><img src="'+pM+'" alt="Image 2" class="w-full h-full object-cover"><div class="absolute bottom-0 left-0 p-4 bg-slate-900 bg-opacity-40 rounded-r"><h1 class="text-xl font-semibold text-slate-50">Fantasy Helmet</h1></div><div class="absolute top-0 right-0 p-4 flex space-x-2 bg-slate-900 rounded-l bg-opacity-40"><img src="'+fr+'" alt="SVG 1" class="w-6 h-6"></div></div></div><div class=""><div class="bg-gray-300 inline-block relative"><img src="'+mM+'" alt="Image 2" class="w-full h-full object-cover"><div class="absolute bottom-0 left-0 p-4 bg-slate-900 bg-opacity-40 rounded-r"><h1 class="text-xl font-semibold text-slate-50">E-Commerce Store</h1></div><div class="absolute top-0 right-0 p-4 flex space-x-2 bg-slate-900 rounded-l bg-opacity-40"><img src="'+Zu+'" alt="SVG 1" class="w-6 h-6"><img src="'+Qu+'" alt="SVG 2" class="w-6 h-6"><img src="'+Ju+'" alt="SVG 3" class="w-6 h-6"></div></div></div></div></div>',2);function vM(n,e){return gM}const xM=Pn(_M,[["render",vM]]),MM="/assets/linkedinlight-4cf427a6.svg",SM="/assets/linkedindark-12f728bb.svg";let to,no,io,gr;document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("threeCanvas");to=new Ku,no=new zt(75,1,.1,1e3),io=new Lo({canvas:n,alpha:!0}),io.setSize(400,400);const e=new Qi(3,3,3),t=new zs({color:0,wireframe:!0});gr=new hn(e,t),to.add(gr),no.position.z=5,tf()});function tf(){requestAnimationFrame(tf),gr.rotation.x+=.01,gr.rotation.y+=.01,gr.position.y=Math.sin(Date.now()*.001)*.5,io.render(to,no)}const EM={},yM={class:"h-128 max-w-screen-xl"},TM=_n('<div class="flex flex-col sm:flex-row"><div class="sm:w-1/2 p-4"><div class="p-4"><h2 class="text-4xl font-semibold">You can contact me at</h2><div class="mt-4 flex space-x-4"><div class="flex items-center"><h1 class="font-semibold bg-transparent border-2 border-slate-800 text-slate-800 px-6 py-4 rounded-full shadow-inner">495809@student.saxion.nl</h1></div><a href="https://de.linkedin.com/in/lucas-bleijenberg-a79776201" target="_blank" class="group relative bg-transparent border-2 border-slate-800 text-slate-800 px-6 py-4 rounded-full hover:bg-slate-800 hover:text-white transition flex-shrink-0" style="width:72px;"><img src="'+MM+'" alt="LinkedIn Icon" style="width:24px;height:24px;" class="group-hover:hidden"><img src="'+SM+'" alt="Another Icon" style="width:24px;height:24px;" class="hidden group-hover:inline-block"></a></div></div></div><div class="sm:w-1/2 p-4 sm:p-20"><canvas id="threeCanvas"></canvas></div></div>',1),bM=[TM];function AM(n,e,t,i,r,s){return Wt(),Qt("div",yM,bM)}const wM=Pn(EM,[["render",AM]]),RM={class:"bg-slate-50 text-slate-800"},CM={class:"mx-auto max-w-screen-xl"},PM={__name:"App",setup(n){return(e,t)=>(Wt(),Qt("div",RM,[$t("div",CM,[tt(Un),tt(a0),tt(Un),tt(d0),tt(Un),tt(v0),tt(Un),tt(Z0),tt(Un),tt(sM),tt(Un),tt(uM),tt(Un),tt(xM),tt(Un),tt(wM)])]))}};Fh(PM).mount("#app");
