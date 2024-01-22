import React from "react";
import '../header/header.css';
import ModalSignUp from "../../components/modalSignUp/ModalSignUp";
import ModalLogin from "../../components/modalLogin/ModalLogin";

// different content for login and non-login users

export const Header = ({ handleLoginLogout, isLogin }) => {
    if (!isLogin) {
        return (
            <div className="header header-welcome div-row">
                <h2>A-Planner</h2>
                <div className="header-buttons div-row">
                    <ModalLogin handleLoginLogout={handleLoginLogout}/>
                    <ModalSignUp handleLoginLogout={handleLoginLogout} buttonText='Sign Up'/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="header div-row">
                <h2>A-Planner</h2>
                <div className="header-buttons div-row">
                    <button className="transparent-button logout-button" onClick={handleLoginLogout}>Logout</button>
                </div>
            </div>
        )
    }
}
