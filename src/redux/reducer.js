import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { contactsReducer } from './contacts/ContactSlice';




const persistConfig = {
  key: 'auth',
  storage,
  whitelist:['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistedReducer
});

export default rootReducer;