import {useState} from 'react';
// need to pass down recipes and setrecipes props
function Form({recipes,setRecipes}) {

    const [recipeName, setName]=useState("")
    const [country, setCountry]=useState("")
    const [difficulty, setDifficulty]=useState("")
    const [ingredients, setIngredients]=useState("")
    const [instructions, setInstructions]=useState("")
    const [description, setDescription]=useState("")
    const [imageURL, setImageURL]=useState("")


function handleName(e){
    setName(e.target.value);
}
function handleCountry(e){
    setCountry(e.target.value);
}
function handleDifficulty(e){
    setDifficulty(e.target.value);
}
function handleIngredients(e){
    setIngredients(e.target.value);
}
function handleInstructions(e){
    setInstructions(e.target.value);
}
function handleDescription(e){
    setDescription(e.target.value);
}
function handleImageURL(e){
    setImageURL(e.target.value);
}

// const addNewRecipe=newRecipe=>{const newArray=[...recipes, newRecipe]
// setRecipes(newArray)}

    function handleSubmit(e){
    e.preventDefault()
    const newRecipe={name:recipeName,country:country,difficulty:difficulty,instructions:instructions,ingredients:ingredients,description:description,image:imageURL}
    fetch("http://localhost:9393/new_recipe",{
        method: "POST", 
        headers: {
            "Accept": "application/json", 
            "Content-Type": "application/json"
          }, 
        body: JSON.stringify(newRecipe),
        
    })
    console.log(newRecipe)

    // .then((response) => response.json())
    // .then(response => addNewRecipe(response)) 
}


return(
    
        <form onSubmit={handleSubmit}>
                <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" id="name" onChange={handleName} value={recipeName} />
                </div>
                <div className="form-group">
    <label>Country</label>
    <input type="text" className="form-control" id="country" onChange={handleCountry} value={country} />
                </div>
                <div className="form-group">
    <label>Difficulty</label>
    <input type="text" className="form-control" id="difficulty" onChange={handleDifficulty} value={difficulty} />
                </div>
                <div className="form-group">
    <label>Ingredients</label>
    <input type="text" className="form-control" id="ingredients" onChange={handleIngredients} value={ingredients} />
                </div>
                <div className="form-group">
    <label>Instructions</label>
    <input type="text" className="form-control" id="instructions" onChange={handleInstructions} value={instructions} />
                </div>
                <div className="form-group">
    <label>Description</label>
    <input type="text" className="form-control" id="description" onChange={handleDescription} value={description} />
                </div>
                <div className="form-group">
    <label>Image URL</label>
    <input type="text" className="form-control" id="image" onChange={handleImageURL} value={imageURL} />
                </div>
            <button type="submit">Submit!</button>
            </form>
            
)
}

export default Form