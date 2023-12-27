import { produce } from "immer";
import { DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, FETCH_FAILURE, FETCH_REQUEST, FETCH_REQUEST_By_ID, FETCH_SUCCESS, FETCH_SUCCESS_BY_ID, GET_TODOS, POST_FAILURE, POST_REQUEST, POST_SUCCESS, POST_TODO, PUT_FAILURE, PUT_REQUEST, PUT_SUCCESS, RESTORE_DONE_FAUILURE, RESTORE_DONE_SUCCESS, UPDATE_DONE_FAUILURE, UPDATE_DONE_SUCCESS, actionStatus } from "../../Utils/utils";

const initState = [
]
const reducerDataWithSaga = (state = initState, action) => {
    return produce(state , draft => {
        switch (action.type) {
            case FETCH_REQUEST:
              break;
            case FETCH_SUCCESS:
              draft.push(...action.payload)
              break;
            case FETCH_FAILURE:
              throw JSON.stringify(action.payload);
            case POST_SUCCESS:
              draft.push(action.payload);
              break;
            case POST_FAILURE:
                throw JSON.stringify(action.payload);
            case DELETE_SUCCESS:
                return draft.filter(item => item.id !== action.payload.id);
            case DELETE_FAILURE:
              throw JSON.stringify(action.payload);
            case PUT_SUCCESS:
              const {id , name} = action.payload;
              return draft.map( item => item.id === id ? ({...item, name:name}) : item);
            case PUT_FAILURE:
              throw JSON.stringify(action.payload);
            case RESTORE_DONE_SUCCESS:
              draft.map(item => {
                if(item.done) item.done = false
              })
              break;
            case RESTORE_DONE_FAUILURE:
              throw JSON.stringify(action.payload);
            case UPDATE_DONE_SUCCESS:
                const {id:idUpdateDone ,done} = action.payload;
                draft = draft.map( item => {
                    if(item.id === idUpdateDone)
                        return {...item , done:done ? actionStatus.COMPLETE : actionStatus.ACTIVCE};
                    else return item;
                })
                return draft;
            case UPDATE_DONE_FAUILURE:
              throw JSON.stringify(action.payload)
            default:
              return state;
          }
    })
  };

  
  export default reducerDataWithSaga