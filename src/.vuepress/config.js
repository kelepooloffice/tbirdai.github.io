
const { path } = require('@vuepress/utils')
const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const getConfig = require("vuepress-bar");
const fs = require("fs");
const { sitemapPlugin } = require("vuepress-plugin-sitemap2");

module.exports = {
  lang: 'zh-CN',
  title: 'TBird',
  description: 'TBird Documentation - Web3 ecosystem data integration platform',
  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'TBird',
      description: 'TBird Documentation - Web3 ecosystem data integration platform',
      head: [
        ['meta', { name: 'keywords', content: 'TBird, Web3, Push Protocol'}],
        ['meta', { name: 'description', content: 'TBird Documentation - Web3 ecosystem data integration platform'}],
      ],
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'TBird',
      description: 'TBird文档 - Web3生态数据整合平台',
      head: [
        ['meta', { name: 'keywords', content: 'TBird, Web3, Push Protocol'}],
        ['meta', { name: 'description', content: 'TBird文档 - Web3生态数据整合平台'}],
      ],
    },
  },
  prev: true,
  next: true,
  theme: defaultTheme({
    docsDir: 'src',
    docsBranch: 'main',
    repo: 'tbirdai/docs.tbird.ai',
    logo: '/images/logo.png',
    colorMode:'light',
    colorModeSwitch:false,
    editLink:true,
    contributors:false,
    lastUpdated: false,
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        navbar: [
          {
            text: 'Guides',
            link: '/en/guides/'
          },
          {
            text: 'Announcements',
            link: '/en/announcements/'
          },
          {
            text: 'Wiki',
            link: '/en/wiki/'
          },
          {
            text: 'Developers',
            link: '/en/developers/'
          },
          {
            text: 'Website',
            link: 'https://www.tbird.ai'
          },
        ],
        sidebar:{
          '/en/guides/': [
            {
              text: 'Guides',
              children: [
              ],
            },
          ],
          '/en/announcements/': [
            {
              text: 'Announcements',
              children: [
                        ],
            },
          ],
          '/en/wiki/': [
            {
              text: 'Wiki',
              children: [],
            },
          ],
          '/en/developers/': [
          ],
        }
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '语言',
        editLinkText: '在 GitHub 上编辑此页',
        navbar: [
          {
            text: '教程',
            link: '/zh/guides/'
          },
          {
            text: '公告',
            link: '/zh/announcements/'
          },
          {
            text: '百科',
            link: '/zh/wiki/'
          },
          {
            text: '开发者文档',
            link: '/zh/developers/'
          },
          {
            text: '官方网站',
            link: 'https://www.tbird.ai'
          },
        ],
        sidebar:{
          '/zh/guides/': [
            {
              text: '入门教程',
              children: [
                {
                  text: '配置通知渠道',
                  collapsible: true,
                  children:[
                    '/zh/guides/start/notification/dingtalk.md',
                    '/zh/guides/start/notification/discord.md',
                    '/zh/guides/start/notification/telegram.md',
                    '/zh/guides/start/notification/slack.md',
                  ],
                },
                {
                  text: '服务条款&隐私协议',
                  collapsible: true,
                  children:[
                    '/zh/guides/start/terms/terms-of-service.md',
                    '/zh/guides/start/terms/privacy-policy.md',
                  ],
                }
              ]
            },
          ]
        },
          '/zh/wiki/': [
            {
              text: '百科',
              children: [
              ],
            },
          ],
          '/zh/developers/': [
          ],
        }
      },
    },
  ),
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-include'), {
        root: `${__dirname}/../`,
      }),
        md.use(require('markdown-it-html5-embed'), {
          html5embed: {
            useImageSyntax: true,
            useLinkSyntax: false
          }
        })
    },
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    sitemapPlugin({hostname: "https://docs.tbird.ai",}),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ]
}

// function getSideBar(folder, title) {
//   const extension = [".md"];
//   console.log("???")
//   const files = fs
//     .readdirSync(path.join(`${__dirname}/../${folder}`))
//     .filter(
//       (item) =>
//         item.toLowerCase() != "readme.md" &&
//         fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
//         extension.includes(path.extname(item))
//     );
//     //{ text: title,link:'', children: ["", ...files] }
// console.log(files)
//   return [{
//     text: '',
//     link: '',
//     children: [
//       {
//         text: 'github',
//         link: 'https://github.com',
//         children: [],
//       },
//       '/foo/bar.md',
//     ],
//   },];
// }

