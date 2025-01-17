import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form'
import { Batch } from './components/Batch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
    <Routes>
       <Route path="/" element={<App />} />
       <Route path='/addBatch' element={<Batch/>}/>
       <Route path="/form" element={<Form/>} />
       <Route path="/form/:id" element={<Form/>} />
     </Routes>
   </BrowserRouter>
   </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();