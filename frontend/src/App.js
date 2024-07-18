import React from "react";
// import { Nav, Navbar, Container, Row, Col}  from "react-bootstrap";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'


import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/Users/Users'
import CreateStudent from "./components/Users/CreateStudent.js";
const App = () => {
  return (

    <div>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path="/create" element={<CreateStudent />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;

