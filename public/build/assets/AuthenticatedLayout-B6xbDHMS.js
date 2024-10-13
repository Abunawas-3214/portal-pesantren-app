import{r as p,j as a,a as D,q as H}from"./app-B-Baqz4c.js";import{X as q}from"./transition-EgPijd1Y.js";import{r as Y}from"./logo_rmi-CAq1HG6M.js";const I=p.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),P=({children:e})=>{const[t,r]=p.useState(!1),s=()=>{r(n=>!n)};return a.jsx(I.Provider,{value:{open:t,setOpen:r,toggleOpen:s},children:a.jsx("div",{className:"relative",children:e})})},Z=({children:e})=>{const{open:t,setOpen:r,toggleOpen:s}=p.useContext(I);return a.jsxs(a.Fragment,{children:[a.jsx("div",{onClick:s,children:e}),t&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},G=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white",children:s})=>{const{open:n,setOpen:o}=p.useContext(I);let i="origin-top";e==="left"?i="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(i="ltr:origin-top-right rtl:origin-top-left end-0");let l="";return t==="48"&&(l="w-48"),a.jsx(a.Fragment,{children:a.jsx(q,{show:n,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:a.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${i} ${l}`,onClick:()=>o(!1),children:a.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:s})})})})},J=({className:e="",children:t,...r})=>a.jsx(D,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+e,children:t});P.Trigger=Z;P.Content=G;P.Link=J;const k=P;function w({active:e=!1,className:t="",children:r,...s}){return a.jsx(D,{...s,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t,children:r})}function g({active:e=!1,className:t="",children:r,...s}){return a.jsx(D,{...s,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${e?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:r})}let Q={data:""},V=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Q,K=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ee=/\/\*[^]*?\*\/|  +/g,R=/\n+/g,v=(e,t)=>{let r="",s="",n="";for(let o in e){let i=e[o];o[0]=="@"?o[1]=="i"?r=o+" "+i+";":s+=o[1]=="f"?v(i,o):o+"{"+v(i,o[1]=="k"?"":t)+"}":typeof i=="object"?s+=v(i,t?t.replace(/([^,])+/g,l=>o.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):o):i!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=v.p?v.p(o,i):o+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+s},y={},B=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+B(e[r]);return t}return e},te=(e,t,r,s,n)=>{let o=B(e),i=y[o]||(y[o]=(c=>{let d=0,u=11;for(;d<c.length;)u=101*u+c.charCodeAt(d++)>>>0;return"go"+u})(o));if(!y[i]){let c=o!==e?e:(d=>{let u,h,x=[{}];for(;u=K.exec(d.replace(ee,""));)u[4]?x.shift():u[3]?(h=u[3].replace(R," ").trim(),x.unshift(x[0][h]=x[0][h]||{})):x[0][u[1]]=u[2].replace(R," ").trim();return x[0]})(e);y[i]=v(n?{["@keyframes "+i]:c}:c,r?"":"."+i)}let l=r&&y.g?y.g:null;return r&&(y.g=y[i]),((c,d,u,h)=>{h?d.data=d.data.replace(h,c):d.data.indexOf(c)===-1&&(d.data=u?c+d.data:d.data+c)})(y[i],t,s,l),i},re=(e,t,r)=>e.reduce((s,n,o)=>{let i=t[o];if(i&&i.call){let l=i(r),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;i=c?"."+c:l&&typeof l=="object"?l.props?"":v(l,""):l===!1?"":l}return s+n+(i??"")},"");function M(e){let t=this||{},r=e.call?e(t.p):e;return te(r.unshift?r.raw?re(r,[].slice.call(arguments,1),t.p):r.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):r,V(t.target),t.g,t.o,t.k)}let W,z,A;M.bind({g:1});let b=M.bind({k:1});function se(e,t,r,s){v.p=t,W=e,z=r,A=s}function j(e,t){let r=this||{};return function(){let s=arguments;function n(o,i){let l=Object.assign({},o),c=l.className||n.className;r.p=Object.assign({theme:z&&z()},l),r.o=/ *go\d+/.test(c),l.className=M.apply(r,s)+(c?" "+c:"");let d=e;return e[0]&&(d=l.as||e,delete l.as),A&&d[0]&&A(l),W(d,l)}return n}}var ae=e=>typeof e=="function",L=(e,t)=>ae(e)?e(t):e,oe=(()=>{let e=0;return()=>(++e).toString()})(),X=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ne=20,C=new Map,ie=1e3,S=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),N({type:4,toastId:e})},ie);C.set(e,t)},le=e=>{let t=C.get(e);t&&clearTimeout(t)},F=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ne)};case 1:return t.toast.id&&le(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:r}=t;return e.toasts.find(o=>o.id===r.id)?F(e,{type:1,toast:r}):F(e,{type:0,toast:r});case 3:let{toastId:s}=t;return s?S(s):e.toasts.forEach(o=>{S(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===s||s===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+n}))}}},$=[],O={toasts:[],pausedAt:void 0},N=e=>{O=F(O,e),$.forEach(t=>{t(O)})},ce={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},de=(e={})=>{let[t,r]=p.useState(O);p.useEffect(()=>($.push(r),()=>{let n=$.indexOf(r);n>-1&&$.splice(n,1)}),[t]);let s=t.toasts.map(n=>{var o,i;return{...e,...e[n.type],...n,duration:n.duration||((o=e[n.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||ce[n.type],style:{...e.style,...(i=e[n.type])==null?void 0:i.style,...n.style}}});return{...t,toasts:s}},pe=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||oe()}),_=e=>(t,r)=>{let s=pe(t,e,r);return N({type:2,toast:s}),s.id},m=(e,t)=>_("blank")(e,t);m.error=_("error");m.success=_("success");m.loading=_("loading");m.custom=_("custom");m.dismiss=e=>{N({type:3,toastId:e})};m.remove=e=>N({type:4,toastId:e});m.promise=(e,t,r)=>{let s=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(n=>(m.success(L(t.success,n),{id:s,...r,...r==null?void 0:r.success}),n)).catch(n=>{m.error(L(t.error,n),{id:s,...r,...r==null?void 0:r.error})}),e};var ue=(e,t)=>{N({type:1,toast:{id:e,height:t}})},me=()=>{N({type:5,time:Date.now()})},xe=e=>{let{toasts:t,pausedAt:r}=de(e);p.useEffect(()=>{if(r)return;let o=Date.now(),i=t.map(l=>{if(l.duration===1/0)return;let c=(l.duration||0)+l.pauseDuration-(o-l.createdAt);if(c<0){l.visible&&m.dismiss(l.id);return}return setTimeout(()=>m.dismiss(l.id),c)});return()=>{i.forEach(l=>l&&clearTimeout(l))}},[t,r]);let s=p.useCallback(()=>{r&&N({type:6,time:Date.now()})},[r]),n=p.useCallback((o,i)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=i||{},u=t.filter(f=>(f.position||d)===(o.position||d)&&f.height),h=u.findIndex(f=>f.id===o.id),x=u.filter((f,T)=>T<h&&f.visible).length;return u.filter(f=>f.visible).slice(...l?[x+1]:[0,x]).reduce((f,T)=>f+(T.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:ue,startPause:me,endPause:s,calculateOffset:n}}},he=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fe=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ye=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${he} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fe} 0.15s ease-out forwards;
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
    animation: ${ge} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,be=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ve=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${be} 1s linear infinite;
`,je=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,we=b`
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
}`,Ne=j("div")`
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
`,ke=j("div")`
  position: absolute;
`,_e=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ee=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ce=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$e=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?p.createElement(Ce,null,t):t:r==="blank"?null:p.createElement(_e,null,p.createElement(ve,{...s}),r!=="loading"&&p.createElement(ke,null,r==="error"?p.createElement(ye,{...s}):p.createElement(Ne,{...s})))},Oe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Le=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,De="0%{opacity:0;} 100%{opacity:1;}",Pe="0%{opacity:1;} 100%{opacity:0;}",Me=j("div")`
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
`,Te=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ze=(e,t)=>{let r=e.includes("top")?1:-1,[s,n]=X()?[De,Pe]:[Oe(r),Le(r)];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ae=p.memo(({toast:e,position:t,style:r,children:s})=>{let n=e.height?ze(e.position||t||"top-center",e.visible):{opacity:0},o=p.createElement($e,{toast:e}),i=p.createElement(Te,{...e.ariaProps},L(e.message,e));return p.createElement(Me,{className:e.className,style:{...n,...r,...e.style}},typeof s=="function"?s({icon:o,message:i}):p.createElement(p.Fragment,null,o,i))});se(p.createElement);var Fe=({id:e,className:t,style:r,onHeightUpdate:s,children:n})=>{let o=p.useCallback(i=>{if(i){let l=()=>{let c=i.getBoundingClientRect().height;s(e,c)};l(),new MutationObserver(l).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return p.createElement("div",{ref:o,className:t,style:r},n)},Ie=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:X()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...n}},Re=M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Se=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:n,containerStyle:o,containerClassName:i})=>{let{toasts:l,handlers:c}=xe(r);return p.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...o},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(d=>{let u=d.position||t,h=c.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:t}),x=Ie(u,h);return p.createElement(Fe,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Re:"",style:x},d.type==="custom"?L(d.message,d):n?n(d):p.createElement(Ae,{toast:d,position:u}))}))},U=m;function Ue(){const e=H();return p.useEffect(()=>{var t,r,s,n;((r=(t=e==null?void 0:e.props)==null?void 0:t.message)==null?void 0:r.type)==="success"?U.success(e.props.message.body,{position:"top-right",duration:5e3}):((n=(s=e==null?void 0:e.props)==null?void 0:s.message)==null?void 0:n.type)==="error"&&U.error(e.props.message.body,{position:"top-right",duration:5e3})},[e.props.message]),a.jsx(a.Fragment,{children:a.jsx(Se,{})})}function Xe({user:e,header:t,children:r}){const s=H(),[n,o]=p.useState(!1);return a.jsxs("div",{className:"min-h-screen bg-gray-100",children:[a.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[a.jsx("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between h-16",children:[a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex items-center shrink-0",children:a.jsx(D,{href:"/",children:a.jsx("img",{src:Y,alt:"Logo RMI",className:"block w-auto h-9"})})}),a.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[a.jsx(w,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),(s.props.can.pesantren_access_all||s.props.can.pesantren_access_self)&&a.jsx(w,{href:route("pesantren.index"),active:route().current("pesantren.index"),children:"Pesantren"}),(s.props.can.post_access_all||s.props.can.post_access_self)&&a.jsx(w,{href:route("post.index"),active:route().current("post.index"),children:"Post"}),s.props.can.category_access&&a.jsx(w,{href:route("category.index"),active:route().current("category.index"),children:"Category"}),(s.props.can.pesantren_access_all||s.props.can.pesantren_access_self)&&a.jsx(w,{href:route("usaha.index"),active:route().current("usaha.index"),children:"Usaha"}),s.props.can.user_access&&a.jsx(w,{href:route("user.index"),active:route().current("user.index"),children:"User"}),s.props.can.role_access&&a.jsx(w,{href:route("role.index"),active:route().current("role.index"),children:"Role"})]})]}),a.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:a.jsx("div",{className:"relative ms-3",children:a.jsxs(k,{children:[a.jsx(k.Trigger,{children:a.jsx("span",{className:"inline-flex rounded-md",children:a.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none",children:[e.name,a.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),a.jsxs(k.Content,{children:[a.jsx(k.Link,{href:route("profile.edit"),children:"Profile"}),a.jsx(k.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),a.jsx("div",{className:"flex items-center -me-2 sm:hidden",children:a.jsx("button",{onClick:()=>o(i=>!i),className:"inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500",children:a.jsxs("svg",{className:"w-6 h-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("path",{className:n?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),a.jsx("path",{className:n?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),a.jsxs("div",{className:(n?"block":"hidden")+" sm:hidden",children:[a.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[a.jsx(g,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),(s.props.can.pesantren_access_all||s.props.can.pesantren_access_self)&&a.jsx(g,{href:route("pesantren.index"),active:route().current("pesantren.index"),children:"Pesantren"}),(s.props.can.post_access_all||s.props.can.post_access_self)&&a.jsx(g,{href:route("post.index"),active:route().current("post.index"),children:"Post"}),s.props.can.category_access&&a.jsx(g,{href:route("category.index"),active:route().current("category.index"),children:"Category"}),(s.props.can.pesantren_access_all||s.props.can.pesantren_access_self)&&a.jsx(g,{href:route("usaha.index"),active:route().current("usaha.index"),children:"Usaha"}),s.props.can.user_access&&a.jsx(g,{href:route("user.index"),active:route().current("user.index"),children:"User"}),s.props.can.role_access&&a.jsx(g,{href:route("role.index"),active:route().current("role.index"),children:"Role"})]}),a.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[a.jsxs("div",{className:"px-4",children:[a.jsx("div",{className:"text-base font-medium text-gray-800",children:e.name}),a.jsx("div",{className:"text-sm font-medium text-gray-500",children:e.email})]}),a.jsxs("div",{className:"mt-3 space-y-1",children:[a.jsx(g,{href:route("profile.edit"),children:"Profile"}),a.jsx(g,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&a.jsx("header",{className:"bg-white shadow",children:a.jsx("div",{className:"px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8",children:t})}),a.jsx("main",{children:a.jsx("div",{className:"py-10 bg-gray-100",children:a.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:a.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-6 space-y-8 text-gray-900",children:r})})})})}),a.jsx(Ue,{})]})}export{Xe as A};
