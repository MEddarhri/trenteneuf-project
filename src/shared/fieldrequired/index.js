import React from 'react';
import { Container, Message } from './Styles';

const index = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default index;
