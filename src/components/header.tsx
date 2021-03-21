import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navHome: { label: string; page?: string; link?: string }[] = [
  { label: 'No.171', page: '/' },
  // { label: 'Blog', page: '/blog' },
  //{ label: 'Contact', page: '/contact' }.
  // { label: 'Travel', link: '/blog/2021-03-05' },
]
const navArticle: { label: string; page?: string; link?: string }[] = [
  // { label: 'Home', page: '/' },
  { label: 'All Articles', page: '/blog' },
  //{ label: 'Contact', page: '/contact' }.
  // { label: 'Travel', link: '/blog/2021-03-05' },
]
const navTravel: { label: string; page?: string; link?: string }[] = [
  // { label: 'Home', page: '/' },
  // { label: 'Blog', page: '/blog' },
  //{ label: 'Contact', page: '/contact' }.
  { label: 'Travel', page: '/blog/travel' },
]

/*const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'*/

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} No.171</title>
      </Head>

      <ul>
        {navHome.map(({ label, page, link }) => (
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
      <ul>
        {navArticle.map(({ label, page, link }) => (
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
      <ul>
        {navTravel.map(({ label, page, link }) => (
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
