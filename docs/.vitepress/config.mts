import { defineConfig } from 'vitepress'

const repo = 'https://github.com/Yezau/DownloadStationDocs'

export default defineConfig({
  lang: 'zh-CN',
  title: '业钊下载站文档',
  description: '游戏、MOD、补丁的安装说明与常见报错解决方案',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#fbfaf6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '业钊下载站文档' }]
  ],

  markdown: {
    theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '危险',
      infoLabel: '说明',
      detailsLabel: '展开'
    }
  },

  sitemap: { hostname: 'https://docs.share.yezau.com' },

  vite: {
    server: { port: 25173, host: '0.0.0.0' }
  },

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '入门指南', link: '/getting-started/', activeMatch: '^/getting-started/' },
      { text: 'YPGL 启动器', link: '/launcher/', activeMatch: '^/launcher/' },
      { text: '问题排查', link: '/troubleshooting/', activeMatch: '^/troubleshooting/' },
      { text: '控制台指令', link: '/console-commands/', activeMatch: '^/console-commands/' },
      {
        text: '链接',
        items: [
          { text: '业钊下载站', link: 'https://share.yezau.com' },
          { text: 'YPGL 启动器下载', link: 'https://share.yezau.com/launcher' },
          { text: 'QQ 群 538887146', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=538887146' }
        ]
      }
    ],

    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '概述', link: '/getting-started/' },
          { text: '快速开始', link: '/getting-started/quick-start' },
          { text: '启动游戏', link: '/getting-started/start-game' },
          { text: '关于汉化', link: '/getting-started/localization' },
          { text: '文件位置速查', link: '/getting-started/file-locations' }
        ]
      },
      {
        text: 'YPGL 启动器',
        items: [
          { text: '介绍与安装', link: '/launcher/' },
          { text: '游戏库与 DLC', link: '/launcher/library' },
          { text: 'MOD 与播放集', link: '/launcher/mods' },
          { text: '补丁', link: '/launcher/patches' },
          { text: '联机', link: '/launcher/multiplayer' },
          { text: '常见问题', link: '/launcher/faq' }
        ]
      },
      {
        text: '问题排查',
        items: [
          { text: '按症状排查', link: '/troubleshooting/' },
          { text: '启动崩溃与缺少运行库', link: '/troubleshooting/error-with-start-game' },
          { text: 'P社启动器数据库错误', link: '/troubleshooting/database-error-with-start-game' },
          { text: 'P社启动器装不上或白屏', link: '/troubleshooting/launcher' },
          { text: '安装 MOD 与 MOD 不生效', link: '/troubleshooting/install-mod' },
          { text: '文档目录与权限问题', link: '/troubleshooting/documents-folder' }
        ]
      },
      {
        text: '控制台指令',
        items: [
          { text: '概述', link: '/console-commands/' },
          { text: '十字军之王3', link: '/console-commands/ck3-console-commands' },
          { text: '欧陆风云4', link: '/console-commands/eu4-console-commands' },
          { text: '欧陆风云5', link: '/console-commands/eu5-console-commands' },
          { text: '钢铁雄心4', link: '/console-commands/hoi4-console-commands' },
          { text: '群星', link: '/console-commands/stellaris-console-commands' },
          { text: '维多利亚3', link: '/console-commands/vic3-console-commands' }
        ]
      }
    ],

    outline: { level: [2, 3], label: '本页目录' },

    editLink: {
      pattern: `${repo}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [{ icon: 'github', link: repo }],

    footer: {
      message: '问题反馈 QQ 群：538887146',
      copyright: 'Copyright © 2025-2026 业钊下载站. All Rights Reserved.'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'medium' }
    },

    notFound: {
      title: '页面不存在',
      quote: '链接可能已失效，试试搜索或回到首页。',
      linkLabel: '回到首页',
      linkText: '回到首页'
    },

    docFooter: { prev: '上一页', next: '下一页' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    externalLinkIcon: true
  }
})
