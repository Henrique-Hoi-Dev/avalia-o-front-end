import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListProduct from './pages/ListProduct';
import RegistrationProduct from './pages/RegistrationProduct';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/list" exact component={ListProduct} />
      <Route path="/product" exact component={RegistrationProduct} />
      <Route
        path="/product/:id"
        exact
        render={(props) => <RegistrationProduct {...props} />}
      />
    </BrowserRouter>
  );
}

export default Routes;
