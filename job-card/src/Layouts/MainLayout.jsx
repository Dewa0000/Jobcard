import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const MainLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <ToastContainer />
    </div>
  )
}

export default MainLayout
