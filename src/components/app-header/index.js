import React, {memo} from "react";
import {NavLink} from "react-router-dom";

import {HeaderWrapper} from "./style";
export default memo(function YKAppHeader() {
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          {/* <NavLink to="/">发现音乐</NavLink>
          <NavLink to="/friend">我的朋友</NavLink>
          <NavLink to="/mine">我的</NavLink> */}
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  );
});
