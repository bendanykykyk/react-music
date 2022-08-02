import React, {memo, useEffect} from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux";

import {getBanner, getRecommend} from "./store/actionCreators";

const YKRecommend = memo(() => {
  const state = useSelector(
    (state) => ({
      banners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);
  console.log(state);
  return <div>YKRecommend</div>;
});

export default YKRecommend;
