import {takeEvery, put, call} from 'redux-saga/effects'

import { 
    CLIENT_INFO,
    GET_CLIENT_INFO_SUCCESS
} from './actions'

function* handler() {
    yield takeEvery(CLIENT_INFO, getClientInfo)
}

function* getClientInfo(action) {

    console.log(action)

    try{
        ////Api call

        //const clientInfo = yield call(await client.exchangeInfo(), action.payload.userId);

        //const clientInfo = yield call(client.exchangeInfo())

        yield put({
            type: GET_CLIENT_INFO_SUCCESS,
            payload: {
                timezone:'dgtdgd',
                serverTime:'prov',
                rateLimits:[1,2,3,4]
            },
        });

    }catch (err){
        ////errori
    } 

}

export {handler}