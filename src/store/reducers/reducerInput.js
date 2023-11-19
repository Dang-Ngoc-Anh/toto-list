import { method } from "../../Utils/utils";


const reducerInput = (state = null , action)=>{
    switch (action.type) {
        case method.get:
            return state = action.payload;
        default:
            return state = null;
    }
}

export default reducerInput