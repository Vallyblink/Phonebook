import React, { lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout";
import ToastConfig from "utils/ToastConfig";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from './components/PublicRoute/PublicRoute';



const HomePage = lazy(() => import('./components/Pages/Home'));
const RegisterPage = lazy(() => import('./components/Pages/Register'));
const LoginPage = lazy(() => import('./components/Pages/Login'));
const Contacts = lazy(() => import('./components/Pages/Contacts'));


export default function App() {

  return (<>
    <ToastConfig/>
  <Routes>
       <Route element={<Layout />}>
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