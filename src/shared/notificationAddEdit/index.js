import React from 'react';
import {
  Container,
  NotificationDescription,
  SvgConfirmed,
  SvgContainer,
  SvgPending,
} from './Styles';

const Index = ({ confirmed }) => {
  return (
    <Container confirmed={confirmed}>
      <SvgContainer confirmed={confirmed}>
        {confirmed ? <SvgConfirmed /> : <SvgPending />}
      </SvgContainer>
      <NotificationDescription confirmed={confirmed}>
        Une notification sera envoyée 48h avant votre garde à tous les clients à
        proximité.
      </NotificationDescription>
    </Container>
  );
};

export default Index;
