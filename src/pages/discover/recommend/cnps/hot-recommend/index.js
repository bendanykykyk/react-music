import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {HotRecommendWrapper} from "./style";
import {getRecommend} from "../../store/actionCreators";
import ThemeCover from "@/components/theme-cover";
import ThemeHeaderNav from "@/components/theme-header-nav";
import {useHistory} from "react-router-dom";
const YKHotRecommend = memo(() => {
  const {hotRecommends} = useSelector((state) => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"]),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);
  const history = useHistory();
  const keywordClick = (keyword) => {
    history.push({pathname: "/discover/songs", cat: keyword});
  };
  return (
    <HotRecommendWrapper>
      <ThemeHeaderNav
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
        keywordClick={keywordClick}
      ></ThemeHeaderNav>
      <div className="recommend-list">
        {hotRecommends.slice(0, 8).map((item) => {
          return <ThemeCover info={item} key={item.id}></ThemeCover>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default YKHotRecommend;
