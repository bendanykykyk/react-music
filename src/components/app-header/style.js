import styled from "styled-components";
export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20b0c;
  }
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
  .select-list {
    display: flex;
    line-height: 70px;
    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
        &:hover {
          background: #000;
          text-decoration: none;
        }
      }

      :last-of-type a {
        position: relative;
        ::after {
          content: "";
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          position: absolute;
          top: 20px;
          right: -15px;
          width: 28px;
          height: 19px;
        }
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRightWrapper = styled.div`
  color: #fff;
`;
