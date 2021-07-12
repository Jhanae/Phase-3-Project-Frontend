import './App.css';
import NavbarTop from "./Components/NavbarTop"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarTop/>
        <Home/>
          <Switch>
            <Route exact path="/Thai" component={Home} />
            <Route exact path="/Salvadoran" component={Home} />
            <Route exact path="/Caribbean" component={Home}/>
            <Route exact path="/Nigerian" component={Home}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
