import styled from 'styled-components'

export const LetterBox = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 20px;
  background-color: ${props => (props.onPress ? 'grey' : 'white')};
`
