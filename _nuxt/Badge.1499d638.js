import{a as t,o as s,i as o,m as _,j as r,K as c,x as p}from"./entry.e26d9a4e.js";const l=t({__name:"Badge",props:{type:{type:String,default:"info",validator(e){return["info","success","warning","danger","primary"].includes(e)}}},setup(e){return(n,u)=>{const a=c;return s(),o("span",{class:r([[e.type],"badge"])},[_(a,{use:n.$slots.default,unwrap:"p"},null,8,["use"])],2)}}});const f=p(l,[["__scopeId","data-v-fc11097f"]]);export{f as default};