import { actionStatus } from "../../Utils/utils";

const dataFilter = {
    all:[],
    complete:[],
    active:[]
}

export const reducerData = (state = dataFilter, action)=>{
    switch (action.type) {
        case actionStatus.ALL:
            return {
                ...state,
                all:action.payload
            };
        case actionStatus.ACTIVCE:
            return {
                ...state,
                active:action.payload
            };
        case actionStatus.COMPLETE:
            return {
                ...state,
                complete:action.payload
            };
        default:
            return state;
            
    }
}



// export const reducerData = (state = [], action)=>{
//     switch (action.type) {
//         case actionStatus.ALL:
//             state = action.payload;
//             return [...state];
//         case actionStatus.ACTIVCE:
//             state = action.payload;
//             return [...state];
//         case actionStatus.COMPLETE:
//             state = action.payload;
//             return [...state];
//         default:
//             return state=[];
            
//     }
// }

export default reducerData