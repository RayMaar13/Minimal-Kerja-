import Cookies from "js-cookie"
import React from 'react'
import { Navigate } from "react-router-dom"

const LoginRoute = (props) => {
  if (Cookies.get('token') === undefined) {
      return props.children
    } else if (Cookies.get('token') !== undefined) {
      return <Navigate to={'/'} />
    }
  

    
}

export default LoginRoute