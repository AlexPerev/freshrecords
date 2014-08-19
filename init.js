var div = document.createElement('div');
div.setAttribute('id', 'chrome_extension_id');
div.setAttribute('style', 'display:none');
div.setAttribute('txt', "chrome-extension://"+chrome.i18n.getMessage("@@extension_id"));
document.getElementsByTagName('body').item(0).appendChild(div);

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', "chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/content.js");
document.getElementsByTagName('head').item(0).appendChild(script);

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', "chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/player/player.js");
document.getElementsByTagName('head').item(0).appendChild(script);