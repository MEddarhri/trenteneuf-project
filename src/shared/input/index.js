import React, { useState } from 'react';
import {
  Container,
  Input,
  InputInsideContainer,
  InputLabel,
  TogglePassword,
} from './Styles';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRef } from 'react';

const Index = ({
  label,
  inputType,
  placeHolder,
  name,
  changeFunction,
  value,
}) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const inputRef = useRef(null);

  const handleTogglePassword = () => {
    if (togglePassword === false) {
      inputRef.current.type = 'text';
    } else {
      inputRef.current.type = 'password';
    }
    setTogglePassword((prev) => !prev);
  };

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputInsideContainer>
        <Input
          type={inputType}
          placeholder={placeHolder}
          ref={inputRef}
          name={name}
          onChange={changeFunction}
          value={value}
        />
        {inputType === 'password' && (
          <TogglePassword onClick={handleTogglePassword}>
            {togglePassword ? (
              <AiOutlineEye size='30px' color='#636E72' />
            ) : (
              <AiOutlineEyeInvisible size='30px' color='#636E72' />
            )}
          </TogglePassword>
        )}
      </InputInsideContainer>
    </Container>
  );
};

export default Index;
