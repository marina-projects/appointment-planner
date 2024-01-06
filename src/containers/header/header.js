import React from "react";
import '../header/header.css'

export const Header = ({ handleLoginLogout, isLogin }) => {
    if (!isLogin) {
        return (
            <div className="header header-welcome div-row">
                <h2>A-Planner</h2>
                <div className="header-buttons div-row">
                    <button className="button-login" onClick={handleLoginLogout}>Login</button>
                    <button onClick={handleLoginLogout}>SignUp</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="header div-row">
                <h2>A-Planner</h2>
                <div className="header-buttons div-row">
                    <button className="button-login" onClick={handleLoginLogout}>Logout</button>
                </div>
            </div>
        )
    }
}
