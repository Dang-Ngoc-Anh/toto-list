import { actionStatus, method } from "../../Utils/utils";
import data from '../../Data/data.json'

export const reducerData = (state = data , action)=>{
    switch (action.type) {
        case method.get:
            return state;
        case method.post:
            return [...state,action.payload];
        case method.delete:
            state = state.filter( item => item.id !== action.payload)
            return [...state];
        case method.put:
            const {id , result} = action.payload;
            state = state.map( item => item.id === id ? ({...item, name:result}) : item);
            return [...state];
        case `${method.put}/done`:
            const {id:idUpdateDone ,checked} = action.payload;
            state = state.map( item => {
                if(item.id === idUpdateDone)
                    return {...item , done:checked ? actionStatus.COMPLETE : actionStatus.ACTIVCE};
                else return item;
            })
            return [...state]
        case `${method.put}/clear-done`:
            state = state.map(item =>{
                if(item.done){
                    return {...item , done:actionStatus.ACTIVCE}
                }else
                    return item
            });
            return [...state];
        default:
            return state;
            
    }
}

export default reducerData