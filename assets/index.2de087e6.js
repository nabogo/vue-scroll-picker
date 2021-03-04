import{d as e,h as t,r as n,c as l,a as i,t as s,b as o,e as a,o as r,F as u,f as c,w as h,v as d,g as p,p as m,i as v,s as f,j as V,T as g,k as y}from"./vendor.3e8e13c6.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const a=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${e}`)),i(r)},onload(){n(self[t].moduleMap[o]),i(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/assets/");function b(e){return e.map((e=>{switch(typeof e){case"string":return{value:e,name:e};case"number":case"boolean":return{value:e,name:`${e}`}}return e}))}function S(e){return e.changedTouches||e.touches}function k(e){return S(e)?e.changedTouches[0]||e.touches[0]:e}var x=e({props:{modelValue:null,options:{type:Array,default:()=>[]},dragSensitivity:{type:Number,default:1.7},touchSensitivity:{type:Number,default:1.7},scrollSensitivity:{type:Number,default:1},empty:{type:String,default:"No Items"},placeholder:{type:String,default:null}},data(){var e,t;const n=b(this.options);let l=n.findIndex((e=>e.value==this.modelValue));-1===l&&!this.placeholder&&!this.$slots.placeholder&&this.options.length>0&&(l=0);return{refItems:[],internalOptions:n,internalIndex:l,internalValue:null!=(t=null==(e=n[l])?void 0:e.value)?t:null,pivots:[],pivotsMin:0,pivotsMax:0,scroll:null,scrollOffsetTop:0,scrollMin:0,scrollMax:0,transitioning:!1,transitionTimer:null,start:null,isMouseDown:!1,isDragging:!1}},beforeUpdate(){this.refItems=[]},mounted(){this.calculatePivots(),this.scroll=this.findScrollByIndex(this.internalIndex),this.internalValue!==this.modelValue&&this.$emit("update:modelValue",this.internalValue);const e=this.$el;e.addEventListener("touchstart",this.onStart),e.addEventListener("touchmove",this.onMove),e.addEventListener("touchend",this.onEnd),e.addEventListener("touchcancel",this.onCancel),e.addEventListener("mousewheel",this.onWheel),e.addEventListener("DOMMouseScroll",this.onWheel),e.addEventListener("wheel",this.onWheel),e.addEventListener("mousedown",this.onStart),e.addEventListener("mousemove",this.onMove),e.addEventListener("mouseup",this.onEnd),e.addEventListener("mouseleave",this.onCancel)},beforeUnmount(){const e=this.$el;e.removeEventListener("touchstart",this.onStart),e.removeEventListener("touchmove",this.onMove),e.removeEventListener("touchend",this.onEnd),e.removeEventListener("touchcancel",this.onCancel),e.removeEventListener("mousewheel",this.onWheel),e.removeEventListener("DOMMouseScroll",this.onWheel),e.removeEventListener("wheel",this.onWheel),e.removeEventListener("mousedown",this.onStart),e.removeEventListener("mousemove",this.onMove),e.removeEventListener("mouseup",this.onEnd),e.removeEventListener("mouseleave",this.onCancel)},watch:{modelValue(e){if(null==e&&this.hasPlaceholder)return void this.correction(-1);const t=this.internalOptions.findIndex((t=>t.value==e));-1!==t?this.internalIndex!==t&&this.correction(t):this.$emit("update:modelValue",this.internalValue)},options:{handler(e){var t,n;const l=this.internalOptions=b(e);let i=l.findIndex((e=>e.value==this.modelValue));-1===i&&!this.hasPlaceholder&&this.options.length>0&&(i=0);const s=null!=(n=null==(t=l[i])?void 0:t.value)?n:null;this.$nextTick((()=>{this.calculatePivots(),this.scroll=this.findScrollByIndex(i),this.internalIndex=i,this.internalValue!==s&&this.$emit("update:modelValue",this.internalValue=s)}))},deep:!0}},computed:{hasPlaceholder(){return!(!this.placeholder&&!this.$slots.placeholder)}},methods:{setRefItem(e){this.refItems.push(e)},calculatePivots(){const e=this.$refs.rotator,t=this.$refs.layerSelection,n=e.getBoundingClientRect().top,l=this.pivots=this.refItems.map((e=>function(e){const{top:t,bottom:n}=e.getBoundingClientRect();return(t+n)/2}(e)-n)).sort(((e,t)=>e-t)),i=this.pivotsMin=Math.min(...l),s=this.pivotsMax=Math.max(...l),o=this.scrollOffsetTop=t.offsetTop+t.offsetHeight/2;this.scrollMin=o-i,this.scrollMax=o-s},sanitizeInternalIndex(e){return Math.min(Math.max(e,this.hasPlaceholder?-1:0),this.internalOptions.length-1)},findIndexFromScroll(e){let t=null,n=0;return this.pivots.forEach(((l,i)=>{const s=l+e-this.scrollOffsetTop;(null===t||Math.abs(t)>Math.abs(s))&&(n=i,t=s)})),this.hasPlaceholder||0===this.options.length?n-1:n},findScrollByIndex(e){let t=e;return(this.hasPlaceholder||0===this.options.length)&&t++,e>-1&&t in this.pivots?this.scrollOffsetTop-this.pivots[t]:this.scrollOffsetTop-this.pivotsMin},onWheel(e){var t,n;if(this.scroll>=this.scrollMin&&e.deltaY<0)return;if(this.scroll<=this.scrollMax&&e.deltaY>0)return;e.preventDefault(),this.scroll=Math.min(Math.max(this.scroll-e.deltaY*this.scrollSensitivity,this.scrollMax),this.scrollMin);const l=this.sanitizeInternalIndex(this.findIndexFromScroll(this.scroll)),i=null!=(n=null==(t=this.internalOptions[l])?void 0:t.value)?n:null;this.internalIndex=l,this.internalValue!==i&&this.$emit("update:modelValue",this.internalValue=i),this.onAfterWheel((()=>{this.correction(this.findIndexFromScroll(this.scroll))}))},onAfterWheel:function(e,t=83){let n=null;return function(){n&&(clearTimeout(n),n=null);const l=this,i=arguments;n=setTimeout((()=>e.apply(l,i)),t)}}((e=>{e()}),200),onStart(e){e.cancelable&&e.preventDefault();const{clientY:t}=k(e);this.start=[this.scroll,t],S(e)||(this.isMouseDown=!0),this.isDragging=!1},onMove(e){if(e.cancelable&&e.preventDefault(),!this.start)return;const{clientY:t}=k(e),n=t-this.start[1];Math.abs(n)>1.5&&(this.isDragging=!0),this.scroll=this.start[0]+n*(S(e)?this.touchSensitivity:this.dragSensitivity)},onEnd(e){e.cancelable&&e.preventDefault(),this.isDragging?this.correction(this.findIndexFromScroll(this.scroll)):this.onClick(e),this.start=null,this.isDragging=!1,this.isMouseDown=!1},onCancel(e){e.cancelable&&e.preventDefault(),this.correction(this.findIndexFromScroll(this.scroll)),this.start=null,this.isMouseDown=!1,this.isDragging=!1},onClick(e){const t=this.$refs.layerTop,n=this.$refs.layerBottom,l=k(e),i=l.clientX,s=l.clientY,o=t.getBoundingClientRect(),a=n.getBoundingClientRect();o.left<=i&&i<=o.right&&o.top<=s&&s<=o.bottom?this.correction(this.internalIndex-1):a.left<=i&&i<=a.right&&a.top<=s&&s<=a.bottom&&this.correction(this.internalIndex+1)},correction(e){var t,n;const l=this.sanitizeInternalIndex(e),i=null!=(n=null==(t=this.internalOptions[l])?void 0:t.value)?n:null;this.scroll=this.findScrollByIndex(l),this.transitioning=!0,this.transitionTimer&&(clearTimeout(this.transitionTimer),this.transitionTimer=null),this.transitionTimer=setTimeout((()=>{this.transitioning=!1,this.transitionTimer=null,this.internalIndex=l,this.internalValue!==i&&this.$emit("update:modelValue",this.internalValue=i)}),100)}},render(){let e=[];return this.hasPlaceholder?e.push(t("div",{class:["vue-scroll-picker-item","vue-scroll-picker-item-placeholder",{"vue-scroll-picker-item-selected":-1===this.internalIndex}],ref:e=>e&&this.setRefItem(e)},n(this.$slots,"placeholder",{text:this.placeholder},(()=>[this.placeholder])))):0===this.internalOptions.length&&e.push(t("div",{class:["vue-scroll-picker-item","vue-scroll-picker-item-empty","vue-scroll-picker-item-selected"],ref:e=>e&&this.setRefItem(e)},n(this.$slots,"empty",{text:this.empty},(()=>[this.empty])))),e=e.concat(this.internalOptions.map(((e,l)=>t("div",{class:["vue-scroll-picker-item",{"vue-scroll-picker-item-selected":this.internalIndex===l}],key:e.value,ref:e=>e&&this.setRefItem(e)},n(this.$slots,"default",{option:e},(()=>[e.name])))))),t("div",{class:["vue-scroll-picker"]},[t("div",{ref:"rotator",class:["vue-scroll-picker-rotator",{"vue-scroll-picker-rotator-transition":this.transitioning}],style:"number"==typeof this.scroll?{top:`${this.scroll}px`}:{}},e),t("div",{class:["vue-scroll-picker-layer"]},[t("div",{class:["vue-scroll-picker-layer-top"],ref:"layerTop"}),t("div",{class:["vue-scroll-picker-layer-selection"],ref:"layerSelection"}),t("div",{class:["vue-scroll-picker-layer-bottom"],ref:"layerBottom"})])])}});function I(e){e.component("VueScrollPicker",x)}"undefined"!=typeof window&&window.Vue&&I(window.Vue);const M={install:I};var E=e({data:()=>({options:[],currentValue:null}),methods:{pushItem(){this.options.push(~~(1e5*Math.random()))},popItem(){this.options.pop()},unshiftItem(){this.options.unshift(~~(1e5*Math.random()))},shiftItem(){this.options.shift()},replaceItems(){this.options=[...new Array(10)].map((()=>~~(1e5*Math.random())))}}});const w=o("currentValue = "),L={class:"button-group"};E.render=function(e,t,n,o,u,c){const h=a("VueScrollPicker");return r(),l("div",null,[i("p",null,[w,i("strong",null,s(null===e.currentValue?"(null)":e.currentValue),1)]),i("div",L,[i("a",{class:"button",onClick:t[1]||(t[1]=(...t)=>e.pushItem&&e.pushItem(...t))},"Push Random Item"),i("a",{class:"button",onClick:t[2]||(t[2]=(...t)=>e.popItem&&e.popItem(...t))},"Pop Item"),i("a",{class:"button",onClick:t[3]||(t[3]=(...t)=>e.unshiftItem&&e.unshiftItem(...t))},"Unshift Random Item"),i("a",{class:"button",onClick:t[4]||(t[4]=(...t)=>e.shiftItem&&e.shiftItem(...t))},"Shift Item"),i("a",{class:"button",onClick:t[5]||(t[5]=(...t)=>e.replaceItems&&e.replaceItems(...t))},"Replace 10 Items")]),i(h,{options:e.options,modelValue:e.currentValue,"onUpdate:modelValue":t[6]||(t[6]=t=>e.currentValue=t)},null,8,["options","modelValue"])])};var T=e({props:{options:{type:Array,default:()=>[]}},data:()=>({currentValue:null})});const C=o("currentValue = "),O={class:"button-group"};T.render=function(e,t,n,o,h,d){const p=a("VueScrollPicker");return r(),l("div",null,[i("p",null,[C,i("strong",null,s(null===e.currentValue?"(null)":e.currentValue),1)]),i("div",O,[i("a",{class:["button",{active:null===e.currentValue}],onClick:t[1]||(t[1]=t=>e.currentValue=null)},"(null)",2),i("a",{class:["button",{active:"unknown"===e.currentValue}],onClick:t[2]||(t[2]=t=>e.currentValue="unknown")},"(Unknown)",2),(r(!0),l(u,null,c(e.options,((t,n)=>(r(),l("a",{class:["button",{active:e.currentValue==t.value}],key:n,onClick:n=>e.currentValue=t.value},s(t.name),11,["onClick"])))),128))]),i(p,{options:e.options,modelValue:e.currentValue,"onUpdate:modelValue":t[3]||(t[3]=t=>e.currentValue=t)},null,8,["options","modelValue"])])};var P=e({props:{options:{type:Array,default:()=>[]}},data:()=>({currentValue:null})});const D=o("currentValue = "),$={class:"button-group"};P.render=function(e,t,n,o,h,d){const p=a("VueScrollPicker");return r(),l("div",null,[i("p",null,[D,i("strong",null,s(null===e.currentValue?"(null)":e.currentValue),1)]),i("div",$,[i("a",{class:["button",{active:null===e.currentValue}],onClick:t[1]||(t[1]=t=>e.currentValue=null)},"(null)",2),i("a",{class:["button",{active:"unknown"===e.currentValue}],onClick:t[2]||(t[2]=t=>e.currentValue="unknown")},"(Unknown)",2),(r(!0),l(u,null,c(e.options,((t,n)=>(r(),l("a",{class:["button",{active:e.currentValue==t.value}],key:n,onClick:n=>e.currentValue=t.value},s(t.name),11,["onClick"])))),128))]),i(p,{options:e.options,modelValue:e.currentValue,"onUpdate:modelValue":t[3]||(t[3]=t=>e.currentValue=t),placeholder:"Select One"},null,8,["options","modelValue"])])};var U=e({props:{options:{type:Array,default:()=>[]}},data:()=>({currentValue:null,dragSensitivity:1.7,touchSensitivity:1.7,scrollSensitivity:1})});const R=p("data-v-d19f4ca8");m("data-v-d19f4ca8");const B=o("currentValue = "),F={class:"nobs"},G={class:"nob"},_=i("label",null,"Drag Sensitivity (default = 1.7)",-1),K={class:"nob"},W=i("label",null,"Touch Sensitivity (default = 1.7)",-1),A={class:"nob"},Y=i("label",null,"Scroll Sensitivity (default = 1)",-1);v();const j=R(((e,t,n,u,c,p)=>{const m=a("VueScrollPicker");return r(),l("div",null,[i("p",null,[B,i("strong",null,s(null===e.currentValue?"(null)":e.currentValue),1)]),i("div",F,[i("div",G,[_,i("div",null,[h(i("input",{type:"range",min:"0.5",max:"10",step:"0.1","onUpdate:modelValue":t[1]||(t[1]=t=>e.dragSensitivity=t)},null,512),[[d,e.dragSensitivity,void 0,{number:!0}]]),o(" "+s(e.dragSensitivity),1)])]),i("div",K,[W,i("div",null,[h(i("input",{type:"range",min:"0.5",max:"10",step:"0.1","onUpdate:modelValue":t[2]||(t[2]=t=>e.touchSensitivity=t)},null,512),[[d,e.touchSensitivity,void 0,{number:!0}]]),o(" "+s(e.touchSensitivity),1)])]),i("div",A,[Y,i("div",null,[h(i("input",{type:"range",min:"0.5",max:"10",step:"0.1","onUpdate:modelValue":t[3]||(t[3]=t=>e.scrollSensitivity=t)},null,512),[[d,e.scrollSensitivity,void 0,{number:!0}]]),o(" "+s(e.scrollSensitivity),1)])])]),i(m,{"drag-sensitivity":e.dragSensitivity,"touch-sensitivity":e.touchSensitivity,"scroll-sensitivity":e.scrollSensitivity,options:e.options,modelValue:e.currentValue,"onUpdate:modelValue":t[4]||(t[4]=t=>e.currentValue=t)},null,8,["drag-sensitivity","touch-sensitivity","scroll-sensitivity","options","modelValue"])])}));U.render=j,U.__scopeId="data-v-d19f4ca8";var H=e({data:()=>({options:[{value:"instagram",name:" Instagram",icon:f.get("instagram").svg},{value:"facebook",name:"Facebook",icon:f.get("facebook").svg},{value:"youtube",name:"Youtube",icon:f.get("youtube").svg},{value:"twitter",name:"Twitter",icon:f.get("twitter").svg},{value:"line",name:"Line",icon:f.get("line").svg}],currentValue:null})});const N=p("data-v-6f167322");m("data-v-6f167322");const z=o("currentValue = "),X={class:"button-group"},q=o(" Select One 🥲 "),J={class:"custom-option"};v();const Q=N(((e,t,n,o,h,d)=>{const p=a("VueScrollPicker");return r(),l("div",null,[i("p",null,[z,i("strong",null,s(null===e.currentValue?"(null)":e.currentValue),1)]),i("div",X,[i("a",{class:["button",{active:null===e.currentValue}],onClick:t[1]||(t[1]=t=>e.currentValue=null)},"(null)",2),i("a",{class:["button",{active:"unknown"===e.currentValue}],onClick:t[2]||(t[2]=t=>e.currentValue="unknown")},"(Unknown)",2),(r(!0),l(u,null,c(e.options,((t,n)=>(r(),l("a",{class:["button",{active:e.currentValue==t.value}],key:n,onClick:n=>e.currentValue=t.value,innerHTML:t.name},null,10,["onClick","innerHTML"])))),128))]),i(p,{options:e.options,modelValue:e.currentValue,"onUpdate:modelValue":t[3]||(t[3]=t=>e.currentValue=t)},{placeholder:N((()=>[q])),default:N((({option:e})=>[i("div",J,[i("div",{class:"custom-option-icon",innerHTML:e.icon},null,8,["innerHTML"]),i("span",null,s(e.name),1)])])),_:1},8,["options","modelValue"])])}));H.render=Q,H.__scopeId="data-v-6f167322";var Z=e({props:{options:{type:Array,default:()=>[]}},data:()=>({isVisible:!1,currentValue:0})});const ee=p("data-v-72667717");m("data-v-72667717");const te=o("currentValue = "),ne={class:"button-group"};v();const le=ee(((e,t,n,o,u,c)=>{const h=a("VueScrollPicker");return r(),l("div",null,[i("p",null,[te,i("strong",null,s(null===e.currentValue?"(null)":e.currentValue),1)]),i("div",ne,[i("a",{class:"button",onClick:t[1]||(t[1]=t=>e.isVisible=!e.isVisible)},s(e.isVisible?"Hide":"Show"),1)]),i(g,{name:"fade"},{default:ee((()=>[e.isVisible?(r(),l(h,{key:0,options:e.options,modelValue:e.currentValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.currentValue=t)},null,8,["options","modelValue"])):V("",!0)])),_:1})])}));Z.render=le,Z.__scopeId="data-v-72667717";var ie=e({components:{ExampleFullBinding:T,ExamplePlaceholder:P,ExampleSlot:H,ExampleSensitivity:U,ExampleTransition:Z,ExampleDynamicOptions:E},data:()=>({defaultOptions:[{value:0,name:"0KG"},{value:10,name:"10KG"},{value:20,name:"20KG"},{value:30,name:"30KG"},{value:40,name:"40KG"},{value:50,name:"50KG"},{value:60,name:"60KG"},{value:70,name:"70KG"},{value:80,name:"80KG"},{value:90,name:"90KG"},{value:100,name:"100KG"}]})});const se=i("div",{class:"hero"},[i("h2",null,"Vue Scroll Picker"),i("p",null,"iOS Style Scroll Picker Component for Vue 3. Support All Gestures of Mouse(also MouseWheel) and Touch.")],-1),oe={class:"section"},ae={class:"container"},re=i("h2",null,"Full Binding",-1),ue=i("p",null,[o("Vue Scroll Picker provides full binding. "),i("a",{href:"https://github.com/wan2land/vue-scroll-picker/blob/main/example/ExampleDynamicOptions.vue"},"[Source]")],-1),ce=i("h2",null,"Placeholder",-1),he=i("p",null,[o("Vue Scroll Picker provides a placeholder option. When setting a placeholder, you can use null as a value. "),i("a",{href:"https://github.com/wan2land/vue-scroll-picker/blob/main/example/ExamplePlaceholder.vue"},"[Source]")],-1),de=i("h2",null,"Slot Support",-1),pe=i("p",null,[i("a",{href:"https://github.com/wan2land/vue-scroll-picker/blob/main/example/ExampleSlot.vue"},"[Source]")],-1),me=i("h2",null,"Sensitivity",-1),ve=i("p",null,[i("a",{href:"https://github.com/wan2land/vue-scroll-picker/blob/main/example/ExampleSensitivity.vue"},"[Source]")],-1),fe=i("h2",null,"Transition",-1),Ve=i("p",null,[i("a",{href:"https://github.com/wan2land/vue-scroll-picker/blob/main/example/ExampleTransition.vue"},"[Source]")],-1),ge=i("h2",null,"Dynamic Options",-1),ye=i("p",null,[i("a",{href:"https://github.com/wan2land/vue-scroll-picker/blob/main/example/ExampleDynamicOptions.vue"},"[Source]")],-1);ie.render=function(e,t,n,s,o,u){const c=a("ExampleFullBinding"),h=a("ExamplePlaceholder"),d=a("ExampleSlot"),p=a("ExampleSensitivity"),m=a("ExampleTransition"),v=a("ExampleDynamicOptions");return r(),l("div",null,[se,i("div",oe,[i("div",ae,[re,ue,i(c,{options:e.defaultOptions},null,8,["options"]),ce,he,i(h,{options:e.defaultOptions},null,8,["options"]),de,pe,i(d),me,ve,i(p,{options:e.defaultOptions},null,8,["options"]),fe,Ve,i(m,{options:e.defaultOptions},null,8,["options"]),ge,ye,i(v)])])])};const be=y(ie);be.use(M),be.mount("#app");
