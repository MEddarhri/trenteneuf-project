import React from 'react';
import {
  BorderTop,
  Container,
  DayNumber,
  DayNumberToday,
  GuardInCell,
  TimeFromTo,
  TodaySentence,
} from './Styles';

const index = ({ dayDisabled, todaysDay = false, item, events }) => {
  let guard = null;
  if (dayDisabled == false) {
    events.forEach((element) => {
      if (
        element.day === item.day &&
        element.month === item.month &&
        element.year === item.year
      ) {
        guard = element;
      }
    });
  }
  let guardStatus = guard ? guard.pending : null;

  return (
    <Container dayDisabled={dayDisabled} guardStatus={guardStatus}>
      {/* Border top of the guard */}
      {guard && <BorderTop guardStatus={guard.pending} />}
      {/* Number of the day if it's not the current day */}
      {todaysDay === false && (
        <DayNumber dayDisabled={dayDisabled}>{item.day}</DayNumber>
      )}
      {/* Number of the day if it's the current day */}
      {todaysDay && (
        <DayNumberToday dayDisabled={dayDisabled}>{item.day}</DayNumberToday>
      )}
      {/* if it's today's day show the today sentence */}
      {todaysDay && <TodaySentence>{`Aujourd’hui`}</TodaySentence>}
      {/* if there's a guard show the guard */}
      {guard && (
        <GuardInCell guardStatus={guardStatus}>
          <img src='/images/clock-icon.svg' />
          <TimeFromTo>{guard.startTime + ' - ' + guard.endTime}</TimeFromTo>
        </GuardInCell>
      )}
    </Container>
  );
};

export default index;
