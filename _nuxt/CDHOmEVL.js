import{u as b,H as d,aO as S,G as a,d as f,ac as v,c as w,e as I,f as P,n as C,k as _,ae as x,r as D,L as c}from"./DkscGzzW.js";import E from"./C6xytSZJ.js";import"./a5fhGKmp.js";import"./D2K2t9ga.js";import"./eRxNGWlL.js";import"./C0cpXWbW.js";import"./BhS8sSZV.js";import"./Leurx0vl.js";import"./hhwd-Bcd.js";import"./BA7Jok4M.js";import"./U2hpU31Q.js";async function j(e){b();const n=d(e);{const{data:o}=await S(`nuxt-component-meta${n?`-${n}`:""}`,()=>$fetch(`/api/component-meta${n?`/${n}`:""}`));return a(()=>o.value)}}const z=f({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const n=a(()=>((t=s)=>t.top)()),o=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),l=a(()=>((t=s)=>t.zIndex)()),m=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),y=a(()=>((t=s)=>`blur(${t.blur})`)()),h=a(()=>((t=s)=>{var i,p,u;return`linear-gradient(97.62deg, ${(i=t==null?void 0:t.colors)==null?void 0:i[0]} 2.27%, ${(p=t==null?void 0:t.colors)==null?void 0:p[1]} 50.88%, ${(u=t==null?void 0:t.colors)==null?void 0:u[2]} 98.48%)`})()),s=e,{$pinceau:$}=v(s,void 0,{_cCN_top:n,_eih_insetInlineStart:o,_IfB_insetInlineEnd:r,_SsE_zIndex:l,_wj8_maxWidth:m,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,i)=>(w(),I("div",{class:C(["ellipsis",[d($)]])},i[0]||(i[0]=[P("div",{class:"ellipsis-item"},null,-1)]),2))}}),B=_(z,[["__scopeId","data-v-7e2b0a2a"]]),N=f({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const n=a(()=>x(e.component)),o=D({...e.props}),r=await j(e.component);return{as:n,formProps:o,componentData:r}},render(e){const n=Object.entries(this.$slots).reduce((o,[r,l])=>{if(r.startsWith("component-")){const m=r.replace("component-","");o[m]=l}return o},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(B,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...n})]),c(E,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":o=>e.formProps=o})])}}),L=_(N,[["__scopeId","data-v-c43e6a78"]]);export{L as default};