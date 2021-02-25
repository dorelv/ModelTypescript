import {takeEvery, put} from 'redux-saga/effects'

import { 
    GET_ALL_USER_INFO_REQUEST,
    GET_ALL_USER_INFO_REQUEST_SUCCESS
} from './actions'

function* handler() {
    yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo)
}

function* getAllUserInfo(action) {

    console.log(action)

    try{
        ////Api call
        yield put({
            type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
            payload: {
              id: 'id1',
              name: 'Michael',
              email: 'anothertestemail@test.com',
            },
        });

    }catch (err){
        ////errori
    } 

}

export {handler}