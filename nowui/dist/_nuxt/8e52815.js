(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{222:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(223),r=o.n(n);function l(){window.innerWidth>=991&&(setTimeout((function(){new r.a(".rellax",{center:!0})}),5e3),new r.a(".rellax-header"),new r.a(".rellax-text"))}},223:function(e,t,o){(function(o){var n,r,l;"undefined"!=typeof window&&window,r=[],void 0===(l="function"==typeof(n=function(){var e=function(t,o){"use strict";var n=Object.create(e.prototype),r=0,l=0,c=0,d=0,m=[],f=!0,v=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},w=null,h=!1;try{var x=Object.defineProperty({},"passive",{get:function(){h=!0}});window.addEventListener("testPassive",null,x),window.removeEventListener("testPassive",null,x)}catch(e){}var y=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,_=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}();function A(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach((function(i){"number"!=typeof i&&(o=!1),null!==e&&i<e&&(t=!1),e=i})),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){n.options[e]=o[e]})),o&&o.breakpoints&&A(),t||(t=".rellax");var z="string"==typeof t?document.querySelectorAll(t):[t];if(z.length>0){if(n.elems=z,n.options.wrapper&&!n.options.wrapper.nodeType){var C=document.querySelector(n.options.wrapper);if(!C)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=C}var E,T=function(e){var t=n.options.breakpoints;return e<t[0]?"xs":e>=t[0]&&e<t[1]?"sm":e>=t[1]&&e<t[2]?"md":"lg"},k=function(){for(var i=0;i<n.elems.length;i++){var e=S(n.elems[i]);m.push(e)}},L=function(){for(var i=0;i<m.length;i++)n.elems[i].style.cssText=m[i].style;m=[],l=window.innerHeight,d=window.innerWidth,E=T(d),Y(),k(),animate(),f&&(window.addEventListener("resize",L),f=!1,X())},S=function(e){var t,o=e.getAttribute("data-rellax-percentage"),r=e.getAttribute("data-rellax-speed"),c=e.getAttribute("data-rellax-xs-speed"),m=e.getAttribute("data-rellax-mobile-speed"),f=e.getAttribute("data-rellax-tablet-speed"),v=e.getAttribute("data-rellax-desktop-speed"),w=e.getAttribute("data-rellax-vertical-speed"),h=e.getAttribute("data-rellax-horizontal-speed"),x=e.getAttribute("data-rellax-vertical-scroll-axis"),y=e.getAttribute("data-rellax-horizontal-scroll-axis"),_=e.getAttribute("data-rellax-zindex")||0,A=e.getAttribute("data-rellax-min"),z=e.getAttribute("data-rellax-max"),C=e.getAttribute("data-rellax-min-x"),T=e.getAttribute("data-rellax-max-x"),k=e.getAttribute("data-rellax-min-y"),L=e.getAttribute("data-rellax-max-y"),S=!0;c||m||f||v?t={xs:c,sm:m,md:f,lg:v}:S=!1;var Y=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(Y=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var N=n.options.vertical&&(o||n.options.center)?Y:0,X=n.options.horizontal&&(o||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,R=N+e.getBoundingClientRect().top,W=e.clientHeight||e.offsetHeight||e.scrollHeight,j=X+e.getBoundingClientRect().left,B=e.clientWidth||e.offsetWidth||e.scrollWidth,F=o||(N-R+l)/(W+l),M=o||(X-j+d)/(B+d);n.options.center&&(M=.5,F=.5);var H=S&&null!==t[E]?Number(t[E]):r||n.options.speed,P=w||n.options.verticalSpeed,G=h||n.options.horizontalSpeed,I=x||n.options.verticalScrollAxis,J=y||n.options.horizontalScrollAxis,$=O(M,F,H,P,G),style=e.style.cssText,D="",K=/transform\s*:/i.exec(style);if(K){var U=K.index,V=style.slice(U),Q=V.indexOf(";");D=Q?" "+V.slice(11,Q).replace(/\s/g,""):" "+V.slice(11).replace(/\s/g,"")}return{baseX:$.x,baseY:$.y,top:R,left:j,height:W,width:B,speed:H,verticalSpeed:P,horizontalSpeed:G,verticalScrollAxis:I,horizontalScrollAxis:J,style:style,transform:D,zindex:_,min:A,max:z,minX:C,maxX:T,minY:k,maxY:L}},Y=function(){var e=r,t=c;if(r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,c=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=o-n.options.wrapper.offsetTop}return!(e==r||!n.options.vertical)||!(t==c||!n.options.horizontal)},O=function(e,t,o,r,l){var c={},d=(l||o)*(100*(1-e)),m=(r||o)*(100*(1-t));return c.x=n.options.round?Math.round(d):Math.round(100*d)/100,c.y=n.options.round?Math.round(m):Math.round(100*m)/100,c},N=function(){window.removeEventListener("resize",N),window.removeEventListener("orientationchange",N),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",N),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",N),w=v(X)},X=function(){Y()&&!1===f?(animate(),w=v(X)):(w=null,window.addEventListener("resize",N),window.addEventListener("orientationchange",N),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",N,!!h&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",N,!!h&&{passive:!0}))},animate=function(){for(var e,i=0;i<n.elems.length;i++){var t=m[i].verticalScrollAxis.toLowerCase(),o=m[i].horizontalScrollAxis.toLowerCase(),f=-1!=t.indexOf("x")?r:0,v=-1!=t.indexOf("y")?r:0,w=-1!=o.indexOf("x")?c:0,h=(v+(-1!=o.indexOf("y")?c:0)-m[i].top+l)/(m[i].height+l),x=(f+w-m[i].left+d)/(m[i].width+d),y=(e=O(x,h,m[i].speed,m[i].verticalSpeed,m[i].horizontalSpeed)).y-m[i].baseY,A=e.x-m[i].baseX;null!==m[i].min&&(n.options.vertical&&!n.options.horizontal&&(y=y<=m[i].min?m[i].min:y),n.options.horizontal&&!n.options.vertical&&(A=A<=m[i].min?m[i].min:A)),null!=m[i].minY&&(y=y<=m[i].minY?m[i].minY:y),null!=m[i].minX&&(A=A<=m[i].minX?m[i].minX:A),null!==m[i].max&&(n.options.vertical&&!n.options.horizontal&&(y=y>=m[i].max?m[i].max:y),n.options.horizontal&&!n.options.vertical&&(A=A>=m[i].max?m[i].max:A)),null!=m[i].maxY&&(y=y>=m[i].maxY?m[i].maxY:y),null!=m[i].maxX&&(A=A>=m[i].maxX?m[i].maxX:A);var z=m[i].zindex,C="translate3d("+(n.options.horizontal?A:"0")+"px,"+(n.options.vertical?y:"0")+"px,"+z+"px) "+m[i].transform;n.elems[i].style[_]=C}n.options.callback(e)};return n.destroy=function(){for(var i=0;i<n.elems.length;i++)n.elems[i].style.cssText=m[i].style;f||(window.removeEventListener("resize",L),f=!0),y(w),w=null},L(),n.refresh=L,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e})?n.apply(t,r):n)||(e.exports=l)}).call(this,o(46))},230:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var n=""},314:function(e,t,o){"use strict";o.r(t);var n=o(3),r=(o(15),o(21)),l=o(230),c=o(2),d=o(222),main=o(241);c.default.use(main,{load:{key:l.a}});var m={name:"contact",layout:"gray-footer",components:Object(n.a)(Object(n.a)({InfoSection:r.j},r.b.name,r.b),r.i.name,r.i),data:function(){return{form:{firstName:"",email:"",phone:""},center:{lat:40.748817,lng:-73.985428},options:{styles:[]}}},mounted:function(){Object(d.a)()}},f=o(0),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper contact-page"},[e._m(0),e._v(" "),t("div",{staticClass:"main"},[t("div",{staticClass:"contact-content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-5 ml-auto mr-auto"},[t("h2",{staticClass:"title"},[e._v("Send us a message")]),e._v(" "),e._m(1),e._v(" "),t("form",{attrs:{role:"form",id:"contact-form",method:"post"}},[t("label",[e._v("Your name")]),e._v(" "),t("fg-input",{attrs:{placeholder:"Your Name...","addon-left-icon":"now-ui-icons users_circle-08"},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}}),e._v(" "),t("label",[e._v("Email address")]),e._v(" "),t("fg-input",{attrs:{placeholder:"Email Here...","addon-left-icon":"now-ui-icons users_circle-08"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),t("label",[e._v("Phone")]),e._v(" "),t("fg-input",{attrs:{placeholder:"Number Here...","addon-left-icon":"now-ui-icons tech_mobile"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e._v(" "),e._m(2),e._v(" "),t("div",{staticClass:"submit text-center"},[t("n-button",{attrs:{type:"success",round:""}},[e._v("Contact Us")])],1)],1)]),e._v(" "),t("div",{staticClass:"col-md-5 ml-auto mr-auto"},[t("info-section",{staticClass:"mt-5",attrs:{type:"success",icon:"now-ui-icons location_pin"}},[t("h4",{staticClass:"info-title"},[e._v("Find us at the office")]),e._v(" "),t("p",[e._v(" Bld Mihail Kogalniceanu, nr. 8,\n                                "),t("br"),e._v(" 7652 Bucharest,\n                                "),t("br"),e._v(" Romania\n                            ")])]),e._v(" "),t("info-section",{attrs:{type:"success",icon:"now-ui-icons tech_mobile"}},[t("h4",{staticClass:"info-title"},[e._v("Give us a ring")]),e._v(" "),t("p",[e._v(" Michael Jordan\n                                "),t("br"),e._v(" +40 762 321 762\n                                "),t("br"),e._v(" Mon - Fri, 8:00-22:00\n                            ")])]),e._v(" "),t("info-section",{attrs:{type:"success",icon:"business_briefcase-24 now-ui-icons"}},[t("h4",{staticClass:"info-title"},[e._v("Legal Information")]),e._v(" "),t("p",[e._v(" Creative Tim Ltd.\n                                "),t("br"),e._v(" VAT · EN2341241\n                                "),t("br"),e._v(" IBAN · EN8732ENGB2300099123\n                                "),t("br"),e._v(" Bank · Great Britain Bank\n                            ")])])],1)])])])]),e._v(" "),t("gmap-map",{staticClass:"big-map",attrs:{id:"map",center:e.center,zoom:13,options:e.options,"map-type-id":"terrain"}},[t("gmap-marker",{attrs:{position:e.center}})],1)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"page-header page-header-small rellax-header"},[e("div",{staticClass:"page-header-image",staticStyle:{"background-image":"url('img/bg45.jpg')"}})])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"description"},[e._v("You can contact us with anything related to our Products. We'll get\n                            in touch with you as soon as possible.\n                            "),t("br"),e._v(" "),t("br")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-group"},[t("label",[e._v("Your message")]),e._v(" "),t("textarea",{staticClass:"form-control",attrs:{name:"message",id:"message",rows:"6"}})])}],!1,null,null,null);t.default=component.exports}}]);