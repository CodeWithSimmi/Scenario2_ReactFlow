import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Workflow}  from './flow/workflow';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main-app'>
<Workflow />
  </div>
    
 
);


reportWebVitals();
