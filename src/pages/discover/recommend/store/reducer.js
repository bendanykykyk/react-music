import {Map} from "immutable";
import * as actionTypes from "./constants";

// 使用这个Map 能让后续set的时候生成新的对象返回，并且不会修改原本的对象。
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  albums: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.banners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.result);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("albums", action.albums);
    default:
      return state;
  }
};

export default reducer;
