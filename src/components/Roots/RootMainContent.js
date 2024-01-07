import {  Outlet, NavLink } from "react-router-dom";
import './Root.css';
import iconLogout from '../../images/icon-logout.svg';
import { PlusCircle, Calendar4Week, People, CalendarPlus, List, XLg, BoxArrowLeft } from 'react-bootstrap-icons';
import { useState } from "react";
import { setMilliseconds } from "date-fns";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    CONTACTFORM: "/form",
    APPFORM: "/add-appointment",
    WELCOME: '/welcome'
  };

export const RootMainContent = ({ handleLoginLogout, isLogin }) => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <>
      <div className={`main-content div-row ${openMenu ? 'opened-main-content' : ''}`}>
        <div className={`nav-div div-column ${openMenu ? 'opened-menu' : ''}`}>
            <nav>
                <NavLink to={ROUTES.CONTACTFORM} className="menu-item">
                    <PlusCircle className="boot-icon"/>
                    Add new
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} className="menu-item" >
                    <Calendar4Week className="boot-icon"/>
                    Appointments
                </NavLink>
                <NavLink to={ROUTES.CONTACTS} className="menu-item" >
                    <People className="boot-icon"/>        
                    Contacts
                </NavLink>
            </nav>
            <div className="logout div-column">
                <button className="menu-item" onClick={handleLoginLogout}>
                    <BoxArrowLeft className="boot-icon exit-icon" />        
                        Log Out
                </button>
            </div>
            <div className="menu-button div-column" onClick={handleOpenMenu}>
                {openMenu ? <XLg className="boot-icon"/> : <List className="boot-icon"/>}       
            </div>
        </div>
        <div className="main-page div-column">
            <div className="nav-cards div-row">
                <h2>Hello, admin!</h2>
                <p>It’s your dashboard to make appointments from clients</p>
                <NavLink to={ROUTES.CONTACTFORM} className="menu-item-card">
                    <PlusCircle className="boot-icon"/>
                    Add new contact
                </NavLink>
                <NavLink to={ROUTES.APPFORM} className="menu-item-card">
                    <CalendarPlus className="boot-icon"/>
                    Add new appointment
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} className="menu-item-card" >
                    <Calendar4Week className="boot-icon"/>
                    Appointments
                </NavLink>
                <NavLink to={ROUTES.CONTACTS} className="menu-item-card" >
                    <People className="boot-icon"/>        
                    Contacts
                </NavLink>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            </div>
        </div>
    </>
  );
}