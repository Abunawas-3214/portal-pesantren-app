import{j as e}from"./app-B-Baqz4c.js";import{u as n,f as a,g as i,a as d,b as c}from"./trash-Bl-CmOEh.js";import{C as u,a as g,b as x,c as m}from"./chevrons-right-B0iVWwK1.js";function h({data:s}){return e.jsxs("div",{className:"flex items-center justify-end space-x-8",children:[e.jsxs("div",{className:"flex space-x-2 items-center justify-center",children:[e.jsx("p",{children:"Show per pages"}),e.jsx("select",{value:s.getState().pagination.pageSize,onChange:l=>{s.setPageSize(Number(l.target.value))},className:"h-10 w-16 rounded-md border border-slate-200 bg-background px-2 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",children:[10,20,30,40,50].map(l=>e.jsx("option",{value:l,children:l},l))})]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("div",{children:"Page"}),e.jsxs("strong",{children:[s.getState().pagination.pageIndex+1," of"," ",s.getPageCount()]})]}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{className:"border rounded h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>s.setPageIndex(0),disabled:!s.getCanPreviousPage(),children:e.jsx(u,{className:"h-4 w-4"})}),e.jsx("button",{className:"border rounded h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>s.previousPage(),disabled:!s.getCanPreviousPage(),children:e.jsx(g,{className:"h-4 w-4"})}),e.jsx("button",{className:"border rounded h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>s.nextPage(),disabled:!s.getCanNextPage(),children:e.jsx(x,{className:"h-4 w-4"})}),e.jsx("button",{className:"border rounded h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>s.setPageIndex(s.getPageCount()-1),disabled:!s.getCanNextPage(),children:e.jsx(m,{className:"h-4 w-4"})})]})]})}function f({data:s}){var l,r;return e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-1 items-center space-x-2",children:[e.jsx("input",{type:"text",placeholder:"Cari User",value:((l=s.getColumn("name"))==null?void 0:l.getFilterValue())??"",onChange:o=>{var t;return(t=s.getColumn("name"))==null?void 0:t.setFilterValue(o.target.value)},className:"p-2 border w-40 border-slate-300 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"}),s.getColumn("status")&&e.jsxs("select",{value:(r=s.getColumn("status"))==null?void 0:r.getFilterValue(),onChange:o=>{var t;return(t=s.getColumn("status"))==null?void 0:t.setFilterValue(o.target.value)},className:"p-2 border w-36 border-slate-300 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500",children:[e.jsx("option",{value:"",children:"Semua Status"}),e.jsx("option",{value:"active",children:"Aktif"}),e.jsx("option",{value:"inactive",children:"Tidak Aktif"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("p",{children:"Jumlah Data: "}),e.jsx("p",{children:s.getFilteredRowModel().rows.length})]})]})}function v({columns:s,data:l}){const r=n({data:l,columns:s,getCoreRowModel:i(),getPaginationRowModel:d(),getFilteredRowModel:c()});return e.jsxs("div",{className:"p-2 space-y-4",children:[e.jsx(f,{data:r}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{className:"bg-gray-50",children:r.getHeaderGroups().map(o=>e.jsx("tr",{children:o.headers.map(t=>e.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:t.isPlaceholder?null:a(t.column.columnDef.header,t.getContext())},t.id))},o.id))}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:r.getRowModel().rows.map(o=>e.jsx("tr",{children:o.getVisibleCells().map(t=>e.jsx("td",{className:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6",children:a(t.column.columnDef.cell,t.getContext())},t.id))},o.id))})]}),e.jsx(h,{data:r})]})}export{v as T};
