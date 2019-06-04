let _activeBrowser;
function openNewBrowser(params = {}, __base) {
  let _win = new __base.BrowserWindow({...params})
  _win.loadURL(params._url)
  _win.setMovable(params.movable)
  params.bounds && _win.setBounds(params.bounds)
  params.isAlwaysOnTop && _win.setAlwaysOnTop(true, 'modal-panel')
  _win.setVisibleOnAllWorkspaces(true)
  _setActiveBrowser(_win)  
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