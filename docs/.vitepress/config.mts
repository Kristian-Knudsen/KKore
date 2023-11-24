import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KnudsenDesign-Docs",
  description: "Documentation page for the KnudsenDesign project",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Documenting components', link: '/documenting_components' },
    ],

    sidebar: {
      '/components': [
        {
          text: 'Components',
          items: [
            { text: 'KButton', link: '/components/KButton' },
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
          ],
        }, 
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
