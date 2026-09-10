const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync(require('path').join(process.cwd(),'index.html'),'utf8');
const data=html.match(/<script id="network-data" type="application\/json">([\s\S]*?)<\/script>/)[1];
const els=new Map();
const context2d=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:t=>({width:t.length*8})},{get:(o,k)=>o[k]||(()=>{}),set:(o,k,v)=>(o[k]=v,true)});
function element(id){if(!els.has(id))els.set(id,{textContent:id==='network-data'?data:'',value:'',innerHTML:'',hidden:false,style:{},dataset:{},scrollTop:0,offsetHeight:120,addEventListener(){},insertBefore(){},setAttribute(){},getBoundingClientRect(){return {width:1000,height:760}},getContext(){return context2d},querySelector(){return null},setPointerCapture(){},scrollIntoView(){},focus(){},showModal(){this.open=true},close(){this.open=false}});return els.get(id)}
const sandbox={NodeFilter:{SHOW_TEXT:4},MutationObserver:class{observe(){} disconnect(){}},queueMicrotask,localStorage:{getItem(){return null},setItem(){}},document:{documentElement:{},body:{},createTreeWalker(){return {nextNode(){return null}}},getElementById:element,addEventListener(){},querySelectorAll(){return []}},window:{scrollTo(){},addEventListener(){}},console,performance,matchMedia:()=>({matches:true}),devicePixelRatio:1,ResizeObserver:class{observe(){}},requestAnimationFrame:()=>1,cancelAnimationFrame(){},Map,Set,Math,JSON};
vm.createContext(sandbox);vm.runInContext(fs.readFileSync(require('path').join(process.cwd(),'src/app.js'),'utf8'),sandbox);
