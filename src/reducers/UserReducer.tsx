import {
  API_SUCCESS,
  API_REQUEST
} from '../actions/types';
  
  const INITIAL_STATE = {
    messaggio: ''
  };

  type Red = {
    type: string,
    payload: {messaggio: string}
  }
  
  export default (state = INITIAL_STATE, action: Red) => { ///parametri stato e azione
  
    switch (action.type) {
      case API_SUCCESS:      
        return {...state,
            messaggio: action.payload.messaggio,
        }
      default:
        return state;
    }
  };
    