import b from"./PrimaryButton.827de528.js";import{_ as v}from"./ChallengeV2.vue.be1592e7.js";import{d as x,r as g,a4 as y,b as u,c as i,e as n,a2 as S,a3 as h,K as a,Z as d,t as w,f as B,g as c,w as p,E as C}from"./entry.2fabf7be.js";import{u as N,c as k,a as E,b as $}from"./index.esm.ea5a9698.js";import"./component-v2.8544c5c7.js";import"./_commonjsHelpers.725317a4.js";const D={key:0,class:"text-red"},K=x({__name:"VeeValidateInvisible",setup(F){const{handleSubmit:f}=N({validationSchema:k({name:E().required()})}),{value:s,errorMessage:l}=$("name"),t=g(),r=f(async m=>{await y(t).changed(),console.log({...m,response:t.value})});return(m,e)=>{const _=b,V=v;return u(),i("form",{class:"flex flex-col gap-2",onSubmit:e[2]||(e[2]=(...o)=>a(r)&&a(r)(...o))},[n("div",null,[S(n("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>d(s)?s.value=o:null),class:"border border-blue p-1",type:"text",placeholder:"Your name"},null,512),[[h,a(s)]]),a(l)?(u(),i("div",D,w(a(l)),1)):B("",!0)]),n("div",null,[c(V,{modelValue:a(t),"onUpdate:modelValue":e[1]||(e[1]=o=>d(t)?t.value=o:null)},{default:p(()=>[c(_,{type:"submit"},{default:p(()=>[C("Submit")]),_:1})]),_:1},8,["modelValue"])])],32)}}});export{K as default};
