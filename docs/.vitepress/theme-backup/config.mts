import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "业钊下载站文档",
  description: "游戏、MOD、补丁的详细安装与使用说明",
  lang: 'zh-CN',
  base: '/',
  
  // 网站头部配置
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3c82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'og:site_name', content: "业钊下载站文档" }],
  ],

  // 主题配置
  themeConfig: {
    // 网站logo
    logo: '/logo.svg',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/getting-started/' },
      { text: '问题解答', link: '/troubleshooting/' },
      { text: '控制台指令', link: '/console-commands/' },
      { 
        text: '外部链接', 
        items: [
          { text: '回到主站', link: 'https://share.yezau.com' },
          { text: 'QQ群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=538887146' }
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/getting-started/': [
        {
          text: '入门指南',
          items: [
            { text: '概述', link: '/getting-started/' },
            { text: '快速开始', link: '/getting-started/quick-start' },
            { text: '启动游戏', link: '/getting-started/start-game' },
            { text: '关于汉化', link: '/getting-started/localization' }
          ]
        }
      ],
      '/troubleshooting/': [
        {
          text: '常见问题解答',
          items: [
            { text: '概述', link: '/troubleshooting/' },
            { text: '游戏崩溃报错', link: '/troubleshooting/error-with-start-game' },
            { text: '数据库错误', link: '/troubleshooting/database-error-with-start-game' },
            { text: '学习版安装MOD', link: '/troubleshooting/install-mod' }
          ]
        }
      ],
      '/console-commands/': [
        {
          text: '控制台指令',
          items: [
            { text: '概述', link: '/console-commands/' },
            { text: '钢铁雄心4指令', link: '/console-commands/hoi4-console-commands' }
          ]
        }
      ]
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/Alloy81284/DownloadStationDocs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alloy81284/DownloadStationDocs' }
    ],

    // 页脚
    footer: {
      message: '问题反馈QQ群: 538887146',
      copyright: 'Copyright © 2025 业钊下载站. All Rights Reserved.'
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },


    // 上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 文档页脚导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲标题
    outline: {
      label: '页面导航'
    },

    // 返回顶部
    returnToTopLabel: '回到顶部',

    // 外部链接图标
    externalLinkIcon: true
  },

  // Markdown配置
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  // 站点地图
  sitemap: {
    hostname: 'https://docs.share.yezau.com'
  },

  // 开发服务器配置
  vite: {
    server: {
      port: 25173,
      host: '0.0.0.0'
    },
    preview: {
      port: 25174,
      host: '0.0.0.0'
    },
    serve: {
      port: 25175,
      host: '0.0.0.0'
    }
  }
})
