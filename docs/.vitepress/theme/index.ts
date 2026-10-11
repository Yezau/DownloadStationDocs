import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import '@fontsource/noto-serif-sc/600.css'
import './style.css'
import HeroGlobe from './components/HeroGlobe.vue'
import MenuPath from './components/MenuPath.vue'
import WinDialog from './components/WinDialog.vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'home-hero-image': () => h(HeroGlobe) }),
  enhanceApp({ app }) {
    app.component('MenuPath', MenuPath)
    app.component('WinDialog', WinDialog)
  }
} satisfies Theme
