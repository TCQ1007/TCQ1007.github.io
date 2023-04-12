module.exports = {
    title: 'TwillTech Doc',
    description: 'Will 的博客预览版（version:beta2）',
    // 我们可以将代码目录和部署目录放在两个文件夹下面，通过dest选项将build出来的文件，导出到另一个文件夹中，那个文件夹使用github pages的git地址
    dest: '../docs',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {
        logo: '/logo.png',
        search: true, // 设置是否使用导航栏上的搜索框
        searchMaxSuggestions: 10, // 搜索框显示的搜索结果数量
        nav: [
            {text: 'Home', link: '/'},
            // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
            {text: 'Java', link: '/blog/Java/'},
            {text: 'CSDN', link: 'https://blog.csdn.net', target: '_blank'},
            {
                text: '豆瓣',
                link: 'https://movie.douban.com',
                target: '_self',
                rel: ''
            },
            // 支持嵌套,形成下拉式的导航菜单
            {
                text: '语言',
                ariaLabel: 'Language Menu',
                items: [
                    {text: '中文', link: '/language/chinese/'},
                    {text: '英文', link: '/language/english/'}
                ]
            }
        ],
        sidebar: {
            '/blog/Java/': [
                '',
                'Stream',
                ['DataType', 'Java 数据类型']
            ],
            '/blog/get-started/': [
                ''
            ]
        }
    }
}
