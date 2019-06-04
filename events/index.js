const {
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
} = require('./screen');
const {
    getVersion
} = require('./app');
const {
    setServerStatus,
    setPendingSessionListLength
} = require('./tools');
const {
    openNewBrowser,
    closeBrowser
} = require('./browser')
const {
    getCookie,
    setCookie
} = require('./cookie')
module.exports = {
    'SET_FULL_SCREEN': setFullScreen,
    'QUIT_FULL_SCREEN': quitFullScreen,
    'ASYNC_EVENT': asyncEvent,
    'IS_MAX_SCREEN': isMaxScreen,
    'IS_MIN_SCREEN': isMinScreen,
    'RESTORE_SCREEN': restoreScreen,
    'IS_VISIBLE_SCREEN': isVisibleScreen,
    'SHOW_SCREEN': showScreen,
    'IS_FOCUS_SCREEN': isFocusedScreen,
    'FOCUS_SCREEN': focusScreen,
    'GET_VERSION': getVersion,
    'START_FLASH_FRAME': startFlashFrame,
    'SET_MOUSE_MENU': setMouseMenu,
    'SET_SERVER_STATUS': setServerStatus,
    'SHOW_ERROR_BOX': showErrorBox,
    'SET_PENDING_SESSION_LIST_LENGTH': setPendingSessionListLength,
    'OPEN_NEW_BROWSER': openNewBrowser,
    'CLOSE_BROWSER': closeBrowser,
    'GET_COOKIE': getCookie,
    'SET_COOKIE': setCookie
};