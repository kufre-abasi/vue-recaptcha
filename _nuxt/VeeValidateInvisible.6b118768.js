import v from"./PrimaryButton.93647700.js";import{_ as b}from"./ChallengeV2.vue.68300bb5.js";import{a as x,r as g,o as i,i as u,k as n,N as y,O as S,u as t,J as d,t as N,l as h,m as p,w as c,I as k}from"./entry.eb5a8f13.js";import{u as w,c as B,a as C,b as $}from"./index.esm.e80b74e3.js";import{u as D}from"./index.42fb2f4c.js";import"./component-v2.556d0d92.js";import"./index.37d3ce6e.js";import"./_commonjsHelpers.725317a4.js";const E={key:0,class:"text-red"},P=x({__name:"VeeValidateInvisible",setup(F){const{handleSubmit:f}=w({validationSchema:B({name:C().required()})}),{value:s,errorMessage:r}=$("name"),a=g(),l=f(async m=>{await D(a).changed(),console.log({...m,response:a.value})});return(m,e)=>{const _=v,V=b;return i(),u("form",{class:"flex flex-col gap-2",onSubmit:e[2]||(e[2]=(...o)=>t(l)&&t(l)(...o))},[n("div",null,[y(n("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>d(s)?s.value=o:null),class:"border border-blue p-1",type:"text",placeholder:"Your name"},null,512),[[S,t(s)]]),t(r)?(i(),u("div",E,N(t(r)),1)):h("",!0)]),n("div",null,[p(V,{modelValue:t(a),"onUpdate:modelValue":e[1]||(e[1]=o=>d(a)?a.value=o:null)},{default:c(()=>[p(_,{type:"submit"},{default:c(()=>[k("Submit")]),_:1})]),_:1},8,["modelValue"])])],32)}}});export{P as default};