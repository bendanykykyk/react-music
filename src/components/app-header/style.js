import styled from "styled-components";
export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
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
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
`;

export const HeaderRightWrapper = styled.div`
  color: #fff;
`;
