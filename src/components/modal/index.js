import React, { useState, useEffect } from 'react'
import { Button, CenterDivModal } from './style'
import { useNavigate } from 'react-router-dom'

const Index = ({ score }) => {
  const [result, setResult] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (score >= 0 && score <= 10) {
      setResult('What are you doing')
    } else if (score >= 11 && score <= 40) {
      setResult('You need to practice more')
    } else if (score >= 41 && score <= 50) {
      setResult("You're in the average")
    } else if (score >= 51 && score <= 60) {
      setResult("You're above average")
    } else if (score >= 61 && score <= 70) {
      setResult("You're fast")
    } else if (score >= 71 && score <= 120) {
      setResult("You're very fast")
    } else if (score >= 121) {
      setResult('Man is cooking')
    }
  }, [])
  return (
    <div>
      <CenterDivModal>
        <h1>{score} wpm</h1>
        <p>Nickname : Yohan</p>
        <Button onClick={() => navigate('/')}>Save Score</Button>
      </CenterDivModal>
    </div>
  )
}

export default Index
