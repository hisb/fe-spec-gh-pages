import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        // 强制 Vite SSR 构建时将 vue 子依赖完整内联打包，绕过 Rolldown 的外部解析逻辑
        noExternal: [/./],
      },
    },
  }),
  base: '/fe-spec-gh-pages/',  
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'commitlint',
        link: '/commitlint/',
      },
    ],
  }),

  lang: 'zh-CN',
  // title: '前端编码规范工程化',
  description: '前端编码规范工程化',
})