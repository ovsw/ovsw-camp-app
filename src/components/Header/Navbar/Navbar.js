import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { rhythm } from 'src/utils/typography'

import styles from './NavbarStyles'

const navbar = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header
        css={styles.navbar}
        style={{
          height: rhythm(4),
          paddingTop: rhythm(1),
          paddingBottom: rhythm(1),
        }}
      >
        <nav css={styles.navigation}>
          <div>hambuger</div>
          <div css={styles.logoWrapper}>
            <Link to="/" css={styles.logo}>
              {data.site.siteMetadata.title}
            </Link>
          </div>
          <div css={styles.navigationItems}>
            <ul>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Users</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )}
  />
)

export default navbar
