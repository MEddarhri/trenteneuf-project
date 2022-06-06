import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
export const FixHiddenColorsRight = styled.div`
  position: absolute;
  width: 40vw;
  height: 100%;
  right: 0;
  top: 0;
  background-color: #f2f8f4;
  z-index: -1;
`;

export const ContainerLeft = styled.div`
  flex: 0.5;

  padding: 50px;
`;

export const ContainerRight = styled.div`
  flex: 0.5;
  background-color: #f2f8f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NavLogin = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginButtonNav = styled.span`
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;

  color: #142b37;
`;

export const Form = styled.div`
  max-width: 500px;
  padding: 120px 0;
  margin: 0 auto;
`;

export const TitleFormLogin = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  margin-bottom: 10px;
`;

export const LoginParagraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 43px;
  letter-spacing: 0.02em;
  color: #636e72;
`;

export const Tip = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  margin-bottom: 14px;
  letter-spacing: 0.02em;

  color: #b2bec3;
`;

export const SendCodeAgain = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #130f26;
  margin-bottom: 89px;
`;

export const ReturnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content:center
  background-color: transparent;
  color: #2d3436;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  padding: 14px 20px;
  border-radius: 4px;

  & > * + * {
    margin-left: 10px;
  }
  &:hover {
    background: #f0f3f5;
  }
`;

export const PostMailImg = styled.img``;

export const BoldText = styled.span`
  font-weight: 600;
  margin-left: 4px;
`;
