/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import ChatItem from './chatItem'
import { ChatItemsContainer } from './style'

const ChatItems = ({ data, setActive, search }) => {
  return (
    <ChatItemsContainer>
      {data
        ?.filter((item) => (search ? item.name.toLowerCase().includes(search.toLowerCase()) : item))
        .map((item) => (
          <ChatItem
            onClick={() => setActive(item)}
            key={item.id}
            userName={item.name}
            lastMsg={item.messages[0].message}
            usePhoto={item.avatar}
          />
        ))}
    </ChatItemsContainer>
  )
}

export default ChatItems
