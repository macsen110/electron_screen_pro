const {
    shotScreen
} = require('./remote')
const {
    openExternal,
    openItem
} = require('./shell');

module.exports = {
    "SHOT_SCREEN": shotScreen,
    "OPEN_EXTERNAL": openExternal,
    "OPEN_ITEM": openItem
}