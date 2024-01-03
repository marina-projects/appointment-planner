import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate, useNavigate } from "react-router-dom";
import Root, { ROUTES } from "./components/Roots/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import '../src/App.css';
import { FormPage } from "./containers/formPage/formPage";
import { AppointmentFormPage } from './containers/appointmentFormPage/appointmentFormPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import localeData from 'dayjs/plugin/localeData';
import { WelcomePage } from "./containers/welcomePage/WelcomePage";
import { RootWelcome } from "./components/Roots/RootMainContent";

dayjs.extend(isSameOrAfter);
dayjs.extend(localeData);

dayjs.locale('en-gb');

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginLogout = () => {
    setIsLogin(!isLogin);
  }

  const addContact = (name, phone, email) => {
    setContacts([...contacts, {
      name: name,
      phone: phone,
      email: email,
    }]);
  };

  const addAppointment = (nameApp, date, time, chosenContact) => {
    setAppointments([...appointments, {
      date: date,
      time: time,
      nameApp: nameApp,
      chosenContact: chosenContact
    }]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root handleLoginLogout={handleLoginLogout} isLogin={isLogin} /> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTFORM} replace/> }/>
      <Route path={ROUTES.CONTACTFORM} element={<FormPage contacts={contacts} addContact={addContact}/>} />
      <Route path={ROUTES.APPFORM} element={<AppointmentFormPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />} />
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */ }/>
      <Route path={ROUTES.WELCOME} element={WelcomePage} />
    </Route>
  ));
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb' >
      <RouterProvider router={router}/>
    </LocalizationProvider>
  );  
}

export default App;