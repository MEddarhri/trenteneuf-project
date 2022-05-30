import React, { useState } from 'react';

import {
  Container,
  ContainerInputs,
  ContainerLeft,
  ContainerRight,
  FixHiddenColorsRight,
  ForgotPassword,
  Form,
  Img,
  LoginParagraph,
  MainContainer,
  TitleFormLogin,
} from './Styles';

import Input from 'shared/input';
import Button from 'shared/loginbutton';
import FieldRequired from 'shared/fieldrequired';
import API from 'API';
import { useNavigate } from 'react-router-dom';
import { setTokens, setUser } from 'features/userSlice';
import { useDispatch } from 'react-redux';

const Index = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  //!handle error messages
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //! conditions

  let conditionEmail = formData.email.length === 0 && firstTime;
  let conditionPassword = formData.password.length === 0 && firstTime;

  //! handle change formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formData.email.length === 0) {
      setErrorMsg(null);
    }
  };
  //!handle Submit Login

  const handleSubmit = async () => {
    if (formData.email.length > 1 && formData.password.length > 1) {
      //send to endpoint
      setLoading(true);
      try {
        const res = await API.post('/auth/login', formData);
        console.log(res);
        dispatch(setUser(res.data.user));
        dispatch(setTokens(res.data.tokens));
        localStorage.setItem('token', res.data.tokens.access.token);
        navigate('/dashboard');
      } catch (error) {
        setErrorMsg(error.response.data.message);
        setLoading(false);
      }
    } else {
      setFirstTime(true);
    }
  };
  return (
    <MainContainer>
      <FixHiddenColorsRight />
      <Container>
        <ContainerLeft>
          <Form>
            <TitleFormLogin>Saisissez votre adresse e-mail</TitleFormLogin>
            <LoginParagraph>
              Vous en aurez besoin pour vous connecter et accéder à votre
              application Memedoc.
            </LoginParagraph>
            <ContainerInputs>
              <div>
                <Input
                  inputType='email'
                  placeHolder='E-mail'
                  value={formData.email}
                  changeFunction={handleChange}
                  name='email'
                />
                {conditionEmail && <FieldRequired message='Email requis' />}
                {errorMsg && <FieldRequired message={errorMsg} />}
              </div>
              <div>
                <Input
                  inputType='password'
                  placeHolder='Mot de passe'
                  value={formData.password}
                  changeFunction={handleChange}
                  name='password'
                />
                {conditionPassword === 0 && (
                  <FieldRequired message='Mot de passe requis' />
                )}
              </div>
            </ContainerInputs>
            <ForgotPassword>Mot de passe oublié</ForgotPassword>
            <div onClick={handleSubmit}>
              <Button title='confirmer' loading={loading} />
            </div>
          </Form>
        </ContainerLeft>
        <ContainerRight>
          <Img src='/images/login-img.png' />
        </ContainerRight>
      </Container>
    </MainContainer>
  );
};

export default Index;
