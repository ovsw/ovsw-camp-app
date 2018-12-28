import React from 'react'
import Components from '../components.js'

const Page = props => {
  const { blok } = props
  return (
    <div>
      {blok.body &&
        blok.body.map(block => React.createElement(Components[block.component], { key: block._uid, blok: block }))}
    </div>
  )
}

export default Page
