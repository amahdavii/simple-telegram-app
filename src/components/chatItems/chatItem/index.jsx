/* eslint-disable react/prop-types */

import {
  ChatItemContainer,
  ChatItemImage,
  ChatItemArea,
  ChatItemTitleArea,
  ChatItemTitle,
  ChatItemDescription,
  ChatItemDate
} from './style'
const ChatItem = ({ userName, lastMsg, onClick, usePhoto }) => {
  return (
    <ChatItemContainer onClick={onClick}>
      <ChatItemImage src={usePhoto} alt="profile photo" />
      <ChatItemArea>
        <ChatItemTitleArea>
          <ChatItemTitle>{userName}</ChatItemTitle>
          <ChatItemDate>Sun</ChatItemDate>
        </ChatItemTitleArea>
        <ChatItemDescription>{lastMsg}</ChatItemDescription>
      </ChatItemArea>
    </ChatItemContainer>
  )
}

export default ChatItem
