import React, {memo, useEffect, useState, useCallback} from "react";

import {RecommendWrapper, BannerLeft, BannerRight} from "./style";

import {Carousel} from "antd";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getBanner} from "./store/actionCreators";

const YKRecommend = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const {topBanners} = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <RecommendWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay beforeChange={bannerChange}>
            {topBanners.map((banner) => {
              return (
                <div className="banner-item" key={banner.imageUrl}>
                  <img
                    className="image"
                    src={banner.imageUrl}
                    alt={banner.imageUrl}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
      </div>
    </RecommendWrapper>
  );
});

export default YKRecommend;
