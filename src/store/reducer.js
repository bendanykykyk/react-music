import {combineReducers} from "redux-immutable";

// 引入页面模块的reducer
import {reducer as recommendRender} from "@/pages/discover/recommend/store";

export default combineReducers({
  recommend: recommendRender,
});
