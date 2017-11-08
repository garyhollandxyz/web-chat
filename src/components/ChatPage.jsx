import React, {Component} from 'react'

import ChatWindow from './ChatWindow.jsx'
import Controls from './Controls.jsx'

export default class ChatPage extends Component {
  render () {
    return (
      <div className='panda-chat'>
        <ChatWindow socket={this.props.socket} />
        <Controls socket={this.props.socket} nickname={this.props.nickname}/>
      </div>
    )
  }
}
