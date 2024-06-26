import y from"./ArgonSwitch.8ac71057.js";import k from"./ArgonAvatar.5e1f944f.js";import{i as u}from"./team-1.ea0a9766.js";import{o as n,b as r,e as t,t as i,h as o,F as x,k as v,f as w,y as L,l as a,w as d,u as s}from"./entry.6e39450e.js";import{_ as C}from"./PlaceholderCard.c0aba0a1.js";import{k as $}from"./kal-visuals-square.237e0532.js";import{m as j,i as S}from"./ivana-square.3a8331da.js";import{_}from"./team-2.9e1259be.js";import{i as h}from"./team-3.fee1766f.js";import{i as p}from"./team-4.e09e8de7.js";import{u as M}from"./NavStore.0e557c1f.js";import{s as F}from"./tooltip.6aec660d.js";import{s as P}from"./nav-pills.558eee0d.js";const A={class:"card h-100"},N={class:"p-3 pb-0 card-header"},D={class:"row"},R={class:"col-md-8 d-flex align-items-center"},E={class:"mb-0"},Z={class:"col-md-4 text-end"},I=["href"],B=["title"],U={class:"p-3 card-body"},V={class:"text-sm"},z=t("hr",{class:"my-4 horizontal gray-light"},null,-1),T={class:"list-group"},q={class:"pt-0 text-sm border-0 list-group-item ps-0"},H=t("strong",{class:"text-dark"},"Full Name:",-1),O={class:"text-sm border-0 list-group-item ps-0"},K=t("strong",{class:"text-dark"},"Mobile:",-1),G={class:"text-sm border-0 list-group-item ps-0"},J=t("strong",{class:"text-dark"},"Email:",-1),Q={class:"text-sm border-0 list-group-item ps-0"},W=t("strong",{class:"text-dark"},"Location:",-1),X={class:"pb-0 border-0 list-group-item ps-0"},Y=t("strong",{class:"text-sm text-dark"},"Social:",-1),tt=["href"],st={__name:"ProfileInfoCard",props:{title:{type:String,required:!0},description:{type:String,required:!0},info:{type:Object,fullName:String,mobile:String,email:String,location:String,default:()=>{}},social:{type:Array,link:String,icon:String,default:()=>[]},action:{type:Object,route:String,tooltip:String,default:()=>({route:"javascript:;"})}},setup(e){return(g,f)=>(n(),r("div",A,[t("div",N,[t("div",D,[t("div",R,[t("h6",E,i(e.title),1)]),t("div",Z,[t("a",{href:e.action.route},[t("i",{class:"text-sm fas fa-user-edit text-secondary","data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.action.tooltip},null,8,B)],8,I)])])]),t("div",U,[t("p",V,i(e.description),1),z,t("ul",T,[t("li",q,[H,o(" \xA0 "+i(e.info.fullName),1)]),t("li",O,[K,o(" \xA0 "+i(e.info.mobile),1)]),t("li",G,[J,o(" \xA0 "+i(e.info.email),1)]),t("li",Q,[W,o(" \xA0 "+i(e.info.location),1)]),t("li",X,[Y,o(" \xA0 "),(n(!0),r(x,null,v(e.social,({icon:m,link:l},c)=>(n(),r("a",{key:c,class:"py-0 mb-0 btn-simple ps-1 pe-2",href:l},[t("i",{class:w(m)},null,2)],8,tt))),128))])])])]))}},et={class:"card card-blog card-plain"},at={class:"position-relative"},ot={class:"shadow-xl d-block border-radius-xl"},lt=["src"],it={class:"px-1 pb-0 card-body"},ct={class:"mb-2 text-sm text-gradient text-dark"},nt={href:"javascript:;"},rt={class:"mb-4 text-sm"},dt={class:"d-flex align-items-center justify-content-between"},mt={class:"mt-2 avatar-group"},ht=["title"],pt=["alt","src"],b={__name:"DefaultProjectCard",props:{img:{type:String,default:""},label:{type:String,default:""},title:{type:String,default:"Default Project Card"},description:{type:String,default:""},action:{type:Object,route:String,color:String,label:String,default:()=>{}},authors:{type:Array,image:String,name:String,default:()=>[]}},setup(e){return(g,f)=>(n(),r("div",et,[t("div",at,[t("a",ot,[t("img",{src:e.img,alt:"img-blur-shadow",class:"shadow img-fluid border-radius-xl"},null,8,lt)])]),t("div",it,[t("p",ct,i(e.label),1),t("a",nt,[t("h5",null,i(e.title),1)]),t("p",rt,i(e.description),1),t("div",dt,[t("button",{type:"button",class:w(["mb-0 btn btn-sm",`btn-outline-${e.action.color}`])},i(e.action.label),3),t("div",mt,[(n(!0),r(x,null,v(e.authors,({image:m,name:l},c)=>(n(),r("a",{key:c,href:"javascript:;",class:"avatar avatar-xs rounded-circle","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:l},[t("img",{alt:m,src:m},null,8,pt)],8,ht))),128))])])])]))}},ut=""+new URL("home-decor-1.d2582b58.jpg",import.meta.url).href,gt=""+new URL("home-decor-2.71914f6c.jpg",import.meta.url).href,_t=""+new URL("home-decor-3.098e36fb.jpg",import.meta.url).href,bt=t("div",{class:"card shadow-lg mx-4 card-profile-bottom"},[t("div",{class:"card shadow-lg"},[t("div",{class:"card-body p-3"},[t("div",{class:"row gx-4"},[t("div",{class:"col-auto"},[t("div",{class:"avatar avatar-xl position-relative"},[t("img",{src:u,alt:"profile_image",class:"shadow-sm w-100 border-radius-lg"})])]),t("div",{class:"col-auto my-auto"},[t("div",{class:"h-100"},[t("h5",{class:"mb-1"},"Sayo Kravits"),t("p",{class:"mb-0 font-weight-bold text-sm"},"Public Relations")])]),t("div",{class:"mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"},[t("div",{class:"nav-wrapper position-relative end-0"},[t("ul",{class:"p-1 bg-transparent nav nav-pills nav-fill",role:"tablist"},[t("li",{class:"nav-item"},[t("a",{class:"px-0 py-1 mb-0 nav-link active","data-bs-toggle":"tab",href:"javascript:;",role:"tab","aria-selected":"true"},[t("svg",{class:"text-dark",width:"16px",height:"16px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("g",{transform:"translate(-2319.000000, -291.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[t("g",{transform:"translate(1716.000000, 291.000000)"},[t("g",{transform:"translate(603.000000, 0.000000)"},[t("path",{class:"color-background",d:"M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"}),t("path",{class:"color-background",d:"M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z",opacity:"0.7"}),t("path",{class:"color-background",d:"M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z",opacity:"0.7"})])])])])]),t("span",{class:"ms-1"},"App")])]),t("li",{class:"nav-item"},[t("a",{class:"px-0 py-1 mb-0 nav-link","data-bs-toggle":"tab",href:"javascript:;",role:"tab","aria-selected":"false"},[t("svg",{class:"text-dark",width:"16px",height:"16px",viewBox:"0 0 40 44",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[t("title",null,"document"),t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("g",{transform:"translate(-1870.000000, -591.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[t("g",{transform:"translate(1716.000000, 291.000000)"},[t("g",{transform:"translate(154.000000, 300.000000)"},[t("path",{class:"color-background",d:"M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z",opacity:"0.603585379"}),t("path",{class:"color-background",d:"M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"})])])])])]),t("span",{class:"ms-1"},"Messages")])]),t("li",{class:"nav-item"},[t("a",{class:"px-0 py-1 mb-0 nav-link","data-bs-toggle":"tab",href:"javascript:;",role:"tab","aria-selected":"false"},[t("svg",{class:"text-dark",width:"16px",height:"16px",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[t("title",null,"settings"),t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("g",{transform:"translate(-2020.000000, -442.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[t("g",{transform:"translate(1716.000000, 291.000000)"},[t("g",{transform:"translate(304.000000, 151.000000)"},[t("polygon",{class:"color-background",opacity:"0.596981957",points:"18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"}),t("path",{class:"color-background",d:"M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z",opacity:"0.596981957"}),t("path",{class:"color-background",d:"M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"})])])])])]),t("span",{class:"ms-1"},"Settings")])])])])])])])])],-1),ft={class:"py-4 container-fluid"},xt={class:"mt-3 row"},vt={class:"col-12 col-md-6 col-xl-4"},wt={class:"card h-100"},yt=t("div",{class:"p-3 pb-0 card-header"},[t("h6",{class:"mb-0"},"Platform Settings")],-1),kt={class:"p-3 card-body"},Lt=t("h6",{class:"text-xs text-uppercase text-body font-weight-bolder"}," Account ",-1),Ct={class:"list-group"},$t={class:"px-0 border-0 list-group-item"},jt={class:"px-0 border-0 list-group-item"},St={class:"px-0 border-0 list-group-item"},Mt=t("h6",{class:"mt-4 text-xs text-uppercase text-body font-weight-bolder"}," Application ",-1),Ft={class:"list-group"},Pt={class:"px-0 border-0 list-group-item"},At={class:"px-0 border-0 list-group-item"},Nt={class:"px-0 pb-0 border-0 list-group-item"},Dt={class:"mt-4 col-12 col-md-6 col-xl-4 mt-md-0"},Rt={class:"mt-4 col-12 col-xl-4 mt-xl-0"},Et={class:"card h-100"},Zt=t("div",{class:"p-3 pb-0 card-header"},[t("h6",{class:"mb-0"},"Conversations")],-1),It={class:"p-3 card-body"},Bt={class:"list-group"},Ut={class:"px-0 mb-2 border-0 list-group-item d-flex align-items-center"},Vt=t("div",{class:"d-flex align-items-start flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Sophie B."),t("p",{class:"mb-0 text-xs"},"Hi! I need more information..")],-1),zt=t("a",{class:"mb-0 btn btn-link pe-3 ps-0 ms-auto",href:"javascript:;"},"Reply",-1),Tt={class:"px-0 mb-2 border-0 list-group-item d-flex align-items-center"},qt=t("div",{class:"d-flex align-items-start flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Anne Marie"),t("p",{class:"mb-0 text-xs"},"Awesome work, can you..")],-1),Ht=t("a",{class:"mb-0 btn btn-link pe-3 ps-0 ms-auto",href:"javascript:;"},"Reply",-1),Ot={class:"px-0 mb-2 border-0 list-group-item d-flex align-items-center"},Kt=t("div",{class:"d-flex align-items-start flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Ivanna"),t("p",{class:"mb-0 text-xs"},"About files I can..")],-1),Gt=t("a",{class:"mb-0 btn btn-link pe-3 ps-0 ms-auto",href:"javascript:;"},"Reply",-1),Jt={class:"px-0 mb-2 border-0 list-group-item d-flex align-items-center"},Qt=t("div",{class:"d-flex align-items-start flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Peterson"),t("p",{class:"mb-0 text-xs"},"Have a great afternoon..")],-1),Wt=t("a",{class:"mb-0 btn btn-link pe-3 ps-0 ms-auto",href:"javascript:;"},"Reply",-1),Xt={class:"px-0 border-0 list-group-item d-flex align-items-center"},Yt=t("div",{class:"d-flex align-items-start flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Nick Daniel"),t("p",{class:"mb-0 text-xs"},"Hi! I need more information..")],-1),ts=t("a",{class:"mb-0 btn btn-link pe-3 ps-0 ms-auto",href:"javascript:;"},"Reply",-1),ss={class:"mt-4 row"},es={class:"col-12"},as={class:"mb-4 card"},os=t("div",{class:"p-3 pb-0 card-header"},[t("h6",{class:"mb-1"},"Projects"),t("p",{class:"text-sm"},"Architects design houses")],-1),ls={class:"p-3 card-body"},is={class:"row"},cs={class:"mb-4 col-xl-3 col-md-6 mb-xl-0"},ns={class:"mb-4 col-xl-3 col-md-6 mb-xl-0"},rs={class:"mb-4 col-xl-3 col-md-6 mb-xl-0"},ds={class:"mb-4 col-xl-3 col-md-6 mb-xl-0"},Ls={__name:"profile-overview",setup(e){const{bootstrap:g}=M();return L(()=>{P(),F(g)}),(f,m)=>{const l=y,c=k;return n(),r("div",null,[bt,t("div",ft,[t("div",xt,[t("div",vt,[t("div",wt,[yt,t("div",kt,[Lt,t("ul",Ct,[t("li",$t,[a(l,{id:"flexSwitchCheckDefault",name:"email","label-class":"mb-0 text-body ms-3 text-truncate w-80",checked:""},{default:d(()=>[o("Email me when someone follows me")]),_:1})]),t("li",jt,[a(l,{id:"flexSwitchCheckDefault1",name:"Email","label-class":"mb-0 text-body ms-3 text-truncate w-80"},{default:d(()=>[o("Email me when someone answers on my post")]),_:1})]),t("li",St,[a(l,{id:"flexSwitchCheckDefault2",name:"Email","label-class":"mb-0 text-body ms-3 text-truncate w-80",checked:""},{default:d(()=>[o("Email me when someone mentions me ")]),_:1})])]),Mt,t("ul",Ft,[t("li",Pt,[a(l,{id:"flexSwitchCheckDefault3",name:"Project Launch","label-class":"mb-0 text-body ms-3 text-truncate w-80"},{default:d(()=>[o("New launches and projects ")]),_:1})]),t("li",At,[a(l,{id:"flexSwitchCheckDefault4",name:"Product Update","label-class":"mb-0 text-body ms-3 text-truncate w-80",checked:""},{default:d(()=>[o("Monthly product updates ")]),_:1})]),t("li",Nt,[a(l,{id:"flexSwitchCheckDefault5",name:"Newsletter","label-class":"mb-0 text-body ms-3 text-truncate w-80"},{default:d(()=>[o("Subscribe to newsletter ")]),_:1})])])])])]),t("div",Dt,[a(st,{title:"Profile Information",description:"Hi, I\u2019m Alec Thompson, Decisions: If you can\u2019t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",info:{fullName:"Alec M. Thompson",mobile:"(44) 123 1234 123",email:"alecthompson@mail.com",location:"USA"},social:[{link:"https://www.facebook.com/CreativeTim/",icon:"fab fa-facebook fa-lg"},{link:"https://twitter.com/creativetim",icon:"fab fa-twitter fa-lg"},{link:"https://www.instagram.com/creativetimofficial/",icon:"fab fa-instagram fa-lg"}],action:{route:"javascript:;",tooltip:"Edit Profile"}})]),t("div",Rt,[t("div",Et,[Zt,t("div",It,[t("ul",Bt,[t("li",Ut,[a(c,{class:"me-3",image:s($),alt:"kal","border-radius":"lg",shadow:"regular"},null,8,["image"]),Vt,zt]),t("li",Tt,[a(c,{class:"me-3",image:s(j),alt:"kal","border-radius":"lg",shadow:"regular"},null,8,["image"]),qt,Ht]),t("li",Ot,[a(c,{class:"me-3",image:s(S),alt:"kal","border-radius":"lg",shadow:"regular"},null,8,["image"]),Kt,Gt]),t("li",Jt,[a(c,{class:"me-3",image:s(p),alt:"kal","border-radius":"lg",shadow:"regular"},null,8,["image"]),Qt,Wt]),t("li",Xt,[a(c,{class:"me-3",image:s(h),alt:"kal","border-radius":"lg",shadow:"regular"},null,8,["image"]),Yt,ts])])])])])]),t("div",ss,[t("div",es,[t("div",as,[os,t("div",ls,[t("div",is,[t("div",cs,[a(b,{title:"Modern",img:s(ut),label:"Project #2",description:`As Uber works through a huge amount of internal
                management turmoil.`,authors:[{image:s(u),name:"Elena Morison"},{image:s(_),name:"Ryan Milly"},{image:s(h),name:"Nick Daniel"},{image:s(p),name:"Peterson"}],action:{color:"success",label:"View Project"}},null,8,["img","authors"])]),t("div",ns,[a(b,{title:"Scandinavian",img:s(gt),label:"Project #1",description:`Music is something that every person has his or her own
                      specific opinion about.`,authors:[{image:s(h),name:"Nick Daniel"},{image:s(p),name:"Peterson"},{image:s(u),name:"Elena Morison"},{image:s(_),name:"Ryan Milly"}],action:{color:"success",label:"View Project"}},null,8,["img","authors"])]),t("div",rs,[a(b,{title:"Minimalist",img:s(_t),label:"Project #3",description:`Different people have different taste, and various types
                      of music.`,authors:[{image:s(p),name:"Peterson"},{image:s(h),name:"Nick Daniel"},{image:s(u),name:"Elena Morison"},{image:s(_),name:"Ryan Milly"}],action:{color:"success",label:"View Project"}},null,8,["img","authors"])]),t("div",ds,[a(C,{"has-border":"",title:{text:"New project",variant:"h5"}})])])])])])])])])}}};export{Ls as default};
