import{N as y}from"./Transparent.360d5da7.js";import{o as c,b as r,e,t as i,h as a,F as v,k as f,f as u,r as p,y as _,l as o,j as w,u as I,w as s,m as k}from"./entry.6e39450e.js";import{F as x}from"./Centered.11eeaff7.js";import{s as $}from"./nav-pills.558eee0d.js";import"./curved8.a268735b.js";const S=""+new URL("logo-coinbase.29c26b7e.svg",import.meta.url).href,A=""+new URL("logo-nasa.41bb4f42.svg",import.meta.url).href,T=""+new URL("logo-netflix.e505e6be.svg",import.meta.url).href,F=""+new URL("logo-pinterest.952f04bb.svg",import.meta.url).href,C=""+new URL("logo-spotify.8eab26b9.svg",import.meta.url).href,j=""+new URL("logo-vodafone.dca6e8b8.svg",import.meta.url).href,B={class:"card"},P={class:"pt-4 pb-3 text-center card-header"},U={class:"text-uppercase font-weight-bold text-dark"},W={class:"mt-2 font-weight-bold"},q={class:"pt-0 text-center card-body text-lg-start"},L={class:"ps-3"},R=["href"],z=e("i",{class:"fas fa-arrow-right ms-1"},null,-1),l={__name:"PricingCard",props:{badge:{type:String,required:!0},price:{type:Object,required:!0,currency:String,value:String},specifications:{type:Array,required:!0,label:String,includes:Boolean},action:{type:Object,route:String,label:String,color:String,default:()=>({route:"/",label:"Join",color:"dark"})}},setup(t){return(d,h)=>(c(),r("div",B,[e("div",P,[e("span",U,i(t.badge),1),e("h1",W,[e("small",null,i(t.price.currency),1),a(i(t.price.value),1)])]),e("div",q,[(c(!0),r(v,null,f(t.specifications,({label:g,includes:m},b)=>(c(),r("div",{key:b,class:"p-2 d-flex justify-content-lg-start justify-content-center"},[e("div",{class:u(["text-center shadow icon icon-shape icon-xs rounded-circle",m?"bg-gradient-success":"bg-gradient-secondary"])},[e("i",{class:u(`fas ${m?"fa-check":"fa-minus"} opacity-10`)},null,2)],2),e("div",null,[e("span",L,i(g),1)])]))),128)),e("a",{href:t.action.route,class:u(["mt-3 mb-0 btn btn-icon d-lg-block",`bg-gradient-${t.action.color}`])},[a(i(t.action.label)+" ",1),z],10,R)])]))}},N={class:"mb-3 accordion-item"},G=["id"],J=["data-bs-target","aria-expanded","aria-controls"],O=e("i",{class:"pt-1 text-xs collapse-close fa fa-plus position-absolute end-0 me-3"},null,-1),V=e("i",{class:"pt-1 text-xs collapse-open fa fa-minus position-absolute end-0 me-3"},null,-1),E=["id","aria-labelledby"],H={class:"text-sm accordion-body opacity-8"},n={__name:"AccordionItem",props:{accordionId:{type:String,default:""},collapseId:{type:String,default:""},active:{type:Boolean,default:!1}},setup(t){return(d,h)=>(c(),r("div",N,[e("h5",{id:t.accordionId,class:"accordion-header"},[e("button",{class:"accordion-button border-bottom font-weight-bold",type:"button","data-bs-toggle":"collapse","data-bs-target":`#${t.collapseId}`,"aria-expanded":t.active?"true":"false","aria-controls":t.collapseId},[p(d.$slots,"question"),O,V],8,J)],8,G),e("div",{id:t.collapseId,class:u(["accordion-collapse collapse",t.active?"show":""]),"aria-labelledby":t.accordionId,"data-bs-parent":"#accordionRental"},[e("div",H,[p(d.$slots,"answer")])],10,E)]))}},M=""+new URL("pricing-header-bg.7497d320.jpg",import.meta.url).href,D={class:"main-content position-relative max-height-vh-100 h-100"},Q=e("span",{class:"mask bg-gradient-success opacity-6"},null,-1),Y=e("div",{class:"container pb-10 pb-lg-9 pt-7 postion-relative z-index-2"},[e("div",{class:"row"},[e("div",{class:"mx-auto text-center col-md-6 mt-4"},[e("h3",{class:"text-white"},"See our pricing"),e("p",{class:"text-white"}," You have Free Unlimited Updates and Premium Support on each package. ")])]),e("div",{class:"row"},[e("div",{class:"mx-auto text-center col-lg-4 col-md-6 col-7"},[e("div",{class:"mt-5 nav-wrapper position-relative z-index-2"},[e("ul",{id:"tabs-pricing",class:"flex-row p-1 nav nav-pills nav-fill",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{id:"tabs-iconpricing-tab-1",class:"mb-0 nav-link active","data-bs-toggle":"tab",href:"#monthly",role:"tab","aria-controls":"monthly","aria-selected":"true"},"Monthly")]),e("li",{class:"nav-item"},[e("a",{id:"tabs-iconpricing-tab-2",class:"mb-0 nav-link","data-bs-toggle":"tab",href:"#annual",role:"tab","aria-controls":"annual","aria-selected":"false"},"Annual")])])])])])],-1),K=[Q,Y],X={class:"mt-n8"},Z={class:"container"},ee={class:"tab-content tab-space"},te={id:"monthly",class:"tab-pane active"},ae={class:"row"},oe={class:"mb-4 col-lg-4 mb-lg-0"},se={class:"mb-4 col-lg-4 mb-lg-0"},le={class:"mb-4 col-lg-4 mb-lg-0"},ie={id:"annual",class:"tab-pane"},ne={class:"row"},ce={class:"mb-4 col-lg-4 mb-lg-0"},re={class:"mb-4 col-lg-4 mb-lg-0"},de={class:"mb-4 col-lg-4 mb-lg-0"},ue={class:"container my-6"},he=k('<div class="row"><div class="mx-auto text-center col-8"><h6 class="opacity-5">More than 50+ brands trust Soft</h6></div></div><div class="mt-4 row"><div class="mb-4 col-lg-2 col-md-4 col-6"><img class="w-100 opacity-9" src="'+S+'" alt="logo_coinbase"></div><div class="mb-4 col-lg-2 col-md-4 col-6"><img class="w-100 opacity-9" src="'+A+'" alt="logo_nasa"></div><div class="mb-4 col-lg-2 col-md-4 col-6"><img class="w-100 opacity-9" src="'+T+'" alt="logo_netflix"></div><div class="mb-4 col-lg-2 col-md-4 col-6"><img class="w-100 opacity-9" src="'+F+'" alt="logo_pinterest"></div><div class="mb-4 col-lg-2 col-md-4 col-6"><img class="w-100 opacity-9" src="'+C+'" alt="logo_spotify"></div><div class="mb-4 col-lg-2 col-md-4 col-6"><img class="w-100 opacity-9" src="'+j+'" alt="logo_vodafone"></div></div><div class="mt-8 row"><div class="mx-auto text-center col-md-6"><h2>Frequently Asked Questions</h2><p> A lot of people don&#39;t appreciate the moment until it\u2019s passed. I&#39;m not trying my hardest, and I&#39;m not trying to do </p></div></div>',3),me={class:"row"},pe={class:"mx-auto col-md-10"},ge={id:"accordionRental",class:"accordion"},be=e("br",null,null,-1),ye=e("br",null,null,-1),ve=e("br",null,null,-1),xe={__name:"pricing-page",setup(t){return _(()=>{$()}),(d,h)=>(c(),r("main",D,[o(y),e("div",{class:"page-header position-relative",style:w({backgroundImage:"url("+I(M)+")",backgroundSize:"cover"})},K,4),e("div",X,[e("div",Z,[e("div",ee,[e("div",te,[e("div",ae,[e("div",oe,[o(l,{badge:"Starter",price:{currency:"$",value:"59"},specifications:[{label:"2 team members",includes:!0},{label:"20GB Cloud storage",includes:!0},{label:"Integration help",includes:!1},{label:"Sketch Files",includes:!1},{label:"API Access",includes:!1},{label:"Complete documentation",includes:!1}],action:{color:"dark",route:"javascript:;",label:"Join"}})]),e("div",se,[o(l,{badge:"premium",price:{currency:"$",value:"89"},specifications:[{label:"10 team members",includes:!0},{label:"40GB Cloud storage",includes:!0},{label:"Integration help",includes:!0},{label:"Sketch Files",includes:!0},{label:"API Access",includes:!1},{label:"Complete documentation",includes:!1}],action:{color:"success",route:"javascript:;",label:"Try Premium"}})]),e("div",le,[o(l,{badge:"Enterprise",price:{currency:"$",value:"99"},specifications:[{label:"Unlimited team members",includes:!0},{label:"100GB Cloud storage",includes:!0},{label:"Integration help",includes:!0},{label:"Sketch Files",includes:!0},{label:"API Access",includes:!0},{label:"Complete documentation",includes:!0}],action:{color:"dark",route:"javascript:;",label:"Join"}})])])]),e("div",ie,[e("div",ne,[e("div",ce,[o(l,{badge:"Starter",price:{currency:"$",value:"119"},specifications:[{label:"2 team members",includes:!0},{label:"20GB Cloud storage",includes:!0},{label:"Integration help",includes:!1},{label:"Sketch Files",includes:!1},{label:"API Access",includes:!1},{label:"Complete documentation",includes:!1}],action:{color:"dark",route:"javascript:;",label:"Join"}})]),e("div",re,[o(l,{badge:"premium",price:{currency:"$",value:"159"},specifications:[{label:"10 team members",includes:!0},{label:"40GB Cloud storage",includes:!0},{label:"Integration help",includes:!0},{label:"Sketch Files",includes:!0},{label:"API Access",includes:!1},{label:"Complete documentation",includes:!1}],action:{color:"success",route:"javascript:;",label:"Try Premium"}})]),e("div",de,[o(l,{badge:"Enterprise",price:{currency:"$",value:"399"},specifications:[{label:"Unlimited team members",includes:!0},{label:"100GB Cloud storage",includes:!0},{label:"Integration help",includes:!0},{label:"Sketch Files",includes:!0},{label:"API Access",includes:!0},{label:"Complete documentation",includes:!0}],action:{color:"dark",route:"javascript:;",label:"Join"}})])])])])])]),e("div",ue,[he,e("div",me,[e("div",pe,[e("div",ge,[o(n,{"accordion-id":"headingOne","collapse-id":"collapseOne",active:""},{question:s(()=>[a("How do I order?")]),answer:s(()=>[a(" We\u2019re not always in the position that we want to be at. We\u2019re constantly growing. We\u2019re constantly making mistakes. We\u2019re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don\u2019t appreciate the moment until it\u2019s passed. ")]),_:1}),o(n,{"accordion-id":"headingTwo","collapse-id":"collapseTwo"},{question:s(()=>[a("How can i make the payment?")]),answer:s(()=>[a(" It really matters and then like it really doesn\u2019t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn\u2019t matter. Because it's motivating the doers. Because I\u2019m here to follow my dreams and and inspire other people to follow their dreams, too. "),be,a("We\u2019re not always in the position that we want to be at. We\u2019re constantly growing. We\u2019re constantly making mistakes. We\u2019re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don\u2019t appreciate the moment until it\u2019s passed. ")]),_:1}),o(n,{"accordion-id":"headingThree","collapse-id":"collapseThree"},{question:s(()=>[a("How much time does it take to receive the order?")]),answer:s(()=>[a(" The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how. ")]),_:1}),o(n,{"accordion-id":"headingFour","collapse-id":"collapseFour"},{question:s(()=>[a("Can I resell the products?")]),answer:s(()=>[a(" I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything. "),ye,ve,a("If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying trying to do the best way I know how. ")]),_:1}),o(n,{"accordion-id":"headingFifth","collapse-id":"collapseFifth"},{question:s(()=>[a("Where do I find the shipping details?")]),answer:s(()=>[a(" There\u2019s nothing I really wanted to do in life that I wasn\u2019t able to get good at. That\u2019s my skill. I\u2019m not really specifically talented at anything except for the ability to learn. That\u2019s what I do. That\u2019s what I\u2019m here for. Don\u2019t be afraid to be wrong because you can\u2019t learn anything from a compliment. I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything. ")]),_:1})])])])]),o(x)]))}};export{xe as default};
