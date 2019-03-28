(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9ee01a4"],{1940:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",{staticClass:"userList ",attrs:{bordered:!1,"dis-hover":""}},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("系统角色列表")]),r("Row",{staticClass:"mb10",attrs:{type:"flex",justify:"end",align:"middle"}},[r("Col",{staticStyle:{flex:"1"}},[r("Button",{attrs:{type:"success",icon:"md-add"},on:{click:function(e){t.modal=!0}}},[t._v("新增角色")])],1),r("Col",[r("Button",{attrs:{type:"primary",icon:"ios-search",loading:t.loading},on:{click:function(e){return t.getList(1)}}},[t._v("查询")])],1)],1),r("Table",{staticClass:"mt20",attrs:{columns:t.columns,data:t.data,loading:t.loading,size:"small"}}),r("Row",{staticClass:"mt10",attrs:{type:"flex",justify:"end",align:"middle"}},[r("Page",{attrs:{total:t.searchParam.total,"page-size":t.searchParam.pageSize,current:t.searchParam.pageNum},on:{"update:current":function(e){return t.$set(t.searchParam,"pageNum",e)},"on-change":t.getList}})],1),r("Modal",{attrs:{title:"新增角色"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("Form",{ref:"form",attrs:{model:t.formItem,rules:t.formRules,"label-width":80}},[r("FormItem",{attrs:{label:"角色名",prop:"name"}},[r("Input",{attrs:{placeholder:"请输入角色名"},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name","string"===typeof e?e.trim():e)},expression:"formItem.name"}})],1),r("FormItem",{attrs:{label:"描述",prop:"desc"}},[r("Input",{attrs:{placeholder:"请输入描述"},model:{value:t.formItem.desc,callback:function(e){t.$set(t.formItem,"desc","string"===typeof e?e.trim():e)},expression:"formItem.desc"}})],1),r("FormItem",{attrs:{label:"备注",prop:"remark"}},[r("Input",{attrs:{placeholder:"请输入备注"},model:{value:t.formItem.remark,callback:function(e){t.$set(t.formItem,"remark","string"===typeof e?e.trim():e)},expression:"formItem.remark"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{on:{click:function(e){t.modal=!1}}},[t._v("取消")]),r("Button",{attrs:{type:"primary"},on:{click:t.saveOrUpdate}},[t._v("确定")])],1)],1)],1)},a=[],o=r("a4bb"),i=r.n(o),s=(r("ac6a"),r("7f7f"),r("c24f")),u={name:"UserList",data:function(){var t=this;return{modal:!1,loading:!1,searchParam:{pageNum:1,pageSize:10,total:0},columns:[{title:"ID",minWidth:50,key:"id"},{title:"角色",minWidth:120,key:"name"},{title:"描述",minWidth:100,key:"desc"},{title:"备注",minWidth:100,key:"remark"},{title:"操作",key:"action",width:180,fixed:"right",render:function(e,r){var n=r.row;return e("div","admin"===n.name?"":[e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){return t.edit(n)}}},"编辑"),e("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){return t.auth(n)}}},"授权"),e("Poptip",{props:{transfer:!0,confirm:!0,title:"你确定删除此角色？"},on:{"on-ok":function(){return t.dele(n)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])])}}],data:[],formItem:{name:"",desc:"",remark:""},formRules:{name:[{required:!0,trigger:"blur",message:"角色名不能为空"}]}}},created:function(){this.getList()},methods:{getList:function(t){var e=this;this.searchParam.pageNum=t||this.searchParam.pageNum,this.loading=!0,Object(s["i"])(this.searchParam).then(function(t){e.data=t.list,e.searchParam.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1})},saveOrUpdate:function(){var t=this;this.$refs["form"].validate(function(e){e?t.formItem.id?Object(s["s"])(t.formItem.id,t.formItem).then(function(e){t.getList(),t.modal=!1,t.resetFormItem()}):Object(s["l"])(t.formItem).then(function(e){t.getList(),t.modal=!1,t.resetFormItem()}):t.$Message.error("请检查表单填写")})},edit:function(t){var e=this;this.formItem.id=t.id,i()(this.formItem).forEach(function(r){e.formItem[r]=t[r]}),this.modal=!0},dele:function(t){var e=this,r=t.id;Object(s["d"])(r).then(function(t){return e.getList()})},resetFormItem:function(){var t=this;delete this.formItem.id,i()(this.formItem).forEach(function(e){t.formItem[e]=""})},auth:function(t){this.$router.push({name:"RoleResource",params:t})}}},c=u,l=r("2877"),m=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=m.exports},ac6a:function(t,e,r){for(var n=r("cadf"),a=r("0d58"),o=r("2aba"),i=r("7726"),s=r("32e9"),u=r("84f2"),c=r("2b4c"),l=c("iterator"),m=c("toStringTag"),d=u.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(f),h=0;h<p.length;h++){var g,b=p[h],L=f[b],y=i[b],I=y&&y.prototype;if(I&&(I[l]||s(I,l,d),I[m]||s(I,m,b),u[b]=d,L))for(g in n)I[g]||o(I,g,n[g],!0)}},c24f:function(t,e,r){"use strict";r.d(e,"q",function(){return a}),r.d(e,"k",function(){return o}),r.d(e,"u",function(){return i}),r.d(e,"o",function(){return s}),r.d(e,"a",function(){return u}),r.d(e,"p",function(){return c}),r.d(e,"f",function(){return l}),r.d(e,"c",function(){return m}),r.d(e,"j",function(){return d}),r.d(e,"n",function(){return f}),r.d(e,"t",function(){return p}),r.d(e,"e",function(){return h}),r.d(e,"r",function(){return g}),r.d(e,"i",function(){return b}),r.d(e,"g",function(){return L}),r.d(e,"l",function(){return y}),r.d(e,"s",function(){return I}),r.d(e,"d",function(){return k}),r.d(e,"b",function(){return O}),r.d(e,"h",function(){return j}),r.d(e,"m",function(){return v});var n=r("cb4b");function a(t,e,r,a){return Object(n["a"])({url:"/user/selectuserbychoose",method:"get",params:{nickname:t,phone:e,pageNum:r,pageSize:a}})}function o(t,e,r){return Object(n["a"])({url:"/user/noticeUserUploadVoice",method:"get",params:{mobile:t,platform:e,sex:r}})}function i(t,e){return Object(n["a"])({url:"/user/wakeUpBymobile",method:"get",params:{mobile:t,coin:e}})}function s(t,e,r){return Object(n["a"])({url:"/user/selectAllproportion",method:"get",params:{mobile:t,pageNum:e,pageSize:r}})}function u(t){return Object(n["a"])({url:"/user/UpdateUserproportion",method:"get",params:t})}function c(t,e,r){return Object(n["a"])({url:"/user/selectUserLabelAll",method:"get",params:{nickname:t,pageNum:e,pageSize:r}})}function l(t){return Object(n["a"])({url:"/user/deleteUserLabelByid",method:"get",params:{id:t}})}function m(t){return Object(n["a"])({url:"/user/addUserLabel",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/users",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/users",method:"post",data:t})}function p(t,e){return Object(n["a"])({url:"/users/".concat(t),method:"put",data:e})}function h(t){return Object(n["a"])({url:"/users/".concat(t),method:"delete"})}function g(t,e){return Object(n["a"])({url:"/users/setUserRoles",method:"post",data:{userId:t,roleIds:e}})}function b(t){return Object(n["a"])({url:"/roles",method:"get",params:t})}function L(){return Object(n["a"])({url:"/roles/getAllRoleList",method:"get"})}function y(t){return Object(n["a"])({url:"/roles",method:"post",data:t})}function I(t,e){return Object(n["a"])({url:"/roles/".concat(t),method:"put",data:e})}function k(t){return Object(n["a"])({url:"/roles/".concat(t),method:"delete"})}function O(t){return Object(n["a"])({url:"/roles/addResource",method:"post",data:{data:t}})}function j(t){return Object(n["a"])({url:"/roles/getResourcesByRole/".concat(t),method:"get"})}function v(t,e){return Object(n["a"])({url:"/roles/saveRoleResource/".concat(t),method:"post",data:{data:e}})}}}]);
//# sourceMappingURL=chunk-f9ee01a4.6278d0f0.js.map