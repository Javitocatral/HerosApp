import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contex/AuthContext"


export const LogingPages = () => {

  const {login} = useContext(AuthContext)
   
  const navigate = useNavigate()

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Javier Gascon')
    navigate( lastPath,{
      replace:true
    })
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary"
      onClick={onLogin}>
        Login
      </button>
    </div>
    )
}
