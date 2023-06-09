import React from 'react'
import { Bg } from '../assets'
import Login from './Login'
import { useUserStore } from '../context/store'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
import { AuthRoute, PrivateRoute } from './PrivateRoute'

const MainRouter = () => {
    const isVerified = useUserStore((state)=>state.isVerified)
    console.log(isVerified)
  return (
    <>
        <Routes>
            <Route path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path='/auth' element={<AuthRoute><Login/></AuthRoute>}/>
        </Routes>
    </>
  )
}

export default MainRouter