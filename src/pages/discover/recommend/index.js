import React, {memo, useEffect} from "react";

import {getTopBanner} from "@/services/recommend";

const YKRecommend = memo(() => {
  useEffect(() => {
    getTopBanner().then((res) => {
      console.log(res);
    });
  });
  return <div>YKRecommend</div>;
});

export default YKRecommend;
