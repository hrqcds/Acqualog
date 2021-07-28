import {BrowserRouter, Route, Switch} from "react-router-dom"

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
