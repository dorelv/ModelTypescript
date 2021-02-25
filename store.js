/*import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {reducer} from './app/models/root-reducers'
import {handler as userSaga} from './app/models/users/sagas'
import {handler as binanceSaga} from './app/models/binance/sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(userSaga, binanceSaga)

export {store}*/

import AsyncStorage from '@react-native-async-storage/async-storage';
//import ReduxThunk from 'redux-thunk';
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

/*const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(
    ReduxThunk,  
  ),
);

let persistor = persistStore(store);

export {
  store,
  persistor,
};*/