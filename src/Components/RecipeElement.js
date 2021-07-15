import React, {useState} from 'react'
function RecipeElement(recipe){
    const [recipeItem, setrecipeItem] = useState(recipe.recipe)

console.log(recipeItem)
    function handleDelete(recipeID){
        
        // const filteredArray = recipeItem.filter((item) => item.id !== recipeID)

        fetch(`http://localhost:9393/recipes/${recipeID}`,{
            method: "DELETE"
        }).then(()=>{
          let newRecipes = recipe.recipe.filter((item)=>item.id!==recipeID)
          recipe.recipeSetter(newRecipes)
        })
        
    }
    return (
        // <div className="row row-cols-2 row-cols-md-3">
            <div className="card-columns ">
                <div className="card">
                <img src={recipeItem.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{recipeItem.name}</h5>
                    {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    <div class="card border-success mb-3">
                            <p class="card-text">{recipeItem.description}</p>
                    </div>
                    <a href={`recipe/${recipeItem.id}`} className="btn btn-outline-success">View Recipe</a>
                    <button onClick={(e) => handleDelete(recipeItem.id)} className="btn btn-outline-success">Delete</button>
                </div>
                </div>
                
            </div>        
    //    </div>
    )
}
export default RecipeElement