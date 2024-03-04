import { combineReducers } from "redux"
import authReducer from "./authReducer"

const allReducer = {
    auth:authReducer
}

const rootReducer = combineReducers(allReducer)

export default rootReducer