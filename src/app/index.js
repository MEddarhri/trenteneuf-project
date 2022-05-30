import React, { Fragment } from 'react';
import { GlobalStyle } from 'app/BaseStyling';
import AppRoutes from './AppRoutes';

const Index = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRoutes />
    </Fragment>
  );
};

export default Index;
