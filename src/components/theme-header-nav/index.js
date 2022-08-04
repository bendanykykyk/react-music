import React, {memo} from "react";
import {Link} from "react-router-dom";
import {ThemeHeaderNavWrapper} from "./style";

const ThemeHeaderNav = memo((props) => {
  const {title, keywords, moreLink, keywordClick} = props;
  return (
    <ThemeHeaderNavWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="link" onClick={(e) => keywordClick(item)}>
                  {item}
                </span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderNavWrapper>
  );
});

export default ThemeHeaderNav;
