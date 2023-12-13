import { getData , getDataById , addData , updateDataById,deleteDataById } from "../../api/api";
import {  DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, POST_FAILURE, POST_REQUEST, POST_SUCCESS} from "../../Utils/utils";
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects'
function* fetchData(){
    try {
        const res = yield getData();
        yield put({ type: FETCH_SUCCESS, payload: res });
    } catch (err) {
        yield put({ type: FETCH_FAILURE, payload: err.message });
    }
}

function* postData(action){
    try {
        const res =  yield call(addData, action.payload);
        yield put({ type: POST_SUCCESS, payload: res });
    } catch (err) {
        yield put({ type: POST_FAILURE, payload: err.message });
    }
}

function* deleteData(action){
    try {
        const res =  yield call(deleteDataById, action.payload);
        yield put({ type: DELETE_SUCCESS, payload: res });

    } catch (err) {
        yield put({ type: DELETE_FAILURE, payload: err.message });
    }
}
function* mySaga(){
    yield takeLatest(FETCH_REQUEST , fetchData);
    yield takeEvery(POST_REQUEST , postData);
    yield takeEvery(DELETE_REQUEST , deleteData);
}

function* helloSaga(){
    console.log("hello saga");
}

export default function* rootSaga() {
    yield all([
      helloSaga(),
      mySaga()
    ])
  }