import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate()
useEffect(() => {
    navigate("/codeyai", {replace: true})
}, [navigate])
  return (
    <>
    </>
  )
}

export default Home
