import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/app/Login"
import Forms from "./components/app/Forms"
import Dashboard from "./components/app/Dashboard";

function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Forms" component={Forms} />
        <Route path="/Dashboard" component={Dashboard} />

      </Switch>
    </Router>
    </>
  )
}

export default App
