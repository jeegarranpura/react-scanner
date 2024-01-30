import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import "./App.css";
import Login from "./components/authController/Login";
import Register from "./components/authController/Register";
import { createBrowserHistory } from "history";
import { authenticationCheck } from "./utils/authUtils";
const history = createBrowserHistory();
function App() {
  useEffect(() => {
    authenticationCheck();
  }, [])
  return (
    <div className="App">
      {/* <React.Suspense fallback={null}> */}
      <Router history={history}>
        <Switch>
          <Route path="/login" Component={<Login />} render={() => <Login />} />
          <Route
            path="/register"
            Component={<Register />}
            render={() => <Register />}
          />
        </Switch>
      </Router>
      {/* </React.Suspense> */}
    </div>
  );
}

export default App;
