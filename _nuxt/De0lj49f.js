import{d as _,r as l,a6 as v,b as a,c as s,F as g,aG as x,e as u,f as y,ad as I,n as k,t as T,p as S,i as C,Q as $,l as w}from"./Bi5RQgWy.js";const B=t=>(S("data-v-8326bbc8"),t=t(),C(),t),N={class:"tabs-header"},U=["onClick"],q=B(()=>u("span",{class:"tab"},null,-1)),F=[q],H=_({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,b=p,n=l(),i=l(),o=e=>{e&&(i.value.style.insetInlineStart=`${e.offsetLeft}px`,i.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{b("update:activeTabIndex",c),$(()=>o(e.target))};return v(n,e=>{e&&setTimeout(()=>{o(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",N,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(g,null,x(t.tabs,({label:d},r)=>(a(),s("button",{key:`${r}${d}`,class:k([t.activeTabIndex===r?"active":"not-active"]),onClick:m=>f(m,r)},T(d),11,U))),128)),u("span",{ref_key:"highlightUnderline",ref:i,class:"highlight-underline"},F,512)],512)):y("",!0),I(e.$slots,"footer",{},void 0,!0)]))}}),R=w(H,[["__scopeId","data-v-8326bbc8"]]);export{R as default};