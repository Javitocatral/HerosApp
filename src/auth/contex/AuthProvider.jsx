
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    logged: false
}

const init = () => {
  const user =JSON.parse (localStorage.getItem('user'));

  return{
    logged:!!user,
    user: user,
  }
}

export const AuthProvider = ({children}) => {

    const[ authstate, dispatch] = useReducer( authReducer, initialState, init)

    const login = async(name = '') => {

      const user = {id:12, name}
        

      const action = {
        type: types.login,
        payload: user
           
      }

      localStorage.setItem('user', JSON.stringify(user))
      dispatch(action)

    }

    const logout = () => {
      localStorage.removeItem('user')
      const action ={
        type:types.logout,
        payload:''
      }
      dispatch(action)
    }

  return (
    <AuthContext.Provider value = {{
      ...authstate,
      login,
      logout
    }}>

        {children}

    </AuthContext.Provider>
  )
}
