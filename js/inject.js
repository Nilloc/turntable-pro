var js = document.createElement('script');
js.setAttribute('data-base', chrome.extension.getURL('/'));
js.src = chrome.extension.getURL("js/turntable-pro.js?v=1_" + new Date().getTime());
js.id='turntable-pro';
document.body.appendChild(js);