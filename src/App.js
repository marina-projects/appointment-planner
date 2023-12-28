import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import '../src/App.css';
import { FormPage } from "./containers/formPage/formPage";
import { AppointmentFormPage } from './containers/appointmentFormPage/appointmentFormPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App({children}) {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginLogout = () => {
      setIsLogin(!isLogin);
  }

  const addContact = (name, phone, email) => {
    setContacts([...contacts, {
      name: name,
      phone: phone,
      email: email,
    },
  ]);
  };

  const addAppointment = (nameApp, date, time, chosenContact) => {
    setAppointments([...appointments, {
      date: date,
      time: time,
      nameApp: nameApp,
      chosenContact: chosenContact
    },
  ]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root handleLoginLogout={handleLoginLogout} isLogin={isLogin} /> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTFORM} replace/> }/>
      <Route path={ROUTES.CONTACTFORM} element={<FormPage contacts={contacts} addContact={addContact}/>} />
      <Route path={ROUTES.APPFORM} element={<AppointmentFormPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />} />
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router}/>
    </LocalizationProvider>
  );  
}

export default App;
