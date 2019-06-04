// 设置接待者端在线状态
function setServerStatus(params = {}, __base) {
    __base.app.onLineContent = params.content;
    __base.app.isWorking = params.isWorking;
}

function setPendingSessionListLength(params = {}, __base) {
    __base.app.pendingSessionContent = params.content;
    __base.app.pendingSessionListLength = params.pendingSessionListLength;
}
module.exports = {
    setServerStatus,
    setPendingSessionListLength
};