import{ak as s,u as i,x as p,a as c,ao as u,r as l,ah as e,j as d}from"./entry.7efa7c07.js";import{u as f}from"./asyncData.d3ee5faf.js";import y from"./Ellipsis.c5844510.js";import g from"./ComponentPlaygroundData.0bc40bee.js";/* empty css                                *//* empty css                     */import"./TabsHeader.e5f57d0f.js";/* empty css                       */import"./ComponentPlaygroundProps.0b28b293.js";import"./ProseH4.214988d1.js";/* empty css                    */import"./ProseCodeInline.320f0915.js";/* empty css                            */import"./Badge.1ce44c3c.js";/* empty css                  */import"./ProseP.d3e7aaf1.js";/* empty css                   */import"./index.b5621a3f.js";import"./index.a3463f90.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.adea24b6.js";import"./ComponentPlaygroundTokens.vue.7aec60b7.js";/* empty css                                    */async function h(o){s();const t=i(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const m=r.replace("component-","");n[m]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),B=d(_,[["__scopeId","data-v-b9c7bb0c"]]);export{B as default};