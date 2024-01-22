import React from "react";
import '../welcomePage/welcomePage.css';
import backMobile from '../../images/back-mobile.png';
import backDesktop from '../../images/background.png';
import ModalSignUp from "../../components/modalSignUp/ModalSignUp";

export const WelcomePage = ( {handleLoginLogout} ) => {
    return (
        <div className="welcome-page div-row">
            <img src={backDesktop} alt='' className="back-desktop"/>

            <div className="div-column welcome-page-content">
                <div className="welcome-content div-column">
                    <h1>Appointment Planner</h1>
                    <p>For your administrators</p>
                    <ModalSignUp buttonText="Let's try!" handleLoginLogout={handleLoginLogout} />
                </div>
                <div className="image-container div-column">
                        <img src={backMobile} alt='' className="back-mobile" />
                </div>
            </div>      
        </div>
    )
}

