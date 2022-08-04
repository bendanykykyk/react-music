import React, {memo} from "react";

const YKSongs = memo((props) => {
  const {cat} = props.location;

  return <div>{cat ? `我是${cat}那过来的` : "我直接进来的"}</div>;
});

export default YKSongs;
