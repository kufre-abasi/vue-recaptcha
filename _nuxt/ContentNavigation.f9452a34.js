import{a as u,ar as c,x as d,a1 as l,X as f,as as v,$ as _,ay as g,ag as m,U as y}from"./entry.2271887c.js";import{u as h}from"./asyncData.333304dd.js";/* empty css                 */import"./index.esm.e65705c4.js";/* empty css                       *//* empty css                                   *//* empty css                      *//* empty css                   *//* empty css                           *//* empty css                            *//* empty css                         *//* empty css                         *//* empty css                    *//* empty css                           *//* empty css                            *//* empty css                      *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                   *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                  *//* empty css                    *//* empty css                      *//* empty css                       *//* empty css                      *//* empty css                     *//* empty css                 *//* empty css                    *//* empty css                     *//* empty css                        *//* empty css                           *//* empty css                      *//* empty css                     *//* empty css                       *//* empty css                                     *//* empty css                                    *//* empty css                                *//* empty css                               *//* empty css                    */const qt=u({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=c(e),r=d(()=>{var o;return typeof((o=t.value)==null?void 0:o.params)=="function"?t.value.params():t.value});if(!r.value&&l("dd-navigation").value){const{navigation:o}=f();return{navigation:o}}const{data:a}=await h(`content-navigation-${v(r.value)}`,()=>g(r.value));return{navigation:a}},render(e){const t=_(),{navigation:r}=e,a=i=>m(y,{to:i._path},()=>i.title),o=(i,n)=>m("ul",n?{"data-level":n}:null,i.map(p=>p.children?m("li",null,[a(p),o(p.children,n+1)]):m("li",null,a(p)))),s=i=>o(i,0);return t!=null&&t.default?t.default({navigation:r,...this.$attrs}):s(r)}});export{qt as default};