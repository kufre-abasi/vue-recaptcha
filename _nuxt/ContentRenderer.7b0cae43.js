import c from"./ContentRendererMarkdown.4ee06b6f.js";import{d as l,a5 as s,ad as m,O as f}from"./entry.b13efaf7.js";const x=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,r,a;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(r=t==null?void 0:t.value)==null?void 0:r._path}.${(a=t==null?void 0:t.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var u,i,o,d;const n=m(),{value:e,excerpt:r,tag:a}=t;return!((i=(u=e==null?void 0:e.body)==null?void 0:u.children)!=null&&i.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:r,tag:a,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:r,tag:a,...this.$attrs}):(e==null?void 0:e._type)==="markdown"&&((d=(o=e==null?void 0:e.body)==null?void 0:o.children)!=null&&d.length)?f(c,{value:e,excerpt:r,tag:a,...this.$attrs}):f("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:r,tag:a},null,2))}});export{x as default};