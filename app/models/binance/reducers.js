import { GET_CLIENT_INFO_SUCCESS } from "./actions"

const initialState = {
    timezone:'1',
    serverTime:'',
    rateLimits:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CLIENT_INFO_SUCCESS: {

            const {timezone, serverTime, rateLimits} = action.payload

            return{
                timezone,
                serverTime,
                rateLimits
            }
        }
        default: 
            return state
    }
}

export {reducer}