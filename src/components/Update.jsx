import React, {Component} from 'react'

export default class Update extends Component {
  render () {
    return (
      <p>
        <strong>{this.props.name}:</strong> {this.props.message}
      </p>
    )
  }
}
