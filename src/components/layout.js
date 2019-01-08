import React from 'react'
import PropTypes from 'prop-types'

import { rhythm } from 'src/utils/typography'

import Header from 'src/components/Header/Header'
import SideDrawer from 'src/components/SideDrawer/SideDrawer'
import Navitem from 'src/components/nestable/elements/navitem'
import Backdrop from 'src/components/Backdrop/Backdrop'

import 'src/css/style.css'

export const MobileNavToggleContext = React.createContext({
  mobileNavVisible: false,
  toggleMobileNav: () => {},
})

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.toggleMobileNav = () => {
      this.setState(state => ({ mobileNavVisible: !state.mobileNavVisible }))
    }

    // this.toggleMobileNav = () => {
    //   this.setState(prevState => ({ mobileNavVisible: !prevState.mobileNavVisible }))
    // }

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      mobileNavVisible: false,
      toggleMobileNav: this.toggleMobileNav, // we pass a refference to the method used for toggling the mobile nav in the state, because we're going to pass the state via Context further down, and so we can access the method on the Context Consumer
    }
  }

  render() {
    const { children, globalSettings } = this.props
    const { mobileNavVisible, toggleMobileNav } = this.state
    // console.log('state from layout: ', this.state)

    let sideDrawer = null
    let backdrop = null

    if (mobileNavVisible) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop onClick={toggleMobileNav} />
    }

    return (
      <>
        <MobileNavToggleContext.Provider value={this.state}>
          <Header />
          {sideDrawer}
          {backdrop}
        </MobileNavToggleContext.Provider>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            marginTop: rhythm(6),
          }}
        >
          <ul>
            {globalSettings.main_nav.map(item => (
              <Navitem key={item._uid} url={item.link.cached_url} title={item.title} childItems={item.sub_items} />
            ))}
          </ul>
          <div>
            <button type="button" onClick={this.toggleMobileNav}>
              Toggle
            </button>
          </div>
          {children}
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  globalSettings: PropTypes.object.isRequired,
}

export default Layout
