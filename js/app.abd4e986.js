(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0ac93448":"f891d2e6","chunk-0f00e749":"144d100b","chunk-2d217e10":"f8059e8d","chunk-5aedeac0":"98e9ad20","chunk-5f94300c":"cb32e011","chunk-c69e8bc4":"3d7e43df","chunk-f56dcb46":"df37433a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,c.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var m=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d3f":function(e,t,n){},"102e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{staticClass:"layout",style:{background:"#f0f2f5",width:"100%",minHeight:"100vh"}},[n("Header",{style:{position:"fixed",left:"0",top:"0",width:"100%",zIndex:1001}},[n("XHeader")],1),n("Layout",{style:{marginTop:"64px"}},[n("Sider",{style:{width:e.collapsed?"64px":"200px",minWidth:e.collapsed?"64px":"200px",overflowX:e.collapsed?"":"hidden",position:"fixed",top:"64px",bottom:0,background:"#fff",boxShadow:"0 2px 10px 0 rgba(7,17,27,.1)",zIndex:9}},[n("XMenu",{attrs:{menuList:e.menuList},on:{selectMenu:e.selectMenu}})],1),n("Layout",{style:{marginLeft:e.collapsed?"64px":"200px",padding:"0 24px",transition:".2s"}},[n("Breadcrumb",{style:{margin:"24px 0"}},e._l(e.breadList,function(t,r){return n("BreadcrumbItem",{key:r,attrs:{to:{name:t}}},[e._v(e._s(e.generateTitle(t)))])})),n("Content",{style:{position:"relative",background:"#fff"}},[n("router-view")],1),n("Footer",{staticStyle:{"text-align":"center",background:"transparent"}},[e._v(e._s(e.footer))])],1)],1)],1)},o=[],a=(n("7f7f"),n("be94")),i=n("2f62"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[e._v(e._s(e.header))]),n("div",{style:{flex:"1",paddingLeft:"20px"}},[n("Icon",{style:{transition:".2s",cursor:"pointer",transform:e.collapsed?"rotate(90deg)":""},attrs:{type:"md-menu",color:"#fff",size:"30"},on:{click:e.collapseMenu}}),n("Dropdown",{style:{float:"right"},on:{"on-click":e.handleClick}},[n("a",{attrs:{href:"javascript:void(0)"}},[n("Avatar",{attrs:{src:e.avatar+"?imageView2/1/w/64/h/64"}}),n("Icon",{attrs:{type:"md-arrow-dropdown",color:"#fff"}})],1),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"logout"}},[e._v("退出登录")])],1)],1),n("Lang",{style:{float:"right",marginRight:"10px"}})],1)])},c=[],u=n("e579"),l={header:"老陈管理系统",footer:"2013-2018 © 老陈科技"},m={name:"XHeader",data:function(){return{header:l.header}},computed:Object(a["a"])({},Object(i["b"])(["collapsed","avatar"])),methods:{collapseMenu:function(){this.$store.dispatch("collapseMenu")},handleClick:function(e){var t=this;"logout"===e&&this.$store.dispatch("frontLogout").then(function(e){t.$router.push({name:"Login"})})}},components:{Lang:u["a"]}},d=m,p=(n("5db4"),n("2877")),f=Object(p["a"])(d,s,c,!1,null,"b89d2c68",null);f.options.__file="index.vue";var h=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Menu",{ref:"menu",style:{height:"100%",transition:e.collapsed?"":".2s"},attrs:{"active-name":e.activeMenuName,"open-names":e.openNames,theme:"light",width:e.collapsed?"64px":"200px"},on:{"on-select":e.selectMenu}},[n("div",{style:{width:e.collapsed?"64px":"200px",minWidth:e.collapsed?"64px":"200px",overflowX:"hidden",height:"100%"}},[e.collapsed?n("div",{staticClass:"collapsedMenu"},[e._l(e.menuList,function(t,r){return[t.children&&t.children.length?n("collapsedMenuItem",{key:r,attrs:{menu:t,noName:""},on:{"on-select":e.selectMenu}}):n("Tooltip",{key:r,attrs:{content:e.generateTitle(t.name),placement:"right"}},[t.icon?n("Icon",{style:{padding:"10px",cursor:"pointer"},attrs:{type:t.icon,size:"30"},on:{click:function(n){e.selectMenu(t.to)}}}):e._e()],1)]})],2):e._l(e.menuList,function(e,t){return n("recursionMenuItem",{key:t,attrs:{menu:e}})})],2)])},v=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.menu.children&&e.menu.children.length?n("Submenu",{attrs:{name:e.menu.to}},[n("template",{slot:"title"},[e.menu.icon?n("Icon",{style:{marginRight:"8px"},attrs:{type:e.menu.icon}}):e._e(),e._v("\n    "+e._s(e.generateTitle(e.menu.name))+"\n  ")],1),e._l(e.menu.children,function(e,t){return n("recursion-menu-item",{key:t,attrs:{menu:e}})})],2):n("MenuItem",{attrs:{name:e.menu.to}},[e.menu.icon?n("Icon",{style:{marginRight:"8px"},attrs:{type:e.menu.icon}}):e._e(),e._v("\n  "+e._s(e.generateTitle(e.menu.name))+"\n")],1)},y=[];function _(e){var t=this.$te("menu."+e);if(t){var n=this.$t("menu."+e);return n}return e}var x={name:"recursionMenuItem",props:{menu:{type:Object,required:!0}},methods:{generateTitle:_}},w=x,L=Object(p["a"])(w,b,y,!1,null,null,null);L.options.__file="recursionMenuItem.vue";var k=L.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dropdown",{attrs:{placement:"right-start"}},[n("div",{style:{cursor:"pointer",fontSize:"12px",textAlign:e.noName?"center":"left",padding:e.noName?"":"7px 20px"}},[e.noName?[n("Icon",{style:{padding:"10px",cursor:"pointer"},attrs:{type:e.menu.icon,size:"30"}})]:[n("Icon",{style:{marginRight:"8px",marginLeft:"-10px"},attrs:{type:e.menu.icon,size:"12"}}),e._v(e._s(e.generateTitle(e.menu.name))+"\n    ")],e.noName?e._e():n("Icon",{style:{position:"absolute",top:"10px",right:"4px"},attrs:{type:"ios-arrow-forward"}})],2),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e._l(e.menu.children,function(t,r){return[t.children&&t.children.length?n("collapsedMenuItem",{key:r,attrs:{menu:t},on:{"on-select":e.handleClick}}):n("DropdownItem",{key:r,attrs:{name:t.to}},[n("div",{style:{flex:1,textAlign:"left",margin:"-12px -16px",padding:"10px"},on:{click:function(n){e.handleClick(t.to)}}},[t.icon?n("Icon",{style:{marginRight:"8px"},attrs:{type:t.icon}}):e._e(),e._v(e._s(e.generateTitle(t.name))+"\n        ")],1)])]})],2)],1)},I=[],T={name:"collapsedMenuItem",props:{menu:{type:Object,required:!0},noName:{type:Boolean,default:!1}},methods:{handleClick:function(e){this.$emit("on-select",e)},generateTitle:_}},O=T,j=Object(p["a"])(O,M,I,!1,null,null,null);j.options.__file="collapsedMenuItem.vue";var S=j.exports,$={name:"XMenu",props:{menuList:{type:Array,required:!0}},data:function(){return{activeMenuName:null,openNames:[],flatMenu:this.flattenMenu(this.menuList).map(function(e){return e.to})}},computed:Object(a["a"])({},Object(i["b"])(["collapsed"])),watch:{$route:{immediate:!0,handler:function(e){var t=this;this.collapsed||(this.flatMenu.indexOf(e.name)>-1&&(this.activeMenuName=e.name),this.openNames=e.matched.map(function(e){return e.name}),this.$nextTick(function(){return t.$refs["menu"].updateOpened()}))}}},methods:{selectMenu:function(e){console.log(e),this.$emit("selectMenu",e)},flattenMenu:function(e){var t=this;return e&&Array.isArray(e)?e.reduce(function(e,n){return e.concat(n.children&&n.children.length?[n].concat(t.flattenMenu(n.children)):n)},[]):[]},generateTitle:_},components:{recursionMenuItem:k,collapsedMenuItem:S}},E=$,C=(n("8c90"),Object(p["a"])(E,g,v,!1,null,"46655cf2",null));C.options.__file="index.vue";var N=C.exports,A=n("2197"),P={name:"Home",data:function(){return{menuList:A["a"],footer:l.footer}},computed:Object(a["a"])({},Object(i["b"])(["collapsed"]),{breadList:function(){var e=this.$route.matched.reduce(function(e,t){var n=t.name,r=t.meta,o=r&&r.bread;return Array.isArray(o)&&(e=e.concat(o)),r&&!1===o||e.push(n),e},[]);return"Home"===e[0]?e:["Home"].concat(e)}}),methods:{selectMenu:function(e){this.$router.push({name:e})},generateTitle:function(e){var t=this.$te("bread."+e);if(t){var n=this.$t("bread."+e);return n}return e}},components:{XHeader:h,XMenu:N}},U=P,z=(n("3260"),Object(p["a"])(U,r,o,!1,null,"fb1ded72",null));z.options.__file="index.vue";t["default"]=z.exports},"18c9":function(e,t,n){"use strict";var r=n("0d3f"),o=n.n(r);o.a},"210e":function(e,t,n){},2197:function(e,t,n){"use strict";t["a"]=[{name:"Home",icon:"ios-home",to:"Dashboard"},{name:"用户",icon:"md-list",to:"Member",children:[{name:"用户列表",icon:"md-list",to:"MemberList"},{name:"用户分成",icon:"md-list",to:"MemberProportion"},{name:"用户标签",icon:"md-list",to:"MemberLabel"}]},{name:"User",icon:"md-list",to:"TheUser",children:[{name:"UserList",icon:"md-list",to:"UserList"},{name:"Role",icon:"md-list",to:"RoleList"}]}]},3260:function(e,t,n){"use strict";var r=n("4943"),o=n.n(r);o.a},4943:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=(n("7f7f"),n("2909")),a=n("8c4f"),i=n("2f62"),s={state:{collapsed:!1,lang:"zh-CN"===navigator.language||"en-US"===navigator.language?navigator.language:"zh-CN"},getters:{collapsed:function(e){return e.collapsed}},mutations:{SET_COLLAPSED:function(e,t){e.collapsed=t},SET_LANG:function(e,t){e.lang=t}},actions:{collapseMenu:function(e){var t=e.commit,n=e.state;t("SET_COLLAPSED",!n.collapsed)},setLang:function(e,t){var n=e.commit;n("SET_LANG",t)}}},c=n("cb4b");function u(e,t){return Object(c["a"])({url:"/login/login",method:"post",params:{username:e,password:t}})}var l={state:{name:"",token:"",avatar:""},getters:{name:function(e){return e.avatar},token:function(e){return e.token},avatar:function(e){return e.avatar}},mutations:{SET_NAME:function(e,t){e.name=t},SET_TOKEN:function(e,t){e.token=t},SET_AVATAR:function(e,t){e.avatar=t}},actions:{Login:function(e,t){var n=e.dispatch,r=t.username,o=t.password;return new Promise(function(e,t){u(r,o).then(function(t){var r=t.name,o=t.token,a=t.avatar;n("handleUserInfo",t),sessionStorage.setItem("__user__Info",JSON.stringify({name:r,token:o,avatar:a})),e()}).catch(function(e){return t(e)})})},handleUserInfo:function(e){var t=e.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.name,o=void 0===r?"":r,a=n.token,i=void 0===a?"":a,s=n.avatar,c=void 0===s?"":s;t("SET_NAME",o),t("SET_TOKEN",i),t("SET_AVATAR",c)},Logout:function(){return new Promise(function(e,t){sessionStorage.clear(),e()})},frontLogout:function(e){var t=e.dispatch;return new Promise(function(e,n){t("handleUserInfo"),sessionStorage.clear(),e()})}}};r["default"].use(i["a"]);var m=new i["a"].Store({modules:{app:s,user:l}}),d=n("e069"),p=n.n(d),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"login-header"},[e._v(e._s(e.$t("login.logIn")))]),n("div",{staticClass:"subtitle"},[e._v("一个admin的subtitle")]),n("Form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.formItem,rules:e.rules}},[n("FormItem",{staticClass:"login-form-item",attrs:{prop:"username"}},[n("Input",{attrs:{type:"text",placeholder:e.$t("login.username")},model:{value:e.formItem.username,callback:function(t){e.$set(e.formItem,"username","string"===typeof t?t.trim():t)},expression:"formItem.username"}})],1),n("FormItem",{staticClass:"login-form-item",attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:e.$t("login.password")},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.login(t):null}},model:{value:e.formItem.password,callback:function(t){e.$set(e.formItem,"password",t)},expression:"formItem.password"}})],1),n("FormItem",{staticClass:"login-form-item"},[n("Button",{attrs:{long:"",type:"primary"},on:{click:e.login}},[e._v("登 入")])],1)],1),n("Lang",{style:{position:"absolute",right:"0px",top:"10px"},attrs:{color:"#888"}})],1)])},h=[],g=n("e579"),v={name:"Login",data:function(){return{formItem:{username:"",password:""},rules:{username:[{required:!0,message:"The username cannot be empty",trigger:"blur"}],password:[{required:!0,message:"The password cannot be empty",trigger:"blur"}]}}},methods:{login:function(){var e=this;this.$refs["loginForm"].validate(function(t){t?e.$store.dispatch("Login",e.formItem).then(function(t){e.$router.push({name:"Home"})}):console.error("校验没过：(")})}},components:{Lang:g["a"]}},b=v,y=(n("18c9"),n("2877")),_=Object(y["a"])(b,f,h,!1,null,"edb38d3a",null);_.options.__file="index.vue";var x=_.exports,w=n("102e"),L=[{path:"/member",name:"Member",redirect:"/memberList",component:w["default"],children:[{path:"/memberList",name:"MemberList",component:function(){return n.e("chunk-0f00e749").then(n.bind(null,"d73a"))}},{path:"/memberProportion",name:"MemberProportion",component:function(){return n.e("chunk-f56dcb46").then(n.bind(null,"4171"))}},{path:"/memberLabel",name:"MemberLabel",component:function(){return n.e("chunk-0ac93448").then(n.bind(null,"c067"))}}]}],k=[{path:"/theUser",name:"TheUser",redirect:"/userList",component:w["default"],children:[{path:"/userList",name:"UserList",component:function(){return n.e("chunk-c69e8bc4").then(n.bind(null,"7368"))}},{path:"/roleList",name:"RoleList",component:function(){return n.e("chunk-5f94300c").then(n.bind(null,"1940"))}},{path:"/roleResource",name:"RoleResource",component:function(){return n.e("chunk-5aedeac0").then(n.bind(null,"94fe"))}}]}];r["default"].use(a["a"]);var M=new a["a"]({routes:[{path:"/login",name:"Login",component:x},{path:"/",name:"Home",redirect:"/dashboard",component:function(){return Promise.resolve().then(n.bind(null,"102e"))},children:[{path:"/dashboard",name:"Dashboard",meta:{bread:!1},component:function(){return n.e("chunk-2d217e10").then(n.bind(null,"c937"))}}]}].concat(Object(o["a"])(L),Object(o["a"])(k))}),I="Login";M.beforeEach(function(e,t,n){p.a.LoadingBar.start();var r=m.state.token;if(!r){var o=JSON.parse(sessionStorage.getItem("__user__Info"));o&&(m.dispatch("handleUserInfo",o),r=!0)}r||e.name===I?(r||e.name!==I)&&r&&e.name===I?"Home"!==t.name&&(n({name:"Home"}),p.a.LoadingBar.finish()):n():n({name:I})}),M.afterEach(function(e){p.a.LoadingBar.finish(),window.scrollTo(0,0)});var T=M,O=(n("f5df"),n("be94")),j=n("a925"),S={login:{logIn:"登 录",username:"账号",password:"密码"},menu:{Home:"首 页",User:"用户管理"},bread:{Home:"首 页",TheUser:"用户管理",UserList:"系统用户列表",Dashboard:"主面板"}},$={login:{logIn:"logIn",username:"username",password:"password"}},E=n("cea3"),C=n("641c");r["default"].use(j["a"]);var N=navigator.language,A="zh-CN"===N||"en-US"===N?N:"zh-CN";r["default"].locale=function(){};var P={"zh-CN":Object(O["a"])({},E["a"],S),"en-US":Object(O["a"])({},C["a"],$)},U=new j["a"]({locale:A,messages:P}),z=U,D=(n("dcad"),n("7747"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),H=[],R=(n("7c55"),{}),B=Object(y["a"])(R,D,H,!1,null,null,null);B.options.__file="App.vue";var X=B.exports;r["default"].config.productionTip=!1,r["default"].use(p.a,{i18n:function(e,t){return z.t(e,t)}}),new r["default"]({router:T,store:m,i18n:z,render:function(e){return e(X)}}).$mount("#app")},"5c48":function(e,t,n){},"5db4":function(e,t,n){"use strict";var r=n("a6ee"),o=n.n(r);o.a},7747:function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),o=n.n(r);o.a},"8c90":function(e,t,n){"use strict";var r=n("210e"),o=n.n(r);o.a},a6ee:function(e,t,n){},cb4b:function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r),a=n("e069"),i=o.a.create({baseURL:"/",timeout:5e3,headers:{"Content-Type":"application/json; charset=utf-8"}});i.interceptors.request.use(function(e){return e}),i.interceptors.response.use(function(e){var t=e.data;t=void 0===t?{}:t;var n=t.data,r=t.status,o=t.tips;return"1001"!==r?(console.log(o),o&&a["Message"].error(o),Promise.reject()):n},function(e){return a["Message"].error("请求出现了错误 :("),Promise.reject(e)}),t["a"]=i},e579:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dropdown",{on:{"on-click":e.selectLang}},[n("a",{attrs:{href:"javascript:void(0)"}},[n("Icon",{attrs:{type:"md-globe",size:e.size,color:e.color}})],1),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"en-US"}},[e._v("english")]),n("DropdownItem",{attrs:{name:"zh-CN"}},[e._v("中文")])],1)],1)},o=[],a=(n("c5f6"),{name:"Lang",props:{size:{type:Number,default:20},color:{type:String,default:"#fff"}},methods:{selectLang:function(e){this.$i18n.locale=e,this.$Message.success("Switch Language Success!")}}}),i=a,s=n("2877"),c=Object(s["a"])(i,r,o,!1,null,null,null);c.options.__file="index.vue";t["a"]=c.exports}});
//# sourceMappingURL=app.abd4e986.js.map