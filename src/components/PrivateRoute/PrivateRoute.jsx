import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector(state => state.auth.token)
     const location = useLocation()
    console.log(location)
    return isAuth ? children : <Navigate to='/login' state={location} />
}

export default PrivateRoute
