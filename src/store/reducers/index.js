import { combineReducers } from "redux";

import reducerData from "./reducerData";
import reducerInput from "./reducerInput";
import reducerDataFilter from "./reducerDataFilter";

const allReducers = combineReducers({
    reducerData,
    reducerInput,
    reducerDataFilter
});

export default allReducers
