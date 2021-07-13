import HomeCarousel from "./Carousel"
import {Link} from "react-router-dom"
function HomeBody(){
    return(
        <div className="homeBody container">
            <HomeCarousel/>
            <div className="row homePage">
                <div className=" col">
                    <h1>Countries</h1>
                    <Link to="/Thai" style={{ textDecoration: 'none' }} className="link">▪️ Thai Cuisine</Link>
                    <br/>
                    <Link to="/Nigerian" style={{ textDecoration: 'none' }} className="link">▪️ Nigerian Cuisine</Link>
                    <br/>
                    <Link to="/Caribbean" style={{ textDecoration: 'none' }} className="link">▪️ Caribbean Cuisine</Link>
                    <br/>
                    <Link to="/Salvadoran" style={{ textDecoration: 'none' }} className="link">▪️ Salvadoran Cuisine</Link>
                    <br/>
                </div>
                <div className="col">
                    <h1>Difficulty</h1>
                    <Link to="/easy" style={{ textDecoration: 'none' }} className="link">▪️ Walk in the Park</Link>
                    <br/>
                    <Link to="/intermediate" style={{ textDecoration: 'none' }} className="link">▪️ Challenge Yourself</Link>
                    <br/>
                    <Link to="/hard" style={{ textDecoration: 'none' }} className="link">▪️ So you think you're a chef?</Link>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default HomeBody;