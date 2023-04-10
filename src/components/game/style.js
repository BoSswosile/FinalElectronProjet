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

export const SplitterBottom = styled.div`
  height: 50%;
  width: 100%;
  position: fixed;
  z-index: 2;
  bottom: 0;
  overflow-x: hidden;
  padding-left: 20px;
  left: 0;
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

// make a top left button that is fixed
export const TopRightButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid purple;
  border-radius: 3px;
  width: 150px;
`
