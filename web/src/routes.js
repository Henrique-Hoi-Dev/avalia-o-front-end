import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListProduct from './pages/ListProduct';
import RegistrationProduct from './pages/RegistrationProduct';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/list" component={ListProduct} />
      <Route path="/record-product" component={RegistrationProduct} />
    </BrowserRouter>
  );
}

export default Routes;
