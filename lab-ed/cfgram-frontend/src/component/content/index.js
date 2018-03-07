import React from 'react'

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the photo app</h1>
        <p>{this.props.token}</p>
      </div>
    )
  }
}
