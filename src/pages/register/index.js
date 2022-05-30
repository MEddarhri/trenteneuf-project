import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Cursor,
  FixHiddenColorsRight,
  FooterLinks,
  FooterLogin,
  Form,
  FullName,
  JoinUsParagraph,
  LoginButtonNav,
  LoginParagraph,
  MainContainer,
  NameContainer,
  NavLogin,
  Policy,
  ProfilPictureLogin,
  ReviewContainer,
  ReviewParagraph,
  SplitFooter,
  TitleFormLogin,
  TrustImg,
} from './Styles';
import MainLogo from 'shared/logo';
import Input from 'shared/input';
import Button from 'shared/loginbutton';
import Anchor from 'shared/link';
import API from 'API';
import FieldRequired from 'shared/fieldrequired';
import { setUser } from 'features/userSlice';

const Index = () => {
  const [formData, setFormData] = useState({ email: '' });
  //!handle error messages
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //!conditions
  let conditionEmail = formData.email.length === 0 && firstTime;

  //! handle change formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formData.email.length === 0) {
      console.log('zero');
      setErrorMsg(null);
    }
  };
  //!handle Submit Login

  const handleSubmit = async () => {
    if (formData.email.length > 1) {
      //send to endpoint
      setLoading(true);
      try {
        const res = await API.post('/auth/register', formData);
        console.log(res);
        dispatch(setUser(res.data.user));
        navigate('/verification');
      } catch (error) {
        setErrorMsg(error.response.data.message);
        setLoading(false);
      }
    }
  };
  return (
    <MainContainer>
      <FixHiddenColorsRight />
      <Container>
        <ContainerLeft>
          <NavLogin>
            <MainLogo />
            <Link to='/login'>
              <LoginButtonNav>Se connecter</LoginButtonNav>
            </Link>
          </NavLogin>
          <Form>
            <TitleFormLogin>Saisissez votre adresse e-mail</TitleFormLogin>
            <LoginParagraph>
              Vous en aurez besoin pour vous connecter et accéder à votre
              application Memedoc.
            </LoginParagraph>
            <Input
              label='Adresse e-mail'
              inputType='email'
              placeHolder='Nathalie.durand@exemple.com'
              name='email'
              changeFunction={handleChange}
              value={formData.email}
            />
            {conditionEmail && <FieldRequired message='Email requis' />}
            {errorMsg && <FieldRequired message={errorMsg} />}
            <div onClick={handleSubmit}>
              <Button title='confirmer' loading={loading} />
            </div>

            <Policy>
              En cliquant sur Confirmer, vous acceptez
              <Anchor>politique de confidentialité</Anchor> notre applicable au
              traitement de vos données personnelles.
            </Policy>
            <FooterLogin>
              <FooterLinks>Privacy Policy</FooterLinks>
              <SplitFooter />
              <FooterLinks>Term of use</FooterLinks>
            </FooterLogin>
          </Form>
        </ContainerLeft>
        <ContainerRight>
          <TrustImg src='/images/trustpilot.png' />
          <ReviewContainer>
            <ProfilPictureLogin src='/images/profile-picture-login.png' />
            <ReviewParagraph>
              {`“In the tech world, you can’t afford to be slow. Because of Uizard,
            within five days of getting my idea – with only two days of working
            in the Uizard platform – I already had a proof of concept.”`}
              <NameContainer>
                <FullName>Nthalie Durand, WellPharma</FullName>
                <Cursor src='/images/cursor.png' />
              </NameContainer>
            </ReviewParagraph>
          </ReviewContainer>
          <JoinUsParagraph>
            Rejoingez +10,000 pharmaciens connectés
          </JoinUsParagraph>
        </ContainerRight>
      </Container>
    </MainContainer>
  );
};

export default Index;
