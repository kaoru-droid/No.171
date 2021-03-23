import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import blogStyles from '../styles/blog.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/_ijjk',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/ijjk',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/jj-kasper-0b5392166/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:jj@jjsweb.site?subject=Notion Blog',
  },
]

export default () => (
  <>
    <Header titlePre="Travel" />
    <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
      {/* <div className={contactStyles.avatar}>
        <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
      </div> */}

      <h2>Travel</h2>

      <div className={contactStyles.gmap}>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1AP0JTB0Rb_4VfGbC2vDWSaYflS1cl1Ku"
          width="600"
          height="480"
        ></iframe>
      </div>

      {/* <div className={contactStyles.name}>
        JJ Kasper - Next.js Engineer @{' '}
        <ExtLink href="https://vercel.com">Vercel</ExtLink>
      </div> */}

      {/* <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div> */}
    </div>
  </>
)
