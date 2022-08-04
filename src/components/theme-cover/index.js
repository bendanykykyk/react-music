import React, {memo} from "react";
import {getSizeImage, getCount} from "@/utils/format-utils";
import {ThemeCoverWrapper} from "./style";
const ThemeCover = memo((props) => {
  const {info} = props;
  return (
    <ThemeCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor"></div>
        <div className="info sprite_covor">
          <div>
            <i className="sprite_icon ear-phone"></i>
            <span>{getCount(info.playCount)}</span>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        <a href={"https://music.163.com/#/playlist?id=" + info.id}>
          {info.name}
        </a>
      </div>
    </ThemeCoverWrapper>
  );
});

export default ThemeCover;
