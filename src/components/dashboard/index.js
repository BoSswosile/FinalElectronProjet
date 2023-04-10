import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SpaceEvenly, Button, MainTitle, Title } from './style'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <>
      <MainTitle>TypeRacing</MainTitle>
      <SpaceEvenly>
        <Button onClick={() => navigate('/play')}>Start</Button>
        <Button>Settings</Button>
        <Button>Leaderboard</Button>
        <Title>Test your speed and challenge your typing limits</Title>
      </SpaceEvenly>
    </>
  )
}

export default Dashboard
