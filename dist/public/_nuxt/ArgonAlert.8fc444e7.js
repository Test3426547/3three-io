import{a as r,o as n,b as i,e as s,f as c,h as d,r as _,i as u}from"./entry.6e39450e.js";const f={name:"ArgonAlert",props:{color:{type:String,default:"success"},icon:{type:String,default:""},dismissible:{type:Boolean,default:!1}},methods:{getClasses:(e,l)=>{let t,a;return t=e?`alert-${e}`:"",a=l?"alert-dismissible fade show":"",`${t} ${a}`},getIcon:e=>e?`ni ni-${e}`:""}},m={class:"alert-icon"},b={class:"alert-text"},h={key:0,type:"button",class:"btn-close d-flex justify-content-center align-items-center","data-bs-dismiss":"alert","aria-label":"Close"},g=s("span",{"aria-hidden":"true",class:"text-lg font-weight-bold"},"\xD7",-1),p=[g];function x(e,l,t,a,y,o){return n(),i("div",{class:c(["alert text-white font-weight-bold",o.getClasses(t.color,t.dismissible)]),role:"alert"},[s("span",m,[s("i",{class:c(o.getIcon(t.icon))},null,2)]),s("span",b,[d(" \xA0 "),_(e.$slots,"default")]),t.dismissible?(n(),i("button",h,p)):u("",!0)],2)}const V=r(f,[["render",x]]);export{V as default};
