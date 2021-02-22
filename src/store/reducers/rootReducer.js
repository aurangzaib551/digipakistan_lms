import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import auth from "./authReducer";

export default combineReducers({
  firebase: firebaseReducer,
  auth,
});
