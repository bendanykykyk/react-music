import React, {memo} from "react";
import {NavLink} from "react-router-dom";

import {HeaderWrapper, HeaderLeftWrapper, HeaderRightWrapper} from "./style";
export default memo(function YKAppHeader() {
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeftWrapper>
            <a href="#/" className="logo sprite_01">
              {}
            </a>
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
