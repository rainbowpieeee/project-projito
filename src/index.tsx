import React from 'react';
import './index.css';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './services/store'
import {createRoot} from "react-dom/client";

function AppRender() {
  return (
    <React.StrictMode>
      <Provider store={configureStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(<AppRender />);

