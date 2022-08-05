import React, {memo} from "react";
import {PropTypes} from "prop-types";
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

// 默认值
ThemeHeaderNav.defaultProps = {
  keywords: [],
};
// 类型
ThemeHeaderNav.propTypes = {
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
  moreLink: PropTypes.string.isRequired,
};

export default ThemeHeaderNav;
