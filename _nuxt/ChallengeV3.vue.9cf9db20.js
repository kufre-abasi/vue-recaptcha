import{w as c}from"./index.97961db6.js";import{ad as l,a8 as i,r as p,a as d,Y as m,o as f,c as x,w as y,a1 as h,n as v,g as C,u as V,a6 as w}from"./entry.cf631c4a.js";function _(a){const s=l(),t=i(),e=p();return{response:e,async execute(){return e.value=await t.execute(s,{action:a})}}}const P=d({__name:"ChallengeV3",props:{action:null,as:{default:"div"},autoExecute:{type:Boolean,default:!0},modelValue:null},emits:["update:modelValue"],setup(a,{emit:s}){const t=a,{response:e,execute:n}=_(t.action),r=m({response:e,execute:n});c(e,o=>{s("update:modelValue",o)});function u(){t.autoExecute&&n()}return(o,g)=>(f(),x(w(a.as),{onClick:u},{default:y(()=>[h(o.$slots,"default",v(C(V(r))))]),_:3}))}});export{P as _};