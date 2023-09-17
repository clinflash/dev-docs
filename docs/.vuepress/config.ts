import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/dev-docs/",

  lang: "zh-CN",
  title: "易迪希开发文档",

  theme,

  dest: "build",
});
