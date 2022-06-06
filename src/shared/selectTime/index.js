import React, { useRef, useState } from 'react';
import {
  Container,
  LeftPart,
  Number,
  NumbersContainer,
  NumbersList,
  SlideButton,
} from './Styles';
import { FiChevronDown } from 'react-icons/fi';
import { hours } from 'helpers/inputTime/hours';

const Index = () => {
  const numbersList = useRef(null);
  let count = 0;
  //   let arrayHours = [];
  //   for (let index = 0; index < 23; index++) {
  //     arrayHours.push({ hour: index });
  //   }
  //   console.log(arrayHours);

  return (
    <Container>
      <LeftPart>
        <div>
          <SlideButton>
            <FiChevronDown style={{ transform: 'rotate(180deg)' }} />
          </SlideButton>
        </div>

        <NumbersContainer>
          <NumbersList ref={numbersList}>
            {hours.map((item, i) => (
              <Number key={i}>{item.hour}</Number>
            ))}
          </NumbersList>
        </NumbersContainer>
        <div>
          <SlideButton>
            <FiChevronDown />
          </SlideButton>
        </div>
      </LeftPart>
    </Container>
  );
};

export default Index;
