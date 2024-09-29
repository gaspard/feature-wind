import './App.css'
import { Raw } from './Markdown'
import data from './content/article/2024/0515-rosen-1.3/index.md'
import './css/prism-light.css'
import './css/style.css'
import './css/typography.css'

const blog = {
  name: 'Feature Space',
}

const tabs = [
  {
    title: 'Hello World!',
    path: 'hello',
    section: 'one',
    position: 0,
    url: 'foo/hello',
  },
  { title: 'Test', path: 'test', section: 'two', position: 1, url: 'foo/test' },
]

const articles = import.meta.glob('./content/**/*.md') as {
  [key: string]: () => Promise<any>
}

console.log(articles)
for (const path in articles) {
  articles[path]().then(({ default: { tags, title } }) => {
    console.log(path, tags, title)
  })
}
console.log(articles)
export function App() {
  return (
    <>
      <header>
        <div className="blog-name">
          <a href="/">{blog.name}</a>
        </div>
        <nav>
          {tabs.map(tab => (
            <div className="nav-link">
              <a href={tab.url}>{tab.title}</a>
            </div>
          ))}
          {/*% include 'prev-next.liquid' %*/}
        </nav>
      </header>
      <div className="page-main">
        <div className="page-inner">
          <main>
            <article>
              <div className="main-content">
                <Raw html={data.html} />
              </div>
            </article>
          </main>
          <aside>{/* % include 'latest.liquid' % */}</aside>
        </div>
      </div>
    </>
  )
}
