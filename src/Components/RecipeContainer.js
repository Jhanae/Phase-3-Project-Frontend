import React, {useState} from 'react'
import Logo from "../Pictures/logo.png"
import RecipeElement from "./RecipeElement"
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';

function RecipeContainer(recipe){


    const [searchText, setSearch] = useState("")
    const [difficulty, setDifficulty] = useState('All')
    const [country, setCountry] = useState('All')


    const filterText = recipe.recipe.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
    const filterDifficulty = filterText.filter(item => item.difficulty === difficulty)
    const filterCountry= filterText.filter(item => item.country === country)


    let Recipe;
// console.log(difficulty)
if(difficulty !== 'All')
{
    Recipe = filterDifficulty.map(item => {
        // console.log(item);
        return <RecipeElement recipe={item} key={item.id} />
     })
}
else if(country !== 'All')
{
    Recipe = filterCountry.map(item => {
        // console.log(item);
        return <RecipeElement recipe={item} key={item.id} />             
    })
}
else{
    Recipe = filterText.map(item => {
        // console.log(item);
        return <RecipeElement recipe={item} key={item.id} />
     })
    }

    
    
    return (
        <div>
            <h2>Recipes</h2>
            <div className="container ">
            <div className="dropdrown btn-group">
                <button className="filter-btns btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Difficulty</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button onClick={(e) => setDifficulty(e.target.value)} value="All"  className="dropdown-item ">All</button>
                    <button onClick={(e) => setDifficulty(e.target.value)} value="Walk in the Park" className="dropdown-item">Walk in the Park</button>
                    <button onClick={(e) => setDifficulty(e.target.value)} value="Challenge yourself" className="dropdown-item">Challenge yourself</button>
                    <button onClick={(e) => setDifficulty(e.target.value)} value="So you think you're a chef?" className="dropdown-item">So you think you're a chef?</button>
                </div>
            <div className="dropdrown btn-group">
                <button className="filter-btns btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Country/Region</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button onClick={(e) => setCountry(e.target.value)} value="All"  className="dropdown-item">All</button>
                    <button onClick={(e) => setCountry(e.target.value)} value="Thailand"  className="dropdown-item">Thai</button>
                    <button onClick={(e) => setCountry(e.target.value)} value="Jamaica" className="dropdown-item">Jamaican</button>
                    <button onClick={(e) => setCountry(e.target.value)} value="El Salvador" className="dropdown-item">Salvadorian</button>
                    <button onClick={(e) => setCountry(e.target.value)} value="Nigeria" className="dropdown-item">Nigerian</button>
                </div>
            </div>
        </div>

            <form class="form-inline">

                <input
                        className="filterSearch"
                        type="text"
                        placeholder="Search Recipes..."
                        onChange={(e) => setSearch(e.target.value)}
                    />                
                    <button class="search-btn" type="submit">Search</button>
            </form>
            </div>
            <br/>
            <div className="card-holder row row-cols-1 row-cols-md-3">
                {Recipe}            
            </div>
        </div>
            
    )
}
export default RecipeContainer
