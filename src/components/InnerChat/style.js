import styled from 'styled-components'

export const InnerChatContainer = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const InnerChatContent = styled.div`
  width: 45%;
  height: calc(100vh - 6.5rem);
  margin: 0 auto;
  position: relative;
`

export const InnerChatContentArea = styled.div`
  height: 92.5%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const MessageCompose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  /* background: #595959; */
  width: 100%;
`
export const MicrophoneArea = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #2c2c2c;
  color: #aaa;
  cursor: pointer;
`
