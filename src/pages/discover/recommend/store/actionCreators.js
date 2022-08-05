import * as actionTypes from "./constants";

import {getTopBanner, getHotRecommend, getNewAlbum} from "@/services/recommend";

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  banners: res.banners,
});

const changeHotRecommend = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  result: res.result,
});

export const changeNewAlbum = (res) => {
  return {type: actionTypes.CHANGE_NEW_ALBUM, albums: res.albums};
};

export const getBanner = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};

export const getRecommend = () => {
  return (dispatch) => {
    getHotRecommend().then((res) => {
      dispatch(changeHotRecommend(res));
    });
  };
};

export const getAlbum = () => {
  return (dispatch) => {
    getNewAlbum(10, 0).then((res) => {
      dispatch(changeNewAlbum(res));
    });
  };
};
