import './App.css';
import NavbarTop from "./Components/NavbarTop"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Recipes from "./Components/Recipes.js"
import RecipeContainer from "./Components/RecipeContainer"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import { useState, useEffect } from 'react';

function App() {

  // const [recipeData, recipeDataSetter] = useState([])
  const [recipe, recipeSetter] = useState([]);
  const [sorted, sortedSetter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9393/recipes")
      .then((response) => response.json())
      .then(recipes => {
        // console.log(recipe);
        // recipeDataSetter(recipes);
        recipeSetter(recipes)
      })
  }, [])

// let t = recipeData.map(item => recipeSetter(item))

console.log(recipe)
  return (
    <div className="App">
      <Router>
        <NavbarTop/>
          <Switch>
          <Route exact path="/recipes" component={() => <RecipeContainer recipe={recipe} />} />
            <Route exact path="/Thai" component={Home} />
            <Route exact path="/Salvadoran" component={Home} />
            <Route exact path="/Caribbean" component={Home}/>
            <Route exact path="/Nigerian" component={Home}/>
            <Route exact path="/" component={Home}/>
            {recipe.map(item => {return <Route exact path={`/recipe/${item.id}` } component={()=><Recipes recipe={item}/>}/>})}
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
