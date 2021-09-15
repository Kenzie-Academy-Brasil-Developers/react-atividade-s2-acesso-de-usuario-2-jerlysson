import "./App.css";
import { members } from "./components/Assets/Members";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Customer from "./pages/customer";
import Company from "./pages/company";
import { useState } from "react";

function App() {
  const [member, setMember] = useState([...members]);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <Switch>
          <Route exact path="/">
            <Home member={member} setMember={setMember} />
          </Route>
          <Route path="/customer/:id">
            <Customer member={member} />
          </Route>
          <Route path="/company/:id">
            <Company member={member} />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
