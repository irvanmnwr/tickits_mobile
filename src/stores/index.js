import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducer';

// TAMBAHKAN SETUP REDUX PERSIST
// ...

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger),
);
// let store = createStore(rootReducer, applyMiddleware(promiseMiddleware, logger));
let persistor = persistStore(store);
// let persistor = "test";

export default {store, persistor};

// export default () => {
//   let store = createStore(persistedReducer, applyMiddleware(promiseMiddleware, logger));
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
