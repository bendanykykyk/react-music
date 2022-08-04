import * as actionTypes from "./constants";

import {getTopBanner, getHotRecommend} from "@/services/recommend";

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  banners: res.banners,
});

export const getBanner = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};

const changeHotRecommend = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  result: res.result,
});

export const getRecommend = () => {
  return (dispatch) => {
    getHotRecommend().then((res) => {
      dispatch(changeHotRecommend(res));
    });
  };
};
