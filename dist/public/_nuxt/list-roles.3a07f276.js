import R from"./ArgonInput.8d0576a6.js";import{P as L,K as m,R as M,y as B,O as z,o as f,b as h,e,T as C,l as b,u as r,Y as k,F as V,k as $,t as g,a5 as A,U as _,f as v}from"./entry.6e39450e.js";import{u as D}from"./index.aad0ddd6.js";import{D as E}from"./datatable.817348b2.js";import{_ as j,h as x}from"./lodash.623e3e94.js";import{u as I}from"./RoleStore.d89f21d5.js";import U from"./BasePagination.81d12301.js";import"./tslib.es6.4057be70.js";const F={class:"card shadow-lg mx-4 p-3 mt-4"},O={class:"d-flex justify-content-between px-4 pt-3"},Y=e("h5",{class:"font-weight-bolder mb-0"},"Roles List",-1),q=e("span",{class:"btn-inner--text"},"Add Role",-1),H=[q],K={class:"mt-4"},Q={class:"table-responsive"},G={class:"dataTable-search search-block"},J={id:"role-table",class:"table table-flush"},W=e("thead",{class:"thead-light"},[e("tr",null,[e("th",null,"NAME"),e("th",null,"CREATED AT"),e("th",{"data-sortable":"false"},"ACTIONS")])],-1),X={class:"text-sm font-weight-normal"},Z={class:"text-sm font-weight-normal"},ee={class:"text-sm font-weight-normal"},te={class:"d-flex align-items-center ms-auto"},ae={class:"cursor-pointer edit"},se={class:"mx-3 cursor-pointer delete"},oe={class:"d-flex justify-content-center justify-content-sm-between flex-wrap"},le={class:"ms-3"},re=null,he={__name:"list-roles",setup(ne){const w=L(),n=I();let l;const i=m(""),u=m(""),d=j.debounce(async function(a){await n.getRolesList({filter:a.filter?a.filter:"",sort:a.sort?a.sort:"",pageNumber:a.pageNumber,pageSize:a.pageSize}),t.from=n.pageMeta.from,t.to=n.pageMeta.to,t.total=n.pageMeta.total,t.currentPage=n.pageMeta.currentPage,S()},300),t=M({currentPage:1,perPage:5,total:null,from:null,to:null}),y=async a=>{t.currentPage=a,await d({pageNumber:t.currentPage,pageSize:t.perPage,sort:u.value,filter:i.value})},P=async()=>{document.getElementById("role-table")&&(l=new E("#role-table",{fixedHeight:!0,searchable:!1,perPage:5}),document.querySelector(".dataTable-bottom").remove(),l.setMessage("Loading ..."),await d({pageNumber:t.currentPage,pageSize:t.perPage}),x(p,"/examples/role-management/edit-role/","roles"),l.on("datatable.sort",async function(a,s){l.setMessage("Loading ..."),a=l.labels[a].toLowerCase().replace(" ","_"),s=s=="asc"?"":"-",u.value=s+a,await d({pageNumber:t.currentPage,pageSize:t.perPage,sort:s+a,filter:i.value})}),l.on("datatable.perpage",async function(a){t.perPage=a,await d({pageNumber:1,pageSize:a,sort:u.value,filter:i.value})}))};B(()=>{P()}),z(i,async a=>{l.setMessage("Loading ..."),await d({pageNumber:t.currentPage,pageSize:t.perPage,sort:u.value,filter:a})});const p=a=>{A.fire({title:"Delete this role?",showCancelButton:!0,cancelButtonText:"No, keep it",confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn bg-gradient-success",cancelButton:"btn bg-gradient-danger"},buttonsStyling:!1}).then(async({isConfirmed:s})=>{if(s)try{const c=await n.deleteRole(a);if(c.error.value){const o=c.error.value.data.errors[0].detail;_("error",o)}else _("success","Role deleted successfuly"),await d({pageNumber:1,pageSize:t.perPage,sort:u.value,filter:i.value})}catch(c){D("error",c.message,"$Nz3AQjuUrx")}})},S=()=>{const a=[];n.rolesList&&n.rolesList.length>0?(l.data=[],n.rolesList.forEach(({id:s,name:c,created_at:o})=>{a.push([`<div class="text-sm font-weight-normal">${c}</div>`,`<div class="text-sm font-weight-normal">${o}</div>`,`<div class="text-sm font-weight-normal">
                        <div class="d-flex align-items-center ms-auto">
                            <div class="cursor-pointer edit">
                                <i class="fas fa-user-edit text-secondary edit-${s}"></i>
                            </div>
                            <div class="mx-3 cursor-pointer delete">
                                <i class="fas fa-trash text-secondary delete-${s}"></i>
                            </div>
                        </div>
                    </div>`])}),l.refresh(),l.insert({data:a}),x(p,"/examples/role-management/edit-role/","roles")):l.setMessage("No entries found")};return(a,s)=>{const c=R;return f(),h("div",F,[e("div",O,[Y,e("button",{type:"button",class:"btn base-button btn-icon btn-fab btn-primary btn-sm",onClick:s[0]||(s[0]=C(o=>r(w).push({path:"/examples/role-management/add-role"}),["prevent"]))},H)]),e("div",K,[e("div",Q,[e("div",G,[b(c,{modelValue:r(i),"onUpdate:modelValue":s[1]||(s[1]=o=>k(i)?i.value=o:null),class:"dataTable-input search-input-table",placeholder:"Search...",type:"text"},null,8,["modelValue"])]),e("table",J,[W,e("tbody",null,[(f(),h(V,null,$(re,({id:o,name:N,created_at:T})=>e("tr",{key:o},[e("td",X,g(N),1),e("td",Z,g(T),1),e("td",ee,[e("div",te,[e("div",ae,[e("i",{class:v(`fas fa-user-edit text-secondary edit-${o}`)},null,2)]),e("div",se,[e("i",{class:v(`fas fa-trash text-secondary delete-${o}`)},null,2)])])])])),64))])]),e("div",oe,[e("div",le,[e("p",null," Showing "+g(r(t).total?r(t)?.from:0)+" to "+g(r(t)?.to)+" of "+g(r(t).total)+" entries ",1)]),b(U,{modelValue:r(t).currentPage,"onUpdate:modelValue":s[2]||(s[2]=o=>r(t).currentPage=o),class:"pagination-success pagination-md me-3",value:r(t).currentPage,"per-page":r(t).perPage,total:r(t).total,onClick:s[3]||(s[3]=o=>y(o))},null,8,["modelValue","value","per-page","total"])])])])])}}};export{he as default};
