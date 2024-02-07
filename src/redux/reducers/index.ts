import { combineReducers } from "redux";
import packagesReducer from "./packagesReducer";

const reducers = combineReducers({
	packages: packagesReducer
});


export default reducers;