(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ac93448"],{c067:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",{staticClass:"memberList ",attrs:{bordered:!1,"dis-hover":""}},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("用户标签")]),r("Row",{staticClass:"mb10",attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("Col",[r("Button",{attrs:{type:"success",icon:"md-add"},on:{click:function(e){t.modal=!0}}},[t._v("添加标签")])],1),r("Col",[r("Input",{staticClass:"w220 mr10",attrs:{placeholder:"nickname",clearable:""},model:{value:t.searchParam.nickname,callback:function(e){t.$set(t.searchParam,"nickname","string"===typeof e?e.trim():e)},expression:"searchParam.nickname"}}),r("Button",{attrs:{type:"primary",icon:"ios-search",loading:t.loading},on:{click:function(e){return t.getList(1)}}},[t._v("查询")])],1)],1),r("Table",{staticClass:"mt20",attrs:{columns:t.columns,data:t.data,loading:t.loading,size:"small"}}),r("Row",{staticClass:"mt10",attrs:{type:"flex",justify:"end",align:"middle"}},[r("Page",{attrs:{total:t.searchParam.total,"page-size":t.searchParam.pageSize,current:t.searchParam.pageNum},on:{"update:current":function(e){return t.$set(t.searchParam,"pageNum",e)},"on-change":t.getList}})],1),r("Modal",{model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("Form",{attrs:{"label-width":100}},[r("FormItem",{attrs:{label:"用户id"}},[r("Input",{attrs:{placeholder:"用户id"},model:{value:t.formItem.user_id,callback:function(e){t.$set(t.formItem,"user_id","string"===typeof e?e.trim():e)},expression:"formItem.user_id"}})],1),r("FormItem",{attrs:{label:"标签"}},[r("Input",{attrs:{placeholder:"标签"},model:{value:t.formItem.label,callback:function(e){t.$set(t.formItem,"label","string"===typeof e?e.trim():e)},expression:"formItem.label"}})],1),r("FormItem",{attrs:{label:"性别"}},[r("Select",{attrs:{placeholder:"性别"},model:{value:t.formItem.sex,callback:function(e){t.$set(t.formItem,"sex",e)},expression:"formItem.sex"}},[r("Option",{attrs:{value:"男"}},[t._v("男")]),r("Option",{attrs:{value:"女"}},[t._v("女")])],1)],1)],1),r("Row",{attrs:{slot:"footer",type:"flex",justify:"end"},slot:"footer"},[r("Button",{on:{click:function(e){t.modal=!1}}},[t._v("取消")]),r("Button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("确定")])],1)],1)],1)},a=[],o=r("c24f"),u={name:"MemberLabel",data:function(){var t=this;return{modal:!1,loading:!1,formItem:{user_id:"",label:"",sex:"女"},searchParam:{nickname:"",pageNum:1,pageSize:20,total:0},columns:[{title:"ID",key:"zizengid"},{title:"用户id",key:"userid"},{title:"标签",key:"label"},{title:"用户昵称",key:"nickname"},{title:"性别",key:"sex"},{title:"豪气值",key:"heroism_value"},{title:"魅力值",key:"charm_value"},{title:"操作",key:"action",render:function(e,r){var n=r.row,a=(n.sex,n.zizengid);return e("div",[e("Poptip",{props:{confirm:!0,title:"你确定删除此标签？"},on:{"on-ok":function(){return t.deleteUserLabelByid(a)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])])}}],data:[]}},created:function(){this.getList()},methods:{getList:function(t){var e=this;this.searchParam.pageNum=t||this.searchParam.pageNum;var r=this.searchParam,n=r.nickname,a=r.pageNum,u=r.pageSize;this.loading=!0,Object(o["p"])(n,a,u).then(function(t){e.data=t.list,e.searchParam.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1})},deleteUserLabelByid:function(t){var e=this;Object(o["f"])(t).then(function(t){e.getList()})},add:function(){var t=this;Object(o["c"])(this.formItem).then(function(e){t.modal=!1,t.getList()})}}},s=u,c=r("2877"),i=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=i.exports},c24f:function(t,e,r){"use strict";r.d(e,"q",function(){return a}),r.d(e,"k",function(){return o}),r.d(e,"u",function(){return u}),r.d(e,"o",function(){return s}),r.d(e,"a",function(){return c}),r.d(e,"p",function(){return i}),r.d(e,"f",function(){return l}),r.d(e,"c",function(){return d}),r.d(e,"j",function(){return m}),r.d(e,"n",function(){return f}),r.d(e,"t",function(){return p}),r.d(e,"e",function(){return h}),r.d(e,"r",function(){return b}),r.d(e,"i",function(){return g}),r.d(e,"g",function(){return k}),r.d(e,"l",function(){return j}),r.d(e,"s",function(){return y}),r.d(e,"d",function(){return v}),r.d(e,"b",function(){return O}),r.d(e,"h",function(){return I}),r.d(e,"m",function(){return x});var n=r("cb4b");function a(t,e,r,a){return Object(n["a"])({url:"/user/selectuserbychoose",method:"get",params:{nickname:t,phone:e,pageNum:r,pageSize:a}})}function o(t,e,r){return Object(n["a"])({url:"/user/noticeUserUploadVoice",method:"get",params:{mobile:t,platform:e,sex:r}})}function u(t,e){return Object(n["a"])({url:"/user/wakeUpBymobile",method:"get",params:{mobile:t,coin:e}})}function s(t,e,r){return Object(n["a"])({url:"/user/selectAllproportion",method:"get",params:{mobile:t,pageNum:e,pageSize:r}})}function c(t){return Object(n["a"])({url:"/user/UpdateUserproportion",method:"get",params:t})}function i(t,e,r){return Object(n["a"])({url:"/user/selectUserLabelAll",method:"get",params:{nickname:t,pageNum:e,pageSize:r}})}function l(t){return Object(n["a"])({url:"/user/deleteUserLabelByid",method:"get",params:{id:t}})}function d(t){return Object(n["a"])({url:"/user/addUserLabel",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/users",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/users",method:"post",data:t})}function p(t,e){return Object(n["a"])({url:"/users/".concat(t),method:"put",data:e})}function h(t){return Object(n["a"])({url:"/users/".concat(t),method:"delete"})}function b(t,e){return Object(n["a"])({url:"/users/setUserRoles",method:"post",data:{userId:t,roleIds:e}})}function g(t){return Object(n["a"])({url:"/roles",method:"get",params:t})}function k(){return Object(n["a"])({url:"/roles/getAllRoleList",method:"get"})}function j(t){return Object(n["a"])({url:"/roles",method:"post",data:t})}function y(t,e){return Object(n["a"])({url:"/roles/".concat(t),method:"put",data:e})}function v(t){return Object(n["a"])({url:"/roles/".concat(t),method:"delete"})}function O(t){return Object(n["a"])({url:"/roles/addResource",method:"post",data:{data:t}})}function I(t){return Object(n["a"])({url:"/roles/getResourcesByRole/".concat(t),method:"get"})}function x(t,e){return Object(n["a"])({url:"/roles/saveRoleResource/".concat(t),method:"post",data:{data:e}})}}}]);
//# sourceMappingURL=chunk-0ac93448.a291206f.js.map