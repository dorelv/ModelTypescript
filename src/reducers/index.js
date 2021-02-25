
import { combineReducers } from 'redux';

import Messaggio from './UserReducer';

export default combineReducers({ 
    messaggioReducer: Messaggio,
});