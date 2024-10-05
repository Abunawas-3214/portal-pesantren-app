import{r as u,j as a,a as _,q as U}from"./app-2ReULWO2.js";import{X as q}from"./transition-BoH270hh.js";import{r as Y}from"./logo_rmi-CAq1HG6M.js";const I=u.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),D=({children:e})=>{const[t,r]=u.useState(!1),s=()=>{r(i=>!i)};return a.jsx(I.Provider,{value:{open:t,setOpen:r,toggleOpen:s},children:a.jsx("div",{className:"relative",children:e})})},Z=({children:e})=>{const{open:t,setOpen:r,toggleOpen:s}=u.useContext(I);return a.jsxs(a.Fragment,{children:[a.jsx("div",{onClick:s,children:e}),t&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},G=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white",children:s})=>{const{open:i,setOpen:o}=u.useContext(I);let n="origin-top";e==="left"?n="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(n="ltr:origin-top-right rtl:origin-top-left end-0");let l="";return t==="48"&&(l="w-48"),a.jsx(a.Fragment,{children:a.jsx(q,{show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:a.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${n} ${l}`,onClick:()=>o(!1),children:a.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:s})})})})},J=({className:e="",children:t,...r})=>a.jsx(_,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+e,children:t});D.Trigger=Z;D.Content=G;D.Link=J;const N=D;function j({active:e=!1,className:t="",children:r,...s}){return a.jsx(_,{...s,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t,children:r})}function T({active:e=!1,className:t="",children:r,...s}){return a.jsx(_,{...s,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${e?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:r})}let Q={data:""},V=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Q,K=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ee=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,b=(e,t)=>{let r="",s="",i="";for(let o in e){let n=e[o];o[0]=="@"?o[1]=="i"?r=o+" "+n+";":s+=o[1]=="f"?b(n,o):o+"{"+b(n,o[1]=="k"?"":t)+"}":typeof n=="object"?s+=b(n,t?t.replace(/([^,])+/g,l=>o.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):o):n!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=b.p?b.p(o,n):o+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+s},x={},B=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+B(e[r]);return t}return e},te=(e,t,r,s,i)=>{let o=B(e),n=x[o]||(x[o]=(d=>{let c=0,p=11;for(;c<d.length;)p=101*p+d.charCodeAt(c++)>>>0;return"go"+p})(o));if(!x[n]){let d=o!==e?e:(c=>{let p,g,f=[{}];for(;p=K.exec(c.replace(ee,""));)p[4]?f.shift():p[3]?(g=p[3].replace(S," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(S," ").trim();return f[0]})(e);x[n]=b(i?{["@keyframes "+n]:d}:d,r?"":"."+n)}let l=r&&x.g?x.g:null;return r&&(x.g=x[n]),((d,c,p,g)=>{g?c.data=c.data.replace(g,d):c.data.indexOf(d)===-1&&(c.data=p?d+c.data:c.data+d)})(x[n],t,s,l),n},re=(e,t,r)=>e.reduce((s,i,o)=>{let n=t[o];if(n&&n.call){let l=n(r),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;n=d?"."+d:l&&typeof l=="object"?l.props?"":b(l,""):l===!1?"":l}return s+i+(n??"")},"");function M(e){let t=this||{},r=e.call?e(t.p):e;return te(r.unshift?r.raw?re(r,[].slice.call(arguments,1),t.p):r.reduce((s,i)=>Object.assign(s,i&&i.call?i(t.p):i),{}):r,V(t.target),t.g,t.o,t.k)}let W,z,A;M.bind({g:1});let y=M.bind({k:1});function se(e,t,r,s){b.p=t,W=e,z=r,A=s}function v(e,t){let r=this||{};return function(){let s=arguments;function i(o,n){let l=Object.assign({},o),d=l.className||i.className;r.p=Object.assign({theme:z&&z()},l),r.o=/ *go\d+/.test(d),l.className=M.apply(r,s)+(d?" "+d:"");let c=e;return e[0]&&(c=l.as||e,delete l.as),A&&c[0]&&A(l),W(c,l)}return i}}var ae=e=>typeof e=="function",L=(e,t)=>ae(e)?e(t):e,oe=(()=>{let e=0;return()=>(++e).toString()})(),X=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ie=20,$=new Map,ne=1e3,R=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),w({type:4,toastId:e})},ne);$.set(e,t)},le=e=>{let t=$.get(e);t&&clearTimeout(t)},F=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ie)};case 1:return t.toast.id&&le(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:r}=t;return e.toasts.find(o=>o.id===r.id)?F(e,{type:1,toast:r}):F(e,{type:0,toast:r});case 3:let{toastId:s}=t;return s?R(s):e.toasts.forEach(o=>{R(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===s||s===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},C=[],O={toasts:[],pausedAt:void 0},w=e=>{O=F(O,e),C.forEach(t=>{t(O)})},de={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ce=(e={})=>{let[t,r]=u.useState(O);u.useEffect(()=>(C.push(r),()=>{let i=C.indexOf(r);i>-1&&C.splice(i,1)}),[t]);let s=t.toasts.map(i=>{var o,n;return{...e,...e[i.type],...i,duration:i.duration||((o=e[i.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||de[i.type],style:{...e.style,...(n=e[i.type])==null?void 0:n.style,...i.style}}});return{...t,toasts:s}},ue=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||oe()}),k=e=>(t,r)=>{let s=ue(t,e,r);return w({type:2,toast:s}),s.id},m=(e,t)=>k("blank")(e,t);m.error=k("error");m.success=k("success");m.loading=k("loading");m.custom=k("custom");m.dismiss=e=>{w({type:3,toastId:e})};m.remove=e=>w({type:4,toastId:e});m.promise=(e,t,r)=>{let s=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(i=>(m.success(L(t.success,i),{id:s,...r,...r==null?void 0:r.success}),i)).catch(i=>{m.error(L(t.error,i),{id:s,...r,...r==null?void 0:r.error})}),e};var pe=(e,t)=>{w({type:1,toast:{id:e,height:t}})},me=()=>{w({type:5,time:Date.now()})},fe=e=>{let{toasts:t,pausedAt:r}=ce(e);u.useEffect(()=>{if(r)return;let o=Date.now(),n=t.map(l=>{if(l.duration===1/0)return;let d=(l.duration||0)+l.pauseDuration-(o-l.createdAt);if(d<0){l.visible&&m.dismiss(l.id);return}return setTimeout(()=>m.dismiss(l.id),d)});return()=>{n.forEach(l=>l&&clearTimeout(l))}},[t,r]);let s=u.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),i=u.useCallback((o,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},p=t.filter(h=>(h.position||c)===(o.position||c)&&h.height),g=p.findIndex(h=>h.id===o.id),f=p.filter((h,P)=>P<g&&h.visible).length;return p.filter(h=>h.visible).slice(...l?[f+1]:[0,f]).reduce((h,P)=>h+(P.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:pe,startPause:me,endPause:s,calculateOffset:i}}},ge=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,he=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ye=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${he} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${xe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,be=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ve=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${be} 1s linear infinite;
`,je=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,we=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ne=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${je} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${we} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ke=v("div")`
  position: absolute;
`,Ee=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$e=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ce=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$e} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Oe=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?u.createElement(Ce,null,t):t:r==="blank"?null:u.createElement(Ee,null,u.createElement(ve,{...s}),r!=="loading"&&u.createElement(ke,null,r==="error"?u.createElement(ye,{...s}):u.createElement(Ne,{...s})))},Le=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,_e=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,De="0%{opacity:0;} 100%{opacity:1;}",Me="0%{opacity:1;} 100%{opacity:0;}",Pe=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Te=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ze=(e,t)=>{let r=e.includes("top")?1:-1,[s,i]=X()?[De,Me]:[Le(r),_e(r)];return{animation:t?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ae=u.memo(({toast:e,position:t,style:r,children:s})=>{let i=e.height?ze(e.position||t||"top-center",e.visible):{opacity:0},o=u.createElement(Oe,{toast:e}),n=u.createElement(Te,{...e.ariaProps},L(e.message,e));return u.createElement(Pe,{className:e.className,style:{...i,...r,...e.style}},typeof s=="function"?s({icon:o,message:n}):u.createElement(u.Fragment,null,o,n))});se(u.createElement);var Fe=({id:e,className:t,style:r,onHeightUpdate:s,children:i})=>{let o=u.useCallback(n=>{if(n){let l=()=>{let d=n.getBoundingClientRect().height;s(e,d)};l(),new MutationObserver(l).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return u.createElement("div",{ref:o,className:t,style:r},i)},Ie=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:X()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...i}},Se=M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Re=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:i,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:d}=fe(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...o},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(c=>{let p=c.position||t,g=d.calculateOffset(c,{reverseOrder:e,gutter:s,defaultPosition:t}),f=Ie(p,g);return u.createElement(Fe,{id:c.id,key:c.id,onHeightUpdate:d.updateHeight,className:c.visible?Se:"",style:f},c.type==="custom"?L(c.message,c):i?i(c):u.createElement(Ae,{toast:c,position:p}))}))},H=m;function He(){const e=U();return u.useEffect(()=>{var t,r,s,i;((r=(t=e==null?void 0:e.props)==null?void 0:t.message)==null?void 0:r.type)==="success"?H.success(e.props.message.body,{position:"top-right",duration:5e3}):((i=(s=e==null?void 0:e.props)==null?void 0:s.message)==null?void 0:i.type)==="error"&&H.error(e.props.message.body,{position:"top-right",duration:5e3})},[e.props.message]),a.jsx(a.Fragment,{children:a.jsx(Re,{})})}function Xe({user:e,header:t,children:r}){const s=U(),[i,o]=u.useState(!1);return a.jsxs("div",{className:"min-h-screen bg-gray-100",children:[a.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[a.jsx("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between h-16",children:[a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex items-center shrink-0",children:a.jsx(_,{href:"/",children:a.jsx("img",{src:Y,alt:"Logo RMI",className:"block w-auto h-9"})})}),a.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[a.jsx(j,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),(s.props.can.pesantren_access_all||s.props.can.pesantren_access_self)&&a.jsx(j,{href:route("pesantren.index"),active:route().current("pesantren.index"),children:"Pesantren"}),(s.props.can.post_access_all||s.props.can.post_access_self)&&a.jsx(j,{href:route("post.index"),active:route().current("post.index"),children:"Post"}),s.props.can.category_access&&a.jsx(j,{href:route("category.index"),active:route().current("category.index"),children:"Category"}),(s.props.can.pesantren_access_all||s.props.can.pesantren_access_self)&&a.jsx(j,{href:route("usaha.index"),active:route().current("usaha.index"),children:"Usaha"}),s.props.can.user_access&&a.jsx(j,{href:route("user.index"),active:route().current("user.index"),children:"User"}),s.props.can.role_access&&a.jsx(j,{href:route("role.index"),active:route().current("role.index"),children:"Role"})]})]}),a.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:a.jsx("div",{className:"relative ms-3",children:a.jsxs(N,{children:[a.jsx(N.Trigger,{children:a.jsx("span",{className:"inline-flex rounded-md",children:a.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none",children:[e.name,a.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),a.jsxs(N.Content,{children:[a.jsx(N.Link,{href:route("profile.edit"),children:"Profile"}),a.jsx(N.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),a.jsx("div",{className:"flex items-center -me-2 sm:hidden",children:a.jsx("button",{onClick:()=>o(n=>!n),className:"inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500",children:a.jsxs("svg",{className:"w-6 h-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),a.jsx("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),a.jsxs("div",{className:(i?"block":"hidden")+" sm:hidden",children:[a.jsx("div",{className:"pt-2 pb-3 space-y-1",children:a.jsx(T,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),a.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[a.jsxs("div",{className:"px-4",children:[a.jsx("div",{className:"text-base font-medium text-gray-800",children:e.name}),a.jsx("div",{className:"text-sm font-medium text-gray-500",children:e.email})]}),a.jsxs("div",{className:"mt-3 space-y-1",children:[a.jsx(T,{href:route("profile.edit"),children:"Profile"}),a.jsx(T,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&a.jsx("header",{className:"bg-white shadow",children:a.jsx("div",{className:"px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8",children:t})}),a.jsx("main",{children:a.jsx("div",{className:"py-10 bg-gray-100",children:a.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:a.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-6 space-y-8 text-gray-900",children:r})})})})}),a.jsx(He,{})]})}export{Xe as A};
