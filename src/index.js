import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FontLink from './FontLink';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './Сomponents/Categories/Categories';
import Products from './Сomponents/Products/Products';
import Sales from './Сomponents/Sales/Sales';
import Cart from './Сomponents/Cart/Cart'; 
import Error from './Сomponents/Error/Error';
import Tools from './Сomponents/Categories/Tools';
import Secateurs from './Сomponents/Products/Secateurs';
import Collection from './Сomponents/Products/Collection';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <FontLink />
      <Routes> {}
        <Route path="/" element={<App/>} /> {}
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<Error />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/secateurs" element={<Secateurs />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
