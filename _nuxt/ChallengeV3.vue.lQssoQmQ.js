import{w as l}from"./index.qrtzqu5N.js";import{av as i,ar as p,r as m,d,a8 as f,b as x,Y as v,w as y,L as h,an as C,ao as V,ad as _,ap as w}from"./entry.97hCZr9w.js";function g(s){const o=i(),e=p(),a=m();return{response:a,async execute(){return a.value=await e.execute(o,{action:s})}}}const A=d({__name:"ChallengeV3",props:{action:{},as:{default:"div"},autoExecute:{type:Boolean,default:!0},modelValue:{}},emits:["update:modelValue"],setup(s,{emit:o}){const e=s,a=o,{response:n,execute:r}=g(e.action),u=f({response:n,execute:r});l(n,t=>{a("update:modelValue",t)});function c(){e.autoExecute&&r()}return(t,k)=>(x(),v(w(t.as),{onClick:c},{default:y(()=>[_(t.$slots,"default",V(C(h(u))))]),_:3}))}});export{A as _};