import { combineReducers } from "redux";
import accountReducer from "../reducers/accountReducer"
import user from "../reducers/user"

const reducers = combineReducers({
    account: accountReducer,
    // user
})

export default reducers