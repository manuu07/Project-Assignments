import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Header from './Header.js'
import HomePage from './HomePage';
import LoginForm from './Login';
import Register from './Register';
import BookRow from './BookList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginForm/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/books' element={<BookRow/>} />
    
      
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);


