import b from"./PrimaryButton.5d2d5606.js";import{_ as v}from"./ChallengeV2.vue.3d412306.js";import{d as x,r as g,a4 as y,b as u,c as i,e as n,a2 as S,a3 as h,L as a,Z as d,t as w,f as B,g as c,w as p,G as C}from"./entry.4a9cf03a.js";import{u as N,c as k,a as $,b as D}from"./index.esm.c85cbd56.js";import"./component-v2.f3a0aeca.js";import"./_commonjsHelpers.725317a4.js";const E={key:0,class:"text-red"},I=x({__name:"VeeValidateInvisible",setup(F){const{handleSubmit:f}=N({validationSchema:k({name:$().required()})}),{value:s,errorMessage:l}=D("name"),t=g(),r=f(async m=>{await y(t).changed(),console.log({...m,response:t.value})});return(m,e)=>{const _=b,V=v;return u(),i("form",{class:"flex flex-col gap-2",onSubmit:e[2]||(e[2]=(...o)=>a(r)&&a(r)(...o))},[n("div",null,[S(n("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>d(s)?s.value=o:null),class:"border border-blue p-1",type:"text",placeholder:"Your name"},null,512),[[h,a(s)]]),a(l)?(u(),i("div",E,w(a(l)),1)):B("",!0)]),n("div",null,[c(V,{modelValue:a(t),"onUpdate:modelValue":e[1]||(e[1]=o=>d(t)?t.value=o:null)},{default:p(()=>[c(_,{type:"submit"},{default:p(()=>[C("Submit")]),_:1})]),_:1},8,["modelValue"])])],32)}}});export{I as default};