import { combineReducers } from "redux";

import reducerData from "./reducerData";
import reducerInput from "./reducerInput";

const allReducers = combineReducers({
    reducerData,
    reducerInput,
});

export default allReducers
