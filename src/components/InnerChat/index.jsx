/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import UserNav from '@/components/userNav'
import {
  InnerChatContainer,
  InnerChatContent,
  InnerChatContentArea,
  MessageCompose,
  MicrophoneArea
} from './style'
import { SlEmotsmile } from 'react-icons/sl'
import { ImAttachment } from 'react-icons/im'
import { BiMicrophone } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Message from '@/components/message'

const InnerChat = ({ activeItem }) => {
  const { userId } = useParams()

  const [setUserName] = useState('')
  const [setProfilePhoto] = useState('')
  const [setMessages] = useState([])

  const getUserData = async () => {
    // eslint-disable-next-line no-undef
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${userId}`)
    return data
  }
  console.log(activeItem)

  useEffect(() => {
    if (userId) {
      getUserData().then((data) => {
        setUserName(data.name)
        setProfilePhoto(data.avatar)
        setMessages(data.messages)
      })
    }
  }, [userId])

  return (
    <InnerChatContainer>
      <UserNav userName={activeItem.name} userPhoto={activeItem.avatar} />
      <InnerChatContent>
        <InnerChatContentArea>
          {activeItem?.messages?.map((item) => (
            <Message key={item.id} data={item} />
          ))}
        </InnerChatContentArea>
        <MessageCompose>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#2c2c2c',
              color: '#aaa',
              padding: '0 1.5rem',
              borderRadius: '1.5rem',
              width: '90%'
            }}>
            <SlEmotsmile color="#aaa" size={20} />
            <input
              type="text"
              style={{
                width: '90%',
                padding: '1.5rem 0',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '2rem'
              }}
              placeholder="Message"
            />
            <ImAttachment color="#aaa" size={20} />
          </div>
          <MicrophoneArea>
            <BiMicrophone color="#aaa" size={23} />
          </MicrophoneArea>
        </MessageCompose>
      </InnerChatContent>
    </InnerChatContainer>
  )
}

export default InnerChat
