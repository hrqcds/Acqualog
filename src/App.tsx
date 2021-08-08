import {BrowserRouter, Route, Switch} from "react-router-dom"
import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Relatorios } from "./pages/Relatorios";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/relatorios" component={Relatorios}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
