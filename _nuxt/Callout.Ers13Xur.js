import{d as p,r as o,b as _,c as f,e as a,$ as n,g as v,n as l,J as c,a2 as h,aL as g,a1 as y,l as V}from"./entry.1o8ESq_e.js";const C={class:"summary"},w={class:"content"},k=p({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(s,{emit:r}){const i=s,u=r,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,B)=>{const m=y;return _(),f("div",{class:l(["callout",[s.type]])},[a("span",{class:"preview",onClick:d},[a("span",C,[n(t.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:l(["icon",[c(e)&&"rotate"]])},null,8,["class"])]),h(a("div",w,[n(t.$slots,"content",{},void 0,!0)],512),[[g,c(e)]])],2)}}}),$=V(k,[["__scopeId","data-v-e0c6f6e7"]]);export{$ as default};
