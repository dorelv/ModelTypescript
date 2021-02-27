
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './src/reducers/index';
import {rootSaga} from './src/actions'

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    //'messaggioReducer'
  ],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor, sagaMiddleware };

///////////////////////////////////////////////
