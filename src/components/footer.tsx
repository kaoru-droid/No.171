import ExtLink from './ext-link'
import styles from '../styles/header.module.css'

export default () => (
  <>
    <footer className={styles.header}>
      <span>No.171 BLOG POWERED BY Notion Blog</span>
    </footer>
  </>

  /*<>
    <footer>
      <span>Deploy your own!</span>
      <ExtLink href="https://vercel.com/import/git?s=https://github.com/ijjk/notion-blog/tree/master&env=NOTION_TOKEN,BLOG_INDEX_ID&envDescription=Required+env+values+for+deploying&envLink=https://github.com/ijjk/notion-blog%23getting-blog-index-and-token">
        <img
          src="https://vercel.com/button"
          height={46}
          width={132}
          alt="deploy to Vercel button"
        />
      </ExtLink>
      <span>
        or{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          view source
        </ExtLink>
      </span>
    </footer>
  </>*/
)
