import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { clearUserNotification } from '../actions'

import { ChatEngine, ChatList, ChatCard, ChatFeed, ChatHeader, MessageBubble, IsTyping, ScrollDownBar, NewMessageForm } from 'react-chat-engine'

const ChatPage = (props) => {
  useEffect(() => {
    props.dispatch(clearUserNotification())
  }, [])

  return (
    <section className='profile-container'>
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
