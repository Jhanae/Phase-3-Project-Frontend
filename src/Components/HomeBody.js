import HomeCarousel from "./Carousel"
import {Link} from "react-router-dom"
function HomeBody({difficulty, setDifficulty, country, setCountry}){
    return(
        <div className="homeBody container">
            <HomeCarousel/>
            <div className="row homePage">
                <div className=" col">
                    <h1>Countries</h1>
                    <Link to="/recipes" onClick={() => setCountry("Thailand")} style={{ textDecoration: 'none' }} className="link">▪️ Thai Cuisine</Link>
                    <br/>
                    <Link to="/recipes" onClick={() => setCountry("Nigeria")} style={{ textDecoration: 'none' }} className="link">▪️ Nigerian Cuisine</Link>
                    <br/>
                    <Link to="/recipes" onClick={() => setCountry("Jamaican")} style={{ textDecoration: 'none' }} className="link">▪️ Caribbean Cuisine</Link>
                    <br/>
                    <Link to="/recipes" onClick={() => setCountry("El Salvador")} style={{ textDecoration: 'none' }} className="link">▪️ Salvadoran Cuisine</Link>
                    <br/>
                </div>
                <div className="col">
                    <h1>Difficulty</h1>
                    <Link to="/recipes" onClick={() => setDifficulty("Walk in the Park")} style={{ textDecoration: 'none' }} className="link">▪️ Walk in the Park</Link>
                    <br/>
                    <Link to="/recipes" onClick={() => setDifficulty("Challenge yourself")} style={{ textDecoration: 'none' }} className="link">▪️ Challenge Yourself</Link>
                    <br/>
                    <Link to="/recipes" onClick={() => setDifficulty("So you think you're a chef?")}  style={{ textDecoration: 'none' }} className="link">▪️ So you think you're a chef?</Link>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default HomeBody;