import styled from 'styled-components'

export const Button = styled.button`
  color: purple;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid purple;
  border-radius: 3px;
  width: 150px;
`

export const CenterDivModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 80%;
  height: auto;
  z-index: 100;
`
