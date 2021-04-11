import "./App.css"
import LoginPage from "./pages/LoginPage/LoginPage"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
