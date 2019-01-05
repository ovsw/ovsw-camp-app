import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { rhythm } from 'src/utils/typography'

// import styles from './NavbarStyles'
import styles from './Navbar.module.css'

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
        style={{
          height: rhythm(4),
          paddingTop: rhythm(1),
          paddingBottom: rhythm(1),
        }}
        className={styles.navbar}
      >
        <nav className={styles.navigation}>
          <div> 1</div>
          <div className={styles.logo}>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <div className="flex-1" />
          <div className={styles.navigationItems}>
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
