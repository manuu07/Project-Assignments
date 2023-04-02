import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import {Shows, ShowSummary, Form} from './App.js';
//import Summary from './Summary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shows/>}></Route>
        <Route path = '/summary/:id' element = {<ShowSummary/>}></Route>
        <Route path = '/form/:id' element = {<Form/>}></Route>

      </Routes>
    </BrowserRouter>


   
  </React.StrictMode>
);
