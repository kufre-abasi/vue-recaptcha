import{d as p,aj as f,J as a,ac as m,b as o,Y as s,w as g,f as x,g as b,n as S,K as h,a1 as y,$ as k,G as z,l as $}from"./entry.93de86d7.js";const H=p({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:f("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const n=e,i=a(()=>((t=n)=>`{color.${t.color}.600}`)()),l=a(()=>((t=n)=>`{color.${t.color}.500}`)()),c={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:r}=m(n,c,{_YM9_buttonPrimary:i,_A23_buttonSecondary:l});return(t,B)=>{const u=y,_=k,d=z;return o(),s(d,{class:S(["button-link",[h(r)]]),to:e.href,target:e.blank?"_blank":void 0},{default:g(()=>[e.icon?(o(),s(u,{key:0,name:e.icon},null,8,["name"])):x("",!0),b(_,{use:t.$slots.default,unwrap:"p ul li"},null,8,["use"])]),_:1},8,["to","target","class"])}}});const q=$(H,[["__scopeId","data-v-beff1d14"]]);export{q as default};