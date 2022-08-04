import React, {memo, useEffect, useState, useCallback, useRef} from "react";

import {BannerWrapper, BannerLeft, BannerRight, BannerControl} from "./style";

import {Carousel} from "antd";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getBanner} from "../../store/actionCreators";

const YKTopBanner = memo(() => {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  // redux相关
  const dispatch = useDispatch();
  const {topBanners} = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  // 其他hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  // 其他逻辑
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            effect="fade"
            autoplay
            beforeChange={bannerChange}
          >
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
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default YKTopBanner;
