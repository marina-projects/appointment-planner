import React from "react";
import '../welcomePage/welcomePage.css';
import backMobile from '../../images/back-mobile.png';
import backDesktop from '../../images/background.png';

export const WelcomePage = ( {handleLoginLogout} ) => {
    return (
        <div className="welcome-page div-row">
            <img src={backDesktop} alt='' className="back-desktop"/>

            <div className="div-column welcome-page-content">
                <div className="welcome-content div-column">
                    <h1>Appointment Planner</h1>
                    <p>For your administrators</p>
                    <button className="button-login" onClick={handleLoginLogout}>Let's try!</button>
                </div>
                <div className="image-container div-column">
                        <img src={backMobile} alt='' className="back-mobile" />
                </div>
            </div>      
        </div>
    )
}

