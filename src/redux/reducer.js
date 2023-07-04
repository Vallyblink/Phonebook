import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { contactsReducer } from './contacts/ContactSlice';




const persistConfig = {
  key: 'token',
  storage,
  whileList:['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer
});

export default rootReducer;