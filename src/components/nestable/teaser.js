import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import LazyLoad from 'react-lazyload'

import { rhythm } from '../../utils/typography'
import sbimage from '../../utils/sbimage'

const Teaser = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{blok.headline}</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        <div>Some hotpink text.</div>

        <button
          type="button"
          className="bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs"
        >
          Test Button
        </button>
        <p
          className="lead"
          style={{
            margin: `0 auto`,
            backgroundColor: `tomato`,
            marginTop: rhythm(20.5),
          }}
        />
      </div>
      <LazyLoad height={500}>
        <img src={sbimage(blok.image, '1260x500')} alt="test" />
      </LazyLoad>
    </div>
  </SbEditable>
)

export default Teaser
