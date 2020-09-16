import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes history={history} />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}

export default App;
