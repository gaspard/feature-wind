// vite-plugin-md-to-json.js
import markdownItKatex from '@iktakahiro/markdown-it-katex'
import matter from 'gray-matter'
import markdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import { Plugin } from 'vite'

const katexOptions = {
  macros: {
    '\\T': '\\bullet',
    '\\F': '\\cdot',
    '\\hT': '\\textcolor{#ff9900}{\\bullet}',
    '\\hF': '\\textcolor{#ff9900}{\\cdot}',
    '\\iff': '\\leftrightarrow',
    '\\lighttext': '\\textcolor{#999}',
  },
}
const attrsOptions = {
  leftDlimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: [], // allow all
}

const md = new markdownIt({
  html: true,
})
md.use(markdownItKatex, katexOptions)
md.use(markdownItAttrs, attrsOptions)

const mdFileRe = /\.md(\?(.*)|)$/
export function vitePluginMdToJson(): Plugin {
  return {
    name: 'md-to-json',
    transform(code, id) {
      const re = mdFileRe.exec(id)
      if (re) {
        const { data, content } = matter(code)
        if (re[2] === 'matter') {
          return `export const matter = ${JSON.stringify(data, null, 2)}`
        } else {
          const html = md.render(content)
          return `export const article = ${JSON.stringify(
            { ...data, html },
            null,
            2
          )}`
        }
      }
    },
  }
}
