import React from 'react'

class Backdrop extends React.Component {
  constructor(props) {
    super(props)

    const { onClick } = this.props

    this.keyUpHandler = () => {
      onClick()
    }
  }

  render() {
    const { onClick } = this.props

    return (
      <div
        className="bg-black fixed h-full opacity-50 pin w-full z-20"
        onClick={onClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex="-1"
      />
    )
  }
}

export default Backdrop
