import "./App.css"
import React, { useState, useEffect } from "react"
import LoginPage from "./pages/LoginPage/LoginPage"
import Navbar from "./components/Navbar/Navbar"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import jwtDecode from "jwt-decode"

function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState()

  useEffect(() => {
    const getToken = localStorage.getItem("token")
    setToken(getToken)
  }, [])

  useEffect(() => {
    if (!token) {
      return
    }
    const user = token ? jwtDecode(token) : null
    setUser(user)
  }, [token])

  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LoginPage setToken={setToken} />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
