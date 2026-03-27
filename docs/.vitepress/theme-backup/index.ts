import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 页面切换动画增强 - 短而流畅的下拉上抬效果
    if (typeof window !== 'undefined') {
      // 监听路由变化
            router.onBeforeRouteChange = (to) => {
              // 页面离开动画 - 快速上抬
              const content = document.querySelector('.VPContent') as HTMLElement
              if (content) {
                content.style.animation = 'pageSlideOut 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }
            }

            router.onAfterRouteChanged = (to) => {
              // 页面进入动画 - 快速下拉复位
              setTimeout(() => {
                const content = document.querySelector('.VPContent') as HTMLElement
                if (content) {
                  content.style.animation = 'pageSlideIn 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }
              }, 10)
            }
    }
  }
}
