import React from 'react';
import {
  Container,
  NotificationDescription,
  SvgConfirmed,
  SvgContainer,
  SvgPending,
} from './Styles';

const Index = ({ confirmed, type = null }) => {
  const conditionConfirmedTrue = confirmed && type === null;
  const conditionConfirmedFalse = confirmed === false && type === null;

  return (
    <Container confirmed={confirmed}>
      <SvgContainer confirmed={confirmed}>
        {confirmed ? <SvgConfirmed /> : <SvgPending />}
      </SvgContainer>
      <NotificationDescription confirmed={confirmed}>
        {conditionConfirmedTrue &&
          `Une notification sera envoyée 48h avant votre garde à tous les clients à proximité.`}
        {conditionConfirmedFalse &&
          `N’oubliez pas de confirmer votre garde au maximum 24h avant la date prévue.`}
        {type === 'delete' &&
          `Attention, votre garde a été confirmée. Si vous la supprimez vos clients seront notifés.`}

        {type === 'confirm' &&
          `Une notification sera envoyée 48h avant votre garde à tous les clients à proximité.`}
      </NotificationDescription>
    </Container>
  );
};

export default Index;
