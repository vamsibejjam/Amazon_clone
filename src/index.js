import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Stateprovider } from './StateProvider';
import Reducer, { initialState} from './Reducer';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Stateprovider initialState={initialState} Reducer={Reducer} >
      <App />
      </Stateprovider>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
