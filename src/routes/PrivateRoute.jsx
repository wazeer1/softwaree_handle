import React from 'react'
import { useUserStore } from '../context/store'
import { useNavigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const isVerified = useUserStore((state)=>state.isVerified)
    if (isVerified){
       return children
    }else{
        navigate('/auth')
    }
}

export const AuthRoute = ({children}) => {
    const navigate = useNavigate()
    const isVerified = useUserStore((state)=>state.isVerified)
    if (!isVerified){
       return children
    }else{
        navigate('/')
    }
}



