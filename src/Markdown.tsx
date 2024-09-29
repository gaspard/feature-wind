import markdownItKatex from '@iktakahiro/markdown-it-katex'
import markdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'

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

export function Markdown({
  className,
  markdown,
}: {
  className?: string
  markdown: string
}) {
  return (
    <div
      className={`markdown ${className ?? ''}`}
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    />
  )
}

export function Raw({ className, html }: { className?: string; html: string }) {
  return (
    <div
      className={`markdown ${className ?? ''}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
