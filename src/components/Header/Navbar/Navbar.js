import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { MobileNavToggleContext } from 'src/components/layout'

import BarButton from 'src/components/SideDrawer/BarButton/BarButton'

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
      <>
        <nav className={styles.navigation}>
          <MobileNavToggleContext.Consumer>
            {({ mobileNavVisible, toggleMobileNav }) => (
              <BarButton mobileNavVisible={mobileNavVisible} onClick={toggleMobileNav} />
            )}
          </MobileNavToggleContext.Consumer>
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
      </>
    )}
  />
)

export default navbar
