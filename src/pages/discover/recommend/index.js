import React, {memo} from "react";
import YKHotRecommend from "./cnps/hot-recommend";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import TopBanner from "./cnps/top-banner";
import YKNewAlbum from "./cnps/new-album";
const YKRecommend = memo(() => {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <YKHotRecommend></YKHotRecommend>
          <YKNewAlbum></YKNewAlbum>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

export default YKRecommend;
