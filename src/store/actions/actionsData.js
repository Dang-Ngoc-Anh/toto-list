import { method } from "../../Utils/utils"

export const getData = ()=>{
    return {
        type: method.get,
    }
}

export const postData = (obj)=>{
    return {
        type: method.post,
        payload: obj
    }
}

export const putDataById = (id,result)=>{
    return {
        type: method.put,
        payload: {id,result}
    }
}

export const deleteDataById = (id)=>{
    return {
        type: method.delete,
        payload: id
    }
}

export const changeStatus = (id ,checked) =>{
    return {
        type:`${method.put}/done`,
        payload:{id, checked}
    }
}

export const clearStatus = () =>{
    return {
        type:`${method.put}/clear-done`,
    }
}