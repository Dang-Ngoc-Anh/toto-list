import { actionStatus } from "../../Utils/utils"

export const getDataAll = (data)=>{
    return {
        type:actionStatus.ALL,
        payload:data
    }
}

export const getDataAcive = (data)=>{
    return {
        type:actionStatus.ACTIVCE,
        payload:data
    }
}


export const getDataComplete = (data)=>{
    return {
        type:actionStatus.COMPLETE,
        payload:data
    }
}

export const getDataClearComplete = (data)=>{
    return {
        type:actionStatus.CLEAR_COMPLETE,
        payload:data
    }
}