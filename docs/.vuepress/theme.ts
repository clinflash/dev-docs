import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://clinflash.github.io",

  author: {
    name: "易迪希",
    url: "https://www.clinflash.com",
  },

  iconAssets: "fontawesome-with-brands",

  favicon: "/favicon.ico",

  logo: "/logo.png",

  repo: "clinflash/dev-docs",

  docsBranch: "master",

  docsDir: "docs",

  displayFooter: true,

  blog: {
    name: "易迪希开发文档",
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
