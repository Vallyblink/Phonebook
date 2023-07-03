import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store)
 

