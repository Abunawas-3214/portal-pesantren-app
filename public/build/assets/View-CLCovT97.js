import{r as S,R as j,j as a,g as X,Y as me,a as ye}from"./app-2ReULWO2.js";import{A as ge}from"./AuthenticatedLayout-XGBz9DpI.js";import"./transition-BoH270hh.js";import"./logo_rmi-CAq1HG6M.js";function ve(t,e){e===void 0&&(e={});var r=e.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var be=`.styles-module_wrapper__1I_qj {
  z-index: 1;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 60px 0px 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  box-sizing: border-box;
}

.styles-module_content__2jwZj {
  margin: auto;
  padding: 0;
  width: 90%;
  height: 100%;
  max-height: 100%;
  text-align: center;
}

.styles-module_slide__1zrfk {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module_image__2hdkJ {
  max-height: 100%;
  max-width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.styles-module_close__2I1sI {
  color: white;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 40px;
  font-weight: bold;
  opacity: 0.2;
  cursor: pointer;
}

.styles-module_close__2I1sI:hover {
  opacity: 1;
}

.styles-module_navigation__1pqAE {
  height: 80%;
  color: white;
  cursor: pointer;
  position: absolute;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0.2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.styles-module_navigation__1pqAE:hover {
  opacity: 1;
}

@media (hover: none) {
  .styles-module_navigation__1pqAE:hover {
    opacity: 0.2;
  }
}

.styles-module_prev__KqFRp {
  left: 0;
}

.styles-module_next__1uQwZ {
  right: 0;
}

@media (max-width: 900px) {
  .styles-module_wrapper__1I_qj {
    padding: 0;
  }
}
`,C={wrapper:"styles-module_wrapper__1I_qj",content:"styles-module_content__2jwZj",slide:"styles-module_slide__1zrfk",image:"styles-module_image__2hdkJ",close:"styles-module_close__2I1sI",navigation:"styles-module_navigation__1pqAE",prev:"styles-module_prev__KqFRp",next:"styles-module_next__1uQwZ"};ve(be);const xe=t=>{var e;const[r,n]=S.useState((e=t.currentIndex)!==null&&e!==void 0?e:0),s=S.useCallback(c=>{let i=(r+c)%t.src.length;i<0&&(i=t.src.length-1),n(i)},[r]),o=S.useCallback(c=>{var i;if(!c.target||!t.closeOnClickOutside)return;const l=c.target.id==="ReactSimpleImageViewer",d=c.target.classList.contains("react-simple-image-viewer__slide");(l||d)&&(c.stopPropagation(),(i=t.onClose)===null||i===void 0||i.call(t))},[t.onClose]),u=S.useCallback(c=>{var i;c.key==="Escape"&&((i=t.onClose)===null||i===void 0||i.call(t)),["ArrowLeft","h"].includes(c.key)&&s(-1),["ArrowRight","l"].includes(c.key)&&s(1)},[t.onClose,s]),f=S.useCallback(c=>{c.wheelDeltaY>0?s(-1):s(1)},[s]);return S.useEffect(()=>(document.addEventListener("keydown",u),t.disableScroll||document.addEventListener("wheel",f),()=>{document.removeEventListener("keydown",u),t.disableScroll||document.removeEventListener("wheel",f)}),[u,f]),j.createElement("div",{id:"ReactSimpleImageViewer",className:`${C.wrapper} react-simple-image-viewer__modal`,onKeyDown:u,onClick:o,style:t.backgroundStyle},j.createElement("span",{className:`${C.close} react-simple-image-viewer__close`,onClick:()=>{var c;return(c=t.onClose)===null||c===void 0?void 0:c.call(t)}},t.closeComponent||"×"),t.src.length>1&&j.createElement("span",{className:`${C.navigation} ${C.prev} react-simple-image-viewer__previous`,onClick:()=>s(-1)},t.leftArrowComponent||"❮"),t.src.length>1&&j.createElement("span",{className:`${C.navigation} ${C.next} react-simple-image-viewer__next`,onClick:()=>s(1)},t.rightArrowComponent||"❯"),j.createElement("div",{className:`${C.content} react-simple-image-viewer__modal-content`,onClick:o},j.createElement("div",{className:`${C.slide} react-simple-image-viewer__slide`},j.createElement("img",{className:C.image,src:t.src[r],alt:""}))))};function _e({photos:t}){const[e,r]=S.useState(0),[n,s]=S.useState(!1),o=S.useCallback(f=>{r(f),s(!0)},[]),u=()=>{r(0),s(!1)};return a.jsxs("div",{children:[a.jsx("div",{className:"flex flex-wrap gap-4",children:t.map((f,c)=>a.jsx("img",{src:f.file,onClick:()=>o(c),style:{height:"200px"},alt:""},c))}),n&&a.jsx(xe,{src:t.map(f=>f.file),currentIndex:e,disableScroll:!1,closeOnClickOutside:!0,backgroundStyle:{backgroundColor:"rgba(0, 0, 0, 0.9)"},onClose:u})]})}var le={exports:{}},we="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pe=we,je=Pe;function de(){}function ce(){}ce.resetWarningCache=de;var Ne=function(){function t(n,s,o,u,f,c){if(c!==je){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ce,resetWarningCache:de};return r.PropTypes=r,r};le.exports=Ne();var Ee=le.exports;const m=X(Ee);var Ce=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,s,o;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(s=n;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(r).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[s]))return!1;for(s=n;s--!==0;){var u=o[s];if(!t(e[u],r[u]))return!1}return!0}return e!==e&&r!==r};const Se=X(Ce);var F={exports:{}},ue;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/ue=function(){var t={},e={};return t.on=function(r,n){var s={name:r,handler:n};return e[r]=e[r]||[],e[r].unshift(s),s},t.off=function(r){var n=e[r.name].indexOf(r);n!==-1&&e[r.name].splice(n,1)},t.trigger=function(r,n){var s=e[r],o;if(s)for(o=s.length;o--;)s[o].handler(n)},t};var ke=ue,q={exports:{}},Ae=function(e,r,n){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(n=r,r={}),r=r||{},n=n||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=e,r.attrs&&Ie(o,r.attrs),r.text&&(o.text=""+r.text);var u="onload"in o?ae:Oe;u(o,n),o.onload||ae(o,n),s.appendChild(o)};function Ie(t,e){for(var r in e)t.setAttribute(r,e[r])}function ae(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function Oe(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Ae,n=s(r);function s(o){return o&&o.__esModule?o:{default:o}}e.default=function(o){var u=new Promise(function(f){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){f(window.YT);return}else{var c=window.location.protocol==="http:"?"http:":"https:";(0,n.default)(c+"//www.youtube.com/iframe_api",function(l){l&&o.trigger("error",l)})}var i=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){i&&i(),f(window.YT)}});return u},t.exports=e.default})(q,q.exports);var Te=q.exports,B={exports:{}},$={exports:{}},Q={exports:{}},R=1e3,V=R*60,D=V*60,L=D*24,Re=L*365.25,Ve=function(t,e){e=e||{};var r=typeof t;if(r==="string"&&t.length>0)return De(t);if(r==="number"&&isNaN(t)===!1)return e.long?Ye(t):Le(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function De(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*Re;case"days":case"day":case"d":return r*L;case"hours":case"hour":case"hrs":case"hr":case"h":return r*D;case"minutes":case"minute":case"mins":case"min":case"m":return r*V;case"seconds":case"second":case"secs":case"sec":case"s":return r*R;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function Le(t){return t>=L?Math.round(t/L)+"d":t>=D?Math.round(t/D)+"h":t>=V?Math.round(t/V)+"m":t>=R?Math.round(t/R)+"s":t+"ms"}function Ye(t){return M(t,L,"day")||M(t,D,"hour")||M(t,V,"minute")||M(t,R,"second")||t+" ms"}function M(t,e,r){if(!(t<e))return t<e*1.5?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}(function(t,e){e=t.exports=s.debug=s.default=s,e.coerce=c,e.disable=u,e.enable=o,e.enabled=f,e.humanize=Ve,e.names=[],e.skips=[],e.formatters={};var r;function n(i){var l=0,d;for(d in i)l=(l<<5)-l+i.charCodeAt(d),l|=0;return e.colors[Math.abs(l)%e.colors.length]}function s(i){function l(){if(l.enabled){var d=l,h=+new Date,y=h-(r||h);d.diff=y,d.prev=r,d.curr=h,r=h;for(var p=new Array(arguments.length),v=0;v<p.length;v++)p[v]=arguments[v];p[0]=e.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");var g=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,function(b,w){if(b==="%%")return b;g++;var _=e.formatters[w];if(typeof _=="function"){var I=p[g];b=_.call(d,I),p.splice(g,1),g--}return b}),e.formatArgs.call(d,p);var x=l.log||e.log||console.log.bind(console);x.apply(d,p)}}return l.namespace=i,l.enabled=e.enabled(i),l.useColors=e.useColors(),l.color=n(i),typeof e.init=="function"&&e.init(l),l}function o(i){e.save(i),e.names=[],e.skips=[];for(var l=(typeof i=="string"?i:"").split(/[\s,]+/),d=l.length,h=0;h<d;h++)l[h]&&(i=l[h].replace(/\*/g,".*?"),i[0]==="-"?e.skips.push(new RegExp("^"+i.substr(1)+"$")):e.names.push(new RegExp("^"+i+"$")))}function u(){e.enable("")}function f(i){var l,d;for(l=0,d=e.skips.length;l<d;l++)if(e.skips[l].test(i))return!1;for(l=0,d=e.names.length;l<d;l++)if(e.names[l].test(i))return!0;return!1}function c(i){return i instanceof Error?i.stack||i.message:i}})(Q,Q.exports);var Me=Q.exports;(function(t,e){var r={};e=t.exports=Me,e.log=o,e.formatArgs=s,e.save=u,e.load=f,e.useColors=n,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function n(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(i){try{return JSON.stringify(i)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function s(i){var l=this.useColors;if(i[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+i[0]+(l?"%c ":" ")+"+"+e.humanize(this.diff),!!l){var d="color: "+this.color;i.splice(1,0,d,"color: inherit");var h=0,y=0;i[0].replace(/%[a-zA-Z%]/g,function(p){p!=="%%"&&(h++,p==="%c"&&(y=h))}),i.splice(y,0,d)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(i){try{i==null?e.storage.removeItem("debug"):e.storage.debug=i}catch{}}function f(){var i;try{i=e.storage.debug}catch{}return!i&&typeof process<"u"&&"env"in process&&(i=r.DEBUG),i}e.enable(f());function c(){try{return window.localStorage}catch{}}})($,$.exports);var ze=$.exports,G={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=e.default})(G,G.exports);var Ue=G.exports,W={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=e.default})(W,W.exports);var Fe=W.exports,K={exports:{}},J={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default})(J,J.exports);var qe=J.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=qe,n=s(r);function s(o){return o&&o.__esModule?o:{default:o}}e.default={pauseVideo:{acceptableStates:[n.default.ENDED,n.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[n.default.ENDED,n.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[n.default.ENDED,n.default.PLAYING,n.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default})(K,K.exports);var Be=K.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=ze,n=l(r),s=Ue,o=l(s),u=Fe,f=l(u),c=Be,i=l(c);function l(y){return y&&y.__esModule?y:{default:y}}var d=(0,n.default)("youtube-player"),h={};h.proxyEvents=function(y){var p={},v=function(O){var N="on"+O.slice(0,1).toUpperCase()+O.slice(1);p[N]=function(k){d('event "%s"',N,k),y.trigger(O,k)}},g=!0,x=!1,b=void 0;try{for(var w=f.default[Symbol.iterator](),_;!(g=(_=w.next()).done);g=!0){var I=_.value;v(I)}}catch(Y){x=!0,b=Y}finally{try{!g&&w.return&&w.return()}finally{if(x)throw b}}return p},h.promisifyPlayer=function(y){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,v={},g=function(N){p&&i.default[N]?v[N]=function(){for(var k=arguments.length,T=Array(k),E=0;E<k;E++)T[E]=arguments[E];return y.then(function(P){var A=i.default[N],fe=P.getPlayerState(),ee=P[N].apply(P,T);return A.stateChangeRequired||Array.isArray(A.acceptableStates)&&A.acceptableStates.indexOf(fe)===-1?new Promise(function(te){var pe=function re(){var he=P.getPlayerState(),ne=void 0;typeof A.timeout=="number"&&(ne=setTimeout(function(){P.removeEventListener("onStateChange",re),te()},A.timeout)),Array.isArray(A.acceptableStates)&&A.acceptableStates.indexOf(he)!==-1&&(P.removeEventListener("onStateChange",re),clearTimeout(ne),te())};P.addEventListener("onStateChange",pe)}).then(function(){return ee}):ee})}:v[N]=function(){for(var k=arguments.length,T=Array(k),E=0;E<k;E++)T[E]=arguments[E];return y.then(function(P){return P[N].apply(P,T)})}},x=!0,b=!1,w=void 0;try{for(var _=o.default[Symbol.iterator](),I;!(x=(I=_.next()).done);x=!0){var Y=I.value;g(Y)}}catch(O){b=!0,w=O}finally{try{!x&&_.return&&_.return()}finally{if(b)throw w}}return v},e.default=h,t.exports=e.default})(B,B.exports);var $e=B.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},n=ke,s=i(n),o=Te,u=i(o),f=$e,c=i(f);function i(d){return d&&d.__esModule?d:{default:d}}var l=void 0;e.default=function(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,p=(0,s.default)();if(l||(l=(0,u.default)(p)),h.events)throw new Error("Event handlers cannot be overwritten.");if(typeof d=="string"&&!document.getElementById(d))throw new Error('Element "'+d+'" does not exist.');h.events=c.default.proxyEvents(p);var v=new Promise(function(x){if((typeof d>"u"?"undefined":r(d))==="object"&&d.playVideo instanceof Function){var b=d;x(b)}else l.then(function(w){var _=new w.Player(d,h);return p.on("ready",function(){x(_)}),null})}),g=c.default.promisifyPlayer(v,y);return g.on=p.on,g.off=p.off,g},t.exports=e.default})(F,F.exports);var Qe=F.exports;const Ge=X(Qe);var We=Object.defineProperty,Ke=Object.defineProperties,Je=Object.getOwnPropertyDescriptors,se=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,ie=(t,e,r)=>e in t?We(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Z=(t,e)=>{for(var r in e||(e={}))Ze.call(e,r)&&ie(t,r,e[r]);if(se)for(var r of se(e))He.call(e,r)&&ie(t,r,e[r]);return t},H=(t,e)=>Ke(t,Je(e)),Xe=(t,e,r)=>new Promise((n,s)=>{var o=c=>{try{f(r.next(c))}catch(i){s(i)}},u=c=>{try{f(r.throw(c))}catch(i){s(i)}},f=c=>c.done?n(c.value):Promise.resolve(c.value).then(o,u);f((r=r.apply(t,e)).next())});function et(t,e){var r,n;if(t.videoId!==e.videoId)return!0;const s=((r=t.opts)==null?void 0:r.playerVars)||{},o=((n=e.opts)==null?void 0:n.playerVars)||{};return s.start!==o.start||s.end!==o.end}function oe(t={}){return H(Z({},t),{height:0,width:0,playerVars:H(Z({},t.playerVars),{autoplay:0,start:0,end:0})})}function tt(t,e){return t.videoId!==e.videoId||!Se(oe(t.opts),oe(e.opts))}function rt(t,e){var r,n,s,o;return t.id!==e.id||t.className!==e.className||((r=t.opts)==null?void 0:r.width)!==((n=e.opts)==null?void 0:n.width)||((s=t.opts)==null?void 0:s.height)!==((o=e.opts)==null?void 0:o.height)||t.iframeClassName!==e.iframeClassName||t.title!==e.title}var nt={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},at={videoId:m.string,id:m.string,className:m.string,iframeClassName:m.string,style:m.object,title:m.string,loading:m.oneOf(["lazy","eager"]),opts:m.objectOf(m.any),onReady:m.func,onError:m.func,onPlay:m.func,onPause:m.func,onEnd:m.func,onStateChange:m.func,onPlaybackRateChange:m.func,onPlaybackQualityChange:m.func},z=class extends j.Component{constructor(t){super(t),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var r,n;return(n=(r=this.props).onReady)==null?void 0:n.call(r,e)},this.onPlayerError=e=>{var r,n;return(n=(r=this.props).onError)==null?void 0:n.call(r,e)},this.onPlayerStateChange=e=>{var r,n,s,o,u,f,c,i;switch((n=(r=this.props).onStateChange)==null||n.call(r,e),e.data){case z.PlayerState.ENDED:(o=(s=this.props).onEnd)==null||o.call(s,e);break;case z.PlayerState.PLAYING:(f=(u=this.props).onPlay)==null||f.call(u,e);break;case z.PlayerState.PAUSED:(i=(c=this.props).onPause)==null||i.call(c,e);break}},this.onPlayerPlaybackRateChange=e=>{var r,n;return(n=(r=this.props).onPlaybackRateChange)==null?void 0:n.call(r,e)},this.onPlayerPlaybackQualityChange=e=>{var r,n;return(n=(r=this.props).onPlaybackQualityChange)==null?void 0:n.call(r,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=H(Z({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=Ge(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(r=>{this.props.title&&r.setAttribute("title",this.props.title),this.props.loading&&r.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(r=>{this.props.id?r.setAttribute("id",this.props.id):r.removeAttribute("id"),this.props.iframeClassName?r.setAttribute("class",this.props.iframeClassName):r.removeAttribute("class"),this.props.opts&&this.props.opts.width?r.setAttribute("width",this.props.opts.width.toString()):r.removeAttribute("width"),this.props.opts&&this.props.opts.height?r.setAttribute("height",this.props.opts.height.toString()):r.removeAttribute("height"),this.props.title?r.setAttribute("title",this.props.title):r.setAttribute("title","YouTube video player"),this.props.loading?r.setAttribute("loading",this.props.loading):r.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,r,n,s;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let o=!1;const u={videoId:this.props.videoId};if((r=this.props.opts)!=null&&r.playerVars&&(o=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(u.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(u.endSeconds=this.props.opts.playerVars.end)),o){(n=this.internalPlayer)==null||n.loadVideoById(u);return}(s=this.internalPlayer)==null||s.cueVideoById(u)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(t){return Xe(this,null,function*(){rt(t,this.props)&&this.updatePlayer(),tt(t,this.props)&&(yield this.resetPlayer()),et(t,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return j.createElement("div",{className:this.props.className,style:this.props.style},j.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},U=z;U.propTypes=at;U.defaultProps=nt;U.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var st=U;function it({video_profil:t}){const e=t.split("v=")[1],r=s=>{s.target.pauseVideo()},n={height:"390",width:"640",playerVars:{autoplay:1}};return a.jsx(st,{videoId:e,opts:n,onReady:r})}function ut({auth:t,users:e,pesantrenData:r}){const n=r.data,s={__html:n.deskripsi??""};return a.jsxs(ge,{user:t.user,header:a.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"View Pesantren"}),children:[a.jsx(me,{title:"Pesantren"}),a.jsx("div",{className:"sm:flex sm:items-center",children:a.jsxs("div",{className:"space-y-20 sm:flex-auto",children:[a.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-4 text-center",children:[n.logo&&a.jsx("img",{src:n.logo,alt:typeof n.logo=="string"?n.logo:"Pesantren Logo",className:"w-28 h-28"}),a.jsx("h1",{className:"text-5xl font-bold",children:n.name})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Informasi Umum"}),a.jsx("table",{className:"w-full mt-8 border-collapse",children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Alamat Lengkap"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.alamat})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Kecamatan"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.kecamatan})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Pendiri"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.pendiri})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Pengasuh"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.pengasuh})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Tanggal Berdiri"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.tanggal_berdiri?new Date(n.tanggal_berdiri).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}):""})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Program Unggulan"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.program_unggulan})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Jumlah Santri"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.jumlah_santri})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Kontak"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.contact})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Gender"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.gender==="putra_putri"?"Putra & Putri":n.gender})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Program"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.program&&n.program.join(", ")})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Tingkat"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:n.tingkat&&n.tingkat.join(", ")})]})]})})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Deskripsi Pesantren"}),n.deskripsi?a.jsx("div",{className:"px-4 py-2 rounded-md bg-slate-50",children:a.jsx("article",{className:"font-light prose text-md prose-slate prose-strong:font-black prose-h3:text-2xl prose-h3:font-light prose-a:text-blue-600",children:a.jsx("div",{dangerouslySetInnerHTML:s})})}):a.jsx("p",{className:"text-center",children:"Belum ada deskripsi pesantren untuk saat ini"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Sosial Media Pesantren"}),a.jsx("table",{className:"w-full mt-8 border-collapse",children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Facebook"}),a.jsx("td",{className:"w-3/4 p-2 border",children:a.jsx("a",{href:n.media.facebook,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline",children:n.media.facebook})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Instagram"}),a.jsx("td",{className:"w-3/4 p-2 border",children:a.jsx("a",{href:n.media.instagram,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline",children:n.media.instagram})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Youtube"}),a.jsx("td",{className:"w-3/4 p-2 border",children:a.jsx("a",{href:n.media.youtube,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline",children:n.media.youtube})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Tiktok"}),a.jsx("td",{className:"w-3/4 p-2 border",children:a.jsx("a",{href:n.media.tiktok,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline",children:n.media.tiktok})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Twitter"}),a.jsx("td",{className:"w-3/4 p-2 border",children:a.jsx("a",{href:n.media.twitter,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline",children:n.media.twitter})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:"Website"}),a.jsx("td",{className:"w-3/4 p-2 border",children:a.jsx("a",{href:n.media.website,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline",children:n.media.website})})]}),"                                  "]})})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Data Validitas Pesantren"}),a.jsx("table",{className:"w-full mt-8 border-collapse",children:a.jsx("tbody",{children:["kemenag","rmi"].map(o=>{var u;return a.jsxs("tr",{children:[a.jsx("td",{className:"w-1/4 p-2 font-semibold border",children:o==="kemenag"?"Kementerian Agama":"RMI NU"}),a.jsx("td",{className:"w-3/4 p-2 capitalize border",children:Array.isArray(n.validasi)&&n.validasi.find(f=>f.kategori_validasi===o&&f.file)&&a.jsx("a",{href:(u=n.validasi.find(f=>f.kategori_validasi===o))==null?void 0:u.file,target:"_blank",rel:"noopener noreferrer",children:a.jsx("button",{className:"px-4 py-2 font-normal text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",children:"Buka File"})})})]},o)})})})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Galeri Pesantren"}),n.photos.length>0&&a.jsx(_e,{photos:n.photos})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Video Profil Pesantren"}),n.video_profil&&a.jsx(it,{video_profil:n.video_profil})]}),a.jsx("div",{className:"px-4 py-3 text-right sm:px-6",children:a.jsx("button",{children:a.jsx(ye,{href:route("pesantren.index"),className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center",children:"Back"})})})]})})]})}export{ut as default};
