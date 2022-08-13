import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import {CounterApp} from './CounterApp';
//import App from './PropsApp';
//import Bogota  from './ComponentsApp';


ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <CounterApp value={0}/>
        </React.StrictMode>
)