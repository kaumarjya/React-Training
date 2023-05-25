import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App color="red" day="Thursday" mylist={[0,1,2,3,4]}/>
    <App color="blue" day="Friday" />
    <App mylist={[0,1,2,3,4]}/>
  </React.StrictMode>
);

