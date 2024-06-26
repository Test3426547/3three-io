import{k as _}from"./kal-visuals-square.237e0532.js";import{_ as u}from"./CategoriesList.404e0343.js";import{_ as r}from"./MiniGradientLineChart.fdff7fea.js";import{_ as g}from"./Calendar.c60723bd.js";import{o as a,b as i,e as t,f as h,t as o,h as c,j as b,l as s,u as d}from"./entry.6e39450e.js";import{_ as m}from"./RankingListCard.8525467d.js";import{_ as f}from"./PlaceholderCard.c0aba0a1.js";import"./tslib.es6.4057be70.js";const p=""+new URL("ivancik.e8656254.jpg",import.meta.url).href,v={class:"p-3 card"},w={class:"p-3 card-body position-relative z-index-1 h-100"},$={class:"mb-3 text-white font-weight-bolder"},y={class:"mb-3 text-white"},x=["href"],k=t("i",{class:"text-sm fas fa-arrow-right ms-1","aria-hidden":"true"},null,-1),S={__name:"BackgroundBlogCard",props:{image:{type:String,default:""},color:{type:String,default:"dark"},title:{type:String,default:""},description:{type:String,default:""},action:{type:Object,default:()=>{},route:String,label:String}},setup(e){return(n,l)=>(a(),i("div",v,[t("div",{class:"overflow-hidden bg-cover position-relative border-radius-lg h-100",style:b({backgroundImage:`url('${e.image}')`})},[t("span",{class:h(["mask",`bg-gradient-${e.color}`])},null,2),t("div",w,[t("h6",$,o(e.title),1),t("p",y,o(e.description),1),t("a",{class:"mb-0 btn btn-round btn-outline-white",href:e.action.route},[c(o(e.action.label)+" ",1),k],8,x)])],4)]))}},M={class:"mt-4 card"},A={class:"p-3 card-body"},B={class:"row"},J={class:"col-4"},j=["src","alt"],z={class:"my-auto col-8"},N={class:"text-sm text-muted font-weight-bold"},P=["href"],I={__name:"MessageCard",props:{image:{type:[String,Object],default:"",url:{type:String},alt:String},message:{type:String,required:!0},action:{type:Object,default:()=>{},color:{type:String,default:"dark"},route:String,label:String}},setup(e){return(n,l)=>(a(),i("div",M,[t("div",A,[t("div",B,[t("div",J,[t("img",{src:typeof e.image=="string"?e.image:e.image.url,alt:typeof e.image=="object"&&e.image.alt,class:"shadow border-radius-lg w-100"},null,8,j)]),t("div",z,[t("p",N,o(e.message),1),t("a",{href:e.action.route,class:h(["mb-0 btn btn-sm",`bg-gradient-${e.action.color}`])},o(e.action.label),11,P)])])])]))}},O={class:"py-4 container-fluid"},T={class:"row"},V={class:"col-xl-8 col-lg-7"},C={class:"row"},D={class:"col-sm-4"},L={class:"overflow-hidden card"},R=t("div",{class:"p-3 pb-0 card-header"},[t("p",{class:"mb-0 text-sm text-capitalize font-weight-bold"}," Visitors "),t("h5",{class:"mb-0 font-weight-bolder"},[c(" 5,927"),t("span",{class:"text-sm text-success font-weight-bolder"},"+55%")])],-1),E={class:"p-0 card-body"},W={class:"chart"},q={class:"mt-4 col-sm-4 mt-sm-0"},H={class:"overflow-hidden card"},K=t("div",{class:"p-3 pb-0 card-header"},[t("p",{class:"mb-0 text-sm text-capitalize font-weight-bold"}," Income "),t("h5",{class:"mb-0 font-weight-bolder"},[c(" $130,832 "),t("span",{class:"text-sm text-success font-weight-bolder"},"+90%")])],-1),U={class:"p-0 card-body"},F={class:"chart"},G={class:"mt-4 col-sm-4 mt-sm-0"},Q={class:"mt-4 row"},X={class:"col-12"},Y={class:"mt-4 col-xl-4 col-lg-5 mt-lg-0"},Z={class:"row"},tt={class:"col-lg-12"},et={class:"col-lg-12 col-sm-6 mt-4"},st={class:"col-lg-12 col-sm-6"},ot={class:"mt-4 row"},at={class:"col-sm-6"},it={class:"mt-4 col-sm-6 mt-sm-0"},ut={__name:"crm",setup(e){return(n,l)=>(a(),i("div",O,[t("div",T,[t("div",V,[t("div",C,[t("div",D,[t("div",L,[R,t("div",E,[t("div",W,[s(r)])])])]),t("div",q,[t("div",H,[K,t("div",U,[t("div",F,[s(r,{"chart-options":{chart:{type:"area",zoom:{enabled:!1}},colors:["#4BB543"],labels:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},dataLabels:{enabled:!1}},series:[{name:"Income",data:[60,80,75,90,67,100,90,110,120]}]})])])])]),t("div",G,[s(f,{title:{variant:"h6",text:"New tab"}})])]),t("div",Q,[t("div",X,[s(g)])])]),t("div",Y,[t("div",Z,[t("div",tt,[s(S,{image:d(p),title:"Hey John!",description:`Wealth creation is an evolutionarily recent positive-sum game. It is
            all about who take the opportunity first.`,action:{route:"/",label:"Read more"}},null,8,["image"])]),t("div",et,[s(u,{categories:[{icon:{component:"ni ni-mobile-button",background:"dark"},label:"Devices",description:"250 in stock <strong>346+ sold</strong>"},{icon:{component:"ni ni-tag",background:"dark"},label:"Tickets",description:"123 closed <strong>15 open</strong>"},{icon:{component:"ni ni-box-2",background:"dark"},label:"Error logs",description:"1 is active <strong>40 closed</strong>"}]})]),t("div",st,[s(I,{message:"Today is Martina's birthday. Wish her the best of luck!",image:{url:d(_),alt:"Kal"},action:{route:"/",label:"Send message",color:"dark"}},null,8,["image"])])])])]),t("div",ot,[t("div",at,[s(m,{card:{title:"Transactions",date:"23 - 30 March 2021"},items:[{title:"Netflix",date:"27 March 2020, at 12:30 PM",amount:"- $ 2,500",icon:"fa-arrow-down",color:"danger"},{title:"Apple",date:"23 March 2020, at 04:30 AM",amount:"+ $ 2,000",icon:"fa-arrow-up",color:"success"},{title:"Partner #22213",date:"19 March 2020, at 02:50 AM",amount:"+ $ 1,400",icon:"fa-arrow-up",color:"success"}]})]),t("div",it,[s(m,{card:{title:"Revenue",date:"01 - 07 June 2021"},items:[{title:"via PayPal",date:"07 June 2021, at 09:00 AM",amount:"+ $ 4,999",icon:"fa-arrow-up",color:"success"},{title:"Partner #90211",date:"07 June 2021, at 05:50 AM",amount:"+ $ 700",icon:"fa-arrow-up",color:"success"},{title:"Services",date:"07 June 2021, at 07:10 PM",amount:"- $ 1,800",icon:"fa-arrow-down",color:"danger"}]})])])]))}};export{ut as default};
