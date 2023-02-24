var input=document.getElementById("TrackNo");input.addEventListener("keyup",function(a){13===a.keyCode&&(a.preventDefault(),document.getElementById("1").click())}),!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var f in a)b.d(d,f,function(b){return a[b]}.bind(null,f));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="/",b(b.s=1)}({1:function(a,b,c){a.exports=c("nvHc")},nvHc:function(){!function(a,b){var c=b.createElement("style");c.innerHTML=".iframebox-open{overflow:hidden;}.iframebox{opacity:0;transition:visibility 0s,opacity 0.2s linear;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999;display:flex;background-color:rgba(0,0,0,.5)}.iframebox iframe{margin:auto;width:900px;height:625px;border:none;max-width:90%;max-height:90%;-moz-box-shadow:0 5px 10px #555;-webkit-box-shadow:0 5px 10px #555;box-shadow:0 5px 10px #555;background:url(https://mytrackcdn.com/img/loading.gif) center center no-repeat #FFF}.iframebox-close{position:fixed;top:20px;right:20px;width:40px;height:40px;cursor:pointer;text-align:center;background:#efeff0;border-radius:50%;color:#6e6d73}.iframebox-close:hover{text-decoration:none;color:#0a0a0a}.iframebox-close:focus{background:#3aa3e3;color:#fff}.iframebox-close:focus:after{color:#6e6d73}.iframebox-close:before{content:'\\00d7';font-size:25px;line-height:40px}.iframebox-embed{width:1000px;height:625px;border:1px solid #e0e0e0;max-width:100%;max-height:100%;background:url(https://mytrackcdn.com/img/loading.gif) center center no-repeat #FFF}",b.head.appendChild(c),a.TrackButton={track:function(a){return"string"==typeof a.tracking_no&&(!a.courier||"string"==typeof a.courier)&&(!a.theme||"string"==typeof a.theme)&&(!a.lang||"string"==typeof a.lang)&&(!a.width||"string"==typeof a.width)&&(!a.height||"string"==typeof a.height)&&void function(a){var c=!0,d=!0;if("string"!=typeof a.url)return!1;"boolean"==typeof a.closeBtn&&(c=a.closeBtn),"boolean"==typeof a.bodyHideScroll&&(d=a.bodyHideScroll),"function"==typeof a.afterClose&&a.afterClose;var e=b.querySelector(".iframebox");if(e&&(console.log("[Track Button] Script duplicate detected."),e.parentNode.removeChild(e)),!b.body)return console.log("[Track Button] Please run the script after the opening <body> tag."),!1;var f=b.createElement("div");f.className="iframebox",f.innerHTML="<iframe src=\""+a.url+"\"></iframe>"+(c?"<a title=\"Close\" class=\"iframebox-close\"></a>":""),b.body.appendChild(f),d&&b.body.classList.add("iframebox-open");b.querySelector(".iframebox").addEventListener("click",function(){var a=b.querySelector(".iframebox");return!!a&&(a.style.opacity=0,setTimeout(function(){a.parentNode.removeChild(a),d&&b.body.classList.remove("iframebox-open")},200),!0)}),a.width&&(b.querySelector(".iframebox iframe").style.width=a.width),a.height&&(b.querySelector(".iframebox iframe").style.height=a.height),setTimeout(function(){b.querySelector(".iframebox").style.opacity=1},50)}({url:"https://www.tracking.my/externalcall?style=iframebox&lang="+(a.lang?a.lang:"en")+"&tracking_no="+a.tracking_no+(a.courier?"&courier="+a.courier:"")+(a.theme?"&theme="+a.theme:""),width:a.width?a.width:"450px",height:a.height?a.height:"625px"})},embed:function(a){if("string"!=typeof a.selector)return!1;if("string"!=typeof a.tracking_no)return!1;if(a.courier&&"string"!=typeof a.courier)return!1;if(a.theme&&"string"!=typeof a.theme)return!1;if(a.lang&&"string"!=typeof a.lang)return!1;if(a.width&&"string"!=typeof a.width)return!1;if(a.height&&"string"!=typeof a.height)return!1;var c="https://www.tracking.my/externalcall?style=iframebox&lang="+(a.lang?a.lang:"en")+"&tracking_no="+a.tracking_no+(a.courier?"&courier="+a.courier:"")+(a.theme?"&theme="+a.theme:"");b.querySelector(a.selector).innerHTML="<iframe src=\""+c+"\" class=\"iframebox-embed\" style=\""+(a.width?"width:"+a.width+";":"")+(a.height?"height:"+a.height+";":"")+"\"></iframe>"}}}(window,document)}});function inputTrack(){var a=document.getElementById("TrackNo").value;return""===a?void alert("Please enter tracking number"):void TrackButton.track({tracking_no:a})}