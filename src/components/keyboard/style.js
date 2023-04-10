import styled from 'styled-components'

// make a box to put the letter in it and an effect on press it
export const LetterBox = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 20px;
  // if the letter is pressed change background color
  background-color: ${props => (props.onPress ? 'grey' : 'white')};
`
