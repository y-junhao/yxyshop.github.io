"use strict";(self["webpackChunklc"]=self["webpackChunklc"]||[]).push([[456],{4456:function(e,s,l){l.r(s),l.d(s,{default:function(){return j}});var r=l(3396),t=l(9242),n=l(7139),a=l(7977),u="data:image/png;base64,R0lGODdhQAAcAOMAAP///wkJCXAzXjOdpEeiR3s+SqqXNAkylFYTulcfTAgWHQkJCQAAAAAAAAAAAAAAACwAAAAAQAAcAAAE53DJSau9OGsNuv9gKI5kKUpmqq4pyr6w6sZFbH8zXN93/u68mI8FDL6GxIHxuOAVlx2F9NT8HA4mhFabSngTqekUlLtiU4MCwuTttEtjqsd8LinXbDDgTYqHfFcmSgB4eXwjUn44VXN1IoMITyJvhyKKiyCBIQYAg4SSIZR6fQokgI4enJAdoB+iJpcepyIGnnitrl9hpSOzmyK4UGSMdJodA5whwcKyjHbJIMvMAEggg9Ae0szVHp7YrNMm3J0f3wA7AgLhf87WIObn6uvsJJ4ABNjpAtpQ1fb3ydJlm0dlg8GDCA9GAAA7";const d=e=>((0,r.dD)("data-v-0e848fc1"),e=e(),(0,r.Cn)(),e),i={class:"box"},p={class:"zc"},o={class:"zclogo"},c=d((()=>(0,r._)("img",{src:a,alt:""},null,-1))),m={class:"zcphone"},w=d((()=>(0,r._)("p",null,"手机号",-1))),_=d((()=>(0,r._)("tr",null,[(0,r._)("td",{class:"zccode"},[(0,r._)("p",null,"验证码"),(0,r._)("input",{type:"text",placeholder:"输入验证码"}),(0,r._)("a",{href:""},[(0,r._)("img",{src:u,alt:""}),(0,r.Uk)(" 看不清，换一张")])])],-1))),h={class:"zcmm"},A=d((()=>(0,r._)("p",null,"创建密码",-1))),g=d((()=>(0,r._)("div",null,[(0,r._)("span"),(0,r._)("p",null,"弱"),(0,r._)("span"),(0,r._)("p",null,"中"),(0,r._)("span"),(0,r._)("p",null,"强")],-1))),f=d((()=>(0,r._)("tr",null,[(0,r._)("td",{class:"zcmm2"},[(0,r._)("p",null,"密码确认"),(0,r._)("input",{type:"password",placeholder:"确认密码"}),(0,r._)("span")])],-1))),y=d((()=>(0,r._)("tr",null,[(0,r._)("td",{class:"agree"},[(0,r._)("input",{type:"checkbox",checked:"checked"}),(0,r.Uk)("同意"),(0,r._)("a",{class:"article",href:""},"良仓注册条款")])],-1))),k={class:"sign-up"},R=["disabled"],v=d((()=>(0,r._)("a",{href:""},[(0,r._)("div")],-1))),C=d((()=>(0,r._)("a",{href:""},[(0,r._)("div")],-1))),M=d((()=>(0,r._)("a",{href:""},[(0,r._)("div")],-1))),b=d((()=>(0,r._)("a",{href:""},[(0,r._)("div")],-1)));function U(e,s,l,a,u,d){const U=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("form",p,[(0,r._)("table",null,[(0,r._)("tr",null,[(0,r._)("td",o,[(0,r.Wm)(U,{to:{name:"index"}},{default:(0,r.w5)((()=>[c])),_:1})])]),(0,r._)("tr",null,[(0,r._)("td",m,[w,(0,r.wy)((0,r._)("input",{onBlur:s[0]||(s[0]=(...e)=>d.usernameBlur&&d.usernameBlur(...e)),"onUpdate:modelValue":s[1]||(s[1]=e=>u.username=e),type:"text",placeholder:"输入手机号"},null,544),[[t.nr,u.username]]),(0,r.wy)((0,r._)("span",{style:(0,n.j5)({color:u.usernameRules.usernameColor}),class:"username-msg"},(0,n.zw)(u.usernameRules.usernameMsg),5),[[t.F8,u.usernameRules.usernameMsg]])])]),_,(0,r._)("tr",null,[(0,r._)("td",h,[A,(0,r.wy)((0,r._)("input",{onKeyup:s[2]||(s[2]=(...e)=>d.pwdKeyup&&d.pwdKeyup(...e)),"onUpdate:modelValue":s[3]||(s[3]=e=>u.pwd=e),type:"password",placeholder:"6－20位字符组成，区分大小写"},null,544),[[t.nr,u.pwd]]),(0,r.wy)((0,r._)("span",{style:(0,n.j5)({color:u.pwdRules.pwdColor}),class:"pwd-msg"},(0,n.zw)(u.pwdRules.pwdMsg),5),[[t.F8,u.pwdRules.pwdMsg]]),g])]),f,y,(0,r._)("tr",null,[(0,r._)("td",k,[(0,r._)("button",{onClick:[s[4]||(s[4]=(0,t.iM)((()=>{}),["prevent"])),s[5]||(s[5]=(...e)=>d.clickRegisterH&&d.clickRegisterH(...e))],disabled:!u.isUsername||!u.isPwd,style:(0,n.j5)({backgroundColor:u.isUsername&&u.isPwd?"black":"gray"})},"立即注册",12,R)])]),(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(U,{class:"dl",to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("登录良仓")])),_:1}),v,C,M,b])])])])])}l(7658);var z={data(){return{username:"",pwd:"",usernameRules:{usernameMsg:"",usernameColor:"red"},pwdRules:{pattern:/^[0-9]{6,12}$/g,pwdMsg:"",pwdColor:"red"},isUsername:!1,isPwd:!1}},methods:{async usernameBlur(){let e=/^[0-9a-z_]{3,12}$/g;if(!e.test(this.username))return this.usernameRules.usernameMsg="用户名必须为3-12位字母数字下划线组成",this.usernameRules.usernameColor="red",void(this.isUsername=!1);let s=await this.jhAPI.postData("/api_user",{username:this.username,status:"check"});return 1005==s.code?(this.usernameRules.usernameMsg="用户名已存在",this.usernameRules.usernameColor="red",void(this.isUsername=!1)):0==s.code?(this.usernameRules.usernameMsg="用户名可用",this.usernameRules.usernameColor="green",void(this.isUsername=!0)):void 0},pwdKeyup(){let e=/^[0-9]{6,12}$/g;if(!e.test(this.pwd))return this.pwdRules.pwdMsg="密码必须为6-12位数字组成",this.pwdRules.pwdColor="red",void(this.isPwd=!1);this.pwdRules.pwdMsg="密码可用",this.pwdRules.pwdColor="green",this.isPwd=!0},async clickRegisterH(){let e=await this.jhAPI.postData("/api_user",{username:this.username,password:this.pwd,status:"register"});if(0!=e.code)return window.alert("注册失败"),this.username="",void(this.pwd="");window.alert("注册成功"),this.$router.push("/login")}}},I=l(89);const J=(0,I.Z)(z,[["render",U],["__scopeId","data-v-0e848fc1"]]);var j=J},7977:function(e,s,l){e.exports=l.p+"img/zc-logo.fe689e32.png"}}]);
//# sourceMappingURL=456.d7aaf8c4.js.map