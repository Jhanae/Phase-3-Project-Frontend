import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Recipes(recipe) {
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        async function fetchData(){
        let response = await fetch("http://localhost:9393/ingredients")
        response = await response.json()
        setIngredient(response)
        }
        fetchData()
      }, []);
// 
    const filterIngredient = ingredient.find(item => item.id === recipe.recipe.id)
    // console.log(ingredient.find(item => item.id === recipe.recipe.id).ingredients)
    return(
        <div className="text-center carousel slide">
            <h1 className=" ">{recipe.recipe.name}</h1>
            <div className=" mb-3">
                <img src={recipe.recipe.image} className="img-fluid recipe-page" alt={recipe.name}/>
                <br/>
                <br/>
                <small className="recipe-page">Country: </small>
                <small className="details">{recipe.recipe.country}</small>
                <br/>
                <small className="recipe-page">Description: </small>
                <small className="details">{recipe.recipe.description}</small>
                <br/>
                <small className="recipe-page">Find more about this recipe by visiting:</small>
                <Link>{recipe.recipe.url}</Link>
                <div className="card-body">
                    
                    <p className="card-text">{recipe.description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="row instructions">
                <div className="col">
                <h1 className=" card-title">Ingredients</h1>
                {filterIngredient ? filterIngredient.ingredients.split(",").map(item => <li>{item}</li>) : null}
                {/* {filterIngredient.ingredients.split(",").map((item) => <li>{item}</li>)} */}
                </div>
                <div className="col">
                <h1 className=" card-title">Recipe</h1>
                {recipe.recipe.instructions.split(".").map((item) => <li>{item}</li>)}
                </div>
            </div>
        </div>
    )
}
export default Recipes