import React from "react"
import Login from "../../components/Login/Login"
import { authUser, registerUser } from "../../api/auth"
import { useHistory } from "react-router-dom"

const LoginPage = ({ setToken }) => {
  const history = useHistory()

  const onSubmit = async ({ type, email, name, password }) => {
    if (type === "login") {
      const result = await authUser({
        email,
        password,
      })
      const { token } = result
      if (!token) {
        return
      }
      setToken(token)
      history.push("/dashboard")
    } else {
      const result = await registerUser({
        name,
        email,
        password,
      })
      const { token } = result

      if (!token) {
        return
      }
      setToken(token)
      history.push("/dashboard")
    }
  }

  return (
    <div>
      <Login onSubmit={onSubmit} />
    </div>
  )
}

export default LoginPage
