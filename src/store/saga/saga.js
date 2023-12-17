import { getData , getDataById , addData , updateDataById,deleteDataById, searchStatus, restoreDone, updateDoneByid, updateDoneById } from "../../api/api";
import {  DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, POST_FAILURE, POST_REQUEST, POST_SUCCESS, PUT_FAILURE, PUT_REQUEST, PUT_SUCCESS, RESTORE_DONE_FAUILURE, RESTORE_DONE_REQUEST, RESTORE_DONE_SUCCESS, UPDATE_DONE_FAUILURE, UPDATE_DONE_REQUEST, UPDATE_DONE_SUCCESS} from "../../Utils/utils";
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects'
function* fetchData(action){
    try {
        const res = yield getData(action.payload);
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

function* putData(action){
    try {
        const res =  yield call(updateDataById, action.payload);
        yield put({ type: PUT_SUCCESS, payload: res });
    } catch (err) {
        yield put({ type: PUT_FAILURE, payload: err.message });
    }
}

function* searchStatusData(action){
    try {
        const res = yield searchStatus(action.payload);
        yield put({type:"SEARC_STATUS_SUCCESS" , payload:res})
    } catch (error) {
        yield put({type:"SEARCH_STATUS_FAILURE" , payload:error.message})
    }
}

function* restoreDoneData(){
    try {
        yield put({type:RESTORE_DONE_SUCCESS})
        yield restoreDone();
    } catch (error) {
        yield put({type:RESTORE_DONE_FAUILURE , payload:error.message})
    }
}

function* updateDone(action){
    try {
        const res =  yield updateDoneById(action.payload);
        yield put({type:UPDATE_DONE_SUCCESS , payload:res})
    } catch (error) {
        yield put({type:UPDATE_DONE_FAUILURE , payload:error.message});
    }
}
function* mySaga(){
    yield takeLatest(FETCH_REQUEST , fetchData);
    yield takeEvery(POST_REQUEST , postData);
    yield takeEvery(DELETE_REQUEST , deleteData);
    yield takeEvery(PUT_REQUEST , putData);
    yield takeEvery("SEARC_STATUS_SUCCESS" , searchStatusData);
    yield takeLatest(RESTORE_DONE_REQUEST , restoreDoneData);
    yield takeLatest(UPDATE_DONE_REQUEST , updateDone);
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