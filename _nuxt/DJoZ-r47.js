import f from"./BIaRzCJD.js";import y from"./BR-5xg8r.js";import _ from"./C7QcFsYW.js";import{d as k,c as o,e as n,f as s,Y as a,h as r,F as h,V as i,w as v,g as d,t as l,ab as $,k as w}from"./C_RBrB74.js";import"./DWz94pCY.js";import"./BpafdMVE.js";const B={class:"block-hero"},g={class:"layout"},S={class:"content"},V={key:0,class:"announce"},q={class:"title"},H={class:"description"},b={key:1,class:"extra"},A={class:"actions"},C=["href"],N={class:"support"},T=k({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,c)=>{const u=f,p=y,m=_;return o(),n("section",B,[s("div",g,[s("div",S,[t.$slots.announce?(o(),n("p",V,[a(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):r("",!0),s("h1",q,[a(t.$slots,"title",{unwrap:"p"},()=>[c[0]||(c[0]=d(" Hero Title "))],!0)]),s("p",H,[a(t.$slots,"description",{unwrap:"p"},()=>[c[1]||(c[1]=d(" Hero default description. "))],!0)]),t.$slots.extra?(o(),n("div",b,[a(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):r("",!0),s("div",A,[t.$slots.actions?a(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),n(h,{key:1},[e.cta?(o(),i(u,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:v(()=>[d(l(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(o(),n("a",{key:1,href:e.secondary[1],class:"secondary"},l(e.secondary[0]),9,C)):r("",!0)],64))])]),s("div",N,[$(t.$slots,"support",{},()=>[e.snippet?(o(),i(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),i(m,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}}),L=w(T,[["__scopeId","data-v-ce00c298"]]);export{L as default};