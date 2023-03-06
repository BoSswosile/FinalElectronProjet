import React, { useEffect, useState } from 'react'
import { SplitterTop, SplitterBottom, SimpleText, CenterText } from './style'

const Game = () => {
  const [words, setWords] = useState([])
  const [testingList, setTestingList] = useState('')
  const [playingList, setPlayingList] = useState([])
  const [gameList, setGameList] = useState([])
  const [keyPressCode, setKeyPressCode] = useState(0)
  const [placement, setPlacement] = useState(0)
  const [countdown, setCountdown] = useState(3)
  const [timer, setTimer] = useState()
  //useEffect to handle typing

  useEffect(() => {
    if (countdown > 0) {
      return
    } else {
      const handleKeyDown = event => {
        setTestingList(words.toLocaleString().replace(/,/g, ''))

        // console.log(event.key, event.keyCode, event.code)
        //  console.log(testingList)
        if (
          (event.keyCode >= 65 && event.keyCode <= 90) ||
          event.keyCode == 32
        ) {
          setGameList([...gameList, event.key])
          setPlacement(placement + 1)
        } else if (event.keyCode == 8) {
          // console.log('backspace')
          setGameList([...gameList.slice(0, -1)])
          setPlacement(placement - 1)
        } else if (event.keyCode >= 48 && event.keyCode <= 57) {
          setGameList([...gameList, event.key])
          setPlacement(placement + 1)
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  })

  useEffect(() => {
    setWords(['test ', 'manger ', 'banane ', 'valid '])
    const interval = setInterval(() => {
      if (countdown === 0) {
        clearInterval(interval)
        setTimer(10)
      } else {
        setCountdown(countdown - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [countdown])

  useEffect(() => {
    console.log(timer)

    const interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(interval)
        console.log('game over')
        console.log(getScore())
      } else {
        setTimer(timer - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  // console.log('test')
  //   console.log(window.easyjson.getEasyJson(setWords))
  useEffect(() => {
    //   console.log('gameList', gameList)
    return () => {}
  }, [gameList])

  document.addEventListener('keydown', function search(e) {
    setKeyPressCode(e.keyCode)
    document.removeEventListener('keydown', search)
  })

  const getScore = () => {
    let score = 0
    //  gameList.
  }
  return (
    <>
      <SplitterTop>
        <SimpleText>{words}</SimpleText>
      </SplitterTop>{' '}
      {countdown === 0 ? <> </> : <CenterText>{countdown}</CenterText>}
      <SplitterBottom>
        {gameList.map((char, index) => (
          <span
            key={index}
            style={{ color: testingList[index] === char ? 'green' : 'red' }}
          >
            {char}
          </span>
        ))}
      </SplitterBottom>
    </>
  )
}

export default Game
