(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e02c5119"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=a[t]=[e,i]});e.push(n[2]=i);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,n[1](c)}a[t]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"0b87":function(t,e,n){},"0fef":function(t,e,n){t.exports=n.p+"img/environment.ab45fd67.jpg"},1571:function(t,e,n){},"1c56":function(t,e,n){},2539:function(t,e,n){},"324c":function(t,e,n){"use strict";var i=n("1571"),a=n.n(i);a.a},"3b4e":function(t,e,n){var i={"./card1.png":"4fab","./card2.png":"54eb","./card3.jpeg":"c274","./logo.png":"cf05"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="3b4e"},"452f":function(t,e,n){"use strict";var i=n("4b1f"),a=n.n(i);a.a},"4b1f":function(t,e,n){},"4fab":function(t,e,n){t.exports=n.p+"img/card1.c74d4f30.png"},"54eb":function(t,e,n){t.exports=n.p+"img/card2.622818ca.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("9869"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("nav",{staticClass:"navbar"},[i("ul",[i("li",{staticStyle:{margin:"-3px 0px 0px -33px"}},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("cf05"),alt:"logo",width:"70px",height:"65px"}})])],1),i("li",[i("div",{staticClass:"dropdown"},[i("a",{staticClass:"dropbtn",staticStyle:{"text-decoration":"none"}},[t._v("About Us")]),i("div",{staticClass:"dropdown-content"},[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/about/who-we-are"}},[t._v("Who we are")]),i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/about/what-we-do"}},[t._v("What we do")]),i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/about/our-impact"}},[t._v("Our Impact")])],1)])]),i("li",[i("div",{staticClass:"dropdown"},[i("a",{staticClass:"dropbtn",staticStyle:{"text-decoration":"none"}},[t._v("Initiatives")]),i("div",{staticClass:"dropdown-content"},[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"dummy",params:{name:"disaster",disaster:t.disaster}}}},[t._v("Disaster Relief & Rehabilitation")]),i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"dummy",params:{name:"education",education:t.education}}}},[t._v("Education cell")]),i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"dummy",params:{name:"women",women:t.women}}}},[t._v("Women Empowerment")]),i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"dummy",params:{name:"environment",environment:t.environment}}}},[t._v("Environment")])],1)])]),i("li",[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/join"}},[t._v("Latest Updates")])],1),i("li",[i("div",{staticClass:"dropdown"},[i("a",{staticClass:"dropbtn",staticStyle:{"text-decoration":"none"}},[t._v("Camps/Offices")]),i("div",{staticClass:"dropdown-content"},[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/office"}},[t._v("Offices")]),i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/collection-centers"}},[t._v("Collection centers")]),i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/write-to-us"}},[t._v("Write to us")])],1)])])]),i("button",[t._v("Donate")])]),i("router-view"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("p",[t._v("Follow us on:")]),n("div",{staticClass:"media-content"},[n("a",{attrs:{href:"https://www.instagram.com/biloopto"}},[n("i",{staticClass:"fab fa-instagram"})]),n("a",{attrs:{href:"https://wwww.facebook.com/biloopto"}},[n("i",{staticClass:"fab fa-facebook-f"})]),n("a",{attrs:{href:"https://www.youtube.com/channel/UC4-1aQ_3JHkdVN6IKmWPvnA"}},[n("i",{staticClass:"fab fa-youtube"})]),n("a",{attrs:{href:"mailto:biloopto@gmail.com?Subject=Hello%20again",target:"_top"}},[n("i",{staticClass:"fas fa-envelope"})])]),n("p",[t._v("\n        ©\n        2018 Biloopto\n        "),n("ol",{staticClass:"list"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("FAQ / ")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Annual Report /")])]),n("li",[t._v(" Privacy Policy")])])])])}],s={source:[{id:1,title:"card 1.edu",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:2,title:"card 2.edu",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:3,title:"card 3.edu",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:4,title:"card 4.edu",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:5,title:"card 5.edu",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"}]},r=s,l={source:[{id:1,title:"card 1.dis",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:2,title:"card 2.dis",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:3,title:"card 3.dis",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:4,title:"card 4.dis",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:5,title:"card 5.dis",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"}]},c=l,d={source:[{id:1,title:"card 1.env",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:2,title:"card 2.env",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:3,title:"card 3.env",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:4,title:"card 4.env",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:5,title:"card 5.env",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"}]},u=d,p={source:[{id:1,title:"card 1.wom",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:2,title:"card 2.wom",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:3,title:"card 3.wom",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:4,title:"card 4.wom",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"},{id:5,title:"card 5.wom",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"}]},m=p,f={name:"app",data:function(){return{education:r,disaster:c,environment:u,women:m}}},h=f,v=(n("034f"),n("2877")),g=Object(v["a"])(h,a,o,!1,null,null,null),b=g.exports,w=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" In join\n")])},y=[],x={name:"Latest-Update"},C=x,T=Object(v["a"])(C,_,y,!1,null,null,null),S=T.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("Carousel"),t._m(0),t._m(1),n("Stories"),n("Work"),n("Gallery")],1)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron jumbotron-fluid",staticStyle:{"background-color":"white"}},[n("div",{staticClass:"container"},[n("h1",{staticClass:"display-4"},[t._v('"I slept and dreamt that life was joy. I awoke and saw life was service. I acted and behold, service was joy."')]),n("p",{staticClass:"lead"},[t._v("- Rabindranath Nath Tagore ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron jumbotron-fluid",staticStyle:{"background-color":"white"}},[n("div",{staticClass:"container"},[n("h1",{staticClass:"display-4",staticStyle:{"text-align":"center"}},[t._v("Our Vision")]),n("p",{staticClass:"lead"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")])])])}],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-section"},[n("div",{staticClass:"slideshow-container"},[t._m(0),t._m(1),t._m(2),n("a",{staticClass:"prev",on:{click:function(e){return t.plusSlides(-1)}}},[t._v("❮")]),n("a",{staticClass:"next",on:{click:function(e){return t.plusSlides(1)}}},[t._v("❯")])]),n("br")])},E=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mySlides fade"},[i("video",{staticStyle:{"max-width":"100%"},attrs:{controls:""}},[i("source",{attrs:{src:n("ae46"),type:"video/mp4"}})]),i("div",{staticClass:"text"},[t._v("Caption Text")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mySlides fade"},[i("img",{staticStyle:{height:"761px",width:"1352px"},attrs:{src:n("54eb")}}),i("div",{staticClass:"text"},[t._v("Caption Two")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mySlides fade"},[i("img",{staticStyle:{height:"761px",width:"1352px"},attrs:{src:n("c274")}}),i("div",{staticClass:"text"},[t._v("Caption Three")])])}],I={name:"Carousel",data:function(){return{slideIndex:1}},methods:{showSlides:function(t){var e,n=document.getElementsByClassName("mySlides");for(t>n.length&&(this.slideIndex=1),t<1&&(this.slideIndex=n.length),e=0;e<n.length;e++)n[e].style.display="none";n[this.slideIndex-1].style.display="block"},plusSlides:function(t){this.showSlides(this.slideIndex+=t)},currentSlide:function(t){this.showSlides(this.slideIndex=t)}},mounted:function(){this.showSlides(this.slideIndex)}},$=I,P=(n("7941"),Object(v["a"])($,O,E,!1,null,"304d0ab0",null)),W=P.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery-section"},[n("h1",{staticClass:"display-4",staticStyle:{"text-align":"center","margin-bottom":"40px","margin-top":"100px"}},[t._v(" Gallery")]),n("div",{staticClass:"grid",on:{mouseover:function(e){return t.myfunc()},mouseout:function(e){return t.myfunction()}}},t._l(t.availableImage.source,function(t,e){return n("div",{key:e,staticClass:"item",style:{"background-image":"url("+t.src+")"}})}),0)])},N=[],A=(n("a481"),{source:[{id:1,src:"https://images.unsplash.com/photo-1439209306665-700c9bca794c?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="},{id:2,src:"https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop="},{id:3,src:"https://images.unsplash.com/photo-1488572384981-eac03dfeb6b9?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="},{id:4,src:"https://images.unsplash.com/photo-1470091688026-38b51162c8df?dpr=1&auto=compress,format&fit=crop&w=1199&h=750&q=80&cs=tinysrgb&crop="},{id:5,src:"https://images.unsplash.com/photo-1475139450941-3b6464b2dde3?dpr=1&auto=compress,format&fit=crop&w=1199&h=673&q=80&cs=tinysrgb&crop="}]}),U=A,M={name:"Gallery",data:function(){return{availableImage:U}},methods:{myfunc:function(){console.log("hello");var t,e=document.getElementsByClassName("item");for(t=0;t<e.length;t++)e[t].className+=" swirl-in-fwd"},myfunction:function(){var t,e=document.getElementsByClassName("item");for(t=0;t<e.length;t++)e[t].className=e[t].className.replace(/\bswirl-in-fwd\b/g,"").trim()}}},q=M,D=(n("dac2"),Object(v["a"])(q,L,N,!1,null,"e73c2144",null)),R=D.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stories-section"},[n("h1",{staticClass:"display-4",staticStyle:{"text-align":"center"}},[t._v("Impact Stories")]),n("div",{staticClass:"card"},t._l(t.availableStories.story,function(e,i){return n("div",{key:i,staticClass:"card-content"},[n("img",{attrs:{src:e.src}}),n("div",{staticClass:"card-definition"},[n("div",{staticClass:"card-title"},[n("h2",[t._v(t._s(e.title))])]),n("p",[t._v(t._s(e.content))])])])}),0)])},G=[],J=n("3b4e"),F={story:[{id:1,title:"Assam Diaries",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",src:J("./card1.png")},{id:2,title:"Our Team",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",src:J("./card2.png")},{id:3,title:"On Ground",content:"lorem ipsum This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",src:J("./card3.jpeg")}]},H=F,K={name:"Stories",data:function(){return{availableStories:H}}},Q=K,V=(n("324c"),Object(v["a"])(Q,B,G,!1,null,"6ba49aa5",null)),z=V.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"work-section"},[i("h1",{staticClass:"display-4",staticStyle:{"text-align":"center"}},[t._v("Our Work")]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},[i("img",{attrs:{src:n("c274")}}),i("div",{staticClass:"card-title",staticStyle:{"margin-left":"78px","text-align":"center"}},[i("h2",[t._v("Disaster Relief & "),i("br"),t._v("Rehabilitation")])])]),i("div",{staticClass:"card-content"},[i("img",{attrs:{src:n("e594")}}),i("div",{staticClass:"card-title",staticStyle:{"margin-left":"111px"}},[i("h2",[t._v("Education")])])]),i("div",{staticClass:"card-content"},[i("img",{attrs:{src:n("0fef")}}),i("div",{staticClass:"card-title",staticStyle:{"margin-left":"103px"}},[i("h2",[t._v("Environment")])])])])])}],Z={name:"Work"},tt=Z,et=(n("d167"),Object(v["a"])(tt,X,Y,!1,null,"cb3ad2d4",null)),nt=et.exports,it={name:"home",components:{Carousel:W,Gallery:R,Stories:z,Work:nt}},at=it,ot=(n("452f"),Object(v["a"])(at,j,k,!1,null,"589470e6",null)),st=ot.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"display-4"},[t._v("Location")]),n("div",{staticClass:"office-section"},[n("div",{staticClass:"map-image"},[n("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.169013480228!2d88.36952941479059!3d22.497841085221303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1567784094956!5m2!1sen!2sin",width:"500",height:"400",frameborder:"0",allowfullscreen:""}})]),n("div",{staticClass:"definition"},[n("span",[n("h1",[t._v("Biloopto, Jadavpur, Kolkata- 700032.")])]),n("span",[n("h1",[t._v("Contact: 1234567890")])]),n("span",[n("h1",[t._v("Timing: 10 AM - 5 PM")])])])])])}],ct={name:"office"},dt=ct,ut=(n("7614"),Object(v["a"])(dt,rt,lt,!1,null,"1a47a515",null)),pt=ut.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},t._l(t.part.object.source,function(e,i){return n("div",{key:i,staticClass:"card-content"},[n("div",{staticClass:"card-definition"},[n("div",{staticClass:"card-title"},[n("h2",[t._v(t._s(e.title))])]),n("p",[t._v(t._s(e.content))])])])}),0)])},ft=[],ht={name:"dummy",props:["education","disaster","environment","women"],computed:{part:function(){return this.disaster?{object:this.disaster}:this.education?{object:this.education}:this.environment?{object:this.environment}:this.women?{object:this.women}:void 0}}},vt=ht,gt=(n("69c6"),Object(v["a"])(vt,mt,ft,!1,null,"ff2e939e",null)),bt=gt.exports;i["a"].use(w["a"]);var wt=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:st},{path:"/",name:"initiatives",component:st},{path:"/about/who-we-are",name:"Who",component:function(){return n.e("about").then(n.bind(null,"ba07"))}},{path:"/about/what-we-do",name:"What",component:function(){return n.e("about").then(n.bind(null,"3cb5"))}},{path:"/about/our-impact",name:"Impact",component:function(){return n.e("about").then(n.bind(null,"8716"))}},{path:"/join",name:"latestUpdate",component:S},{path:"/office",name:"office",component:pt},{path:"/initiative/:name",name:"dummy",component:bt,props:!0}]}),_t=n("2f62");i["a"].use(_t["a"]);var yt=new _t["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:wt,store:yt,render:function(t){return t(b)}}).$mount("#app")},6006:function(t,e,n){},"69c6":function(t,e,n){"use strict";var i=n("2539"),a=n.n(i);a.a},7614:function(t,e,n){"use strict";var i=n("1c56"),a=n.n(i);a.a},7941:function(t,e,n){"use strict";var i=n("b21f"),a=n.n(i);a.a},"85ec":function(t,e,n){},ae46:function(t,e,n){t.exports=n.p+"media/video.7fdd018e.mp4"},b21f:function(t,e,n){},c274:function(t,e,n){t.exports=n.p+"img/card3.6d4570fc.jpeg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.699c7d73.png"},d167:function(t,e,n){"use strict";var i=n("0b87"),a=n.n(i);a.a},dac2:function(t,e,n){"use strict";var i=n("6006"),a=n.n(i);a.a},e594:function(t,e,n){t.exports=n.p+"img/education.eff90a07.jpg"}});
//# sourceMappingURL=app.b6c9f8d1.js.map