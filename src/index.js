import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store}  from './redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
 
  </React.StrictMode>
);
