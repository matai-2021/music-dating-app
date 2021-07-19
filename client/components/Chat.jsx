import React from 'react'
import { connect } from 'react-redux'

import { MdQueueMusic } from 'react-icons/md'

import { Link } from 'react-router-dom'

import { ChatEngine, ChatList, ChatCard, ChatFeed, ChatHeader, MessageBubble, IsTyping, ScrollDownBar, NewMessageForm } from 'react-chat-engine'

const ChatPage = (props) => {
  return (
    <section className='container'>
      <Link className='pre-title' to={'/matching'}><h1><MdQueueMusic /></h1></Link>
      <img className='logo-image' src='/resonatelogoS.png' alt="resonatelogo" />
      <ChatEngine
        height='100vh'
        userName={props.user.username}
        userSecret='eda123'
        projectID='7565a494-51c5-49c2-943c-7c65ca00e965'
        renderNewChatForm={(creds) => {}}
        // Customising the UI
        renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
        renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
        renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
        renderChatHeader={(chat) => <ChatHeader />}
        renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
        renderIsTyping={(typers) => <IsTyping />}
        renderScrollDownBar={(chat) => <ScrollDownBar chat={chat} />}
        renderNewMessageForm={(creds, chatId) => <NewMessageForm />}
        renderChatSettings={(chatAppState) => {}}
        renderChatSettingsTop={(creds, chat) => {}}
        renderPeopleSettings={(creds, chat) => {}}
        renderPhotosSettings={(chat) => {}}
        renderOptionsSettings={(creds, chat) => {}}
      />
    </section>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(ChatPage)
