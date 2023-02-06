/* eslint-disable react/prop-types */
import { MessageContainer } from './style'

const Message = ({ data }) => (
  <MessageContainer received={data.type === 'received'}>
    <p>{data.message}</p>
    <div style={{ textAlign: 'right', fontSize: '1.4rem', marginTop: '.5rem' }}>{data.time}</div>
  </MessageContainer>
)

export default Message
