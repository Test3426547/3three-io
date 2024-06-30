(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{222:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o(223),r=o.n(n);function l(){window.innerWidth>=991&&(setTimeout((function(){new r.a(".rellax",{center:!0})}),5e3),new r.a(".rellax-header"),new r.a(".rellax-text"))}},223:function(t,e,o){(function(o){var n,r,l;"undefined"!=typeof window&&window,r=[],void 0===(l="function"==typeof(n=function(){var t=function(e,o){"use strict";var n=Object.create(t.prototype),r=0,l=0,c=0,d=0,m=[],v=!0,h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},f=null,w=!1;try{var y=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}catch(t){}var _=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,C=window.transformProp||function(){var t=document.createElement("div");if(null===t.style.transform){var e=["Webkit","Moz","ms"];for(var o in e)if(void 0!==t.style[e[o]+"Transform"])return e[o]+"Transform"}return"transform"}();function x(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var t,e=!0,o=!0;if(n.options.breakpoints.forEach((function(i){"number"!=typeof i&&(o=!1),null!==t&&i<t&&(e=!1),t=i})),e&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(t){n.options[t]=o[t]})),o&&o.breakpoints&&x(),e||(e=".rellax");var k="string"==typeof e?document.querySelectorAll(e):[e];if(k.length>0){if(n.elems=k,n.options.wrapper&&!n.options.wrapper.nodeType){var A=document.querySelector(n.options.wrapper);if(!A)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=A}var T,z=function(t){var e=n.options.breakpoints;return t<e[0]?"xs":t>=e[0]&&t<e[1]?"sm":t>=e[1]&&t<e[2]?"md":"lg"},S=function(){for(var i=0;i<n.elems.length;i++){var t=L(n.elems[i]);m.push(t)}},j=function(){for(var i=0;i<m.length;i++)n.elems[i].style.cssText=m[i].style;m=[],l=window.innerHeight,d=window.innerWidth,T=z(d),E(),S(),animate(),v&&(window.addEventListener("resize",j),v=!1,I())},L=function(t){var e,o=t.getAttribute("data-rellax-percentage"),r=t.getAttribute("data-rellax-speed"),c=t.getAttribute("data-rellax-xs-speed"),m=t.getAttribute("data-rellax-mobile-speed"),v=t.getAttribute("data-rellax-tablet-speed"),h=t.getAttribute("data-rellax-desktop-speed"),f=t.getAttribute("data-rellax-vertical-speed"),w=t.getAttribute("data-rellax-horizontal-speed"),y=t.getAttribute("data-rellax-vertical-scroll-axis"),_=t.getAttribute("data-rellax-horizontal-scroll-axis"),C=t.getAttribute("data-rellax-zindex")||0,x=t.getAttribute("data-rellax-min"),k=t.getAttribute("data-rellax-max"),A=t.getAttribute("data-rellax-min-x"),z=t.getAttribute("data-rellax-max-x"),S=t.getAttribute("data-rellax-min-y"),j=t.getAttribute("data-rellax-max-y"),L=!0;c||m||v||h?e={xs:c,sm:m,md:v,lg:h}:L=!1;var E=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(E=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var P=n.options.vertical&&(o||n.options.center)?E:0,I=n.options.horizontal&&(o||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,W=P+t.getBoundingClientRect().top,Y=t.clientHeight||t.offsetHeight||t.scrollHeight,H=I+t.getBoundingClientRect().left,R=t.clientWidth||t.offsetWidth||t.scrollWidth,X=o||(P-W+l)/(Y+l),F=o||(I-H+d)/(R+d);n.options.center&&(F=.5,X=.5);var M=L&&null!==e[T]?Number(e[T]):r||n.options.speed,D=f||n.options.verticalSpeed,N=w||n.options.horizontalSpeed,K=y||n.options.verticalScrollAxis,G=_||n.options.horizontalScrollAxis,B=O(F,X,M,D,N),style=t.style.cssText,J="",$=/transform\s*:/i.exec(style);if($){var V=$.index,Q=style.slice(V),U=Q.indexOf(";");J=U?" "+Q.slice(11,U).replace(/\s/g,""):" "+Q.slice(11).replace(/\s/g,"")}return{baseX:B.x,baseY:B.y,top:W,left:H,height:Y,width:R,speed:M,verticalSpeed:D,horizontalSpeed:N,verticalScrollAxis:K,horizontalScrollAxis:G,style:style,transform:J,zindex:C,min:x,max:k,minX:A,maxX:z,minY:S,maxY:j}},E=function(){var t=r,e=c;if(r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,c=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=o-n.options.wrapper.offsetTop}return!(t==r||!n.options.vertical)||!(e==c||!n.options.horizontal)},O=function(t,e,o,r,l){var c={},d=(l||o)*(100*(1-t)),m=(r||o)*(100*(1-e));return c.x=n.options.round?Math.round(d):Math.round(100*d)/100,c.y=n.options.round?Math.round(m):Math.round(100*m)/100,c},P=function(){window.removeEventListener("resize",P),window.removeEventListener("orientationchange",P),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",P),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",P),f=h(I)},I=function(){E()&&!1===v?(animate(),f=h(I)):(f=null,window.addEventListener("resize",P),window.addEventListener("orientationchange",P),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",P,!!w&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",P,!!w&&{passive:!0}))},animate=function(){for(var t,i=0;i<n.elems.length;i++){var e=m[i].verticalScrollAxis.toLowerCase(),o=m[i].horizontalScrollAxis.toLowerCase(),v=-1!=e.indexOf("x")?r:0,h=-1!=e.indexOf("y")?r:0,f=-1!=o.indexOf("x")?c:0,w=(h+(-1!=o.indexOf("y")?c:0)-m[i].top+l)/(m[i].height+l),y=(v+f-m[i].left+d)/(m[i].width+d),_=(t=O(y,w,m[i].speed,m[i].verticalSpeed,m[i].horizontalSpeed)).y-m[i].baseY,x=t.x-m[i].baseX;null!==m[i].min&&(n.options.vertical&&!n.options.horizontal&&(_=_<=m[i].min?m[i].min:_),n.options.horizontal&&!n.options.vertical&&(x=x<=m[i].min?m[i].min:x)),null!=m[i].minY&&(_=_<=m[i].minY?m[i].minY:_),null!=m[i].minX&&(x=x<=m[i].minX?m[i].minX:x),null!==m[i].max&&(n.options.vertical&&!n.options.horizontal&&(_=_>=m[i].max?m[i].max:_),n.options.horizontal&&!n.options.vertical&&(x=x>=m[i].max?m[i].max:x)),null!=m[i].maxY&&(_=_>=m[i].maxY?m[i].maxY:_),null!=m[i].maxX&&(x=x>=m[i].maxX?m[i].maxX:x);var k=m[i].zindex,A="translate3d("+(n.options.horizontal?x:"0")+"px,"+(n.options.vertical?_:"0")+"px,"+k+"px) "+m[i].transform;n.elems[i].style[C]=A}n.options.callback(t)};return n.destroy=function(){for(var i=0;i<n.elems.length;i++)n.elems[i].style.cssText=m[i].style;v||(window.removeEventListener("resize",j),v=!0),_(f),f=null},j(),n.refresh=j,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return t})?n.apply(e,r):n)||(t.exports=l)}).call(this,o(46))},312:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(15),o(21)),l=o(222),c={name:"blog-post",components:Object(n.a)(Object(n.a)({Card:r.c,InfoSection:r.j,Badge:r.a,Comment:r.g},r.b.name,r.b),r.d.name,r.d),data:function(){return{form:{comment:""},comments:[{avatar:"img/james.jpg",author:"Tina Andrew",date:"7 minutes ago",comment:"<p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>\n                            <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>"},{avatar:"img/michael.jpg",author:"John Camber",date:"Yesterday",comment:"<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                            <p> Don't forget, You're Awesome!</p>",replies:[{avatar:"img/julie.jpg",author:"Tina Andrew",date:"2 Days Ago",comment:"<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                <p> Don't forget, You're Awesome!</p>",liked:!0,likes:25}]}]}},mounted:function(){Object(l.a)()}},d=o(0),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper blog-post"},[t._m(0),t._v(" "),e("div",{staticClass:"section"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"section section-blog-info"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 ml-auto mr-auto"},[t._m(5),t._v(" "),e("hr"),t._v(" "),e("card",{attrs:{type:"profile",plain:""}},[e("template",{slot:"raw-content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"card-avatar"},[e("a",{attrs:{href:"#pablo"}},[e("img",{staticClass:"img img-raised",attrs:{src:"img/mike.jpg"}})]),t._v(" "),e("div",{staticClass:"ripple-container"})])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("h4",{staticClass:"card-title"},[t._v("Alec Thompson")]),t._v(" "),e("p",{staticClass:"description"},[t._v("I've been trying to figure out the bed design for the\n                                            master bedroom at our Hidden Hills compound...I like good music from\n                                            Youtube.")])]),t._v(" "),e("div",{staticClass:"col-md-2"},[e("button",{staticClass:"btn btn-default pull-right btn-round",attrs:{type:"button"}},[t._v("Follow\n                                        ")])])])])],2)],1)])])]),t._v(" "),e("div",{staticClass:"section section-comments"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 ml-auto mr-auto"},[e("div",{staticClass:"media-area"},[e("h3",{staticClass:"title text-center"},[t._v("3 Comments")]),t._v(" "),t._l(t.comments,(function(t){return e("comment",{key:t.id,attrs:{avatar:t.avatar,author:t.author,date:t.date,comment:t.comment,replies:t.replies}})}))],2),t._v(" "),e("h3",{staticClass:"title text-center"},[t._v("Post your comment")]),t._v(" "),e("div",{staticClass:"media media-post"},[t._m(6),t._v(" "),e("div",{staticClass:"media-body"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],staticClass:"form-control",attrs:{placeholder:"Write a nice reply or go home...",rows:"4"},domProps:{value:t.form.comment},on:{input:function(e){e.target.composing||t.$set(t.form,"comment",e.target.value)}}}),t._v(" "),t._m(7)])])])])])]),t._v(" "),e("div",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-md-12"},[e("h2",{staticClass:"title text-center"},[t._v("Similar Stories")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"blogs-1",attrs:{id:"blogs-1"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10 ml-auto mr-auto"},[e("card",{attrs:{type:"blog",plain:""}},[e("template",{slot:"raw-content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"card-image"},[e("img",{staticClass:"img img-raised rounded",attrs:{src:"img/examples/card-blog4.jpg",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("h6",{staticClass:"category text-info"},[t._v("Enterprise")]),t._v(" "),e("h3",{staticClass:"card-title"},[e("a",{attrs:{href:"#pablo"}},[t._v("Warner Music Group buys concert discovery\n                                                        service Songkick")])]),t._v(" "),e("p",{staticClass:"card-description"},[t._v("\n                                                    Warner Music Group announced today it’s acquiring the selected\n                                                    assets of the music platform Songkick, including its app for\n                                                    finding concerts and the company’s trademark.\n                                                ")]),t._v(" "),e("p",{staticClass:"author"},[t._v("\n                                                    by\n                                                    "),e("a",{attrs:{href:"#pablo"}},[e("b",[t._v("Sarah Perez")])]),t._v(", 2 days ago\n                                                ")])])])])],2),t._v(" "),e("card",{attrs:{type:"blog",plain:""}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[e("h6",{staticClass:"category text-danger"},[e("i",{staticClass:"now-ui-icons now-ui-icons media-2_sound-wave"}),t._v(" Startup\n                                            ")]),t._v(" "),e("h3",{staticClass:"card-title"},[e("a",{attrs:{href:"#pablo"}},[t._v("Insticator raises $5.2M to help publishers")])]),t._v(" "),e("p",{staticClass:"card-description"},[t._v("\n                                                Insticator is announcing that it has raised $5.2 million in Series A\n                                                funding. The startup allows online publishers to add quizzes, polls\n                                                and other interactive elements...\n                                            ")]),t._v(" "),e("p",{staticClass:"author"},[t._v("\n                                                by\n                                                "),e("a",{attrs:{href:"#pablo"}},[e("b",[t._v("Anthony Ha")])]),t._v(", 5 days ago\n                                            ")])]),t._v(" "),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"card-image"},[e("img",{staticClass:"img img-raised rounded",attrs:{src:"img/examples/card-blog6.jpg"}})])])])])],1)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-header page-header-small rellax-header"},[e("div",{staticClass:"page-header-image",staticStyle:{"background-image":"url('img/bg24.jpg')"}}),t._v(" "),e("div",{staticClass:"content-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 ml-auto mr-auto text-center"},[e("h2",{staticClass:"title"},[t._v("WeChat Lucky Money")]),t._v(" "),e("h4",[t._v("WeChat launched in 2013.")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"button-container"},[e("a",{staticClass:"btn btn-success btn-round btn-lg",attrs:{href:"#pablo"}},[e("i",{staticClass:"now-ui-icons text_align-left"}),t._v(" Read Article\n                        ")]),t._v(" "),e("a",{staticClass:"btn btn-icon btn-lg btn-twitter btn-round",attrs:{href:"#pablo"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{staticClass:"btn btn-icon btn-lg btn-facebook btn-round",attrs:{href:"#pablo"}},[e("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),e("a",{staticClass:"btn btn-icon btn-lg btn-google btn-round",attrs:{href:"#pablo"}},[e("i",{staticClass:"fab fa-google"})])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 ml-auto mr-auto"},[e("h3",{staticClass:"title"},[t._v("The Castle Looks Different at Night...")]),t._v(" "),e("p",[t._v("This is the paragraph where you can write more details about your product. Keep you user\n                            engaged by providing meaningful information. Remember that by this time, the user is\n                            curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to\n                            see more. We are here to make life better.\n                            "),e("br"),t._v(" "),e("br"),t._v(" And now I look and look around and there’s so many Kanyes I've been trying to\n                            figure out the bed design for the master bedroom at our Hidden Hills compound... and\n                            thank you for turning my personal jean jacket into a couture piece.")]),t._v(" "),e("p",{staticClass:"blockquote blockquote-primary"},[t._v("\n                            “And thank you for turning my personal jean jacket into a couture piece.”\n                            "),e("br"),t._v(" "),e("br"),t._v(" "),e("small",[t._v("\n                                Kanye West, Producer.\n                            ")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"section section-blog col-md-10 ml-auto mr-auto"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-story-overview"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"image-container image-left",staticStyle:{"background-image":"url('img/bg35.jpg')"}},[e("p",{staticClass:"blockquote blockquote-primary"},[t._v('"Over the span of the satellite record,\n                                    Arctic sea ice has been declining significantly, while sea ice in the\n                                    Antarctichas increased very slightly"\n                                    '),e("br"),t._v(" "),e("br"),t._v(" "),e("small",[t._v("-NOAA")])])]),t._v(" "),e("div",{staticClass:"image-container image-left-bottom",staticStyle:{"background-image":"url('img/bg29.jpg')"}})]),t._v(" "),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"image-container image-right",staticStyle:{"background-image":"url('img/project16.jpg')"}}),t._v(" "),e("h3",[t._v("So what does the new record for the lowest level of winter ice actually mean")]),t._v(" "),e("p",[t._v("The Arctic Ocean freezes every winter and much of the sea-ice then thaws every\n                                summer, and that process will continue whatever happens with climate change. Even if\n                                the Arctic continues to be one of the fastest-warming regions of the world, it will\n                                always be plunged into bitterly cold polar dark every winter. And year-by-year, for\n                                all kinds of natural reasons, there’s huge variety of the state of the ice.\n                            ")]),t._v(" "),e("p",[t._v("\n                                For a start, it does not automatically follow that a record amount of ice will melt\n                                this summer. More important for determining the size of the annual thaw is the state\n                                of the weather as the midnight sun approaches and temperatures rise. But over the\n                                more than 30 years of satellite records, scientists have observed a clear pattern of\n                                decline, decade-by-decade.\n                            ")]),t._v(" "),e("p",[t._v("The Arctic Ocean freezes every winter and much of the sea-ice then thaws every\n                                summer, and that process will continue whatever happens with climate change. Even if\n                                the Arctic continues to be one of the fastest-warming regions of the world, it will\n                                always be plunged into bitterly cold polar dark every winter. And year-by-year, for\n                                all kinds of natural reasons, there’s huge variety of the state of the ice.\n                            ")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 ml-auto mr-auto"},[e("h3",{staticClass:"title"},[t._v("Rest of the Story:")]),t._v(" "),e("p",[t._v("We are here to make life better. And now I look and look around and there’s so many\n                            Kanyes I've been trying to figure out the bed design for the master bedroom at our\n                            Hidden Hills compound... and thank you for turning my personal jean jacket into a\n                            couture piece.\n                            "),e("br"),t._v(" I speak yell scream directly at the old guard on behalf of the future. daytime All\n                            respect prayers and love to Phife’s family Thank you for so much inspiration. ")]),t._v(" "),e("p",[t._v(" Thank you Anna for the invite thank you to the whole Vogue team And I love you like\n                            Kanye loves Kanye Pand Pand Panda I've been trying to figure out the bed design for the\n                            master bedroom at our Hidden Hills compound...The Pablo pop up was almost a pop up of\n                            influence. All respect prayers and love to Phife’s family Thank you for so much\n                            inspiration daytime I love this new Ferg album! The Life of Pablo is now available for\n                            purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1\n                            album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music\n                            2016!")]),t._v(" "),e("p",[t._v(" I love this new Ferg album! The Life of Pablo is now available for purchase I have a\n                            dream. Thank you to everybody who made The Life of Pablo the number 1 album in the\n                            world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"blog-tags"},[t._v("\n                                    Tags:\n                                    "),e("span",{staticClass:"label label-success"},[t._v("Photography")]),t._v(" "),e("span",{staticClass:"label label-success"},[t._v("Stories")]),t._v(" "),e("span",{staticClass:"label label-success"},[t._v("Castle")])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("a",{staticClass:"btn btn-google btn-round pull-right",attrs:{href:"#pablo"}},[e("i",{staticClass:"fab fa-google"}),t._v(" 232\n                                ")]),t._v(" "),e("a",{staticClass:"btn btn-twitter btn-round pull-right",attrs:{href:"#pablo"}},[e("i",{staticClass:"fab fa-twitter"}),t._v(" 910\n                                ")]),t._v(" "),e("a",{staticClass:"btn btn-facebook btn-round pull-right",attrs:{href:"#pablo"}},[e("i",{staticClass:"fab fa-facebook-square"}),t._v(" 872\n                                ")])])])},function(){var t=this._self._c;return t("a",{staticClass:"pull-left author",attrs:{href:"#pablo"}},[t("div",{staticClass:"avatar"},[t("img",{staticClass:"media-object img-raised",attrs:{alt:"64x64",src:"img/olivia.jpg"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"media-footer"},[t("a",{staticClass:"btn btn-success pull-right",attrs:{href:"#pablo"}},[t("i",{staticClass:"now-ui-icons ui-1_send"}),this._v(" Reply\n                                    ")])])}],!1,null,null,null);e.default=component.exports}}]);