import React from 'react'

function RecipeElement(recipe){
    // console.log("element")
    console.log(recipe.recipe)
    return (
        // <div className="row row-cols-2 row-cols-md-3">
            <div className="col mb-4">
                <div className="card h-100">
                <img src={recipe.recipe.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{recipe.recipe.name}</h5>
                    {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    <div class="card border-success mb-3">
                            <p class="card-text">{recipe.recipe.description}</p>
                    </div>
                    <a href={`recipe/${recipe.name}`} className="btn btn-outline-success">View Recipe</a>
                </div>
                </div>
            </div>        
    //    </div>
    )
}
export default RecipeElement