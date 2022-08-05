import React, {memo, useEffect, useRef} from "react";
import ThemeHeaderNav from "@/components/theme-header-nav";
import YKAlbumCover from "@/components/album-cover";
import {useDispatch, useSelector} from "react-redux";
import {NewAlbumWrapper} from "./style";
import {Carousel} from "antd";

import {getAlbum} from "../../store/actionCreators";

const YKNewAlbum = memo(() => {
  const {albums} = useSelector((state) => ({
    albums: state.getIn(["recommend", "albums"]),
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch]);
  const carouselRef = useRef();
  return (
    <NewAlbumWrapper>
      <ThemeHeaderNav
        title="新碟上架"
        moreLink="/discover/album"
      ></ThemeHeaderNav>
      <div className="content">
        <div
          className="left button sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></div>
        {/* 轮播图 */}
        <div className="album">
          <Carousel ref={carouselRef}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {albums.slice(item * 5, (item + 1) * 5).map((album) => {
                    return (
                      <YKAlbumCover key={album.id} info={album}></YKAlbumCover>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="right button sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  );
});

export default YKNewAlbum;
