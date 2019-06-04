function openNewBrowser(params = {}, __base) {
  let _win = new __base.BrowserWindow({...params})
  _win.loadURL(params._url)
  _win.setMovable(params.movable)
  params.bounds && _win.setBounds(params.bounds)
  return new Promise((res) => res(_win));
}
module.exports = {
  openNewBrowser
}