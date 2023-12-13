import { combineReducers } from "redux";

import reducerData from "./reducerData";
import reducerDataWithSaga from "./reducerDataWithSaga";

const allReducers = combineReducers({
    todos : reducerDataWithSaga,
});

export default allReducers
