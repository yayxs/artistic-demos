import { defineConfig } from 'rspress/config'
import { remarkMermaid } from '@theguild/remark-mermaid'
export default defineConfig({
  // 文档根目录
  root: 'docs',
  logoText: 'css',
  themeConfig: {
    enableScrollToTop: true,
  },
  markdown: {
    mdxRs: false,
    remarkPlugins: [[remarkMermaid]],
  },
})
