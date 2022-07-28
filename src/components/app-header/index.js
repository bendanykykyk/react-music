import React, {memo} from "react";
import {NavLink} from "react-router-dom";

import {HeaderWrapper, HeaderLeftWrapper, HeaderRightWrapper} from "./style";
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
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
                  <div className="select-item" key={index}>
                    {showSelectItem(item, index)}
                  </div>
                );
              })}
            </div>
          </HeaderLeftWrapper>
          <HeaderRightWrapper>
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            ></Input>
            <div className="center">创作者中心</div>
            <div>登录</div>
          </HeaderRightWrapper>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  );
});
