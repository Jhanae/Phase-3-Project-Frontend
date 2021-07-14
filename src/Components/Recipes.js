import { useState, useEffect } from 'react';

function Recipes(recipe) {
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        fetch("http://localhost:9393/ingredients")
          .then((response) => response.json())
          .then(ingredients => {
            setIngredient(ingredients)
          })
      }, [])
// 
    // const filterIngredient = ingredient.filter(item => item.id === recipe.recipe.id).ingredients
    console.log(ingredient.filter(item => item.id === recipe.recipe.id))
    return(
        <div className="text-center carousel slide">
            <h1 className=" ">{recipe.recipe.name}</h1>
            <div className=" mb-3">
                <img src={recipe.recipe.image} className="img-fluid " alt={recipe.name}/>
                <div className="card-body">
                    
                    <p className="card-text">{recipe.description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="row instructions">
                <div className="col">
                <h1 className=" card-title">Ingredients</h1>
                {/* <p>{filterIngredient}</p> */}
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