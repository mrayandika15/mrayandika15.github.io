(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{264:function(e,t,n){"use strict";n.r(t);n(29);const o={_origin:"https://api.emailjs.com"},r=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e.status,this.text=e.responseText}}const m=(e,data,t={})=>new Promise(((n,r)=>{const m=new XMLHttpRequest;m.addEventListener("load",(({target:e})=>{const t=new l(e);200===t.status||"OK"===t.text?n(t):r(t)})),m.addEventListener("error",(({target:e})=>{r(new l(e))})),m.open("POST",o._origin+e,!0),Object.keys(t).forEach((e=>{m.setRequestHeader(e,t[e])})),m.send(data)}));var c=(e,t,form,n)=>{const l=n||o._userID,c=(form=>{let e;if(e="string"==typeof form?document.querySelector(form):form,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e})(form);r(l,e,t);const d=new FormData(c);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",l),m("/api/v1.0/email/send-form",d)},d={data:function(){return{name:"",email:"",message:""}},methods:{sendEmail:function(e){try{c("gmail_porto","templategmail_porto",e.target,"user_n2UXvjBFPlJgedfzZ8y5T",{name:this.name,email:this.email,message:this.message}),this.$toasted.show("Email has been sent",{theme:"outline",position:"top-center",duration:5e3})}catch(e){this.$toast.error("Oops...Something went wrong")}this.name="",this.email="",this.message=""}}},h=n(19),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"contact"}},[n("div",{staticClass:"flex w-full h-full flex-col text-white ml-2 md:ml-16 my-36",attrs:{"data-aos":"fade-up","data-aos-once":"true"}},[e._m(0),e._v(" "),n("div",{staticClass:"flex w-4/5 h-full relative"},[n("form",{staticClass:"max-w-sm md:text-lg rounded-lg shadow-xl p-3  md:max-w-xl w-full  ",on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[n("div",{staticClass:"relative py-2    "},[n("label",{staticClass:"inline-block my-3"},[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"block w-full appearance-none focus:outline-none bg-transparent text-white focus-within:border-color2 border p-2  ",attrs:{type:"text",name:"name",placeholder:"What's your name ? "},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"relative py-2    "},[n("label",{staticClass:"inline-block my-3"},[e._v("Email")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"block w-full appearance-none focus:outline-none bg-transparent text-white focus-within:border-color2 border p-2",attrs:{type:"text",name:"email",placeholder:"What’s your email address ?"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"relative py-2   "},[n("label",{staticClass:"inline-block my-3"},[e._v("Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"block w-full appearance-none focus:outline-none bg-transparent text-white focus-within:border-color2 border h-32 p-2 ",attrs:{type:"text",name:"message",placeholder:"What’s your message ? "},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),e._m(1)])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("h4",{staticClass:"md:text-5xl md:my-3 text-2xl font-semibold"},[e._v("Contact")]),e._v(" "),n("div",{staticClass:"underline my-3"}),e._v(" "),n("p",{staticClass:"text-gray-300 text-base md:text-lg font-semibold"},[e._v("Interested ? Drop me a line if you want to work together on something exciting. Big or small ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex w-full "},[t("input",{staticClass:"py-2 px-10 mt-6 text-base font-semibold border bg-transparent transition-all cursor-pointer hover:bg-color1   ",attrs:{type:"submit",value:"Send Email"}})])}],!1,null,null,null);t.default=component.exports}}]);