import{ax as l,at as i,r as p,d,a8 as m,av as f,b as x,X as v,w as y,ad as h,ap as C,aq as V,J as _,ar as w}from"./entry.1o8ESq_e.js";function g(s){const o=l(),e=i(),a=p();return{response:a,async execute(){return a.value=await e.execute(o,{action:s})}}}const P=d({__name:"ChallengeV3",props:{action:{},as:{default:"div"},autoExecute:{type:Boolean,default:!0},modelValue:{}},emits:["update:modelValue"],setup(s,{emit:o}){const e=s,a=o,{response:n,execute:r}=g(e.action),u=m({response:n,execute:r});f(n,t=>{a("update:modelValue",t)});function c(){e.autoExecute&&r()}return(t,k)=>(x(),v(w(t.as),{onClick:c},{default:y(()=>[h(t.$slots,"default",C(V(_(u))))]),_:3}))}});export{P as _};
