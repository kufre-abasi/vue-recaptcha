import{d as v,aE as m,r as h,J as f,b as s,c as o,K as i,f as _,e,F as y,aC as C,p as k,j as g,t as x,l as S}from"./entry.2fabf7be.js";const n=t=>(k("data-v-1c0fc1e1"),t=t(),g(),t),b={key:0,class:"copied"},w=n(()=>e("div",{class:"scrim"},null,-1)),B=n(()=>e("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=n(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),j={class:"window"},E=n(()=>e("span",{class:"sign"},"$",-1)),F={class:"content"},N={key:1,class:"prompt"},V=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:p}=m(),c=h("init"),r=f(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,q)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",b,I)):_("",!0),T,e("div",j,[(s(!0),o(y,null,C(i(r),d=>(s(),o("span",{key:d,class:"line"},[E,e("span",F,x(d),1)]))),128))]),i(c)!=="copied"?(s(),o("div",N," Click to copy ")):_("",!0)]))}});const D=S(V,[["__scopeId","data-v-1c0fc1e1"]]);export{D as default};
