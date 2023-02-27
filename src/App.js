import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Dashboard from './components/dashboard'
import router from './config/router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return <RouterProvider router={router} />
}

export default App
