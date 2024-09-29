declare module '@iktakahiro/markdown-it-katex' {
  import { KatexOptions } from 'katex'
  import MarkdownIt from 'markdown-it'

  export interface MarkdownItKatexOptions extends KatexOptions {
    blockClass?: string
  }

  function markdownItKatex(
    md: MarkdownIt,
    options?: MarkdownItKatexOptions
  ): void

  export = markdownItKatex
}

declare module '*.md'
