import React, { useEffect, useState } from 'react'
import { SplitterTop, SplitterBottom, SimpleText, CenterText } from './style'
import { ArrayToString } from '../../utils/functions'
import Modal from '../modal'
const Game = () => {
  const [words, setWords] = useState({ words: [] })
  const [splittedList, setSplittedList] = useState([])
  const [gameList, setGameList] = useState([])
  const [keyPressCode, setKeyPressCode] = useState(0)
  const [placement, setPlacement] = useState(0)
  const [countdown, setCountdown] = useState(3)
  const [completeList, setCompleteList] = useState([])
  const [timer, setTimer] = useState()
  const [displayList, setDisplayList] = useState([])
  const [placementSize, setPlacementSize] = useState(0)
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [score, setScore] = useState(0)
  //useEffect to handle typingF

  useEffect(() => {
    if (countdown > 0 || timer === 0) {
      return
    } else {
      const handleKeyDown = event => {
        if (
          (event.keyCode >= 65 && event.keyCode <= 90) ||
          event.keyCode == 32
        ) {
          setGameList([...gameList, event.key])
          setPlacement(placement + 1)
          setPlacementSize(placementSize + 1)
        } else if (event.keyCode == 8) {
          setGameList([...gameList.slice(0, -1)])
          setPlacement(placement - 1)
          setPlacementSize(placementSize - 1)
        } else if (event.keyCode >= 48 && event.keyCode <= 57) {
          setGameList([...gameList, event.key])
          setPlacement(placement + 1)
          setPlacementSize(placementSize + 1)
        }
      }
      if (placementSize === displayList[0].length) {
        setPlacementSize(0)
        setDisplayList([...displayList.slice(1)])
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown === 0) {
        clearInterval(interval)
        setTimer(5)
      } else {
        setCountdown(countdown - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [countdown])

  useEffect(() => {
    window.easyjson.request()
    window.easyjson.getEasyJson(setWords)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(interval)
        console.log('game over')
        setScore(getScore())
      } else {
        setTimer(timer - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  useEffect(() => {
    var z = 0
    var test = Object.values(words)
    var completeList = generateWord(test[0])
    var arraybloc = []
    setCompleteList(completeList)
    completeList = ArrayToString(completeList).split()
    for (let i = 0; i < test.length; i++) {
      arraybloc.push(completeList[i].split(''))
    }
    setSplittedList(arraybloc[0])
  }, [words])

  document.addEventListener('keydown', function search(e) {
    setKeyPressCode(e.keyCode)
    document.removeEventListener('keydown', search)
  })

  const generateWord = array => {
    var z = 0
    var arrayValid = []
    var temporaryDisplayState = []
    var popped = ''
    for (let i = 0; i < 300; i++, z++) {
      var randomnum = Math.floor(Math.random() * array.length)
      arrayValid.push(array[randomnum])
      popped += '' + array[randomnum]
      console.log(z)
      if (z >= 15) {
        console.log('separator')
        console.log(popped)
        temporaryDisplayState.push(popped)
        popped = ''
        z = 0
      }
    }
    setDisplayList(temporaryDisplayState)
    // console.log(popped);
    // console.log(arrayValid);
    return arrayValid
  }

  useEffect(() => {
    console.log(displayList)
  }, [displayList])

  const getScore = () => {
    let score = 0
    let array = ArrayToString(gameList).split(' ')
    for (let i = 0; i < array.length; i++) {
      if (array[i] === completeList[i].trim()) {
        score++
      }
    }
    setIsGameEnded(true)
    return score
  }
  return (
    <>
      <SplitterTop>
        <SimpleText>
          {gameList.map((char, index) => (
            <span
              key={index}
              style={{ color: splittedList[index] === char ? 'green' : 'red' }}
            >
              {char}
            </span>
          ))}
        </SimpleText>
      </SplitterTop>
      {countdown === 0 ? <> </> : <CenterText>{countdown}</CenterText>}
      <SplitterBottom>
        <SimpleText>
          {displayList[0]}
          <br />
          {displayList[1]}
          <br />
          {displayList[2]}
          <br />
          {displayList[3]}
          <br />
          {displayList[4]}
        </SimpleText>
        {/* <SimpleText>{splittedList}</SimpleText> */}
      </SplitterBottom>
      {isGameEnded ? <Modal score={score} /> : <></>}
    </>
  )
}

export default Game
