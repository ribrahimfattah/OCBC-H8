import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  compoennet react
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />}>
            <Route path=":name" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
