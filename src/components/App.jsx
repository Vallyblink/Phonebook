import React, { lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";
import ToastConfig from "utils/ToastConfig";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from './PublicRoute/PublicRoute';
// import ContactForm from './Contactform/Contactform';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContsctList';

// import { H1, H2 } from './Hstyles';

const HomePage = lazy(() => import('./Pages/Home'));
const RegisterPage = lazy(() => import('./Pages/Register'));
const LoginPage = lazy(() => import('./Pages/Login'));
const Contacts = lazy(() => import('./Pages/Contacts'));


export default function App() {

  return (<>
    <ToastConfig/>
  <Routes>
       <Route path="/" element={<Layout />}>
      <Route index element={<HomePage/>} />
        <Route path="/singup"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>} />
        <Route path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>} />
      <Route path="/contacts"
          element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>} />
    </Route>
  </Routes>
   </>
  );
}

// {/* <H1>Phonebook</H1>
//       <ContactForm/>

//       <H2>Contacts</H2>
//       <Filter />
//       <ContactList/> */}