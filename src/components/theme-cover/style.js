import styled from "styled-components";

export const ThemeCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0 20px 0;
  .cover-top {
    position: relative;
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 -537px;

      height: 27px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ccc;
      padding: 0 10px;
      font-size: 12px;
      .ear-phone {
        margin-right: 5px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }
      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }
  .cover-bottom {
    margin-top: 5px;
    a {
      font-size: 14px;
      color: #000;
    }
  }
  .cover-source {
    color: #666;
  }
`;
