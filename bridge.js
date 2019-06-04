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
// setTimeout(() => window.__electronCallEvent('SCREEN_SHOT'), 2000)