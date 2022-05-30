import React from 'react';
import { Container, Loading } from './Styles';

const index = ({ title, btnDisabled, loading = false }) => {
  return (
    <Container disabled={btnDisabled}>
      {loading ? <Loading /> : title}
    </Container>
  );
};

export default index;
