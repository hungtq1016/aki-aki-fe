import{E as i,_ as c}from"./TableView.vue_vue_type_script_setup_true_lang-CwRQUyM1.js";import{a as o,aa as d,g as l,d as m,e as u,o as g,l as b,u as h,ab as _,B as t}from"./index-CDcGWq3o.js";import"./CheckIcon-Dt0lcNLC.js";import"./keyboard-DN9jbalq.js";import"./use-outside-click-wYbPFTgq.js";import"./focus-management-C9d4nvSx.js";import"./use-resolve-button-type-AKCoBa6Z.js";import"./vi-BiEBvjQB.js";import"./calculate-active-index-C-8HpAuR.js";import"./use-tree-walker-_eDufkC6.js";import"./hidden-CmDfkVUe.js";import"./EyeIcon-C_FktKUX.js";import"./ChevronRightIcon-DFsUGnq6.js";import"./TrashIcon-Be-lUQj9.js";import"./ChevronDownIcon-D2jjkGrM.js";const f=[{text:"table.id",value:"id",width:100},{text:"table.name",value:"name",sortable:!0},{text:"table.type",value:"type"},{text:"table.address",value:"address"},{text:"table.phone",value:"phone"},{text:"table.createdAt",value:"createdAt"},{text:"table.updatedAt",value:"updatedAt"}],n=o({pageNumber:1,pageSize:10,enable:i.ALL}),s={pageNumber:1,pageSize:10,firstPage:1,lastPage:1,totalPages:0,totalRecords:0,nextPage:1,previousPage:1},r=o([{id:"1",name:"mock-data",type:"mock-data",address:"mock-data",phone:"123",createdAt:"2022-01-01",updatedAt:"2024-01-01",enable:i.ALL}]),p=o({...s}),e=async()=>{const a=await d("/api/branches",n.value);r.value=(a==null?void 0:a.data.data)||[],p.value=(a==null?void 0:a.data)||{...s}};l(n,async()=>{await e()},{deep:!0});const v={class:"flex flex-col gap-10"},$=m({__name:"BranchView",setup(a){return u(async()=>{await e()}),(x,A)=>(g(),b("div",v,[h(c,_({headers:t(f),items:t(r),pagination:t(p),paginationOptions:t(n),fetch:t(e)},{route:"branches"}),null,16)]))}});export{$ as default};
