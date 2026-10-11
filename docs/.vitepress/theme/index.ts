import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import '@fontsource/noto-serif-sc/600.css'
import './style.css'
import MenuPath from './components/MenuPath.vue'
import WinDialog from './components/WinDialog.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MenuPath', MenuPath)
    app.component('WinDialog', WinDialog)

    if (typeof window !== 'undefined') {
      // Screenshots are scaled down to the column width; clicking one opens it full size.
      window.addEventListener('click', (event) => {
        const img = (event.target as Element | null)?.closest?.('.vp-doc img')
        if (img instanceof HTMLImageElement && !img.closest('a')) {
          window.open(img.currentSrc || img.src, '_blank', 'noopener')
        }
      })
    }
  }
} satisfies Theme
