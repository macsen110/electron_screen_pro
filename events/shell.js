function openNewBrowser(params = {}, __base) {
  let _win = new __base.BrowserWindow({...params})
  _win.loadURL(params._url)
}
module.exports = {
  openNewBrowser
}