import { redirect } from "react-router-dom";
import { urlTodo as url, urlTodo } from "../Utils/utils";
import {call} from 'redux-saga/effects'
import axios from "axios"
export function* getData({page,limit}){
    try {
        const res = yield call(axios.get,`${urlTodo}?page=${page}&limit=${limit}`);
        if(res.status >= 200 && res.status <= 299)
            return res.data;
        else if(res.status === 404)
            throw "404 not found"
    } catch (error) {
        throw error
    }
}

export function* getDataById  (id){
    try {
        const res = yield call(axios.get ,`${url}/${id}`);
        if(res.status >= 200 && res.status <= 299)
            return res.data;
    } catch (error) {
        throw error
    }
}

export function* addData(data){
    try{
        const res  = yield call(axios.post, url, data);
        if(res.status >= 200 && res.status <= 299)
            return res.data;
        else if(res.status >= 500 && res.status <= 599)
            throw "Server err response";
    }catch(err){
        throw err;
    }
}

export function* updateDataById ({id,name}){
    try{
        const res  = yield call(axios.put,`${url}/${id}`, {name});
        if(res.status >= 200 && res.status <= 299)
        return res.data;
    }catch(err){
        throw err;
    }
}

export function* deleteDataById ( id){
    try{
        const res  = yield call(axios.delete, `${url}/${id}`);
        if(res.status >= 200 && res.status <= 299)
        return res.data;
    }catch(err){
        throw err;
    }
}

export function* searchStatus({payload}){
    const url = new URL(urlTodo); 
    url.searchParams.append("done" , payload.done);
    const res = yield call(axios.get, url);
    return res.data;
}

export function* getLengthDataByStatus({payload}){
    const res = yield axios(()=> {
        return {
        method:'get',
        url:urlTodo,
        data:payload.done,
    }
})
}

export function* restoreDone(done){
    
}

export function* updateDoneById({id,done}){
    const res = yield call(()=>{
        return axios({
            method:'put',
            url:`${urlTodo}/${id}`,
            data:{done}
        })
    })
    return res.data
}