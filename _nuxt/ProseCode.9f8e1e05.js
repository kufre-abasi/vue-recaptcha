import{a as y,r as l,C as k,o as s,i as d,k as m,m as C,w,c as _,u as f,T as x,j as v,M as S,s as $,v as b,x as h,t as I,l as P,Z as z}from"./entry.55886737.js";import{a as M,o as N}from"./index.f9e4199c.js";import"./index.0c8698c9.js";const T=e=>($("data-v-11c7dd38"),e=e(),b(),e),V=T(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),A={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=M();N(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=k(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(p=>{console.warn("Couldn't copy to clipboard!",p)})};return(B,p)=>{const r=S;return s(),d("button",{ref_key:"copyButtonRef",ref:a,class:v([(e.show||o.value==="copied")&&"show"]),onClick:g},[V,m("span",A,[C(x,{name:"fade"},{default:w(()=>{var u,i;return[o.value==="copied"?(s(),_(r,{key:0,name:(u=f(c).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(r,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const j=h(R,[["__scopeId","data-v-11c7dd38"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=j;return s(),d("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),d("span",D,I(e.filename),1)):P("",!0),z(a.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const F=h(E,[["__scopeId","data-v-262fd9e4"]]);export{F as default};