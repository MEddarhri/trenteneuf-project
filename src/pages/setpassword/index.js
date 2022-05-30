import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  FixHiddenColorsRight,
  Form,
  LoginParagraph,
  MainContainer,
  NavLogin,
  PasswordBar,
  PasswordBarsContainer,
  PasswordStatus,
  PostMailImg,
  ReturnButton,
  TitleFormLogin,
} from './Styles';
import MainLogo from 'shared/logo';
import Input from 'shared/input';
import Button from 'shared/loginbutton';

import { BsArrowLeftShort } from 'react-icons/bs';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import API from 'API';
import { checkpassword } from 'helpers/checkPassword';

const Index = () => {
  const user = useSelector((state) => state.user.value);
  const [formData, setFormData] = useState({ password: '' });
  //!password status
  const passwordStatus = [
    'Mot de passe trop faible',
    'Mot de passe convenable',
    'Bon mot de passe',
    'Mot de passe excellent',
  ];

  //!handle error messages
  const [errorMsg, setErrorMsg] = useState(null);
  //!loading
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //! handle change formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formData.password.length === 0) {
      setErrorMsg('Code requis');
    }
  };
  //!handle Submit Login

  const handleSubmit = async () => {
    if (formData.password.length > 1) {
      //send to endpoint
      setLoading(true);
      try {
        const res = await API.post(
          '/auth/set-password',
          formData,

          {
            headers: {
              Authorization: 'Bearer ' + user.tokens.access.token,
            },
          }
        );
        console.log(res);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const ReturnPasswordBarsStatus = (strength) => {
    switch (strength) {
      case 0:
        return (
          <>
            <PasswordBar />
            <PasswordBar />
            <PasswordBar />
            <PasswordBar />
          </>
        );
      case 1:
        return (
          <>
            <PasswordBar color='#DF2935' />
            <PasswordBar />
            <PasswordBar />
            <PasswordBar />
          </>
        );

      case 2:
        return (
          <>
            <PasswordBar color='#FFB30F' />
            <PasswordBar color='#FFB30F' />
            <PasswordBar />
            <PasswordBar />
          </>
        );

      case 3:
        return (
          <>
            <PasswordBar color='#0F61FF' />
            <PasswordBar color='#0F61FF' />
            <PasswordBar color='#0F61FF' />
            <PasswordBar />
          </>
        );

      case 4:
        return (
          <>
            <PasswordBar color='#00B963' />
            <PasswordBar color='#00B963' />
            <PasswordBar color='#00B963' />
            <PasswordBar color='#00B963' />
          </>
        );

      default:
        break;
    }
  };

  return (
    <MainContainer>
      <FixHiddenColorsRight />
      <Container>
        <ContainerLeft>
          <NavLogin>
            <MainLogo />
          </NavLogin>
          <Form>
            <TitleFormLogin>
              Definissez votre nouveau mot de passe
            </TitleFormLogin>
            <LoginParagraph>
              Choisissez un mot de passe sécurisé dont vous vous souviendrez
              facilement.
            </LoginParagraph>
            <Input
              label='Mot de passe'
              inputType='password'
              placeHolder='Saisissez votre mot de passe ici'
              name='password'
              changeFunction={handleChange}
              value={formData.password}
            />
            <PasswordBarsContainer>
              {ReturnPasswordBarsStatus(checkpassword(formData.password))}
            </PasswordBarsContainer>
            {checkpassword(formData.password) >= 1 && (
              <PasswordStatus>
                {passwordStatus[checkpassword(formData.password) - 1]}
              </PasswordStatus>
            )}
            <div onClick={handleSubmit}>
              <Button
                title='confirmer'
                btnDisabled={checkpassword(formData.password) <= 3}
              />
            </div>

            <Link to='/verification'>
              <ReturnButton>
                <BsArrowLeftShort size='24px' />
                Retour
              </ReturnButton>
            </Link>
          </Form>
        </ContainerLeft>
        <ContainerRight>
          <PostMailImg src='/images/user-holding-phone.png' />
        </ContainerRight>
      </Container>
    </MainContainer>
  );
};

export default Index;
