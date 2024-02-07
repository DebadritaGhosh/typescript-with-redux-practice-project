import { combineReducers } from "redux";
import packagesReducer from "./packagesReducer";

const reducers = combineReducers({
	packages: packagesReducer
});


export default reducers;

export type RootState = ReturnType<typeof reducers>;