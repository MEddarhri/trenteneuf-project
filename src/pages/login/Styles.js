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
  background-color: #fff;
  padding: 50px;
`;

export const ContainerRight = styled.div`
  flex: 0.5;
  background-color: #f2f8f4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const NavLogin = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginButtonNav = styled.a`
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

export const Img = styled.img``;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 20px;
  }
`;

export const ForgotPassword = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: #142b37;
  text-align: left;
  margin: 18px 0 40px 0;
`;
