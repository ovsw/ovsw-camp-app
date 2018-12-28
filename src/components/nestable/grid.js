import React from 'react'
import SbEditable from 'storyblok-react'
import Components from '../components.js'

const Grid = props => {
  const { blok } = props
  return (
    <SbEditable content={blok}>
      <div className="container">
        <div className="row">
          {blok.columns.map(column =>
            React.createElement(Components[column.component], { key: column._uid, blok: column })
          )}
        </div>
      </div>
    </SbEditable>
  )
}

export default Grid
