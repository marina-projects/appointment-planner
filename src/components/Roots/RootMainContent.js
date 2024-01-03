import {  Outlet, NavLink } from "react-router-dom";
import './Root.css';
import iconAdd from '../../images/icon-add.svg';
import iconAppointments from '../../images/icon-appointments.svg';
import iconUsers from '../../images/icon-users.svg';
import iconLogout from '../../images/icon-logout.svg';
import { PlusCircle, Calendar4Week, People, CalendarPlus } from 'react-bootstrap-icons';

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    CONTACTFORM: "/form",
    APPFORM: "/add-appointment",
    WELCOME: '/welcome'
  };

export const RootMainContent = ({ handleLoginLogout, isLogin }) => {
  return (
    <>
      <div className="main-content div-row">
        <div className="nav-div div-column">
            <nav>
                <NavLink to={ROUTES.CONTACTFORM} className="menu-item">
                    <img src={iconAdd} alt='' />
                    Add new
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} className="menu-item" >
                    <img src={iconAppointments} alt='' />
                    Appointments
                </NavLink>
                <NavLink to={ROUTES.CONTACTS} className="menu-item" >
                    <img src={iconUsers} alt='' />        
                    Contacts
                </NavLink>
            </nav>
            <div className="logout div-column">
                <button className="menu-item" onClick={handleLoginLogout}>
                    <img src={iconLogout} alt="" />
                        Log Out
                </button>
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