import{_ as y}from"./Checkbox.vue.616ef941.js";import g from"./PrimaryButton.9274ed28.js";import{d as k,b as l,c as n,e as o,a2 as S,a3 as C,L as e,Z as d,t as p,f as _,g as f,w as B,G as N}from"./entry.f39255a8.js";import{u as w,c as E,a as v,b as x}from"./index.esm.52d4fa32.js";import"./component-v2.52db0f1b.js";import"./_commonjsHelpers.725317a4.js";const M={key:0,class:"text-red"},$={key:0,class:"text-red"},G=k({__name:"VeeValidateCheckbox",setup(q){const{handleSubmit:b}=w({validationSchema:E({name:v().required(),recaptcha:v().required("Please verify you are human")})}),{value:r,errorMessage:u}=x("name"),{value:s,errorMessage:m}=x("recaptcha"),c=b(i=>{console.log(i)});return(i,a)=>{const V=y,h=g;return l(),n("form",{class:"flex flex-col gap-2",onSubmit:a[2]||(a[2]=(...t)=>e(c)&&e(c)(...t))},[o("div",null,[S(o("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>d(r)?r.value=t:null),class:"border border-blue p-1",type:"text",placeholder:"Your name"},null,512),[[C,e(r)]]),e(u)?(l(),n("div",M,p(e(u)),1)):_("",!0)]),o("div",null,[f(V,{modelValue:e(s),"onUpdate:modelValue":a[1]||(a[1]=t=>d(s)?s.value=t:null)},null,8,["modelValue"]),e(m)?(l(),n("div",$,p(e(m)),1)):_("",!0)]),o("div",null,[f(h,{type:"submit"},{default:B(()=>[N("Submit")]),_:1})])],32)}}});export{G as default};