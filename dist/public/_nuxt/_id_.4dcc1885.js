import N from"./ArgonInput.8d0576a6.js";import E from"./ArgonButton.a79d4a57.js";import{J as M,P as S,Q as _,a4 as V,R as f,S as k,o as A,b as B,e as o,T as b,l as h,u as t,w as T,h as q,U as v}from"./entry.6e39450e.js";import{u as C}from"./RoleStore.d89f21d5.js";import{u as I,c as J,r as L}from"./index.c39e5092.js";import{i as D,g as O,c as U}from"./errorHandler.790c67ca.js";import"./index.aad0ddd6.js";import"./tslib.es6.4057be70.js";const j={class:"card shadow-lg mx-4 p-3 mt-4"},F={class:"d-flex justify-content-between px-4 pt-3"},P=o("h5",{class:"font-weight-bolder mb-0"},"Edit Role",-1),Q=o("span",{class:"btn-inner--text"},"Back to list",-1),z=[Q],G={class:"mt-4"},H={class:"col-12 mt-sm-0"},K=o("label",null,"Name",-1),W={class:"button-row d-flex mt-4"},le={__name:"[id]",async setup(X){let l,n;const{$isDemo:g,$demoMessage:x}=M(),p=S(),s=C();s.allRolesList||([l,n]=_(()=>s.getAllRolesList()),await l,n());const{params:{id:i}}=V(),r=f({role:""}),a=f([]),R=async()=>{await s.getRole(i),r.role=s.currentRole?.name};[l,n]=_(()=>R()),await l,n();const w=k(()=>({role:{required:J.withMessage("The role name field is required",L)}})),m=I(w,r),y=async()=>{a.value=[],m.value.$validate();const u=U(r.role,s.allRolesList,s.currentRole.name);if(m.value.$error||u){const e=JSON.parse(JSON.stringify(m.value.$errors));a.value=[...e],u&&(a.value=[...a.value,{$property:"role",$message:"The role already exists."}])}else try{const e=await s.updateRole(i,r.role);if(e.error.value){const c=e.error.value.data.errors[0].detail;throw new Error(c)}else v("success","Role updated successfuly"),p.push({path:"/examples/role-management/list-roles"})}catch(e){v("error",e.message)}};return(u,e)=>{const c=N,$=E;return A(),B("div",j,[o("div",F,[P,o("button",{onClick:e[0]||(e[0]=b(d=>t(p).push({path:"/examples/role-management/list-roles"}),["prevent"])),type:"button",class:"btn base-button btn-icon btn-fab btn-primary btn-sm"},z)]),o("div",G,[o("form",{role:"form",onSubmit:e[2]||(e[2]=b(d=>t(g)(t(i))?t(x)("roles"):y(),["prevent"]))},[o("div",H,[K,h(c,{id:"role",name:"role",class:"multisteps-form__input",type:"text",placeholder:"Role Name",modelValue:t(r).role,"onUpdate:modelValue":e[1]||(e[1]=d=>t(r).role=d),error:t(D)("role",t(a)),errorMessage:t(O)("role",t(a))},null,8,["modelValue","error","errorMessage"])]),o("div",W,[h($,{type:"submit",color:"primary",variant:"gradient",class:"ms-auto mb-0"},{default:T(()=>[q(" Submit ")]),_:1})])],32)])])}}};export{le as default};
