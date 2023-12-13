import { produce } from "immer";
import { DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, GET_TODOS, POST_FAILURE, POST_REQUEST, POST_SUCCESS, POST_TODO } from "../../Utils/utils";

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
              draft = draft.filter(item => item.id !== action.payload.id)
              break;
            case DELETE_FAILURE:
              throw JSON.stringify(action.payload);
            default:
              return state;
          }
    })
  };

  
  export default reducerDataWithSaga