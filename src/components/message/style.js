import styled from 'styled-components'

export const MessageContainer = styled.div`
  width: 80%;
  background: ${(props) => props.received ? '#111' : 'rgb(119,106,201)'} ;
  color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  align-self: ${(props) => props.received ? 'flex-start' : 'flex-end'};
`
