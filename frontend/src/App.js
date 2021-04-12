import "./App.css"
import React, { useState, useEffect } from "react"
import LoginPage from "./pages/LoginPage/LoginPage"
import Navbar from "./components/Navbar/Navbar"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
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

  const PrivateRoute = ({ path, children }) => (
    <Route exact path={path}>
      {!!user ? children : <Redirect to="/" />}
    </Route>
  )

  const PublicRoute = ({ path, children }) => (
    <Route exact path={path}>
      {!user ? children : <Redirect to="/dashboard" />}
    </Route>
  )

  return (
    <Router className="App">
      <Navbar signOut={signOut} user={user} />
      <Switch>
        <PublicRoute exact path="/">
          <LoginPage setToken={setToken} />
        </PublicRoute>
        <PrivateRoute exact path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App
