
function Recipes(recipe) {
    console.log(recipe)
    return(
        <div className="recipe-container">
            <h1 className=" card-title">{recipe.recipe.name}</h1>
            <div className="card mb-3">
                <img src={recipe.recipe.image} className="card-img-top" alt={recipe.name}/>
                <div className="card-body">
                    
                    <p className="card-text">{recipe.description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h1 className=" card-title">Ingredients</h1>
                </div>
                <div className="col">
                <h1 className=" card-title">Recipe</h1>
                </div>
            </div>
        </div>
    )
}
export default Recipes