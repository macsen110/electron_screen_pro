const { callEvent, version } = require('./tunnel/callEvent');
const { CALLBACK_CHANNEL } = require('./tunnel/const');

let ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on(CALLBACK_CHANNEL, (event, arg) => {
  console.log(event)
  console.log(arg);
});
window.__electronCallEvent = callEvent;
window.__electronVersion = version
window.ELECTRON_ENABLE_SECURITY_WARNINGS = false

let onLoadCb = () => {
  let __revmsg = window.revmsg || function (data) { }
  window.revmsg = function (data) {
    __revmsg(data)
    window.__electronCallEvent('START_FLASH_FRAME')
  }
}
window.addEventListener("load", onLoadCb);


// setTimeout(() => window.__electronCallEvent('SCREEN_SHOT'), 2000)