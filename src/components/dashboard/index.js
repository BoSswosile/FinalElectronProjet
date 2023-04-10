import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  SpaceEvenly,
  Button,
  MainTitle,
  Title,
  CenterDivModal,
  CenterButtons
} from './style'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()
  const [modalStart, setModalStart] = useState(false)
  const launchGame = () => {
    if (modalStart) {
      setModalStart(false)
    } else {
      setModalStart(true)
    }
  }

  return (
    <>
      <MainTitle>TypeRacing</MainTitle>
      <SpaceEvenly>
        <Button onClick={() => launchGame()}>Start</Button>
        <Button>Settings</Button>
        <Button>Leaderboard</Button>
        {/* // if modalStart is true, display the modal else display the title */}
        {modalStart ? (
          <CenterDivModal>
            <CenterButtons>
              <Title>Choose your difficulty</Title>
              <Button onClick={() => navigate('/play')}>Easy</Button>
              <Button onClick={() => navigate('/play')}>Hard</Button>
            </CenterButtons>
          </CenterDivModal>
        ) : (
          <Title>Test your speed and challenge your typing limits</Title>
        )}
      </SpaceEvenly>
    </>
  )
}

export default Dashboard
