import React, { useEffect, useState } from 'react'
import { SplitterTop, SplitterBottom, SimpleText, CenterText } from './style'
import { ArrayToString } from '../../utils/functions'
import Modal from '../modal'
const Game = () => {
  const [words, setWords] = useState({ words: [] })
  const [gameList, setGameList] = useState([])
  const [currentSentence, setCurrentSentence] = useState([]) // remettre à zéro quand on passe à la phrase suivante
  const [keyPressCode, setKeyPressCode] = useState(0)
  const [placement, setPlacement] = useState(0)
  const [countdown, setCountdown] = useState(3)
  const [completeList, setCompleteList] = useState([])
  const [timer, setTimer] = useState()
  const [displayList, setDisplayList] = useState([])
  const [placementSize, setPlacementSize] = useState(0)
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [testList, setTestList] = useState([])
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
          setCurrentSentence([...currentSentence, event.key])

          setDisplayList([
            testList[0].slice(
              currentSentence != null ? currentSentence.length + 1 : 0
            ),
            testList.slice(1)
          ])

          setPlacement(placement + 1)
          setPlacementSize(placementSize + 1)
        } else if (event.keyCode == 8 && currentSentence.length > 0) {
          setGameList([...gameList.slice(0, -1)])
          setCurrentSentence([...currentSentence.slice(0, -1)])

          setPlacement(placement - 1)
          setPlacementSize(placementSize - 1)

          setDisplayList([
            testList[0].slice(
              currentSentence != null ? currentSentence.length - 1 : 0
            ),
            testList.slice(1)
          ])
        } else if (event.keyCode >= 48 && event.keyCode <= 57) {
          setGameList([...gameList, event.key])
          setCurrentSentence([...currentSentence, event.key])

          setPlacement(placement + 1)
          setPlacementSize(placementSize + 1)

          setDisplayList([
            testList[0].slice(
              currentSentence != null ? currentSentence.length + 1 : 0
            ),
            testList.slice(1)
          ])
        }
      }

      if (placementSize === testList[0].length) {
        setPlacementSize(0)
        setTestList(testList.slice(1))
        setDisplayList(testList)
        console.log()
        setCurrentSentence([])
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
        setTimer(30)
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
        console.log(timer)
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
  }, [words])

  document.addEventListener('keydown', function search(e) {
    setKeyPressCode(e.keyCode)
    document.removeEventListener('keydown', search)
  })

  useEffect(() => {
    setDisplayList(testList)
  }, [testList])

  const generateWord = array => {
    var z = 0
    var arrayValid = []
    var temporaryDisplayState = []
    var popped = ''
    for (let i = 0; i < 300; i++, z++) {
      var randomnum = Math.floor(Math.random() * array.length)
      arrayValid.push(array[randomnum])
      popped += '' + array[randomnum]
      if (z >= 15) {
        temporaryDisplayState.push(popped)
        popped = ''
        z = 0
      }
    }
    setTestList(temporaryDisplayState)
    setDisplayList(testList)
    return arrayValid
  }

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
      {isGameEnded ? <Modal score={score} /> : <></>}
      <SplitterTop>
        <SimpleText></SimpleText>
      </SplitterTop>
      {countdown === 0 ? <> </> : <CenterText>{countdown}</CenterText>}
      <SplitterBottom>
        <SimpleText>
          {currentSentence.map((char, index) => (
            <span
              key={index}
              style={{ color: testList[0][index] === char ? 'green' : 'red' }}
            >
              {char}
            </span>
          ))}
          {displayList[0]}
          <br />
          {testList[1]}
          <br />
          {testList[2]}
          <br />
          {testList[3]}
          <br />
          {testList[4]}
        </SimpleText>
      </SplitterBottom>
    </>
  )
}

export default Game
