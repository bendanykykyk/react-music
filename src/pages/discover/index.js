import React, {memo} from "react";
import {NavLink} from "react-router-dom";

import {discoverMenu} from "@/common/local-data";
import {DiscoverWrapper, TopMenu} from "./style";
import {renderRoutes} from "react-router-config";
const YKDiscover = memo((props) => {
  const {route} = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((menu) => {
            return (
              <div className="item" key={menu.title}>
                <NavLink to={menu.link}>{menu.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>

      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});

export default YKDiscover;
