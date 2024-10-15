import{W as p,j as e,a as f}from"./app-DyBQa7Co.js";import{I as n}from"./InputError-CcR4kwww.js";function v({dataRole:i,user:o}){const d=o==null?void 0:o.roles.map(s=>s.id),{data:t,setData:a,post:l,put:m,errors:r,reset:b}=p({name:(o==null?void 0:o.name)||"",email:(o==null?void 0:o.email)||"",password:"",password_confirmation:"",status:(o==null?void 0:o.status)||"active",roles:d||[]}),c=s=>{const g=Array.from(s.target.selectedOptions).map(x=>parseInt(x.value,10));a("roles",g)};function u(s){s.preventDefault(),o?m(route("user.update",o.id)):l(route("user.store"))}return e.jsxs("form",{className:"space-y-6",onSubmit:u,children:[e.jsxs("div",{className:"grid grid-cols-6 gap-6",children:[e.jsxs("div",{className:"col-span-6 sm:col-span-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{value:t.name,onChange:s=>a("name",s.target.value),type:"text",id:"name",className:`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${r.name?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":""}`}),e.jsx(n,{message:r.name})]}),e.jsxs("div",{className:"col-span-6 sm:col-span-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"E-mail"}),e.jsx("input",{value:t.email,onChange:s=>a("email",s.target.value),type:"email",id:"email",className:`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${r.name?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":""}`}),e.jsx(n,{message:r.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-6",children:[e.jsxs("div",{className:"col-span-6 sm:col-span-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsx("input",{value:t.password,onChange:s=>a("password",s.target.value),type:"password",id:"password",className:`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${r.name?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":""}`}),e.jsx(n,{message:r.password})]}),e.jsxs("div",{className:"col-span-6 sm:col-span-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),e.jsx("input",{value:t.password_confirmation,onChange:s=>a("password_confirmation",s.target.value),type:"password",id:"password_confirmation",className:`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${r.name?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":""}`}),e.jsx(n,{message:r.password_confirmation})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-6",children:[e.jsxs("div",{className:"col-span-6 sm:col-span-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Status"}),e.jsxs("select",{defaultValue:t.status,onChange:s=>a("status",s.target.value),id:"status",name:"status",className:`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${r.status?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":""}`,children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]}),e.jsx(n,{message:r.status})]}),e.jsxs("div",{className:"col-span-6 sm:col-span-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Role"}),e.jsx("select",{defaultValue:d==null?void 0:d.map(s=>s.toString()),multiple:!0,onChange:c,id:"roles",name:"roles",className:`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${r.roles?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":""}`,children:i.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))}),e.jsx(n,{message:r.roles})]})]}),e.jsxs("div",{className:"px-4 py-3 text-right sm:px-6",children:[e.jsx(f,{href:route("user.index"),className:"inline-flex items-center px-4 py-2 mr-4 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Cancel"}),e.jsx("button",{type:"submit",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})]})]})}export{v as U};