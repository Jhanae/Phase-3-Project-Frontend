import HomeCarousel from "./Carousel"
import {Link} from "react-router-dom"
function HomeBody(){
    return(
        <div className="homeBody container">
            <HomeCarousel/>
            <div className="row homePage">
                <div className=" col">
                    <h1>Countries</h1>
                    <Link to="/Thai">Thai Cuisine</Link>
                    <br/>
                    <Link to="/Nigerian">Nigerian Cuisine</Link>
                    <br/>
                    <Link to="/Caribbean">Caribbean Cuisine</Link>
                    <br/>
                    <Link to="/Salvadoran">Salvadoran Cuisine</Link>
                    <br/>
                </div>
                <div className="col">
                    <h1>Difficulty</h1>
                    <Link to="/easy">Walk in the Park</Link>
                    <br/>
                    <Link to="/intermediate">Challenge Yourself</Link>
                    <br/>
                    <Link to="/hard">So you think you're a chef?</Link>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default HomeBody;