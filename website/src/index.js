import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";

import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About';
import Projects from './Pages/Projects'
import GetInvolved from './Pages/GetInvolved'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutMint" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
      </Routes>
    </HashRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
