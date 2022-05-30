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

export const Policy = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #130f26;
  margin-bottom: 62px;
`;
export const FooterLogin = styled.footer`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 16px;
  }
`;
export const FooterLinks = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #636e72;
  &:hover {
    text-decoration: underline;
  }
`;

export const SplitFooter = styled.div`
  width: 4px;
  height: 5px;
  border-radius: 100px;
  background-color: #636e72;
`;

export const TrustImg = styled.img`
  display: block;
  margin-bottom: 60px;
`;

export const ReviewContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #142b37;
  border-radius: 18px;
  width: 494px;
  height: 263px;
  margin-bottom: 120px;
  padding: 25px 34px 63px 34px;
  & > * + * {
    margin-top: 22px;
  }
`;

export const ProfilPictureLogin = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 40px;
`;
export const ReviewParagraph = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  text-align: center;
`;

export const NameContainer = styled.div`
  position: absolute;

  height: 70px;
  padding: 16px;
  background: #00b963;
  border-radius: 18px;
  bottom: -40px;
  right: 50px;
`;
export const FullName = styled.p`
  display: block;
  max-width: 106px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  color: #ffffff;
`;

export const Cursor = styled.img`
  position: absolute;
  top: -15px;
  left: -13px;
`;

export const JoinUsParagraph = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  max-width: 405px;
  text-align: center;

  color: #142b37;
`;
