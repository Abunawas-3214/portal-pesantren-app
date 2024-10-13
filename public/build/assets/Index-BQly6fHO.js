import{j as e,a as t,y as i,Y as o}from"./app-B-Baqz4c.js";import{A as a}from"./AuthenticatedLayout-B6xbDHMS.js";import{T as n}from"./table-user-B_eKFzPD.js";import{P as l,T as d}from"./trash-Bl-CmOEh.js";import"./transition-EgPijd1Y.js";import"./logo_rmi-CAq1HG6M.js";import"./chevrons-right-B0iVWwK1.js";import"./createLucideIcon-BgJ3oW2k.js";function c(s){confirm("Are you sure you want to delete this user?")&&i.delete(route("user.destroy",s),{preserveScroll:!0})}const m=[{accessorKey:"id",header:"ID"},{accessorKey:"name",header:"Name"},{accessorKey:"email",header:"Email"},{accessorKey:"status",header:"Status"},{accessorKey:"role",header:"Role",cell:({row:s})=>s.original.roles?e.jsx("div",{className:"flex flex-wrap gap-2",children:s.original.roles.map(r=>e.jsx("div",{className:"p-1 rounded-md bg-slate-200 w-fit",children:r.name},r.id))}):e.jsx("div",{children:"No role"})},{accessorKey:"action",header:"Action",cell:({row:s})=>{const r=s.original.id;return e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(t,{href:route("user.edit",{id:r}),className:"inline-flex items-center justify-center p-2 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 sm:w-auto",children:e.jsx(l,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>c(r),className:"inline-flex items-center justify-center p-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto",children:e.jsx(d,{className:"w-4 h-4"})})]})}}];function b({auth:s,users:r}){return e.jsxs(a,{user:s.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"User"}),children:[e.jsx(o,{title:"User"}),e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"space-y-1 sm:flex-auto",children:[e.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"User List"}),e.jsx("p",{className:"text-sm text-gray-700",children:"A list of all Users."})]}),e.jsx("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e.jsx(t,{href:route("user.create"),className:"inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",children:"Add User"})})]}),e.jsx("div",{children:e.jsx(n,{columns:m,data:r.data})})]})}export{b as default};
