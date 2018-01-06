webpackJsonp([1],{Bg5L:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("oAV5"),a={mounted:function(){this.loading=!0,this.initRoles()},methods:{deleteRole:function(e,t){var s=this;this.$confirm("删除角色["+t+"], 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.loading=!0,s.deleteRequest("/system/basic/role/"+e).then(function(e){if(e&&200==e.status){var t=e.data;s.$message({type:t.status,message:t.msg}),s.initRoles()}else s.loading=!1})}).catch(function(){s.$message({type:"info",message:"已取消删除"})})},addNewRole:function(){if(Object(n.b)(this.newRole,this.newRoleZh)){this.loading=!0;var e=this;this.postRequest("/system/basic/addRole",{role:this.newRole,roleZh:this.newRoleZh}).then(function(t){if(t&&200==t.status){var s=t.data;e.$message({type:s.status,message:s.msg}),e.initRoles(),e.newRole="",e.newRoleZh=""}else e.loading=!1})}},updateRoleMenu:function(e){var t=this.$refs.tree[e].getCheckedKeys(!0),s=this;this.putRequest("/system/basic/updateMenuRole",{rid:this.activeColItem,mids:t}).then(function(e){if(e&&200==e.status){var t=e.data;s.$message({type:t.status,message:t.msg}),s.activeColItem=-1}})},collapseChange:function(e){if(""!=e){var t=this;this.getRequest("/system/basic/menuTree/"+e).then(function(e){if(e&&200==e.status){var s=e.data;t.treeData=s.menus,t.checkedKeys=s.mids}})}},handleCheckChange:function(e,t,s){},initRoles:function(){var e=this;this.getRequest("/system/basic/roles").then(function(t){e.loading=!1,t&&200==t.status&&(e.roles=t.data,e.activeColItem=-1)})},cancelUpdateRoleMenu:function(){this.activeColItem=-1}},data:function(){return{props:{label:"name",children:"children"},newRole:"",newRoleZh:"",roles:[],treeData:[],checkedKeys:[],loading:!1,activeColItem:-1}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"text-align":"left"}},[s("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入角色英文名称...",size:"mini"},model:{value:e.newRole,callback:function(t){e.newRole=t},expression:"newRole"}},[s("template",{slot:"prepend"},[e._v("ROLE_")])],2),e._v(" "),s("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入角色中文名称...",size:"mini"},model:{value:e.newRoleZh,callback:function(t){e.newRoleZh=t},expression:"newRoleZh"}}),e._v(" "),s("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",size:"mini"},on:{click:e.addNewRole}},[e._v("添加角色")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"10px","text-align":"left"}},[s("el-collapse",{staticStyle:{width:"500px"},attrs:{accordion:""},on:{change:e.collapseChange},model:{value:e.activeColItem,callback:function(t){e.activeColItem=t},expression:"activeColItem"}},e._l(e.roles,function(t,n){return s("el-collapse-item",{key:t.name,attrs:{title:t.nameZh,name:t.id}},[s("el-card",{staticClass:"box-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[e._v("可访问的资源")]),e._v(" "),s("el-button",{staticStyle:{color:"#f6061b",margin:"0px",float:"right",padding:"3px 0",width:"15px",height:"15px"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(s){e.deleteRole(t.id,t.nameZh)}}})],1),e._v(" "),s("div",[s("el-tree",{key:t.id,ref:"tree",refInFor:!0,attrs:{props:e.props,data:e.treeData,"default-checked-keys":e.checkedKeys,"node-key":"id","show-checkbox":"","highlight-current":""},on:{"check-change":e.handleCheckChange}})],1),e._v(" "),s("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-right":"10px"}},[s("el-button",{attrs:{size:"mini"},on:{click:e.cancelUpdateRoleMenu}},[e._v("取消修改")]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.updateRoleMenu(n)}}},[e._v("确认修改")])],1)])],1)}))],1)])},staticRenderFns:[]},l=s("VU/8")(a,i,!1,null,null,null);t.default=l.exports},LJAE:function(e,t,s){var n={"./MenuRole.vue":"Bg5L","./SysBasic.vue":"fc7a","./SysCfg.vue":"ubks","./SysData.vue":"UK/j","./SysHr.vue":"ewEk","./SysInit.vue":"agXO","./SysLog.vue":"ZDkW"};function a(e){return s(i(e))}function i(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="LJAE"},NQUc:function(e,t){},"UK/j":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    备份恢复数据库\n  ")])])}]},a=s("VU/8")(null,n,!1,null,null,null);t.default=a.exports},ZDkW:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    操作日志管理\n  ")])])}]},a=s("VU/8")(null,n,!1,null,null,null);t.default=a.exports},agXO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    初始化数据库\n  ")])])}]},a=s("VU/8")(null,n,!1,null,null,null);t.default=a.exports},ewEk:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{keywords:"",fullloading:!1,hrs:[],cardLoading:[],eploading:[],allRoles:[],moreBtnState:!1,selRoles:[],selRolesBak:[]}},mounted:function(){this.initCards(),this.loadAllRoles()},methods:{searchClick:function(){this.initCards(),this.loadAllRoles()},updateHrRoles:function(e,t){this.moreBtnState=!1;var s=this;if(this.selRolesBak.length==this.selRoles.length){for(var n=0;n<this.selRoles.length;n++)for(var a=0;a<this.selRolesBak.length;a++)if(this.selRoles[n]==this.selRolesBak[a]){this.selRolesBak.splice(a,1);break}if(0==this.selRolesBak.length)return}this.eploading.splice(t,1,!0),this.putRequest("/system/hr/roles",{hrId:e,rids:this.selRoles}).then(function(n){if(s.eploading.splice(t,1,!1),n&&200==n.status){var a=n.data;s.$message({type:a.status,message:a.msg}),"success"==a.status&&s.refreshHr(e,t)}})},refreshHr:function(e,t){var s=this;s.cardLoading.splice(t,1,!0),this.putRequest("/system/hr/id/"+e).then(function(e){s.cardLoading.splice(t,1,!1),s.hrs.splice(t,1,e.data)})},loadSelRoles:function(e,t){var s=this;this.moreBtnState=!0,this.selRoles=[],this.selRolesBak=[],e.forEach(function(e){s.selRoles.push(e.id),s.selRolesBak.push(e.id)})},loadAllRoles:function(){var e=this;this.getRequest("/system/basic/roles").then(function(t){e.fullloading=!1,t&&200==t.status&&(e.allRoles=t.data)})},switchChange:function(e,t,s){var n=this;n.cardLoading.splice(s,1,!0),this.putRequest("/system/hr/",{enabled:e,id:t}).then(function(e){if(n.cardLoading.splice(s,1,!1),e&&200==e.status){var a=e.data;n.$message({type:a.status,message:a.msg}),"error"==a.status&&n.refreshHr(t,s)}else n.refreshHr(t,s)})},initCards:function(){this.fullloading=!0;var e,t=this;e=""===this.keywords?"all":this.keywords,this.getRequest("/system/hr/"+e).then(function(e){if(e&&200==e.status){t.hrs=e.data;var s=e.data.length;t.cardLoading=Array.apply(null,Array(s)).map(function(e,t){return!1}),t.eploading=Array.apply(null,Array(s)).map(function(e,t){return!1})}})},deleteHr:function(e){var t=this;this.fullloading=!0,this.deleteRequest("/system/hr/"+e).then(function(e){if(t.fullloading=!1,e&&200==e.status){var s=e.data;t.$message({type:s.status,message:s.msg}),"success"==s.status&&(t.initCards(),t.loadAllRoles())}})}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.fullloading,expression:"fullloading"}],staticStyle:{"margin-top":"10px"}},[s("div",{staticStyle:{"margin-bottom":"10px",display:"flex","justify-content":"center","align-items":"center"}},[s("el-input",{staticStyle:{width:"400px","margin-right":"10px"},attrs:{placeholder:"默认展示部分用户，可以通过用户名搜索更多用户...","prefix-icon":"el-icon-search",size:"small"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),s("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.searchClick}},[e._v("搜索")])],1),e._v(" "),s("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap","text-align":"left"}},e._l(e.hrs,function(t,n){return s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.cardLoading[n],expression:"cardLoading[index]"}],key:t.id,staticStyle:{width:"350px","margin-bottom":"20px"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v(e._s(t.name))]),e._v(" "),s("el-button",{staticStyle:{color:"#f6061b",margin:"0px",float:"right",padding:"3px 0",width:"15px",height:"15px"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(s){e.deleteHr(t.id)}}})],1),e._v(" "),s("div",[s("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[s("img",{staticStyle:{width:"70px",height:"70px","border-radius":"70px"},attrs:{src:t.userface,alt:"item.name"}})]),e._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("div",[s("span",{staticClass:"user-info"},[e._v("用户名:"+e._s(t.name))])]),e._v(" "),s("div",[s("span",{staticClass:"user-info"},[e._v("手机号码:"+e._s(t.phone))])]),e._v(" "),s("div",[s("span",{staticClass:"user-info"},[e._v("电话号码:"+e._s(t.telephone))])]),e._v(" "),s("div",[s("span",{staticClass:"user-info"},[e._v("地址:"+e._s(t.address))])]),e._v(" "),s("div",{staticClass:"user-info",staticStyle:{display:"flex","align-items":"center","margin-bottom":"3px"}},[e._v("\n              用户状态:\n              "),s("el-switch",{key:t.id,staticStyle:{display:"inline","margin-left":"5px"},attrs:{"active-color":"#13ce66","inactive-color":"#aaaaaa","active-text":"启用","inactive-text":"禁用"},on:{change:function(s){e.switchChange(t.enabled,t.id,n)}},model:{value:t.enabled,callback:function(s){e.$set(t,"enabled",s)},expression:"item.enabled"}})],1),e._v(" "),s("div",{staticClass:"user-info"},[e._v("\n              用户角色:\n              "),e._l(t.roles,function(t){return s("el-tag",{key:t.id,staticStyle:{"margin-right":"5px"},attrs:{type:"success",size:"mini","disable-transitions":!1}},[e._v(e._s(t.nameZh)+"\n              ")])}),e._v(" "),s("el-popover",{directives:[{name:"loading",rawName:"v-loading",value:e.eploading[n],expression:"eploading[index]"}],key:t.id,attrs:{placement:"right",title:"角色列表",width:"200",trigger:"click"},on:{hide:function(s){e.updateHrRoles(t.id,n)}}},[s("el-select",{attrs:{multiple:"",placeholder:"请选择角色"},model:{value:e.selRoles,callback:function(t){e.selRoles=t},expression:"selRoles"}},e._l(e.allRoles,function(e){return s("el-option",{key:e.id,attrs:{label:e.nameZh,value:e.id}})})),e._v(" "),s("el-button",{staticStyle:{color:"#09c0f6","padding-top":"0px"},attrs:{slot:"reference",type:"text",icon:"el-icon-more",disabled:e.moreBtnState},on:{click:function(s){e.loadSelRoles(t.roles,n)}},slot:"reference"})],1)],2),e._v(" "),s("div",[s("span",{staticClass:"user-info"},[e._v("备注:"+e._s(t.remark))])])])])])}))])},staticRenderFns:[]};var i=s("VU/8")(n,a,!1,function(e){s("NQUc")},null,null);t.default=i.exports},fc7a:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{defaultTab:"depMana"}},methods:{},components:{"menu-role":s("Bg5L").default}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"margin-top":"10px"}},[s("el-tabs",{attrs:{type:"card"},model:{value:e.defaultTab,callback:function(t){e.defaultTab=t},expression:"defaultTab"}},[s("el-tab-pane",{attrs:{label:"部门管理",name:"depMana"}},[e._v("部门管理")]),e._v(" "),s("el-tab-pane",{attrs:{label:"职位管理",name:"positionMana"}},[e._v("职位管理")]),e._v(" "),s("el-tab-pane",{attrs:{label:"职称管理",name:"jobTitleMana"}},[e._v("职称管理")]),e._v(" "),s("el-tab-pane",{attrs:{label:"奖惩规则",name:"ecCfg"}},[e._v("奖惩规则")]),e._v(" "),s("el-tab-pane",{attrs:{label:"权限组",name:"menuRole"}},[s("menu-role")],1)],1)],1)},staticRenderFns:[]},i=s("VU/8")(n,a,!1,null,null,null);t.default=i.exports},ubks:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    系统管理\n  ")])])}]},a=s("VU/8")(null,n,!1,null,null,null);t.default=a.exports}});
//# sourceMappingURL=1.8f568a99a42c381bf44f.js.map