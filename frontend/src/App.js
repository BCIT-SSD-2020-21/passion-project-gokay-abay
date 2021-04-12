import "./App.css"
import React, { useState, useEffect } from "react"
import LoginPage from "./pages/LoginPage/LoginPage"
import Navbar from "./components/Navbar/Navbar"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import jwtDecode from "jwt-decode"
import useLocalStorage from "react-use-localstorage"

function App() {
  const [token, setToken] = useLocalStorage("token")
  const [user, setUser] = useState()

  useEffect(() => {
    if (!token) {
      return
    }
    const user = token ? jwtDecode(token) : null
    setUser(user)
  }, [token])

  const signOut = () => {
    setToken("")
    setUser()
  }

  return (
    <Router className="App">
      <Navbar signOut={signOut} user={user} />
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
