import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;
  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    .album {
      width: 640px;
      height: 150px;
      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
    .button {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .left {
      background-position: -260px -75px;
    }
    .right {
      background-position: -300px -75px;
    }
  }
`;
