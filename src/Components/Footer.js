import React from 'react'
import "./Footer.css"

function Footer(){
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col">
                        <h4>Recipe Finder</h4>
                        <ul className="list-unstyled">
                            <li>For Hungry People</li>
                            <li>Created with your tummy and wallet in mind.</li>
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col">
                        <h4>Jhanae Chisholm</h4>
                        <ul className="list-unstyled">
                            <li>jhanaechisholm12@gmail.com</li>
                            <li>Harrisburg PA</li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col">
                        <h4>Kaia Bergmann-Dean</h4>
                        <ul className="list-unstyled">
                            <li>kbergmanndean@gmail.com</li>
                            <li>Riverdale MD</li>
                        </ul>
                    </div>
                </div>
                {/* <hr/> */}
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} RECIPEFINDER INC | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer