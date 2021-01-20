import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Alerts from "./components/Alerts/Alerts"
import Navbar from "./containers/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import PrivateRoute from "./PrivateRoute"

const App = () => {
  return (
    <Router>
        <Navbar />

        <Alerts />
        
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />

          <PrivateRoute path="/" exact component={Home} />
        </Switch>
    </Router>
  )
}

export default App