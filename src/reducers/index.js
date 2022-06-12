import { combineReducers } from "redux";
import xucxacReducer from "./xucxacRuducer";

// combineReducers la ham gop nhieu reducer thanh 1 reducer tong duy nhat
const rootReducer = combineReducers({
  xucxac: xucxacReducer,
});

export default rootReducer;
