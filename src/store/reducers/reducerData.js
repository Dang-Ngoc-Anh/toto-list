import { actionStatus, method } from "../../Utils/utils";
import data from '../../Data/data.json'
import {produce}from 'immer'
export const reducerData = (state = data , action)=>{
    return produce(state , draft => {
        switch (action.type) {
            case method.get:
                return draft;
            case method.post:
                (draft.unshift(action.payload));
                break;
            case method.delete:
                return draft.filter( item => item.id !== action.payload);
            case method.put:
                const {id , result} = action.payload;
                return draft.map( item => item.id === id ? ({...item, name:result}) : item);
            case `${method.put}/done`:
                const {id:idUpdateDone ,checked} = action.payload;
                draft = draft.map( item => {
                    if(item.id === idUpdateDone)
                        return {...item , done:checked ? actionStatus.COMPLETE : actionStatus.ACTIVCE};
                    else return item;
                })
                return draft;
            case `${method.put}/restore-done`:
                draft = draft.map(item =>{
                    if(item.done){
                        return {...item , done:actionStatus.ACTIVCE}
                    }else
                        return item
                });
                return draft;
            default:
                return draft;
                
        }
    })
    
}

export default reducerData