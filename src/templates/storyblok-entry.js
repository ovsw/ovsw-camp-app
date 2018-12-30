import React from 'react'
import SEO from '../components/seo'
import Components from '../components/components.js'
import Layout from '../components/layout'
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
    const story = props.pageContext.story
    // const story = Object.assign({}, props.pageContext.story)
    // story.content = JSON.parse(story.content)

    // console.log('story from template:')
    // console.log(typeof story)

    const globalSettings = Object.assign({}, props.pageContext.globalSettings)
    globalSettings.content = JSON.parse(globalSettings.content)

    const globalSettingsContent = globalSettings.content

    return { story, globalSettingsContent }
  }

  constructor(props) {
    super(props)

    // call prepareStory
    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    const {
      story: { content },
      globalSettingsContent,
    } = this.state

    return (
      <Layout>
        <SEO title={content.seo.title} description={content.seo.description} keywords={content.seo.keywords} />
        <ul>
          {globalSettingsContent.main_nav.map(item => (
            <Navitem key={item._uid} url={item.link.cached_url} title={item.title} childItems={item.sub_items} />
          ))}
        </ul>
        {React.createElement(Components[content.component], { key: content._uid, blok: content })}
      </Layout>
    )
  }
}

export default StoryblokEntry
