let _activeBrowser;
function openNewBrowser(params = {}, __base) {
  let _win = new __base.BrowserWindow({...params})
  //设置最大宽高, 可在应用全屏时, 表现正常
  _win.loadURL(params._url)
  _setActiveBrowser(_win)  
  _win.on('close', () => _activeBrowser = null)
  return new Promise((res) => res(_win));
}
function _setActiveBrowser(_win) {
  closeBrowser()
  _activeBrowser = _win;
}
function closeBrowser() {
  _activeBrowser && _activeBrowser.close && _activeBrowser.close()
  _activeBrowser = null;
}
module.exports = {
  openNewBrowser,
  closeBrowser
}