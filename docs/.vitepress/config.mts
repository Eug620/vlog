import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "三文鱼",
  description: "Welcome！",
  base: '/vlog/',
  head: [
    [
      'link',
      { rel: 'icon', href: '/vlog/siam.svg' }
    ]
  ],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/siam.svg',
    siteTitle: '三文鱼',
    nav: [
      {
        text: 'Discuss', link: '/discuss/', activeMatch: '/discuss/'
      },
      {
        text: 'NestJS', link: '/nestjs/', activeMatch: '/nestjs/'
      }
    ],

    socialLinks: [
      { icon: 'juejin', link: 'https://juejin.cn/user/3650034336020430' },
      { icon: 'github', link: 'https://github.com/eug620' },
    ],

    sidebar: {
      '/nestjs/': [
        {
          text: 'NestJS',
          // collapsed: false,
          items: [
            { text: '概述', link: '/nestjs/' },
            { text: '快速开始', link: '/nestjs/started' },
            { text: '部署', link: '/nestjs/deploy' },
          ]
        },
      ],
      '/discuss/': [
        {
          text: 'Discuss',
          // collapsed: false,
          items: [
            { text: '概述', link: '/discuss/' },
            { text: '快速开始', link: '/discuss/started' },
            { text: '部署', link: '/discuss/deploy' },
          ]
        }
      ]
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Eug'
    },


    search: {
      provider: 'local',
      options: {
        locales: {
          // root: { // 如果你想翻译默认语言，请将此处设为 `root`
          //   translations: {
          //     button: {
          //       buttonText: '搜索',
          //       buttonAriaLabel: '搜索'
          //     },
          //     modal: {
          //       displayDetails: '显示详细列表',
          //       resetButtonTitle: '重置搜索',
          //       backButtonTitle: '关闭搜索',
          //       noResultsText: '没有结果',
          //       footer: {
          //         selectText: '选择',
          //         selectKeyAriaLabel: '输入',
          //         navigateText: '导航',
          //         navigateUpKeyAriaLabel: '上箭头',
          //         navigateDownKeyAriaLabel: '下箭头',
          //         closeText: '关闭',
          //         closeKeyAriaLabel: 'Esc'
          //       }
          //     }
          //   }
          // }
        }
      }
    },



    // docFooter: {
    //   prev: 'Pagina prior',
    //   next: 'Proxima pagina'
    // }

  },
  ignoreDeadLinks: [
    // 忽略所有 localhost 链接
    /^https?:\/\/localhost/,
  ]

})
