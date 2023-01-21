import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FilterMoneyApp from './filterMoney/FilterMoneyApp';
import InputUniversalApp from './input/UniversalComponents/InputUniversalApp';
import App from './studentsList/App';
import InputApp from './input/InputApp';

 const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    // <InputUniversalApp/>
    <App/>
    // <FilterMoneyApp/> 
    // <InputApp/>
);

reportWebVitals();
 

