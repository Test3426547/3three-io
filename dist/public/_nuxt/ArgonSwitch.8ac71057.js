import{a as l,o,b as r,e as s,f as n,r as d}from"./entry.6e39450e.js";const i={name:"ArgonSwitch",props:{name:{type:String,required:!0},id:{type:String,required:!0},checked:{type:Boolean,default:!1},labelClass:{type:String,default:""},inputClass:{type:String,default:""}}},u={class:"form-check form-switch ps-0"},f=["id","name","checked"],m=["for"];function _(t,a,e,h,p,k){return o(),r("div",u,[s("input",{id:e.id,class:n(["form-check-input ms-0",e.inputClass]),type:"checkbox",name:e.name,checked:e.checked,onInput:a[0]||(a[0]=c=>t.$emit("update:modelValue",c.target.checked))},null,42,f),s("label",{class:n(["form-check-label",e.labelClass]),for:e.id},[d(t.$slots,"default")],10,m)])}const g=l(i,[["render",_]]);export{g as default};
