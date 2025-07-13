import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import React from 'react'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import Service from "./pages/Service"
import Footer from "./components/Footer"
import Error from "./pages/Error"
import {Logout} from "./pages/Logout"
import AdminLayout from "./components/layouts/Admin-layout"
import AdminUser from "./pages/Admin-user"
import AdminContact from "./pages/Admin-contact"
import AdminUserUpdate from "./pages/Admin-user-update"

const App = () => {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="users" element={<AdminUser/>}/>
        <Route path="contacts" element={<AdminContact/>}/>
        {/* <Route path="services" element={<AdminService/>}/> */}
        <Route path="user/:id/edit" element={<AdminUserUpdate/>}/>
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>

    </>
  )
}

export default App