import authReducer from './authReducer';
import assetReducer from './assetReducer';
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase"

const rootReducer = combineReducers({
    auth: authReducer,
    asset: assetReducer,
    firebase: firebaseReducer,
})

export default rootReducer;