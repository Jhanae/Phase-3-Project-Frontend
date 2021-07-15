import './App.css';
import NavbarTop from "./Components/NavbarTop"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Recipes from "./Components/Recipes.js"
import RecipeContainer from "./Components/RecipeContainer"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import { useState, useEffect } from 'react';
import Form from "./Components/PostForm.js"

function App() {

  // const [recipeData, recipeDataSetter] = useState([])
  const [recipes, recipeSetter] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9393/recipes")
      .then((response) => response.json())
      .then(recipes => {
        // console.log(recipe);
        // recipeDataSetter(recipes);
        recipeSetter(recipes)
      })
  }, [])

  return (
    <div className="App">
      <Router>
        <NavbarTop/>
          <Switch>
          <Route exact path="/recipes" component={() => <RecipeContainer recipeSetter={recipeSetter} recipe={recipes} />} />
            <Route exact path="/Thai" component={Home} />
            <Route exact path="/Salvadoran" component={Home} />
            <Route exact path="/Caribbean" component={Home}/>
            <Route exact path="/Nigerian" component={Home}/>
            <Route exact path="/" component={Home}/>
            {recipes.map(item => {return <Route exact path={`/recipe/${item.id}` } component={()=><Recipes recipe={item}/>}/>})}
            <Route exact path="/new_recipe" component={()=> <Form recipes={recipes} setRecipes={recipeSetter}/>}/>
         

          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
