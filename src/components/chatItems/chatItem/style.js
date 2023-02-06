import styled from 'styled-components'

export const ChatItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.onClick ? null : '#000')};
  &:hover {
    background-color: #2c2c2c;
  }
`

export const ChatItemImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin-right: 1rem;
  background-size: cover;
  background-position: center;
`
export const ChatItemArea = styled.div`
  width: 80%;
`
export const ChatItemTitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`

export const ChatItemTitle = styled.h2`
  font-size: 1.7rem;
`

export const ChatItemDate = styled.span`
  font-size: 1.4rem;
`

export const ChatItemDescription = styled.p`
  font-size: 1.5rem;
  overflow: hidden;
  width: 30rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`
