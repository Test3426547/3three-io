import{_ as p}from"./MiniStatisticsCard.fd208d66.js";import{_ as f,a as v}from"./DefaultLineChart.9b664069.js";import{x}from"./logo-xd.3b4d8cb5.js";import{i as y}from"./logo-atlassian.42a1ed0f.js";import{s as w}from"./logo-slack.868d68c7.js";import{_ as $}from"./logo-spotify.c101dc3d.js";import{j as k}from"./logo-jira.aad6820e.js";import{a as S,x as j,o as e,b as a,e as t,t as s,l as i,f as b,m as g,F as u,k as h,y as A}from"./entry.6e39450e.js";import{s as D}from"./tooltip.6aec660d.js";import{u as B}from"./NavStore.0e557c1f.js";const C={name:"DefaultDoughnutChart",components:{DoughnutChart:f},props:{title:{type:String,default:"Default Doughnut Chart"},chartOptions:{type:Object,default:()=>{}},series:{type:Array,default:()=>[]},actions:{type:Object,route:String,color:String,label:String,default:()=>({color:"secondary",label:"See all refferals"})}},mounted(){this.$nextTick(()=>{window.dispatchEvent(new Event("resize"))})}},L={class:"card h-100"},N={class:"p-3 pb-0 card-header"},F={class:"d-flex align-items-center"},O={class:"mb-0"},T=t("button",{type:"button",class:"mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"See which websites are sending traffic to your website"},[t("i",{class:"fas fa-info"})],-1),z={class:"p-3 card-body"},J={class:"row"},R={class:"text-center col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center"},E={class:"chart"},P=["href"],V=g('<div class="col-lg-6 col-12"><div class="table-responsive"><table class="table mb-0 align-items-center"><tbody><tr><td><div class="px-2 py-1 d-flex"><div><img src="'+x+'" class="avatar avatar-sm me-2" alt="logo_xd"></div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Adobe</h6></div></div></td><td class="text-sm text-center align-middle"><span class="text-xs font-weight-bold"> 25% </span></td></tr><tr><td><div class="px-2 py-1 d-flex"><div><img src="'+y+'" class="avatar avatar-sm me-2" alt="logo_atlassian"></div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Atlassian</h6></div></div></td><td class="text-sm text-center align-middle"><span class="text-xs font-weight-bold"> 3% </span></td></tr><tr><td><div class="px-2 py-1 d-flex"><div><img src="'+w+'" class="avatar avatar-sm me-2" alt="logo_slack"></div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Slack</h6></div></div></td><td class="text-sm text-center align-middle"><span class="text-xs font-weight-bold"> 12% </span></td></tr><tr><td><div class="px-2 py-1 d-flex"><div><img src="'+$+'" class="avatar avatar-sm me-2" alt="logo_spotify"></div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Spotify</h6></div></div></td><td class="text-sm text-center align-middle"><span class="text-xs font-weight-bold"> 7% </span></td></tr><tr><td><div class="px-2 py-1 d-flex"><div><img src="'+k+'" class="avatar avatar-sm me-2" alt="logo_jira"></div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Jira</h6></div></div></td><td class="text-sm text-center align-middle"><span class="text-xs font-weight-bold"> 10% </span></td></tr></tbody></table></div></div>',1);function q(o,m,l,n,c,d){const r=j("DoughnutChart");return e(),a("div",L,[t("div",N,[t("div",F,[t("h6",O,s(l.title),1),T])]),t("div",z,[t("div",J,[t("div",R,[t("div",E,[i(r,{width:"250","chart-options":{chart:{type:"donut"},colors:["#2152ff","#3A416F","#f53939","#a8b8d8","#4BB543"],labels:["Adobe","Atlassian","Slack","Spotify","Jira"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],dataLabels:{enabled:!1},legend:{show:!1}},series:[25,3,12,7,10]})]),t("a",{class:b(["mt-4 btn btn-sm",`bg-gradient-${l.actions.color}`]),href:l.actions.route},s(l.actions.label),11,P)]),V])])])}const I=S(C,[["render",q]]),M={class:"card h-100"},U={class:"p-3 pb-0 card-header"},Y={class:"d-flex align-items-center"},G={class:"mb-0"},H=["title"],K=t("i",{class:"fas fa-info"},null,-1),Q=[K],W={class:"p-3 card-body"},X={class:"list-group"},Z={class:"w-100"},tt={class:"mb-2 d-flex align-items-center"},st={class:"text-sm me-2 font-weight-bold text-capitalize ms-2"},et={class:"text-sm ms-auto font-weight-bold"},at={class:"progress progress-md"},ot=["aria-valuenow"],it={__name:"SocialCard",props:{title:{type:String,default:"Social"},tooltip:{type:String,default:"See how much traffic do you get from social media"},items:{type:Array,required:!0,label:String,icon:String,progress:Number}},setup(o){return(m,l)=>(e(),a("div",M,[t("div",U,[t("div",Y,[t("h6",G,s(o.title),1),t("button",{type:"button",class:"mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:o.tooltip},Q,8,H)])]),t("div",W,[t("ul",X,[(e(!0),a(u,null,h(o.items,({label:n,icon:c,progress:d},r)=>(e(),a("li",{key:r,class:"px-0 mb-2 border-0 list-group-item d-flex align-items-center"},[t("div",Z,[t("div",tt,[t("a",{class:b(["p-0 mb-0 btn btn-simple",`btn-${c}`]),href:"javascript:;"},[t("i",{class:b(["fab fa-lg",`fa-${c}`])},null,2)],2),t("span",st,s(n),1),t("span",et,s(d)+"%",1)]),t("div",null,[t("div",at,[t("div",{class:b(["progress-bar bg-gradient-dark",`w-${d}`]),role:"progressbar","aria-valuenow":d,"aria-valuemin":"0","aria-valuemax":"100"},null,10,ot)])])])]))),128))])])]))}},lt={class:"mt-4 card h-100 mt-md-0"},nt={class:"p-3 pb-0 card-header"},ct={class:"d-flex align-items-center"},dt=t("button",{type:"button",class:"mb-0 btn btn-icon-only btn-rounded btn-outline-success ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Data is based from sessions and is 100% accurate"},[t("i",{class:"fas fa-check"})],-1),rt={class:"px-3 pt-0 pb-2 card-body"},mt={class:"p-0 table-responsive"},pt={class:"table mb-0 align-items-center justify-content-center"},bt={class:"mb-0 text-sm font-weight-bold"},ut={class:"mb-0 text-sm font-weight-bold"},ht={class:"mb-0 text-sm font-weight-bold"},gt={class:"mb-0 text-sm font-weight-bold"},_t={__name:"AnalyticsCard",props:{title:{type:String,default:""},headers:{type:Array,required:!0},pages:{type:Array,required:!0,url:String,views:[Number,String],time:String,rate:String}},setup(o){return(m,l)=>(e(),a("div",lt,[t("div",nt,[t("div",ct,[t("h6",null,s(o.title),1),dt])]),t("div",rt,[t("div",mt,[t("table",pt,[t("thead",null,[t("tr",null,[(e(!0),a(u,null,h(o.headers,(n,c)=>(e(),a("th",{key:c,class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"},s(n),1))),128))])]),t("tbody",null,[(e(!0),a(u,null,h(o.pages,({url:n,views:c,time:d,rate:r},_)=>(e(),a("tr",{key:_},[t("td",null,[t("p",bt,s(_+1)+". "+s(n),1)]),t("td",null,[t("p",ut,s(c),1)]),t("td",null,[t("p",ht,s(d),1)]),t("td",null,[t("p",gt,s(r),1)])]))),128))])])])])]))}},ft={class:"py-4 container-fluid"},vt=g('<div class="row"><div class="col-lg-6 col-12 d-flex ms-auto"><a href="javascript:;" class="btn btn-icon btn-outline-white ms-auto"><span class="btn-inner--text">Export</span><span class="btn-inner--icon ms-2"><i class="ni ni-folder-17"></i></span></a><div class="dropleft ms-3"><button id="dropdownImport" class="btn bg-gradient-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Today </button><ul class="dropdown-menu" aria-labelledby="dropdownImport"><li><a class="dropdown-item" href="javascript:;">Yesterday</a></li><li><a class="dropdown-item" href="javascript:;">Last 7 days</a></li><li><a class="dropdown-item" href="javascript:;">Last 30 days</a></li></ul></div></div></div>',1),xt={class:"row"},yt={class:"mb-4 col-xl-3 col-sm-6 mb-xl-0"},wt={class:"mb-4 col-xl-3 col-sm-6 mb-xl-0"},$t={class:"mb-4 col-xl-3 col-sm-6 mb-xl-0"},kt={class:"col-xl-3 col-sm-6"},St={class:"row"},jt={class:"col-lg-7 col-md-12"},At={class:"card"},Dt=g('<div class="p-3 pb-0 card-header"><h6 class="mb-0">Traffic channels</h6><div class="d-flex align-items-center"><span class="badge badge-md badge-dot me-4"><i class="bg-primary"></i><span class="text-xs text-dark">Organic search</span></span><span class="badge badge-md badge-dot me-4"><i class="bg-dark"></i><span class="text-xs text-dark">Referral</span></span><span class="badge badge-md badge-dot me-4"><i class="bg-info"></i><span class="text-xs text-dark">Social media</span></span></div></div>',1),Bt={class:"mt-4 col-lg-5 col-md-12 mt-lg-0"},Ct={class:"mt-4 row"},Lt={class:"col-sm-6"},Nt={class:"col-sm-6"},It={__name:"analytics",setup(o){const{bootstrap:m}=B();return A(()=>{D(m)}),(l,n)=>(e(),a("div",ft,[vt,t("div",xt,[t("div",yt,[i(p,{title:"Users",value:"930",percentage:{value:"+55%",color:"success"},icon:{component:"ni ni-circle-08",background:"bg-gradient-dark"}})]),t("div",wt,[i(p,{title:"New Users",value:"744",percentage:{value:"+3%",color:"success"},icon:{component:"ni ni-world",background:"bg-gradient-dark"}})]),t("div",$t,[i(p,{title:"Sessions",value:"1,414",percentage:{value:"-2%",color:"danger"},icon:{component:"ni ni-watch-time",background:"bg-gradient-dark"}})]),t("div",kt,[i(p,{title:"Pages/Session",value:"1.76",percentage:{value:"+5%",color:"success"},icon:{component:"ni ni-image",background:"bg-gradient-dark"}})])]),t("div",St,[t("div",jt,[t("div",At,[Dt,i(v,{title:"",class:"shadow-none","chart-options":{chart:{height:300,type:"line",zoom:{enabled:!1}},colors:["#4BB543","#3A416F","#17c1e8"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},markers:{size:4}},series:[{name:"Organic Search",data:[50,40,300,220,500,250,400,230,500]},{name:"Referral",data:[30,90,40,140,290,290,340,230,400]},{name:"Direct",data:[40,80,70,90,30,90,140,130,200]}]})])]),t("div",Bt,[i(I,{title:"Refferals","chart-options":{chart:{type:"donut"},colors:["#2152ff","#3A416F","#f53939","#a8b8d8","#4BB543"],labels:["Adobe","Atlassian","Slack","Spotify","Jira"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],dataLabels:{enabled:!1},legend:{show:!1}},series:[25,3,12,7,10]})])]),t("div",Ct,[t("div",Lt,[i(it,{items:[{label:"Facebook",icon:"facebook",progress:80},{label:"Twitter",icon:"twitter",progress:40},{label:"Reddit",icon:"reddit",progress:30},{label:"Youtube",icon:"youtube",progress:25},{label:"Slack",icon:"slack",progress:15}]})]),t("div",Nt,[i(_t,{title:"Pages",headers:["Page","Page Views","Avg. Time","Bounce Rate"],pages:[{url:"/bits",views:345,time:"00:17:07",rate:"40.91%"},{url:"/pages/argon-dashboard",views:520,time:"00:23:13",rate:"30.14%"},{url:"/pages/soft-ui-dashboard",views:122,time:"00:3:10",rate:"54.10%"},{url:"/bootstrap-themes",views:"1,900",time:"00:30:42",rate:"20.93%"},{url:"/react-themes",views:"1,442",time:"00:31:50",rate:"34.98%"},{url:"/product/argon-dashboard-angular",views:201,time:"00:12:42",rate:"21.4%"},{url:"/product/material-dashboard-pro",views:"2,115",time:"00:50:11",rate:"34.98%"}]})])])]))}};export{It as default};
