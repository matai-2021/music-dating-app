import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { ChatEngine, ChatList, ChatCard, ChatFeed, ChatHeader, MessageBubble, IsTyping, ScrollDownBar, NewMessageForm } from 'react-chat-engine'

const ChatPage = (props) => {
  console.log(props.user.username)
  return (
    <>
      <h2><Link to={'/'}>Matching</Link></h2>
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
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(ChatPage)
