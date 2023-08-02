import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Fragment } from 'react';
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;
