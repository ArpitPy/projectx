import "./App.css";
import Contact from "./Contact.js";
import Header from "./Header.js";
import Sidemenu from "./Sidemenu.js";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidemenu />
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
