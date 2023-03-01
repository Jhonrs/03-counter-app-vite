import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp';
import {CounterApp} from './CounterApp';
import './styles.css'
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       {/*  <CounterApp value={6}/> */}
       <FirstApp title='Hola, soy Goku'/>
    </React.StrictMode>
)