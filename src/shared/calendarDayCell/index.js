import { setGuardToAdd, setGuardToEdit } from 'features/guardSlice';
import {
  toggleAddGuard,
  toggleConfirmGuard,
  toggleEditGuard,
} from 'features/toggleSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BorderTop,
  Container,
  DayNumber,
  DayNumberToday,
  GuardInCell,
  TimeFromTo,
  TodaySentence,
} from './Styles';

const Index = ({ dayDisabled, todaysDay = false, item, events }) => {
  //dispatch function
  const dispatch = useDispatch();
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
  let guardConfirmed = guard ? guard.confirmed : null;

  //handle click on day cell to add a new guard with the selected date on the guard
  const handleClickOnDayCell = () => {
    if (guardConfirmed === null && dayDisabled === false) {
      dispatch(
        setGuardToAdd({ date: item.year + '-' + item.month + '-' + item.day })
      );
      dispatch(toggleAddGuard());
    }
  };
  //handle click on guard to confirm it or delete it
  const handleClickOnGuard = () => {
    if (guardConfirmed === false) {
      dispatch(toggleConfirmGuard());
    } else {
      dispatch(toggleEditGuard());
    }
  };

  return (
    <Container
      dayDisabled={dayDisabled}
      guardStatus={guardConfirmed}
      onClick={handleClickOnDayCell}
    >
      {/* Border top of the guard */}
      {guard && <BorderTop guardStatus={guard.confirmed} />}
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
        <GuardInCell guardStatus={guardConfirmed} onClick={handleClickOnGuard}>
          <img src='/images/clock-icon.svg' />
          <TimeFromTo>{guard.startTime + ' - ' + guard.endTime}</TimeFromTo>
        </GuardInCell>
      )}
    </Container>
  );
};

export default Index;
