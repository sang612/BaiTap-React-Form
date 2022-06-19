import { combineReducers } from "redux";
import xucxacReducer from "./xucxacRuducer";
import sinhvienReducer from "./sinhvienReducer";

// combineReducers la ham gop nhieu reducer thanh 1 reducer tong duy nhat
const rootReducer = combineReducers({
  xucxac: xucxacReducer,
  sinhvien: sinhvienReducer,
});

export default rootReducer;
