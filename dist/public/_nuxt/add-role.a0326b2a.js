import x from"./ArgonInput.8d0576a6.js";import y from"./ArgonButton.a79d4a57.js";import{P as w,Q as R,R as p,S as N,o as S,b as V,e as t,T as _,l as f,u as o,w as $,h as E,U as h}from"./entry.6e39450e.js";import{u as M}from"./RoleStore.d89f21d5.js";import{u as k,c as A,r as B}from"./index.c39e5092.js";import{i as T,g as q,c as C}from"./errorHandler.790c67ca.js";import"./index.aad0ddd6.js";import"./tslib.es6.4057be70.js";const L={class:"card shadow-lg mx-4 p-3 mt-4"},I={class:"d-flex justify-content-between px-4 pt-3"},J=t("h5",{class:"font-weight-bolder mb-0"},"Add Role",-1),O=t("span",{class:"btn-inner--text"},"Back to list",-1),U=[O],j={class:"mt-4"},D={class:"col-12 mt-sm-0"},F=t("label",null,"Name",-1),P={class:"button-row d-flex mt-4"},ee={__name:"add-role",async setup(Q){let c,m;const u=w(),a=M();a.allRolesList||([c,m]=R(()=>a.getAllRolesList()),await c,m());const r=p({role:""}),s=p([]),b=N(()=>({role:{required:A.withMessage("The role name field is required",B)}})),l=k(b,r),v=async()=>{s.value=[],l.value.$validate();const n=C(r.role,a.allRolesList);if(l.value.$error||n){const e=JSON.parse(JSON.stringify(l.value.$errors));s.value=e,n&&(s.value=[...s.value,{$property:"role",$message:"The role already exists."}])}else try{const e=await a.createRole(r.role);if(e.error.value){const i=e.error.value.data.errors[0].detail;throw new Error(i)}else h("success","Role created successfuly"),u.push({path:"/examples/role-management/list-roles"})}catch(e){h("error",e.message)}};return(n,e)=>{const i=x,g=y;return S(),V("div",L,[t("div",I,[J,t("button",{onClick:e[0]||(e[0]=_(d=>o(u).push({path:"/examples/role-management/list-roles"}),["prevent"])),type:"button",class:"btn base-button btn-icon btn-fab btn-primary btn-sm"},U)]),t("div",j,[t("form",{role:"form",onSubmit:_(v,["prevent"])},[t("div",D,[F,f(i,{id:"role",name:"role",class:"multisteps-form__input",type:"text",placeholder:"Role Name",modelValue:o(r).role,"onUpdate:modelValue":e[1]||(e[1]=d=>o(r).role=d),error:o(T)("role",o(s)),errorMessage:o(q)("role",o(s))},null,8,["modelValue","error","errorMessage"])]),t("div",P,[f(g,{type:"submit",color:"primary",variant:"gradient",class:"ms-auto mb-0"},{default:$(()=>[E(" Submit ")]),_:1})])],32)])])}}};export{ee as default};
