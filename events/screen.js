//进入全屏
function setFullScreen(params = {}, __base) {
    return __base.win.setFullScreen(true);
}

//退出全屏
function quitFullScreen(params = {}, __base) {
    return __base.win.setFullScreen(false);
}
//是否是最小化窗口
function isMinScreen(params = {}, __base) {
    const _result = __base.win.isMinimized() ? 1 : 0;
    return _result
}
//是否最大化窗口
function isMaxScreen(params = {}, __base) {
    const _result = __base.win.isMaximized() ? 1 : 0;
    return _result
}
//从最小化状态恢复到当前状态
function restoreScreen(params = {}, __base) {
    return __base.win.restore()
}
//窗口是否可见
function isVisibleScreen(params = {}, __base) {
    const _result = __base.win.isVisible() ? 1 : 0
    return _result
}
//窗口是否聚焦
function isFocusedScreen(params = {}, __base) {
    const _result = __base.win.isFocused() ? 1 : 0
    return _result
}
//窗口聚焦
function focusScreen(params = {}, __base) {
    return __base.win.focus()
}
//设置窗口显示并是否聚焦
function showScreen(params = {}, __base) {
    if (params = {}.notFocus) return __base.win.showInactive()
    return __base.win.show()
}
// dock 闪烁
function startFlashFrame(params = {}, __base) {
    return __base.win.flashFrame(true);
}

// 设置鼠标右键菜单
function setMouseMenu(params = {}, __base) {
    let currentVersion = __base.app.getVersion();
    let Menu = __base.Menu;
    let MenuItem = __base.MenuItem;
    const menu = new Menu();
    menu.append(new MenuItem({
        label: '剪切（Ctrl + X）',
        role: 'cut'
    }));
    menu.append(new MenuItem({
        label: '复制（Ctrl + C）',
        role: 'copy'
    }));
    menu.append(new MenuItem({
        label: '粘贴（Ctrl + V）',
        role: 'paste'
    }));
    menu.append(new MenuItem({
        label: '重新加载（Ctrl + R）',
        role: 'reload'
    }));
    menu.append(new MenuItem({
        type: 'separator'
    }));
    menu.append(new MenuItem({
        label: `当前系统版本：${currentVersion}`
    }));
    menu.popup(__base.win);
}

// 调起EXE中的弹窗
function showErrorBox(params = {}, __base) {
    __base.dialog.showErrorBox('警告', params.content || '请先“停止接待”后退出客户端！');
    return;
}

function asyncEvent(params = {}) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}


module.exports = {
    setFullScreen,
    quitFullScreen,
    asyncEvent,
    isMaxScreen,
    isMinScreen,
    restoreScreen,
    isVisibleScreen,
    showScreen,
    isFocusedScreen,
    focusScreen,
    startFlashFrame,
    setMouseMenu,
    showErrorBox
};