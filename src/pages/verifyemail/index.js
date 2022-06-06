import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Form,
  LoginButtonNav,
  LoginParagraph,
  NavLogin,
  PostMailImg,
  ReturnButton,
  SendCodeAgain,
  Tip,
  TitleFormLogin,
  BoldText,
  MainContainer,
  FixHiddenColorsRight,
} from './Styles';
import MainLogo from 'shared/logo';
import Input from 'shared/input';
import Button from 'shared/loginbutton';
import FieldRequired from 'shared/fieldrequired';
import Anchor from 'shared/link';
import { BsArrowLeftShort } from 'react-icons/bs';
import API from 'API';
import { useDispatch, useSelector } from 'react-redux';
import { setTokens } from 'features/userSlice';

const Index = () => {
  //get user from the store
  const user = useSelector((state) => state.user.value);
  //form data
  const [formData, setFormData] = useState({ code: '' });
  //handle error messages
  const [errorMsg, setErrorMsg] = useState(null);
  //loading state
  const [loading, setLoading] = useState(false);
  //first time state
  const [firstTime, setFirstTime] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //condition

  let conditionCode = formData.code.length > 1 && firstTime === false;

  // handle change formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //handle Submit Login

  const handleSubmit = async () => {
    if (formData.code.length > 1) {
      //start loading
      setLoading(true);
      try {
        //Send to endpoint
        const res = await API.post('/auth/verify-otp', {
          code: formData.code,
          userId: user.details?.id,
        });
        //set tokens
        dispatch(setTokens(res.data.tokens));
        //navigate to set password page
        navigate('/setpassword');
      } catch (error) {
        //set error msg
        setErrorMsg(error.response.data.message);
        //end the loading status
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
            <TitleFormLogin>
              Un code de confirmation vous attend dans votre boîte e-mail
            </TitleFormLogin>
            <LoginParagraph>
              Saisissez le code à 6 chiffres que nous vous avons envoyé sur
              <BoldText>m.hameid@trenteneuf.co</BoldText>
            </LoginParagraph>
            <Input
              label='Code de confirmation'
              type='email'
              placeHolder='XXX- XXX'
              name='code'
              changeFunction={handleChange}
              value={formData.code}
            />
            {conditionCode && <FieldRequired message='Code requis' />}
            {errorMsg && <FieldRequired message={errorMsg} />}
            {formData.code.length >= 6 && (
              <div onClick={handleSubmit}>
                <Button title='confirmer' loading={loading} />
              </div>
            )}
            <Tip>Votre code est peut-être dans vos spams</Tip>
            <SendCodeAgain>
              Toujours rien ? <Anchor>Renvoyer le code</Anchor>
            </SendCodeAgain>
            <Link to='/register'>
              <ReturnButton>
                <BsArrowLeftShort size='24px' />
                Retour
              </ReturnButton>
            </Link>
          </Form>
        </ContainerLeft>
        <ContainerRight>
          <PostMailImg src='/images/post-mail.png' />
        </ContainerRight>
      </Container>
    </MainContainer>
  );
};

export default Index;
