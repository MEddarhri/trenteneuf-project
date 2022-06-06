import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 120px 18px 34px;
  border-bottom: 1px solid #f0f0f0;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 64px;
  }
`;
export const NavRight = styled.div`
  display: flex;
  & > * + * {
    margin-left: 28px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  & > * + * {
    margin-left: 48px;
  }
`;

export const ListItems = styled.li`
  display: block;
`;

export const ListItemsLinks = styled.a`
  /* padding: 31px 0 26px 0; */
  padding: 45px 0 32px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #636e72;
  ${(props) =>
    props.activeLink && 'font-weight: 700;border-bottom:4px solid #00B963;'}
`;

export const AddGuardBtn = styled.button`
  background: #142b37;
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
`;

export const SplitNavRight = styled.div`
  border-right: 1px solid #f0f0f0;
`;

export const ImgContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background: #dfe6e9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DefaultImg = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

//!img when it's available
// export const Img = styled.img``
