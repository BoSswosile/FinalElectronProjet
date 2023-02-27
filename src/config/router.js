import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../components/dashboard'
import Game from '../components/game'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/play',
    element: <Game />
  }
])

export default router
