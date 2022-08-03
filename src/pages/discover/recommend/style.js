import styled from "styled-components";

export const RecommendWrapper = styled.div`
  background: url(${(props) => props.bgImage});
  .banner {
    height: 270px;
    display: flex;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    height: 270px;
    .image {
      width: 100%;
    }
  }
`;
export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`;
