import React from 'react'
import Components from '../components/components.js'
import Navitem from '../components/nestable/elements/navitem'

class StoryblokEntry extends React.Component {

  // check if the props sent to this component changed
  // if they didn't do nothing. If they did, process the new props via prepareStory(props)
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }


  // prep the initial or new props by extracting the parts we need from the query result
  // and processing the content into JSON so we can use it in the component
  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)

    const globalSettings = Object.assign({}, props.pageContext.globalSettings)
    globalSettings.content = JSON.parse(globalSettings.content)

    console.log(globalSettings.content.main_nav)

    return { story, globalSettings }
  }

  constructor(props) {
    super(props)

    // call prepareStory
    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    let content = this.state.story.content
    let globalSettings = this.state.globalSettings.content

    return (
      <div>
        <ul>
          {globalSettings.main_nav.map( (item) => {
            return <Navitem key={item._uid} url={item.link.cached_url} title={item.title} children={item.sub_items}/>
          })}
        </ul>
        {React.createElement(Components[content.component], {key: content._uid, blok: content})}
      </div>
    )
  }
}

export default StoryblokEntry