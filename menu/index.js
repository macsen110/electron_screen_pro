const template = [{
        label: '编辑',
        submenu: [{
                label: '剪切',
                role: 'cut'
            },
            {
                label: '复制',
                role: 'copy'
            },
            {
                label: '粘贴',
                role: 'paste'
            },
            {
                label: '删除',
                role: 'delete'
            },
            {
                label: '全选',
                role: 'selectall'
            }
        ]
    },
    {
        label: '视图',
        submenu: [{
                label: '刷新',
                role: 'reload'
            },
            {
                label: '还原',
                role: 'resetzoom'
            },
            {
                label: '放大',
                role: 'zoomin'
            },
            {
                label: '缩小',
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                label: '全屏',
                role: 'togglefullscreen'
            },
            {
                label: '开发者模式',
                role: 'toggledevtools'
            }
        ]
    },
    {
        label: '窗口',
        submenu: [{
            label: '最小化',
            role: 'minimize'
        }, ]
    },
    {
        label: '帮助',
        submenu: [{
            label: '网络测试',
            click() {
                require('electron').shell.openExternal('https://im.111.com.cn/yyw-im/ping/index.html')
            }
        }]
    },
]
module.exports = template