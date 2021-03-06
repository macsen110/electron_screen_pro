const electron = require('electron');
const {
  app,
  BrowserWindow,
  dialog,
  Menu,
  MenuItem,
  shell,
  session
} = electron;
const isDev = require('electron-is-dev');
const path = require('path');
const events = require('./events/index.js');
const {
  registEvents
} = require('./tunnel/index.js');
//const elecronUpdate = require('./update'); //自动升级
const menuTemplate = require('./menu') //菜单配置
const loadURL = isDev ? 'http://uchat.ewesell.cn/index.html#/chat' : 'http://uchat.ewesell.cn/index.html#/chat';


process.env.NODE_ENV = 'production'
app.on('ready', () => {
  let win = new BrowserWindow({
    width: 1500,
    height: 1200,
    minWidth: 1280,
    minHeight: 700,
    title: 'Screen', //窗口的默认标题
    backgroundColor: "#f4f5ff", //设置背景色
    icon: './assets/doctor.png', //设置 dock icon
    webPreferences: {
      preload: path.join(__dirname, './bridge.js'),
      plugins: true,
      nodeIntegration: false,
    }
  });
  win.maximize()
  //设置菜单
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu);

  //监听web对原生事件的调用
  registEvents(events, {
    app,
    win,
    shell,
    Menu,
    MenuItem,
    dialog,
    BrowserWindow,
    session
  });

  win.loadURL(loadURL);

  isDev && win.webContents.openDevTools();

  win.on('close', (e) => {
    app.quit();
  });
  
  //elecronUpdate.init(win, dialog);暂不需要自动升级
});