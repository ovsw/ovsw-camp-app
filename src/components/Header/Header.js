import React from 'react'
import { rhythm } from 'src/utils/typography'

import Navbar from './Navbar/Navbar'

const Header = props => (
  <header
    className="fixed pin-x pin-t w-full z-10"
    style={{
      height: rhythm(4),
      paddingTop: rhythm(1),
      paddingBottom: rhythm(1),
      background: 'linear-gradient(to right, #0ba360 0%, #3cba92 100%)',
    }}
  >
    <Navbar />
  </header>
)

export default Header
