"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{5194:function(e,t,n){n.d(t,{Z:function(){return G}});var r=n(7294);let i=e=>Array.isArray(e),a=e=>i(e)?e:[e],l=function(e){let t=function(e){return a(e).forEach(e=>{var t;return u.set(Symbol(null==(t=e.char)?void 0:t.innerText),r({...e}))}),this},n=()=>i().filter(e=>e.typeable),r=e=>(e.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},e),i=()=>Array.from(u.values()),l=e=>u.delete(e),o=(e=!1)=>e?i():i().filter(e=>!e.done),s=(e,t=!1)=>t?u.delete(e):u.get(e).done=!0,u=new Map;return t(e),{add:t,set:function(e,t){let n=[...u.keys()];u.set(n[e],r(t))},wipe:function(){u=new Map,t(e)},reset:function(){u.forEach(e=>delete e.done)},destroy:l,done:s,getItems:o,getQueue:()=>u,getTypeable:n}},o=e=>Array.from(e),s=e=>document.createTextNode(e),u=e=>([...e.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(t=>{e.parentNode.insertBefore(s(t),e)}),e.remove();return}u(e)}),e),c=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,u(t.body)},d="data-typeit-id",f="ti-cursor",h={started:!1,completed:!1,frozen:!1,destroyed:!1},y={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(e=>({opacity:e})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},p=`[${d}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function m(e,t=!1,n=!1){let r,i=e.querySelector(`.${f}`),a=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:e=>{var t,r;if(i&&n){if(null==(t=e.classList)?void 0:t.contains(f))return NodeFilter.FILTER_ACCEPT;if(i.contains(e))return NodeFilter.FILTER_REJECT}return(null==(r=e.classList)?void 0:r.contains(f))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),l=[];for(;r=a.nextNode();)r.originalParent||(r.originalParent=r.parentNode),l.push(r);return t?l.reverse():l}let g=e=>document.createElement(e),b=(e,t="")=>{let n=g("style");n.id=t,n.appendChild(s(e)),document.head.appendChild(n)},v=e=>(i(e)||(e=[e/2,e/2]),e),w=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t)),T=e=>e/2,E=e=>(e.forEach(clearTimeout),[]),S=()=>Math.random().toString().substring(2,9),N=e=>"value"in e,P=e=>N(e)?o(e.value):m(e,!0).filter(e=>!(e.childNodes.length>0)),C=(e,t)=>{new IntersectionObserver((n,r)=>{n.forEach(n=>{n.isIntersecting&&(t(),r.unobserve(e))})},{threshold:1}).observe(e)},L=e=>"function"==typeof e?e():e,D=e=>Number.isInteger(e),M=(e,t=document,n=!1)=>t[`querySelector${n?"All":""}`](e),A=e=>/body/i.test(null==e?void 0:e.tagName),I=(e,t)=>{if(N(e)){e.value=`${e.value}${t.textContent}`;return}t.innerHTML="";let n=A(t.originalParent)?e:t.originalParent||e;n.insertBefore(t,M("."+f,n)||null)},$=(e,t,n)=>Math.min(Math.max(t+e,0),n.length),k=(e,t)=>Object.assign({},e,t),H=(e,t)=>{if(!e)return;let n=e.parentNode;(n.childNodes.length>1||n.isSameNode(t)?e:n).remove()},x=(e,t,n)=>{let r=t[n-1],i=M(`.${f}`,e);(e=(null==r?void 0:r.parentNode)||e).insertBefore(i,r||null)},R=e=>/<(.+)>(.*?)<\/(.+)>/.test(e.outerHTML),F=(e,t,n)=>new Promise(r=>{let i=async()=>{await e(),r()};n.push(setTimeout(i,t||0))}),O={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},_=(e,t)=>{let n=`[${d}='${e}'] .${f}`,r=getComputedStyle(t);b(`${n} { display: inline-block; width: 0; ${Object.entries(O).reduce((e,[t,n])=>`${e} ${t}: var(--ti-cursor-${t}, ${n||r[t]});`,"")} }`,e)},z=(e,t)=>Array(t).fill(e),B=({queueItems:e,selector:t,cursorPosition:n,to:r})=>{if(D(t))return -1*t;let i=/END/i.test(r),a=t?[...e].reverse().findIndex(({char:e})=>{let n=e.parentElement,r=n.matches(t);return!!i&&!!r||r&&n.firstChild.isSameNode(e)}):-1;return a<0&&(a=i?0:e.length-1),a-n+(i?0:1)},q=e=>new Promise(t=>{requestAnimationFrame(async()=>{t(await e())})}),j=e=>null==e?void 0:e.getAnimations().find(t=>t.id===e.dataset.tiAnimationId),V=({cursor:e,frames:t,options:n})=>{let r=e.animate(t,n);return r.pause(),r.id=e.dataset.tiAnimationId,q(()=>{q(()=>{r.play()})}),r},Q=({cursor:e,options:t,cursorOptions:n})=>{let r;if(!e||!n)return;let i=j(e);i&&(t.delay=i.effect.getComputedTiming().delay,r=i.currentTime,i.cancel());let a=V({cursor:e,frames:n.animation.frames,options:t});return r&&(a.currentTime=r),a},J=e=>{var t;return null==(t=e.func)?void 0:t.call(null)},U=async({index:e,queueItems:t,wait:n,cursor:r,cursorOptions:i})=>{let a,l=t[e][1],o=[],s=e,u=l,c=l.shouldPauseCursor()&&i.autoPause;for(;u&&!u.delay;)o.push(u),u&&!u.delay&&s++,u=t[s]?t[s][1]:null;if(o.length)return await q(async()=>{for(let e of o)await J(e)}),s-1;let d=j(r);return d&&(a={...d.effect.getComputedTiming(),delay:c?i.autoPauseDelay:0}),await n(async()=>{d&&c&&d.cancel(),await q(()=>{J(l)})},l.delay),await Q({cursor:r,options:a,cursorOptions:i}),e},W=e=>{var t,n;if("object"==typeof e){let r={},{frames:i,options:a}=y.cursor.animation;return r.animation=e.animation||{},r.animation.frames=(null==(t=e.animation)?void 0:t.frames)||i,r.animation.options=k(a,(null==(n=e.animation)?void 0:n.options)||{}),r.autoPause=e.autoPause??y.cursor.autoPause,r.autoPauseDelay=e.autoPauseDelay||y.cursor.autoPauseDelay,r}return!0===e?y.cursor:e},X=function(e,t={}){var n;let r,i=async(e,t,n=!1)=>{ec.frozen&&await new Promise(e=>{this.unfreeze=()=>{ec.frozen=!1,e()}}),n||await ed.beforeStep(this),await F(e,t,eo),n||await ed.afterStep(this)},d=(e,t)=>U({index:e,queueItems:t,wait:i,cursor:ep,cursorOptions:ed.cursor}),A=e=>H(e,el),O=()=>N(el),q=(e=0)=>(function(e){let{speed:t,deleteSpeed:n,lifeLike:r}=e;return n=null!==n?n:t/3,r?[w(t,T(t)),w(n,T(n))]:[t,n]})(ed)[e],j=()=>P(el),Q=(e={})=>{let t=e.delay;t&&eh.add({delay:t})},J=(e,t)=>(eh.add(e),Q(t),this),X=()=>eu??es,Z=(e={})=>[{func:()=>er(e)},{func:()=>er(ed)}],G=e=>{let t=ed.nextStringDelay;eh.add([{delay:t[0]},...e,{delay:t[1]}])},K=async()=>{if(!O()&&ep&&el.appendChild(ep),ey){_(ef,el),ep.dataset.tiAnimationId=ef;let{animation:e}=ed.cursor,{frames:t,options:n}=e;V({frames:t,cursor:ep,options:{duration:ed.cursorSpeed,...n}})}},Y=async e=>{let t=X();t&&await et({value:t});let n=j().map(e=>[Symbol(),{func:ea,delay:q(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let e=0;e<n.length;e++)await d(e,n);eh.reset(),eh.set(0,{delay:e})},ee=async(e=!0)=>{ec.started=!0;let t=t=>{eh.done(t,!e)};try{let n=[...eh.getQueue()];for(let e=0;e<n.length;e++){let[r,i]=n[e];if(!i.done){if(!i.deletable||i.deletable&&j().length){let r=await d(e,n);Array(r-e).fill(e+1).map((e,t)=>e+t).forEach(e=>{let[r]=n[e];t(r)}),e=r}t(r)}}if(!e)return this;if(ec.completed=!0,await ed.afterComplete(this),!ed.loop)throw"";let r=ed.loopDelay;i(async()=>{await Y(r[0]),ee()},r[1])}catch(e){}return this},et=async e=>{es=$(e,es,j()),x(el,j(),es)},en=e=>I(el,e),er=async e=>ed=k(ed,e),ei=async()=>{if(O()){el.value="";return}j().forEach(A)},ea=()=>{let e=j();e.length&&(O()?el.value=el.value.slice(0,-1):A(e[es]))};this.break=function(e){return J({func:()=>en(g("BR")),typeable:!0},e)},this.delete=function(e=null,t={}){e=L(e);let n=Z(t),r=e,{instant:i,to:a}=t,l=eh.getTypeable(),o=null===r?l.length:D(r)?r:B({queueItems:l,selector:r,cursorPosition:X(),to:a});return J([n[0],...z({func:ea,delay:i?0:q(1),deletable:!0},o),n[1]],t)},this.empty=function(e={}){return J({func:ei},e)},this.exec=function(e,t={}){let n=Z(t);return J([n[0],{func:()=>e(this)},n[1]],t)},this.move=function(e,t={}){e=L(e);let n=Z(t),{instant:r,to:i}=t,a=B({queueItems:eh.getTypeable(),selector:null===e?"":e,to:i,cursorPosition:X()}),l=a<0?-1:1;return eu=X()+a,J([n[0],...z({func:()=>et(l),delay:r?0:q(),cursorable:!0},Math.abs(a)),n[1]],t)},this.options=function(e,t={}){return er(e=L(e)),J({},t)},this.pause=function(e,t={}){return J({delay:L(e)},t)},this.type=function(e,t={}){e=L(e);let{instant:n}=t,r=Z(t),i=(function(e,t=!0){return t?m(c(e)):o(e).map(s)})(e,ed.html).map(e=>({func:()=>en(e),char:e,delay:n||R(e)?0:q(),typeable:e.nodeType===Node.TEXT_NODE}));return J([r[0],{func:async()=>await ed.beforeString(e,this)},...i,{func:async()=>await ed.afterString(e,this)},r[1]],t)},this.is=function(e){return ec[e]},this.destroy=function(e=!0){eo=E(eo),L(e)&&ep&&A(ep),ec.destroyed=!0},this.freeze=function(){ec.frozen=!0},this.unfreeze=()=>{},this.reset=function(e){for(let t in this.is("destroyed")||this.destroy(),e?(eh.wipe(),e(this)):eh.reset(),es=0,ec)ec[t]=!1;return el[O()?"value":"innerHTML"]="",this},this.go=function(){return ec.started?this:(K(),ed.waitUntilVisible)?(C(el,ee.bind(this)),this):(ee(),this)},this.flush=function(e=()=>{}){return K(),ee(!1).then(e),this},this.getQueue=()=>eh,this.getOptions=()=>ed,this.updateOptions=e=>er(e),this.getElement=()=>el;let el="string"==typeof e?M(e):e,eo=[],es=0,eu=null,ec=k({},h);t.cursor=W(t.cursor??y.cursor);let ed=k(y,t);ed=k(ed,{html:!O()&&ed.html,nextStringDelay:v(ed.nextStringDelay),loopDelay:v(ed.loopDelay)});let ef=S(),eh=l([{delay:ed.startDelay}]);el.dataset.typeitId=ef,b(p);let ey=!!ed.cursor&&!O(),ep=(()=>{if(O())return;let e=g("span");return(e.className=f,ey)?(e.innerHTML=c(ed.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)})();ed.strings=(n=a(ed.strings),(r=el.innerHTML)?(el.innerHTML="",ed.startDelete)?(el.innerHTML=r,u(el),G(z({func:ea,delay:q(1),deletable:!0},j().length)),n):r.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(n):n),ed.strings.length&&(()=>{let e=ed.strings.filter(e=>!!e);e.forEach((t,n)=>{this.type(t),n+1!==e.length&&G(ed.breakLines?[{func:()=>en(g("BR")),typeable:!0}]:z({func:ea,delay:q(1)},eh.getTypeable().length))})})()},Z=(0,r.forwardRef)((e,t)=>{let{as:n}=e;return r.createElement(n,{ref:t,...e})}),G=e=>{let t=(0,r.useRef)(null),n=(0,r.useRef)(null),{options:i,children:a,getBeforeInit:l,getAfterInit:o,...s}=e,[u,c]=(0,r.useState)(!0),[d,f]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(function(){let e=Object.assign({},i);a&&t.current&&(e.strings=t.current.innerHTML),f(e)})(),c(!1)},[i]),(0,r.useEffect)(()=>{var e;d&&((null==(e=n.current)?void 0:e.updateOptions(d))||(n.current=new X(t.current,d),n.current=l(n.current),n.current.go(),n.current=o(n.current)))},[d]),(0,r.useEffect)(()=>()=>{var e;return null==(e=n.current)?void 0:e.destroy()},[]),r.createElement(Z,{ref:t,children:u?a:null,style:{opacity:u?0:1},...s})};G.defaultProps={as:"span",options:{},getBeforeInit:e=>e,getAfterInit:e=>e}}}]);