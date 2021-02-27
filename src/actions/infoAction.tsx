
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { apiSuccess, API_REQUEST } from './types';
import Binance from 'binance-api-react-native'

const client = Binance()

const getTimeBinance = async () => await client.time()

export function* rootSaga() {
    yield takeEvery(API_REQUEST, apiSaga)
}

function* apiSaga() {

    try{
        const time = yield call(getTimeBinance)
        yield put(apiSuccess({messaggio: JSON.stringify(time)}));
    }catch (err){
        ////errori
    } 

}

