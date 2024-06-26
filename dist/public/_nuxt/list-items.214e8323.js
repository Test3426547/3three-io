import j from"./ArgonInput.8d0576a6.js";import{P as F,K as S,R as G,Q as O,y as Y,O as H,o as m,b as u,e,T as Q,i as x,l as T,u as r,Y as q,F as N,k as C,t as g,a5 as J,U as I,j as K,f as k}from"./entry.6e39450e.js";import{u as X}from"./index.aad0ddd6.js";import{D as Z}from"./datatable.817348b2.js";import{_ as W,h as $}from"./lodash.623e3e94.js";import{u as ee}from"./ItemStore.9ee858b8.js";import{u as te}from"./AuthStore.cdc72645.js";import{d as L}from"./default_avatar.3b6e3719.js";import se from"./BasePagination.81d12301.js";import"./tslib.es6.4057be70.js";const ae={class:"card shadow-lg mx-4 p-3 mt-4"},oe={class:"d-flex justify-content-between px-4 pt-3"},ne=e("h5",{class:"font-weight-bolder mb-0"},"Items List",-1),re=e("span",{class:"btn-inner--text"},"Add Item",-1),le=[re],ie={class:"mt-4"},ce={class:"table-responsive"},de={class:"dataTable-search search-block"},me={id:"item-table",class:"table table-flush"},ue={class:"thead-light"},ge=e("th",null,"NAME",-1),pe=e("th",null,"CATEGORY",-1),fe=e("th",{"data-sortable":"false"},"PICTURE",-1),he=e("th",null,"TAGS",-1),_e=e("th",null,"CREATED AT",-1),be={key:0,"data-sortable":"false"},ve={class:"text-sm font-weight-normal"},xe={class:"text-sm font-weight-normal"},we={class:"text-sm font-weight-normal"},ye=["src"],Pe={class:"text-sm font-weight-normal"},Se={class:"d-flex flex-wrap"},Te={class:"text-sm font-weight-normal"},Ne={key:0,class:"text-sm font-weight-normal"},Ce={class:"d-flex align-items-center ms-auto"},Ie={class:"cursor-pointer edit"},ke={class:"mx-3 cursor-pointer delete"},$e={class:"d-flex justify-content-center justify-content-sm-between flex-wrap"},Le={class:"ms-3"},Me=null,Oe={__name:"list-items",async setup(Ae){let w,y;const M=F(),i=ee(),_=te();let l;const c=S(""),d=S(""),p=W.debounce(async function(t){await i.getItemsList({filter:t.filter?t.filter:"",sort:t.sort?t.sort:"",pageNumber:t.pageNumber,pageSize:t.pageSize}),s.from=i.pageMeta.from,s.to=i.pageMeta.to,s.total=i.pageMeta.total,s.currentPage=i.pageMeta.currentPage,V()},300),s=G({currentPage:1,perPage:5,total:null,from:null,to:null});_.currentUser||([w,y]=O(()=>_.getProfile()),await w,y());const A=async t=>{s.currentPage=t,await p({pageNumber:s.currentPage,pageSize:s.perPage,sort:d.value,filter:c.value})},B=async()=>{document.getElementById("item-table")&&(l=new Z("#item-table",{searchable:!1,fixedHeight:!0,perPage:5}),document.querySelector(".dataTable-bottom").remove(),l.setMessage("Loading ..."),await p({pageNumber:s.currentPage,pageSize:s.perPage}),$(P,"/examples/item-management/edit-item/","items"),l.on("datatable.sort",async function(t,a){const n=["tags","category"];l.setMessage("Loading ..."),t=l.labels[t].toLowerCase().replace(" ","_"),a=a=="asc"?"":"-",n.includes(t)?d.value=a+t+".name":d.value=a+t,await p({pageNumber:s.currentPage,pageSize:s.perPage,sort:d.value,filter:c.value})}),l.on("datatable.perpage",async function(t){s.perPage=t,await p({pageNumber:1,pageSize:t,sort:d.value,filter:c.value})}))};Y(()=>{B()}),H(c,async t=>{l.setMessage("Loading ..."),await p({pageNumber:s.currentPage,pageSize:s.perPage,sort:d.value,filter:t})});const b=()=>_.userRole!=="member",P=t=>{J.fire({title:"Delete this item?",showCancelButton:!0,cancelButtonText:"No, keep it",confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn bg-gradient-success",cancelButton:"btn bg-gradient-danger"},buttonsStyling:!1}).then(async({isConfirmed:a})=>{if(a)try{const n=await i.deleteItem(t);if(n.error.value){const o=n.error.value.data.errors[0].detail;I("error",o)}else I("success","Item deleted successfuly"),await p({pageNumber:1,pageSize:s.perPage,sort:d.value,filter:c.value})}catch(n){X("error",n.message,"$QvnXJZGtca")}})},z=t=>{let a="";for(const{name:n,color:o}of t)a=a+`<span class="badge" style="background-color:${o}; margin:0.1rem">${n}</span>`;return a},V=()=>{const t=[];i.itemsList&&i.itemsList.length>0?(l.data=[],i.itemsList.forEach(({id:a,name:n,category:o,image:f,tags:v,created_at:h})=>{t.push([`<div class="text-sm font-weight-normal">${n}</div>`,`<div class="text-sm font-weight-normal">${o.name}</div>`,`<div class="text-sm font-weight-normal">
                        <img src="${f||L}" height="100" class="rounded" alt="avatar" />
                    </div>`,`<div class="text-sm font-weight-normal">
                        <div class="d-flex flex-wrap">
                            ${z(v)}
                        </div>
                    </div>`,`<div class="text-sm font-weight-normal">${h}</div>`,`<div class="text-sm font-weight-normal">
                        <div class="d-flex align-items-center ms-auto">
                            <div class="cursor-pointer edit">
                                <i class="fas fa-user-edit text-secondary edit-${a}"></i>
                            </div>
                            <div class="mx-3 cursor-pointer delete">
                                <i class="fas fa-trash text-secondary delete-${a}"></i>
                            </div>
                        </div>
                    </div>`])}),l.refresh(),l.insert({data:t}),$(P,"/examples/item-management/edit-item/","items")):l.setMessage("No entries found")};return(t,a)=>{const n=j;return m(),u("div",ae,[e("div",oe,[ne,b()?(m(),u("button",{key:0,type:"button",class:"btn base-button btn-icon btn-fab btn-primary btn-sm",onClick:a[0]||(a[0]=Q(o=>r(M).push({path:"/examples/item-management/add-item"}),["prevent"]))},le)):x("",!0)]),e("div",ie,[e("div",ce,[e("div",de,[T(n,{modelValue:r(c),"onUpdate:modelValue":a[1]||(a[1]=o=>q(c)?c.value=o:null),class:"dataTable-input search-input-table",placeholder:"Search...",type:"text"},null,8,["modelValue"])]),e("table",me,[e("thead",ue,[e("tr",null,[ge,pe,fe,he,_e,b()?(m(),u("th",be,"ACTIONS")):x("",!0)])]),e("tbody",null,[(m(),u(N,null,C(Me,({id:o,name:f,category:v,image:h,tags:E,created_at:D})=>e("tr",{key:o},[e("td",ve,g(f),1),e("td",xe,g(v.name),1),e("td",we,[e("img",{src:h||r(L),height:"100",alt:"avatar",class:"rounded"},null,8,ye)]),e("td",Pe,[e("div",Se,[(m(!0),u(N,null,C(E,({name:R,color:U})=>(m(),u("span",{class:"badge",style:K({"background-color":U,margin:"0.1rem"})},g(R),5))),256))])]),e("td",Te,g(D),1),b()?(m(),u("td",Ne,[e("div",Ce,[e("div",Ie,[e("i",{class:k(`fas fa-user-edit text-secondary edit-${o}`)},null,2)]),e("div",ke,[e("i",{class:k(`fas fa-trash text-secondary delete-${o}`)},null,2)])])])):x("",!0)])),64))])]),e("div",$e,[e("div",Le,[e("p",null," Showing "+g(r(s).total?r(s)?.from:0)+" to "+g(r(s)?.to)+" of "+g(r(s).total)+" entries ",1)]),T(se,{modelValue:r(s).currentPage,"onUpdate:modelValue":a[2]||(a[2]=o=>r(s).currentPage=o),class:"pagination-success pagination-md me-3",value:r(s).currentPage,"per-page":r(s).perPage,total:r(s).total,onClick:a[3]||(a[3]=o=>A(o))},null,8,["modelValue","value","per-page","total"])])])])])}}};export{Oe as default};
