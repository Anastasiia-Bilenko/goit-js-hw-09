const e=document.querySelector(".form"),o=document.querySelector("input[name=delay]"),t=document.querySelector("input[name=step]"),n=document.querySelector("input[name=amount]");function u(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}console.log(u()),e.addEventListener("submit",(function(e){e.preventDefault();let i,l=Number(t.value),m=Number(o.value),r=Number(n.value);for(i=1;i<=r;i++){u(i,m+i*l).then((({position:e,delays:o})=>{setTimeout((()=>{console.log(`✅ Fulfilled promise ${e} in ${m}ms`)}),o)})).catch((({position:e,delays:o})=>{setTimeout((()=>{console.log(`❌ Rejected promise ${e} in ${m}ms`)}),o)}))}}));
//# sourceMappingURL=03-promises.e8079beb.js.map
