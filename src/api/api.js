import { redirect } from "react-router-dom";
import { urlTodo as url } from "../Utils/utils";
import axios from "axios"
export const getData = async ()=>{
    try {
        const res = await axios.get(url);
        if(res.status >= 200 && res.status <= 299)
            return res.data;
        else if(res.status === 404)
            throw "404 not found"
    } catch (error) {
        throw error
    }
}

export const getDataById = async (id)=>{
    try {
        const res = await axios.get(`${url}/${id}`);
        if(res.status >= 200 && res.status <= 299)
            return res.data;
    } catch (error) {
        throw error
    }
}

export const addData = async(data)=>{
    try{
        const res  = await axios.post(url, data);
        if(res.status >= 200 && res.status <= 299)
            return res.data;
        else if(res.status >= 500 && res.status <= 599)
            throw "Server err response";
    }catch(err){
        throw err;
    }
}

export const updateDataById = async ( id , value)=>{
    try{
        const res  = await axios.put(`${url}/${id}` , value);
        if(res.status >= 200 && res.status <= 299)
        return res.data;
    }catch(err){
        throw err;
    }
}

export const deleteDataById = async ( id)=>{
    try{
        const res  = await axios.delete(`${url}/${id}`);
        if(res.status >= 200 && res.status <= 299)
        return res.data;
    }catch(err){
        throw err;
    }
}