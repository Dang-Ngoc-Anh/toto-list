import { method } from "../../Utils/utils"

export const getResultInput = (result)=>{
    return {
        type:method.get,
        payload:result
    }
}