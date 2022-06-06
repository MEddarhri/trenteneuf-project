import React from 'react';
import {
  Container,
  GuardsContainer,
  MonthAndYear,
  MonthAndYearContainer,
} from './Styles';
import Guard from 'shared/guard-overview';

const index = () => {
  return (
    <Container>
      <MonthAndYearContainer>
        <MonthAndYear>Mai 2022</MonthAndYear>
      </MonthAndYearContainer>
      <GuardsContainer>
        <Guard pending={false} />
        <Guard pending={true} />
      </GuardsContainer>
    </Container>
  );
};

export default index;
