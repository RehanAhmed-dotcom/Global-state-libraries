import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const reducer = combineReducers({
  counter: counterReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
