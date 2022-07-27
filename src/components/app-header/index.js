import React, {memo} from "react";
import {NavLink} from "react-router-dom";

import {HeaderWrapper, HeaderLeftWrapper, HeaderRightWrapper} from "./style";

import {headerLinks} from "../../common/local-data";

export default memo(function YKAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeftWrapper>
            <a className="logo sprite_01" href="#/">
              {}
            </a>
            <div className="select-list">
              {headerLinks.map((item, index) => {
                return (
                  <div className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                );
              })}
            </div>
          </HeaderLeftWrapper>
          <HeaderRightWrapper>
            <div>右边部分</div>
          </HeaderRightWrapper>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  );
});
