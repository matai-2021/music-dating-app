import React, { useState } from 'react'

import { ChatEngine, ChatList, ChatCard, ChatFeed, ChatHeader, MessageBubble, IsTyping, ScrollDownBar, NewMessageForm, getOrCreateChat } from 'react-chat-engine'

const ChatPage = () => {
  const [username, setUsername] = useState('')

  function createDirectChat (creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  function renderChatForm (creds) {
    return (
      <div>
        <input
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    )
  }

  return (
    <ChatEngine
      height='100vh'
      userName='dylantoomey'
      userSecret='eda123'
      projectID='7565a494-51c5-49c2-943c-7c65ca00e965'
      renderNewChatForm={(creds) => renderChatForm(creds)}
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
  )
}

export default ChatPage
