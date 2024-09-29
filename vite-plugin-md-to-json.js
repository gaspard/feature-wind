// vite-plugin-md-to-json.js
import markdownItKatex from '@iktakahiro/markdown-it-katex'
import fs from 'fs'
import matter from 'gray-matter'
import markdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import path from 'path'

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

export function vitePluginMdToJson() {
  return {
    name: 'md-to-json',
    buildStart() {
      console.log('start')
      // Ensure the output directory exists
      if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist')
      }
    },
    transform(code, id) {
      if (id.endsWith('.md')) {
        console.log(id)
        const { data, content } = matter(code)
        const html = md.render(content)
        return `export default ${JSON.stringify({ ...data, html }, null, 2)}`
      }
    },
  }
}
