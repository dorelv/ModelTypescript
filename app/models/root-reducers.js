import {combineReducers} from 'redux'
import {reducer as userReducer} from './users/reducers'
import {reducer as binanceReducer} from './binance/reducers'


const reducer = combineReducers({
    user: userReducer,
    binance: binanceReducer
})

export {reducer}