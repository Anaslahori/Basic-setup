import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// scroll bar

// project import
import App from './App';
import { store } from 'store';
import { ConfigProvider } from 'contexts/ConfigContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <ReduxProvider store={store}>
      <ConfigProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
  </ReduxProvider>
);