import "./App.css"
import LoginPage from "./pages/LoginPage/LoginPage"
import Navbar from "./components/Navbar/Navbar"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
