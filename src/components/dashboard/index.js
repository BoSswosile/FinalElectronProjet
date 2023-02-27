import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SpaceEvenly, Button, MainTitle } from './style'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div>
      <MainTitle>TypeRacing</MainTitle>
      <SpaceEvenly>
        <Button onClick={() => navigate('/play')}>Start</Button>
        <Button>Settings</Button>
        <Button>Leaderboard</Button>
      </SpaceEvenly>
    </div>
  )
}

export default Dashboard
