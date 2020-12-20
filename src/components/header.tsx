import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  //{ label: 'Home', page: '/' },
  //{ label: 'Blog', page: '/blog' },
  //{ label: 'Contact', page: '/contact' }.
  //{ label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' },
]

/*const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'*/

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <h1 href="https://no-171.vercel.app/blog">No.171</h1>
        <title>{titlePre ? `${titlePre} |` : ''} No.171</title>
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
