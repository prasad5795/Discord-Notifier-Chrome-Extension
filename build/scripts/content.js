!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([,function(e,t,o){"use strict";var n={attributes:!0,childList:!0,subtree:!0},r=void 0,l=chrome;chrome.runtime.sendMessage({type:"getUsername"},function(e){r=e.username,u()});var a=location.href;setInterval(function(){a!=location.href&&(a=location.href,u())},500);var s,c,i=(s=function(e){var t=e.type,o=e.msg;l.runtime.sendMessage({type:"getBotIdAndChatId"},function(e){console.log("botid",n),console.log("chatid",r),console.log("msg",o);var n=e.botid,r=e.chatid,l=new XMLHttpRequest,a="https://api.telegram.org/bot"+n+"/sendMessage?chat_id=-"+r+"&text="+o;console.log(a),l.open("GET",a,!0),l.onload=function(){console.log(l.responseText)},l.onreadystatechange=function(){4==l.readyState&&200==l.status?(console.log("xhr.readyState=",l.readyState),console.log("xhr.status=",l.status),console.log("response=",l.responseText)):(console.log("xhr.readyState=",l.readyState),console.log("xhr.status=",l.status),console.log("response=",l.responseText),function(){var e=document.createElement("div");e.innerHTML='\n        <div class="toast">\n          <div class="toast-header">\n            <strong style="color:red;">Discord Notifier Error</strong>\n          </div>\n          <div class="toast-body">\n            Please check botid or network, check console for more information\n          </div>\n        </div>\n        '.trim(),e.style.position="absolute",e.style.zIndex="10000",e.style.padding="1%",e.style.right="0",document.getElementById("app-mount").appendChild(e);var t=e.children[0];t.style.backgroundColor="white",t.style.padding="3%",setTimeout(function(){e.remove()},3e3)}())},console.log("Will send messeage to telegram now"),l.send(t+" "+o)})},1e3,c=void 0,function(){var e=this,t=arguments;clearTimeout(c),c=setTimeout(function(){c=null,s.apply(e,t)},1e3)}),u=function(){var e=setInterval(function(){try{console.clear(),console.log("intervalid");var t=document.querySelectorAll("form")[0];t.querySelectorAll("[class^='typing']")[0].querySelectorAll("span")[0]&&(console.log("inside if typing span"),new MutationObserver(o).observe(t,n),clearInterval(e))}catch(t){console.log("error",t)}},100),t=setInterval(function(){try{var e=document.querySelectorAll("[class^='scrollerInner']")[0];e&&(new MutationObserver(a).observe(e,n),clearInterval(t))}catch(e){console.log("error",e)}},3e3),o=function(e,t){try{console.log("inside try of callback"),l.runtime.sendMessage({type:"getUsername"},function(t){console.log("mutation"),r=t;var o=!0,n=!1,l=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var c=a.value;try{c.target.textContent.includes(r)&&r&&(console.log("inside if textContent.includes(username) && username "),i({type:"typing",msg:r+" IS TYPING"}))}catch(t){console.log(t)}}}catch(t){n=!0,l=t}finally{try{!o&&s.return&&s.return()}finally{if(n)throw l}}})}catch(t){console.log(t),location.reload()}},a=function(e,t){try{console.log("inside try of callback"),l.runtime.sendMessage({type:"getUsername"},function(t){console.log("mutation"),r=t;var o=!0,n=!1,l=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var c=a.value;if("OL"===c.target.tagName){for(var u=c.target.querySelectorAll("li"),d=void 0,f=void 0,g=u.length-1;0<=g;g--)if(d=u[g].querySelector("[class*='username']")){f=d.textContent;break}var y=u[u.length-1].querySelector("[class*='content']").textContent;r===f&&r&&i({type:"Posted Message",msg:r+"--\x3e\n"+y})}}}catch(t){n=!0,l=t}finally{try{!o&&s.return&&s.return()}finally{if(n)throw l}}})}catch(t){console.log(t),location.reload()}}}}]);