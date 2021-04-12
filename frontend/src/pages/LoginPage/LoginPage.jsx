import React from "react"
import Login from "../../components/Login/Login"
import { authUser, registerUser } from "../../api/auth"

const LoginPage = () => {
  const onSubmit = async ({ type, email, name, password }) => {
    if (type === "login") {
      const result = await authUser({
        email,
        password,
      })
      console.log(result)
    } else {
      const result = await registerUser({
        name,
        email,
        password,
      })
      console.log(result)
    }
  }

  return (
    <div>
      <Login onSubmit={onSubmit} />
    </div>
  )
}

export default LoginPage
