import React from 'react'
import { LetterBox } from './style'
import { useEffect } from 'react'

const Index = ({ onPress }) => {
  useEffect(() => {
    console.log(onPress)
    console.log('a'.charCodeAt(0))
  }, [onPress])

  const letters = [
    'a',
    'z',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'q',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'w',
    'x',
    'c',
    'v',
    'b',
    'n'
  ]
  return (
    <>
      {letters.map(letter => (
        <LetterBox onPress={onPress + 32 === letter.charCodeAt(0)} key={letter}>
          {letter}
        </LetterBox>
      ))}
    </>
  )
}

export default Index
