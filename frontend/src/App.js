import "./App.css"
import LoginPage from "./pages/LoginPage/LoginPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
