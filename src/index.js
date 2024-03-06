import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderClass from './ClassComponent/HeaderClass';
import ProductClass from './ClassComponent/ProductClass';
import { BrowserRouter } from 'react-router-dom'; 
import { RouterHome } from './Routing/RouterHome';
import { Menu } from './Routing/Menu';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/* <App />
      <HeaderClass></HeaderClass>
      <ProductClass productName="Samsung" productPrice="20000" ></ProductClass> */}
  <BrowserRouter>

      <Menu></Menu>
      <RouterHome></RouterHome>

</BrowserRouter>
     
   </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
