/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var g="store";function b(e,t){Object.keys(e).forEach((function(i){return t(e[i],i)}))}function y(e){return null!==e&&"object"===typeof e}function v(e){return e&&"function"===typeof e.then}function w(e,t){return function(){return e(t)}}function I(e,t,i){return t.indexOf(e)<0&&(i&&i.prepend?t.unshift(e):t.push(e)),function(){var i=t.indexOf(e);i>-1&&t.splice(i,1)}}function x(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var i=e.state;k(e,i,[],e._modules.root,!0),C(e,i,t)}function C(e,t,i){var s=e._state,l=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,a={},d={},c=(0,o.B)(!0);c.run((function(){b(r,(function(t,i){a[i]=w(t,e),d[i]=(0,n.Fl)((function(){return a[i]()})),Object.defineProperty(e.getters,i,{get:function(){return d[i].value},enumerable:!0})}))})),e._state=(0,o.qj)({data:t}),e._scope=c,e.strict&&$(e),s&&i&&e._withCommit((function(){s.data=null})),l&&l.stop()}function k(e,t,i,n,o){var s=!i.length,l=e._modules.getNamespace(i);if(n.namespaced&&(e._modulesNamespaceMap[l],e._modulesNamespaceMap[l]=n),!s&&!o){var r=P(t,i.slice(0,-1)),a=i[i.length-1];e._withCommit((function(){r[a]=n.state}))}var d=n.context=S(e,l,i);n.forEachMutation((function(t,i){var n=l+i;O(e,n,t,d)})),n.forEachAction((function(t,i){var n=t.root?i:l+i,o=t.handler||t;D(e,n,o,d)})),n.forEachGetter((function(t,i){var n=l+i;T(e,n,t,d)})),n.forEachChild((function(n,s){k(e,t,i.concat(s),n,o)}))}function S(e,t,i){var n=""===t,o={dispatch:n?e.dispatch:function(i,n,o){var s=E(i,n,o),l=s.payload,r=s.options,a=s.type;return r&&r.root||(a=t+a),e.dispatch(a,l)},commit:n?e.commit:function(i,n,o){var s=E(i,n,o),l=s.payload,r=s.options,a=s.type;r&&r.root||(a=t+a),e.commit(a,l,r)}};return Object.defineProperties(o,{getters:{get:n?function(){return e.getters}:function(){return L(e,t)}},state:{get:function(){return P(e.state,i)}}}),o}function L(e,t){if(!e._makeLocalGettersCache[t]){var i={},n=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,n)===t){var s=o.slice(n);Object.defineProperty(i,s,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=i}return e._makeLocalGettersCache[t]}function O(e,t,i,n){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){i.call(e,n.state,t)}))}function D(e,t,i,n){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=i.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},t);return v(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function T(e,t,i,n){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return i(n.state,n.getters,e.state,e.getters)})}function $(e){(0,n.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function P(e,t){return t.reduce((function(e,t){return e[t]}),e)}function E(e,t,i){return y(e)&&e.type&&(i=t,t=e,e=e.type),{type:e,payload:t,options:i}}var _="vuex bindings",M="vuex:mutations",R="vuex:actions",F="vuex",V=0;function A(e,t){f({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[_]},(function(i){i.addTimelineLayer({id:M,label:"Vuex Mutations",color:B}),i.addTimelineLayer({id:R,label:"Vuex Actions",color:B}),i.addInspector({id:F,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),i.on.getInspectorTree((function(i){if(i.app===e&&i.inspectorId===F)if(i.filter){var n=[];j(n,t._modules.root,i.filter,""),i.rootNodes=n}else i.rootNodes=[N(t._modules.root,"")]})),i.on.getInspectorState((function(i){if(i.app===e&&i.inspectorId===F){var n=i.nodeId;L(t,n),i.state=Z(U(t._modules,n),"root"===n?t.getters:t._makeLocalGettersCache,n)}})),i.on.editInspectorState((function(i){if(i.app===e&&i.inspectorId===F){var n=i.nodeId,o=i.path;"root"!==n&&(o=n.split("/").filter(Boolean).concat(o)),t._withCommit((function(){i.set(t._state.data,o,i.state.value)}))}})),t.subscribe((function(e,t){var n={};e.payload&&(n.payload=e.payload),n.state=t,i.notifyComponentUpdate(),i.sendInspectorTree(F),i.sendInspectorState(F),i.addTimelineEvent({layerId:M,event:{time:Date.now(),title:e.type,data:n}})})),t.subscribeAction({before:function(e,t){var n={};e.payload&&(n.payload=e.payload),e._id=V++,e._time=Date.now(),n.state=t,i.addTimelineEvent({layerId:R,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:n}})},after:function(e,t){var n={},o=Date.now()-e._time;n.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},e.payload&&(n.payload=e.payload),n.state=t,i.addTimelineEvent({layerId:R,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:n}})}})}))}var B=8702998,K=6710886,G=16777215,z={label:"namespaced",textColor:G,backgroundColor:K};function H(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N(e,t){return{id:t||"root",label:H(t),tags:e.namespaced?[z]:[],children:Object.keys(e._children).map((function(i){return N(e._children[i],t+i+"/")}))}}function j(e,t,i,n){n.includes(i)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:t.namespaced?[z]:[]}),Object.keys(t._children).forEach((function(o){j(e,t._children[o],i,n+o+"/")}))}function Z(e,t,i){t="root"===i?t:t[i];var n=Object.keys(t),o={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(n.length){var s=W(t);o.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?H(e):e,editable:!1,value:q((function(){return s[e]}))}}))}return o}function W(e){var t={};return Object.keys(e).forEach((function(i){var n=i.split("/");if(n.length>1){var o=t,s=n.pop();n.forEach((function(e){o[e]||(o[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),o=o[e]._custom.value})),o[s]=q((function(){return e[i]}))}else t[i]=q((function(){return e[i]}))})),t}function U(e,t){var i=t.split("/").filter((function(e){return e}));return i.reduce((function(e,n,o){var s=e[n];if(!s)throw new Error('Missing module "'+n+'" for path "'+t+'".');return o===i.length-1?s:s._children}),"root"===t?e:e.root._children)}function q(e){try{return e()}catch(t){return t}}var Y=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=("function"===typeof i?i():i)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(e,t){this._children[e]=t},Y.prototype.removeChild=function(e){delete this._children[e]},Y.prototype.getChild=function(e){return this._children[e]},Y.prototype.hasChild=function(e){return e in this._children},Y.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Y.prototype.forEachChild=function(e){b(this._children,e)},Y.prototype.forEachGetter=function(e){this._rawModule.getters&&b(this._rawModule.getters,e)},Y.prototype.forEachAction=function(e){this._rawModule.actions&&b(this._rawModule.actions,e)},Y.prototype.forEachMutation=function(e){this._rawModule.mutations&&b(this._rawModule.mutations,e)},Object.defineProperties(Y.prototype,X);var J=function(e){this.register([],e,!1)};function Q(e,t,i){if(t.update(i),i.modules)for(var n in i.modules){if(!t.getChild(n))return void 0;Q(e.concat(n),t.getChild(n),i.modules[n])}}J.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},J.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,i){return t=t.getChild(i),e+(t.namespaced?i+"/":"")}),"")},J.prototype.update=function(e){Q([],this.root,e)},J.prototype.register=function(e,t,i){var n=this;void 0===i&&(i=!0);var o=new Y(t,i);if(0===e.length)this.root=o;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],o)}t.modules&&b(t.modules,(function(t,o){n.register(e.concat(o),t,i)}))},J.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],n=t.getChild(i);n&&n.runtime&&t.removeChild(i)},J.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return!!t&&t.hasChild(i)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var i=e.plugins;void 0===i&&(i=[]);var n=e.strict;void 0===n&&(n=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new J(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=o;var s=this,l=this,r=l.dispatch,a=l.commit;this.dispatch=function(e,t){return r.call(s,e,t)},this.commit=function(e,t,i){return a.call(s,e,t,i)},this.strict=n;var d=this._modules.root.state;k(this,d,[],this._modules.root),C(this,d),i.forEach((function(e){return e(t)}))},ie={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||g,this),e.config.globalProperties.$store=this;var i=void 0!==this._devtools&&this._devtools;i&&A(e,this)},ie.state.get=function(){return this._state.data},ie.state.set=function(e){0},te.prototype.commit=function(e,t,i){var n=this,o=E(e,t,i),s=o.type,l=o.payload,r=(o.options,{type:s,payload:l}),a=this._mutations[s];a&&(this._withCommit((function(){a.forEach((function(e){e(l)}))})),this._subscribers.slice().forEach((function(e){return e(r,n.state)})))},te.prototype.dispatch=function(e,t){var i=this,n=E(e,t),o=n.type,s=n.payload,l={type:o,payload:s},r=this._actions[o];if(r){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(l,i.state)}))}catch(d){0}var a=r.length>1?Promise.all(r.map((function(e){return e(s)}))):r[0](s);return new Promise((function(e,t){a.then((function(t){try{i._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(l,i.state)}))}catch(d){0}e(t)}),(function(e){try{i._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(l,i.state,e)}))}catch(d){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return I(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var i="function"===typeof e?{before:e}:e;return I(i,this._actionSubscribers,t)},te.prototype.watch=function(e,t,i){var o=this;return(0,n.YP)((function(){return e(o.state,o.getters)}),t,Object.assign({},i))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,i){void 0===i&&(i={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),k(this,this.state,e,this._modules.get(e),i.preserveState),C(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var i=P(t.state,e.slice(0,-1));delete i[e[e.length-1]]})),x(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),x(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ie);se((function(e,t){var i={};return ne(t).forEach((function(t){var n=t.key,o=t.val;i[n]=function(){var t=this.$store.state,i=this.$store.getters;if(e){var n=le(this.$store,"mapState",e);if(!n)return;t=n.context.state,i=n.context.getters}return"function"===typeof o?o.call(this,t,i):t[o]},i[n].vuex=!0})),i})),se((function(e,t){var i={};return ne(t).forEach((function(t){var n=t.key,o=t.val;i[n]=function(){var t=[],i=arguments.length;while(i--)t[i]=arguments[i];var n=this.$store.commit;if(e){var s=le(this.$store,"mapMutations",e);if(!s)return;n=s.context.commit}return"function"===typeof o?o.apply(this,[n].concat(t)):n.apply(this.$store,[o].concat(t))}})),i})),se((function(e,t){var i={};return ne(t).forEach((function(t){var n=t.key,o=t.val;o=e+o,i[n]=function(){if(!e||le(this.$store,"mapGetters",e))return this.$store.getters[o]},i[n].vuex=!0})),i})),se((function(e,t){var i={};return ne(t).forEach((function(t){var n=t.key,o=t.val;i[n]=function(){var t=[],i=arguments.length;while(i--)t[i]=arguments[i];var n=this.$store.dispatch;if(e){var s=le(this.$store,"mapActions",e);if(!s)return;n=s.context.dispatch}return"function"===typeof o?o.apply(this,[n].concat(t)):n.apply(this.$store,[o].concat(t))}})),i}));function ne(e){return oe(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function oe(e){return Array.isArray(e)||y(e)}function se(e){return function(t,i){return"string"!==typeof t?(i=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,i)}}function le(e,t,i){var n=e._modulesNamespaceMap[i];return n}},2483:function(e,t,i){"use strict";i.d(t,{PO:function(){return B},p7:function(){return tt}});i(7658),i(1703);var n=i(3396),o=i(4870);
/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function l(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const r=Object.assign;function a(e,t){const i={};for(const n in t){const o=t[n];i[n]=c(o)?o.map(e):e(o)}return i}const d=()=>{},c=Array.isArray;const u=/\/$/,p=e=>e.replace(u,"");function h(e,t,i="/"){let n,o={},s="",l="";const r=t.indexOf("#");let a=t.indexOf("?");return r<a&&r>=0&&(a=-1),a>-1&&(n=t.slice(0,a),s=t.slice(a+1,r>-1?r:t.length),o=e(s)),r>-1&&(n=n||t.slice(0,r),l=t.slice(r,t.length)),n=I(null!=n?n:t,i),{fullPath:n+(s&&"?")+s+l,path:n,query:o,hash:l}}function m(e,t){const i=t.query?e(t.query):"";return t.path+(i&&"?")+i+(t.hash||"")}function f(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,i){const n=t.matched.length-1,o=i.matched.length-1;return n>-1&&n===o&&b(t.matched[n],i.matched[o])&&y(t.params,i.params)&&e(t.query)===e(i.query)&&t.hash===i.hash}function b(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(!v(e[i],t[i]))return!1;return!0}function v(e,t){return c(e)?w(e,t):c(t)?w(t,e):e===t}function w(e,t){return c(t)?e.length===t.length&&e.every(((e,i)=>e===t[i])):1===e.length&&e[0]===t}function I(e,t){if(e.startsWith("/"))return e;if(!e)return t;const i=t.split("/"),n=e.split("/"),o=n[n.length-1];".."!==o&&"."!==o||n.push("");let s,l,r=i.length-1;for(s=0;s<n.length;s++)if(l=n[s],"."!==l){if(".."!==l)break;r>1&&r--}return i.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var x,C;(function(e){e["pop"]="pop",e["push"]="push"})(x||(x={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(C||(C={}));function k(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),p(e)}const S=/^[^#]+#/;function L(e,t){return e.replace(S,"#")+t}function O(e,t){const i=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-i.left-(t.left||0),top:n.top-i.top-(t.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function T(e){let t;if("el"in e){const i=e.el,n="string"===typeof i&&i.startsWith("#");0;const o="string"===typeof i?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!o)return;t=O(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function $(e,t){const i=history.state?history.state.position-t:-1;return i+e}const P=new Map;function E(e,t){P.set(e,t)}function _(e){const t=P.get(e);return P.delete(e),t}let M=()=>location.protocol+"//"+location.host;function R(e,t){const{pathname:i,search:n,hash:o}=t,s=e.indexOf("#");if(s>-1){let t=o.includes(e.slice(s))?e.slice(s).length:1,i=o.slice(t);return"/"!==i[0]&&(i="/"+i),f(i,"")}const l=f(i,e);return l+n+o}function F(e,t,i,n){let o=[],s=[],l=null;const a=({state:s})=>{const r=R(e,location),a=i.value,d=t.value;let c=0;if(s){if(i.value=r,t.value=s,l&&l===a)return void(l=null);c=d?s.position-d.position:0}else n(r);o.forEach((e=>{e(i.value,a,{delta:c,type:x.pop,direction:c?c>0?C.forward:C.back:C.unknown})}))};function d(){l=i.value}function c(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(r({},e.state,{scroll:D()}),"")}function p(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:d,listen:c,destroy:p}}function V(e,t,i,n=!1,o=!1){return{back:e,current:t,forward:i,replaced:n,position:window.history.length,scroll:o?D():null}}function A(e){const{history:t,location:i}=window,n={value:R(e,i)},o={value:t.state};function s(n,s,l){const r=e.indexOf("#"),a=r>-1?(i.host&&document.querySelector("base")?e:e.slice(r))+n:M()+e+n;try{t[l?"replaceState":"pushState"](s,"",a),o.value=s}catch(d){console.error(d),i[l?"replace":"assign"](a)}}function l(e,i){const l=r({},t.state,V(o.value.back,e,o.value.forward,!0),i,{position:o.value.position});s(e,l,!0),n.value=e}function a(e,i){const l=r({},o.value,t.state,{forward:e,scroll:D()});s(l.current,l,!0);const a=r({},V(n.value,e,null),{position:l.position+1},i);s(e,a,!1),n.value=e}return o.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:n,state:o,push:a,replace:l}}function B(e){e=k(e);const t=A(e),i=F(e,t.state,t.location,t.replace);function n(e,t=!0){t||i.pauseListeners(),history.go(e)}const o=r({location:"",base:e,go:n,createHref:L.bind(null,e)},t,i);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function K(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var N;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(N||(N={}));function j(e,t){return r(new Error,{type:e,[H]:!0},t)}function Z(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const W="[^/]+?",U={sensitive:!1,strict:!1,start:!0,end:!0},q=/[.+*?^${}()[\]/\\]/g;function Y(e,t){const i=r({},U,t),n=[];let o=i.start?"^":"";const s=[];for(const r of e){const e=r.length?[]:[90];i.strict&&!r.length&&(o+="/");for(let t=0;t<r.length;t++){const n=r[t];let l=40+(i.sensitive?.25:0);if(0===n.type)t||(o+="/"),o+=n.value.replace(q,"\\$&"),l+=40;else if(1===n.type){const{value:e,repeatable:i,optional:a,regexp:d}=n;s.push({name:e,repeatable:i,optional:a});const c=d||W;if(c!==W){l+=10;try{new RegExp(`(${c})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${c}): `+u.message)}}let p=i?`((?:${c})(?:/(?:${c}))*)`:`(${c})`;t||(p=a&&r.length<2?`(?:/${p})`:"/"+p),a&&(p+="?"),o+=p,l+=20,a&&(l+=-8),i&&(l+=-20),".*"===c&&(l+=-50)}e.push(l)}n.push(e)}if(i.strict&&i.end){const e=n.length-1;n[e][n[e].length-1]+=.7000000000000001}i.strict||(o+="/?"),i.end?o+="$":i.strict&&(o+="(?:/|$)");const l=new RegExp(o,i.sensitive?"":"i");function a(e){const t=e.match(l),i={};if(!t)return null;for(let n=1;n<t.length;n++){const e=t[n]||"",o=s[n-1];i[o.name]=e&&o.repeatable?e.split("/"):e}return i}function d(t){let i="",n=!1;for(const o of e){n&&i.endsWith("/")||(i+="/"),n=!1;for(const e of o)if(0===e.type)i+=e.value;else if(1===e.type){const{value:s,repeatable:l,optional:r}=e,a=s in t?t[s]:"";if(c(a)&&!l)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const d=c(a)?a.join("/"):a;if(!d){if(!r)throw new Error(`Missing required param "${s}"`);o.length<2&&(i.endsWith("/")?i=i.slice(0,-1):n=!0)}i+=d}}return i||"/"}return{re:l,score:n,keys:s,parse:a,stringify:d}}function X(e,t){let i=0;while(i<e.length&&i<t.length){const n=t[i]-e[i];if(n)return n;i++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function J(e,t){let i=0;const n=e.score,o=t.score;while(i<n.length&&i<o.length){const e=X(n[i],o[i]);if(e)return e;i++}if(1===Math.abs(o.length-n.length)){if(Q(n))return 1;if(Q(o))return-1}return o.length-n.length}function Q(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ie(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${i})/"${d}": ${e}`)}let i=0,n=i;const o=[];let s;function l(){s&&o.push(s),s=[]}let r,a=0,d="",c="";function u(){d&&(0===i?s.push({type:0,value:d}):1===i||2===i||3===i?(s.length>1&&("*"===r||"+"===r)&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:c,repeatable:"*"===r||"+"===r,optional:"*"===r||"?"===r})):t("Invalid state to consume buffer"),d="")}function p(){d+=r}while(a<e.length)if(r=e[a++],"\\"!==r||2===i)switch(i){case 0:"/"===r?(d&&u(),l()):":"===r?(u(),i=1):p();break;case 4:p(),i=n;break;case 1:"("===r?i=2:te.test(r)?p():(u(),i=0,"*"!==r&&"?"!==r&&"+"!==r&&a--);break;case 2:")"===r?"\\"==c[c.length-1]?c=c.slice(0,-1)+r:i=3:c+=r;break;case 3:u(),i=0,"*"!==r&&"?"!==r&&"+"!==r&&a--,c="";break;default:t("Unknown state");break}else n=i,i=4;return 2===i&&t(`Unfinished custom RegExp for param "${d}"`),u(),l(),o}function ne(e,t,i){const n=Y(ie(e.path),i);const o=r(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function oe(e,t){const i=[],n=new Map;function o(e){return n.get(e)}function s(e,i,n){const o=!n,a=le(e);a.aliasOf=n&&n.record;const u=ce(t,e),p=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)p.push(r({},a,{components:n?n.record.components:a.components,path:e,aliasOf:n?n.record:a}))}let h,m;for(const t of p){const{path:r}=t;if(i&&"/"!==r[0]){const e=i.record.path,n="/"===e[e.length-1]?"":"/";t.path=i.record.path+(r&&n+r)}if(h=ne(t,i,u),n?n.alias.push(h):(m=m||h,m!==h&&m.alias.push(h),o&&e.name&&!ae(h)&&l(e.name)),a.children){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,n&&n.children[t])}n=n||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&c(h)}return m?()=>{l(m)}:d}function l(e){if(G(e)){const t=n.get(e);t&&(n.delete(e),i.splice(i.indexOf(t),1),t.children.forEach(l),t.alias.forEach(l))}else{const t=i.indexOf(e);t>-1&&(i.splice(t,1),e.record.name&&n.delete(e.record.name),e.children.forEach(l),e.alias.forEach(l))}}function a(){return i}function c(e){let t=0;while(t<i.length&&J(e,i[t])>=0&&(e.record.path!==i[t].record.path||!ue(e,i[t])))t++;i.splice(t,0,e),e.record.name&&!ae(e)&&n.set(e.record.name,e)}function u(e,t){let o,s,l,a={};if("name"in e&&e.name){if(o=n.get(e.name),!o)throw j(1,{location:e});0,l=o.record.name,a=r(se(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,o.keys.map((e=>e.name)))),s=o.stringify(a)}else if("path"in e)s=e.path,o=i.find((e=>e.re.test(s))),o&&(a=o.parse(s),l=o.record.name);else{if(o=t.name?n.get(t.name):i.find((e=>e.re.test(t.path))),!o)throw j(1,{location:e,currentLocation:t});l=o.record.name,a=r({},t.params,e.params),s=o.stringify(a)}const d=[];let c=o;while(c)d.unshift(c.record),c=c.parent;return{name:l,path:s,params:a,matched:d,meta:de(d)}}return t=ce({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:u,removeRoute:l,getRoutes:a,getRecordMatcher:o}}function se(e,t){const i={};for(const n of t)n in e&&(i[n]=e[n]);return i}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function re(e){const t={},i=e.props||!1;if("component"in e)t.default=i;else for(const n in e.components)t[n]="boolean"===typeof i?i:i[n];return t}function ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function de(e){return e.reduce(((e,t)=>r(e,t.meta)),{})}function ce(e,t){const i={};for(const n in e)i[n]=n in t?t[n]:e[n];return i}function ue(e,t){return t.children.some((t=>t===e||ue(e,t)))}const pe=/#/g,he=/&/g,me=/\//g,fe=/=/g,ge=/\?/g,be=/\+/g,ye=/%5B/g,ve=/%5D/g,we=/%5E/g,Ie=/%60/g,xe=/%7B/g,Ce=/%7C/g,ke=/%7D/g,Se=/%20/g;function Le(e){return encodeURI(""+e).replace(Ce,"|").replace(ye,"[").replace(ve,"]")}function Oe(e){return Le(e).replace(xe,"{").replace(ke,"}").replace(we,"^")}function De(e){return Le(e).replace(be,"%2B").replace(Se,"+").replace(pe,"%23").replace(he,"%26").replace(Ie,"`").replace(xe,"{").replace(ke,"}").replace(we,"^")}function Te(e){return De(e).replace(fe,"%3D")}function $e(e){return Le(e).replace(pe,"%23").replace(ge,"%3F")}function Pe(e){return null==e?"":$e(e).replace(me,"%2F")}function Ee(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function _e(e){const t={};if(""===e||"?"===e)return t;const i="?"===e[0],n=(i?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const e=n[o].replace(be," "),i=e.indexOf("="),s=Ee(i<0?e:e.slice(0,i)),l=i<0?null:Ee(e.slice(i+1));if(s in t){let e=t[s];c(e)||(e=t[s]=[e]),e.push(l)}else t[s]=l}return t}function Me(e){let t="";for(let i in e){const n=e[i];if(i=Te(i),null==n){void 0!==n&&(t+=(t.length?"&":"")+i);continue}const o=c(n)?n.map((e=>e&&De(e))):[n&&De(n)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+i,null!=e&&(t+="="+e))}))}return t}function Re(e){const t={};for(const i in e){const n=e[i];void 0!==n&&(t[i]=c(n)?n.map((e=>null==e?null:""+e)):null==n?n:""+n)}return t}const Fe=Symbol(""),Ve=Symbol(""),Ae=Symbol(""),Be=Symbol(""),Ke=Symbol("");function Ge(){let e=[];function t(t){return e.push(t),()=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)}}function i(){e=[]}return{add:t,list:()=>e,reset:i}}function ze(e,t,i,n,o){const s=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise(((l,r)=>{const a=e=>{!1===e?r(j(4,{from:i,to:t})):e instanceof Error?r(e):K(e)?r(j(2,{from:t,to:e})):(s&&n.enterCallbacks[o]===s&&"function"===typeof e&&s.push(e),l())},d=e.call(n&&n.instances[o],t,i,a);let c=Promise.resolve(d);e.length<3&&(c=c.then(a)),c.catch((e=>r(e)))}))}function He(e,t,i,n){const o=[];for(const s of e){0;for(const e in s.components){let r=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Ne(r)){const l=r.__vccOpts||r,a=l[t];a&&o.push(ze(a,i,n,s,e))}else{let a=r();0,o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const r=l(o)?o.default:o;s.components[e]=r;const a=r.__vccOpts||r,d=a[t];return d&&ze(d,i,n,s,e)()}))))}}}return o}function Ne(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function je(e){const t=(0,n.f3)(Ae),i=(0,n.f3)(Be),s=(0,n.Fl)((()=>t.resolve((0,o.SU)(e.to)))),l=(0,n.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,n=e[t-1],o=i.matched;if(!n||!o.length)return-1;const l=o.findIndex(b.bind(null,n));if(l>-1)return l;const r=Ye(e[t-2]);return t>1&&Ye(n)===r&&o[o.length-1].path!==r?o.findIndex(b.bind(null,e[t-2])):l})),r=(0,n.Fl)((()=>l.value>-1&&qe(i.params,s.value.params))),a=(0,n.Fl)((()=>l.value>-1&&l.value===i.matched.length-1&&y(i.params,s.value.params)));function c(i={}){return Ue(i)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(d):Promise.resolve()}return{route:s,href:(0,n.Fl)((()=>s.value.href)),isActive:r,isExactActive:a,navigate:c}}const Ze=(0,n.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:je,setup(e,{slots:t}){const i=(0,o.qj)(je(e)),{options:s}=(0,n.f3)(Ae),l=(0,n.Fl)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:i.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive})));return()=>{const o=t.default&&t.default(i);return e.custom?o:(0,n.h)("a",{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:l.value},o)}}}),We=Ze;function Ue(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qe(e,t){for(const i in t){const n=t[i],o=e[i];if("string"===typeof n){if(n!==o)return!1}else if(!c(o)||o.length!==n.length||n.some(((e,t)=>e!==o[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,i)=>null!=e?e:null!=t?t:i,Je=(0,n.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){const s=(0,n.f3)(Ke),l=(0,n.Fl)((()=>e.route||s.value)),a=(0,n.f3)(Ve,0),d=(0,n.Fl)((()=>{let e=(0,o.SU)(a);const{matched:t}=l.value;let i;while((i=t[e])&&!i.components)e++;return e})),c=(0,n.Fl)((()=>l.value.matched[d.value]));(0,n.JJ)(Ve,(0,n.Fl)((()=>d.value+1))),(0,n.JJ)(Fe,c),(0,n.JJ)(Ke,l);const u=(0,o.iH)();return(0,n.YP)((()=>[u.value,c.value,e.name]),(([e,t,i],[n,o,s])=>{t&&(t.instances[i]=e,o&&o!==t&&e&&e===n&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&b(t,o)&&n||(t.enterCallbacks[i]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=l.value,s=e.name,a=c.value,d=a&&a.components[s];if(!d)return Qe(i.default,{Component:d,route:o});const p=a.props[s],h=p?!0===p?o.params:"function"===typeof p?p(o):p:null,m=e=>{e.component.isUnmounted&&(a.instances[s]=null)},f=(0,n.h)(d,r({},h,t,{onVnodeUnmounted:m,ref:u}));return Qe(i.default,{Component:f,route:o})||f}}});function Qe(e,t){if(!e)return null;const i=e(t);return 1===i.length?i[0]:i}const et=Je;function tt(e){const t=oe(e.routes,e),i=e.parseQuery||_e,l=e.stringifyQuery||Me,u=e.history;const p=Ge(),f=Ge(),b=Ge(),y=(0,o.XI)(z);let v=z;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=a.bind(null,(e=>""+e)),I=a.bind(null,Pe),C=a.bind(null,Ee);function k(e,i){let n,o;return G(e)?(n=t.getRecordMatcher(e),o=i):o=e,t.addRoute(o,n)}function S(e){const i=t.getRecordMatcher(e);i&&t.removeRoute(i)}function L(){return t.getRoutes().map((e=>e.record))}function O(e){return!!t.getRecordMatcher(e)}function P(e,n){if(n=r({},n||y.value),"string"===typeof e){const o=h(i,e,n.path),s=t.resolve({path:o.path},n),l=u.createHref(o.fullPath);return r(o,s,{params:C(s.params),hash:Ee(o.hash),redirectedFrom:void 0,href:l})}let o;if("path"in e)o=r({},e,{path:h(i,e.path,n.path).path});else{const t=r({},e.params);for(const e in t)null==t[e]&&delete t[e];o=r({},e,{params:I(t)}),n.params=I(n.params)}const s=t.resolve(o,n),a=e.hash||"";s.params=w(C(s.params));const d=m(l,r({},e,{hash:Oe(a),path:s.path})),c=u.createHref(d);return r({fullPath:d,hash:a,query:l===Me?Re(e.query):e.query||{}},s,{redirectedFrom:void 0,href:c})}function M(e){return"string"===typeof e?h(i,e,y.value.path):r({},e)}function R(e,t){if(v!==e)return j(8,{from:t,to:e})}function F(e){return B(e)}function V(e){return F(r(M(e),{replace:!0}))}function A(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:i}=t;let n="function"===typeof i?i(e):i;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=M(n):{path:n},n.params={}),r({query:e.query,hash:e.hash,params:"path"in n?{}:e.params},n)}}function B(e,t){const i=v=P(e),n=y.value,o=e.state,s=e.force,a=!0===e.replace,d=A(i);if(d)return B(r(M(d),{state:"object"===typeof d?r({},o,d.state):o,force:s,replace:a}),t||i);const c=i;let u;return c.redirectedFrom=t,!s&&g(l,n,i)&&(u=j(16,{to:c,from:n}),ne(n,n,!0,!1)),(u?Promise.resolve(u):N(c,n)).catch((e=>Z(e)?Z(e,2)?e:ie(e):ee(e,c,n))).then((e=>{if(e){if(Z(e,2))return B(r({replace:a},M(e.to),{state:"object"===typeof e.to?r({},o,e.to.state):o,force:s}),t||c)}else e=U(c,n,!0,a,o);return W(c,n,e),e}))}function K(e,t){const i=R(e,t);return i?Promise.reject(i):Promise.resolve()}function H(e){const t=re.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function N(e,t){let i;const[n,o,s]=it(e,t);i=He(n.reverse(),"beforeRouteLeave",e,t);for(const r of n)r.leaveGuards.forEach((n=>{i.push(ze(n,e,t))}));const l=K.bind(null,e,t);return i.push(l),de(i).then((()=>{i=[];for(const n of p.list())i.push(ze(n,e,t));return i.push(l),de(i)})).then((()=>{i=He(o,"beforeRouteUpdate",e,t);for(const n of o)n.updateGuards.forEach((n=>{i.push(ze(n,e,t))}));return i.push(l),de(i)})).then((()=>{i=[];for(const n of e.matched)if(n.beforeEnter&&!t.matched.includes(n))if(c(n.beforeEnter))for(const o of n.beforeEnter)i.push(ze(o,e,t));else i.push(ze(n.beforeEnter,e,t));return i.push(l),de(i)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),i=He(s,"beforeRouteEnter",e,t),i.push(l),de(i)))).then((()=>{i=[];for(const n of f.list())i.push(ze(n,e,t));return i.push(l),de(i)})).catch((e=>Z(e,8)?e:Promise.reject(e)))}function W(e,t,i){for(const n of b.list())H((()=>n(e,t,i)))}function U(e,t,i,n,o){const l=R(e,t);if(l)return l;const a=t===z,d=s?history.state:{};i&&(n||a?u.replace(e.fullPath,r({scroll:a&&d&&d.scroll},o)):u.push(e.fullPath,o)),y.value=e,ne(e,t,i,a),ie()}let q;function Y(){q||(q=u.listen(((e,t,i)=>{if(!ae.listening)return;const n=P(e),o=A(n);if(o)return void B(r(o,{replace:!0}),n).catch(d);v=n;const l=y.value;s&&E($(l.fullPath,i.delta),D()),N(n,l).catch((e=>Z(e,12)?e:Z(e,2)?(B(e.to,n).then((e=>{Z(e,20)&&!i.delta&&i.type===x.pop&&u.go(-1,!1)})).catch(d),Promise.reject()):(i.delta&&u.go(-i.delta,!1),ee(e,n,l)))).then((e=>{e=e||U(n,l,!1),e&&(i.delta&&!Z(e,8)?u.go(-i.delta,!1):i.type===x.pop&&Z(e,20)&&u.go(-1,!1)),W(n,l,e)})).catch(d)})))}let X,J=Ge(),Q=Ge();function ee(e,t,i){ie(e);const n=Q.list();return n.length?n.forEach((n=>n(e,t,i))):console.error(e),Promise.reject(e)}function te(){return X&&y.value!==z?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))}function ie(e){return X||(X=!e,Y(),J.list().forEach((([t,i])=>e?i(e):t())),J.reset()),e}function ne(t,i,o,l){const{scrollBehavior:r}=e;if(!s||!r)return Promise.resolve();const a=!o&&_($(t.fullPath,0))||(l||!o)&&history.state&&history.state.scroll||null;return(0,n.Y3)().then((()=>r(t,i,a))).then((e=>e&&T(e))).catch((e=>ee(e,t,i)))}const se=e=>u.go(e);let le;const re=new Set,ae={currentRoute:y,listening:!0,addRoute:k,removeRoute:S,hasRoute:O,getRoutes:L,resolve:P,options:e,push:F,replace:V,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:p.add,beforeResolve:f.add,afterEach:b.add,onError:Q.add,isReady:te,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(y)}),s&&!le&&y.value===z&&(le=!0,F(u.location).catch((e=>{0})));const i={};for(const o in z)i[o]=(0,n.Fl)((()=>y.value[o]));e.provide(Ae,t),e.provide(Be,(0,o.qj)(i)),e.provide(Ke,y);const l=e.unmount;re.add(e),e.unmount=function(){re.delete(e),re.size<1&&(v=z,q&&q(),q=null,y.value=z,le=!1,X=!1),l()}}};function de(e){return e.reduce(((e,t)=>e.then((()=>H(t)))),Promise.resolve())}return ae}function it(e,t){const i=[],n=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let l=0;l<s;l++){const s=t.matched[l];s&&(e.matched.find((e=>b(e,s)))?n.push(s):i.push(s));const r=e.matched[l];r&&(t.matched.find((e=>b(e,r)))||o.push(r))}return[i,n,o]}}}]);
//# sourceMappingURL=chunk-vendors.ab2db1ac.js.map