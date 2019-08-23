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

window.__msgBackObj = {
  getTargetDom() {
    return document.getElementById('tags_divs-1')
  },
  observer: null,
  connect() {
    var _target = this.getTargetDom();
    if (!_target) return;
    this.close();
    this._connect(_target)
  },
  _connect(targetNode) {
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };
    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
          window.__electronCallEvent && window.__electronCallEvent('START_FLASH_FRAME')
        }
        else if (mutation.type === 'attributes') {
          console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
      }
    };
    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    this.observer.observe(targetNode, config);
  },
  close() {
    if (!this.observer) return;
    this.observer.disconnect()
    this.observer = null;
  }
}
setInterval(window.__msgBackObj.connect.bind(window.__msgBackObj), 10 * 1000)

// setTimeout(() => window.__electronCallEvent('SCREEN_SHOT'), 2000)