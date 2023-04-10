import styled from 'styled-components'

export const SplitterTop = styled.div`
  height: 50%;
  width: 100%;
  position: fixed;
  z-index: 0;
  left: 0;
  overflow-x: hidden;
  padding-left: 20px;
  top: 0;
`

// align element in the center
export const SplitterBottom = styled.div`
  height: 50%;
  width: 100%;
  position: fixed;
  z-index: 2;
  bottom: 0;
  overflow-x: hidden;
  padding-left: 20px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const SimpleText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

export const CenterText = styled.p`
  font-size: 2rem;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
`

export const TopRightButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 3em;
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
`

export const CenterButtons = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.p`
  font-size: 2.5em;
  text-align: center;
  align-items: center;
  position: absolute;
  // align all in center
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Button = styled.button`
  color: purple;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid purple;
  border-radius: 3px;
  width: 150px;
`
