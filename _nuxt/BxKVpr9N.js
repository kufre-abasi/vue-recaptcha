import{d as x,R as y,H as t,c as a,e as r,V as h,w as u,i as m,f as i,t as p,h as l,aB as k,$ as C,C as w,aC as g,k as B}from"./DkscGzzW.js";const N={key:0,class:"docs-prev-next"},V={class:"wrapper"},D={key:0,class:"directory"},F={class:"title"},H={key:1},I={class:"wrapper"},P={key:0,class:"directory"},$={class:"title"},j=x({__name:"DocsPrevNext",setup(E){const{prev:e,next:s,navigation:f}=y(),{navDirFromPath:v}=g(),c=d=>{var n;const _=v(d._path,f.value||[]);if(_&&_[0])return((n=_[0])==null?void 0:n._path)??"";{const o=d.split("/");return(o.length>1?o[o.length-2]:"").split("-").map(k).join(" ")}};return(d,_)=>{const n=C,o=w;return t(e)||t(s)?(a(),r("div",N,[t(e)&&t(e)._path?(a(),h(o,{key:0,to:t(e)._path,class:"prev"},{default:u(()=>[m(n,{name:"heroicons-outline:arrow-sm-left",class:"icon"}),i("div",V,[c(t(e)._path)?(a(),r("span",D,p(c(t(e)._path)),1)):l("",!0),i("span",F,p(t(e).title),1)])]),_:1},8,["to"])):(a(),r("span",H)),t(s)&&t(s)._path?(a(),h(o,{key:2,to:t(s)._path,class:"next"},{default:u(()=>[i("div",I,[c(t(s)._path)?(a(),r("span",P,p(c(t(s)._path)),1)):l("",!0),i("span",$,p(t(s).title),1)]),m(n,{name:"heroicons-outline:arrow-sm-right",class:"icon"})]),_:1},8,["to"])):l("",!0)])):l("",!0)}}}),S=B(j,[["__scopeId","data-v-6c67facc"]]);export{S as default};