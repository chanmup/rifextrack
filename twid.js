!function(){window.track123Widget={init:i,changeTab:function(t){window.track123Widget.activeTab=t,window.track123Widget.init(window.track123Widget.config)},search:function(t,e){var a=document.getElementById("track123-widget-search-num-input").value,i=document.getElementById("track123-widget-iframe");i.src=""+t+e+`/widgetIframe?trackNos=${a}&type=1`,i.style=a?"height: 595px; border: 1px solid #E6E9EE; ":"height: 0; border: none;"},cargoSearch:function(a,i){const n=document.getElementById("track123-widget-iframe"),r=document.getElementById("track123-widget-search-containerNo-input").value,c=document.getElementById("track123-widget-search-trackingNo-input").value,t=document.getElementById("track123-widget-cargo-select"),d=window.track123Widget.cargoCompanyList[t.selectedIndex-1],e=document.getElementById("track123-widget-search-cargo-warning"),o=(e.style=`display: ${t.selectedIndex?"none":"block"};`,document.getElementById("track123-widget-cargo-label"));o.style=`display: ${t.selectedIndex?"block":"none"};`,t.selectedIndex?fetch(window.track123Widget.baseUrl+"/tk/api/v1/anonymous/ocean/list-waybill",{method:"POST",body:JSON.stringify({carrierCode:d.carrierCode,containerNo:r,trackingNo:c}),headers:{Accept:"application/json, */*","Content-Type":"application/json;charset=utf8"}}).then(t=>t.json()).then(t=>{var e;"00000"!==t.code&&t.msg?((e=document.getElementById("track123-widget-cargo-warning")).innerHTML=`
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM7 6.9996C7 7.55188 7.44772 7.9996 8 7.9996C8.55229 7.9996 9 7.55188 9 6.9996V4.9996C9 4.44732 8.55229 3.9996 8 3.9996C7.44772 3.9996 7 4.44732 7 4.9996V6.9996ZM7 10.9996C7 11.5519 7.44772 11.9996 8 11.9996C8.55229 11.9996 9 11.5519 9 10.9996C9 10.4473 8.55229 9.9996 8 9.9996C7.44772 9.9996 7 10.4473 7 10.9996Z" fill="#E52E2E"/>
                    </svg>
                    <span>${window.track123Widget.languageMatch[t.msg]}</span>
                `,e.style="display: flex;",n.style="height: 0; border: none;"):(document.getElementById("track123-widget-cargo-warning").style="display: none;",n.src=""+a+i+`/widgetIframe?type=2&containerNo=${r}&trackingNo=${c}&carrierCode=`+d.carrierCode,n.style="height: 595px;border: 1px solid #E6E9EE;")}):document.getElementById("track123-widget-cargo-warning").style="display: none;"},matchCargoCompany:function(t){let e="";"containerNo"===t?e=document.getElementById("track123-widget-search-containerNo-input").value:"trackingNo"===t&&(e=document.getElementById("track123-widget-search-trackingNo-input").value);fetch(window.track123Widget.baseUrl+"/tk/api/v1/anonymous/ocean/matching-courier",{method:"POST",body:JSON.stringify({type:1,trackingNo:e}),headers:{Accept:"application/json, */*","Content-Type":"application/json;charset=utf8"}}).then(t=>t.json()).then(a=>{const i=document.getElementById("track123-widget-cargo-select");"00000"===a.code&&a.data&&a.data.carrierCode&&window.track123Widget.cargoCompanyList.forEach((t,e)=>{t.carrierCode===a.data.carrierCode&&(i.selectedIndex=e+1)})})},activeTab:"1",cargoCompanyList:[],baseUrl:"https://www.track123.com"};var t=window.track123Widget.baseUrl+"/widget/index.css",e=void 0,a=document.createElement("link");async function i(){const e=window.track123WidgetConfig||{};var t=document.getElementById("track123-tracking-widget"),a=e.language&&"zh_CN"!==e.language?"/"+e.language.split("_")[0]:"",i=(i=e.language,await fetch(window.track123Widget.baseUrl+"/tk/api/v2/anonymous/track/language/list",{method:"POST",body:JSON.stringify({contentKey:"",localeLang:i,moduleName:"track123_toc"}),headers:{Accept:"application/json, */*","Content-Type":"application/json;charset=utf8"}}).then(t=>t.json()).then(t=>{if("00000"!==t.code)return{};{const e={};return t.data.forEach(t=>{e[t.contentKey]=t.contentValue}),e}}));window.track123Widget.languageMatch=i,(2==e.provider_type||3==e.provider_type&&"2"===window.track123Widget.activeTab)&&(window.track123Widget.cargoCompanyList=await fetch(window.track123Widget.baseUrl+"/tk/api/v1/anonymous/ocean/list-courier").then(t=>t.json()).then(t=>"00000"===t.code?t.data:[])),t.style="fixed"===e.width_type&&e.width_value?`width: ${e.width_value}px; min-width: 320px;`:"",t.innerHTML=`
            <div class="track123-widget-wrapper">
                <div class="track123-widget-search-container" style="${"fixed"===e.width_type&&e.width_value&&e.width_value<500?"width: 100%;":""}">
                    ${3==e.provider_type?`
                            <div class="track123-widget-search-tab">
                                <div 
                                    onclick="window.track123Widget.changeTab('1')"
                                    class="track123-tab-item ${"1"===window.track123Widget.activeTab?"track123-active-tab":""}"
                                    style="${"1"===window.track123Widget.activeTab?"background: "+e.theme_color:""}">
                                    ${i["快递&空运"]}
                                </div>
                                <div 
                                    onclick="window.track123Widget.changeTab('2')"
                                    class="track123-tab-item ${"2"===window.track123Widget.activeTab?"track123-active-tab":""}"
                                    style="${"2"===window.track123Widget.activeTab?"background: "+e.theme_color:""}">
                                    ${i["海运"]}
                                </div>
                            </div>
                        `:""}
                    ${1==e.provider_type||3==e.provider_type&&"1"===window.track123Widget.activeTab?`
                            <div class="track123-widget-search-input-content" style="${"fixed"===e.width_type&&e.width_value&&e.width_value<500?"width: 100%;":""}">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C12.8487 19 14.551 18.3729 15.9056 17.3199L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L17.3199 15.9056C18.3729 14.551 19 12.8487 19 11C19 6.58172 15.4183 3 11 3ZM5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11Z" fill="#A5ABB2"/>
                                </svg>
                                <input 
                                    type="text" 
                                    id="track123-widget-search-num-input" 
                                    value="" 
                                    placeholder="${i["请输入单号"]}" 
                                    style="border-color: ${e.theme_color};"/>
                            </div>
                            <div 
                                class="track123-widget-search-btn" 
                                style="background: ${e.theme_color};"
                                onclick="window.track123Widget.search('${e.api_base}','${a}')">
                                ${i["查询"]}
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5356 7.00012L7.24264 3.70718L8.65685 2.29297L14.3137 7.94982L8.65685 13.6067L7.24264 12.1925L10.435 9.00012H2V7.00012H10.5356Z" fill="white"/>
                                </svg>
                            </div>
                        `:""}
                    ${2==e.provider_type||3==e.provider_type&&"2"===window.track123Widget.activeTab?`
                            <div class="track123-widget-cargo-search-container" style="border-color: ${e.theme_color};">
                                <div class="track123-widget-cargo-search-input-content">
                                    <div class="title">${i["柜号"]}</div>
                                    <input 
                                        type="text" 
                                        id="track123-widget-search-containerNo-input" 
                                        value="" 
                                        onchange="window.track123Widget.matchCargoCompany('containerNo')"
                                        placeholder="${i["请输入"]}" />
                                    <div class="track123-widget-warning" id="track123-widget-search-containerNo-warning">${i["请输入柜号"]}</div>
                                </div>
                                <div class="track123-widget-cargo-search-input-content">
                                    <div class="title">${i["提单号/订舱号"]}</div>
                                    <input 
                                        type="text" 
                                        id="track123-widget-search-trackingNo-input" 
                                        value="" 
                                        onchange="window.track123Widget.matchCargoCompany('trackingNo')"
                                        placeholder="${i["请输入"]}" />
                                    <div class="track123-widget-warning" id="track123-widget-search-trackingNo-warning">${i["请输入提单号/订舱号"]}</div>
                                </div>
                                <div class="track123-widget-cargo-search-input-content">
                                    <div id="track123-widget-cargo-label" class="title">${i["船公司"]}</div>
                                    <div class="track123-widget-warning" id="track123-widget-search-cargo-warning">${i["请选择船公司"]}</div>
                                    <select id="track123-widget-cargo-select">
                                        <option value='' disabled selected style='display:none;'>${i["请选择"]}</option>
                                        ${window.track123Widget.cargoCompanyList.map(t=>`<option value="${t.carrierCode}">${"zh_CN"===e.language?t.carrierNameCN:t.carrierNameEN}</option>`)}
                                    </select>
                                </div>
                            </div>
                            <div id="track123-widget-cargo-warning"></div>
                            <div 
                                class="track123-widget-search-btn" 
                                style="background: ${e.theme_color};"
                                onclick="window.track123Widget.cargoSearch('${e.api_base}','${a}')">
                                ${i["查询"]}
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5356 7.00012L7.24264 3.70718L8.65685 2.29297L14.3137 7.94982L8.65685 13.6067L7.24264 12.1925L10.435 9.00012H2V7.00012H10.5356Z" fill="white"/>
                                </svg>
                            </div>
                        `:""}
                </div>
                ${1==e.provider_type||3==e.provider_type&&"1"===window.track123Widget.activeTab?`<iframe id="track123-widget-iframe" src="${e.api_base}${a}/widgetIframe?type=1"></iframe>`:""}
                ${2==e.provider_type||3==e.provider_type&&"2"===window.track123Widget.activeTab?`<iframe id="track123-widget-iframe" src="${e.api_base}${a}/widgetIframe?type=2"></iframe>`:""}
            </div>
        `;const n=document.getElementById("track123-widget-cargo-select");n&&n.addEventListener("change",()=>{n.value&&(document.getElementById("track123-widget-search-cargo-warning").style="display: none;",document.getElementById("track123-widget-cargo-label").style="display: block;")}),window.addEventListener("message",function(t){t.data&&"ToTrack123Widget"===t.data.type&&(document.getElementById("track123-widget-iframe").style=`height: ${t.data.height||595}px; border: 1px solid #E6E9EE;`)})}a.setAttribute("rel","stylesheet"),a.setAttribute("href",t),e&&a.setAttribute("media",e),document.getElementsByTagName("head")[0].appendChild(a),i()}();