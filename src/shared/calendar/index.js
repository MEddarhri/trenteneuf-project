import {
  getAllDaysInMonth,
  getDaysRemainingFromLastMonth,
  getDaysRemainingFromNextMonth,
} from 'helpers/calendar/helpersCalendar';
import React from 'react';
import {
  DayNumber,
  DayNumberToday,
  DaysContainer,
  DaysContainerCells,
  DayShortCut,
  FullCalendarContainer,
  TodaySentence,
} from './Styles';
import DayCell from 'shared/calendarDayCell';

const Index = ({ dateValue, events }) => {
  let currentDate = new Date();

  //all days of the month including remaining from last month and next month
  let monthArray = [
    ...getDaysRemainingFromLastMonth(dateValue),
    ...getAllDaysInMonth(dateValue),
    ...getDaysRemainingFromNextMonth(dateValue),
  ];

  //map function that handles displaying days

  const mapFunctionDay = (item, i) => {
    if (
      item.year === currentDate.getFullYear() &&
      item.month === currentDate.getMonth() + 1 &&
      item.day === currentDate.getDate() &&
      item.targeted
    ) {
      return (
        <DayCell
          key={i}
          dayDisabled={false}
          todaysDay={true}
          item={item}
          events={events}
        />
      );
    }
    if (item.month !== dateValue.getMonth() + 1) {
      return <DayCell key={i} dayDisabled={true} item={item} />;
    }
    if (item.month === dateValue.getMonth() + 1) {
      return (
        <DayCell key={i} dayDisabled={false} item={item} events={events} />
      );
    }
  };

  return (
    <FullCalendarContainer>
      <DaysContainer>
        <DayShortCut>Lun</DayShortCut>
        <DayShortCut>Mar</DayShortCut>
        <DayShortCut>Mer</DayShortCut>
        <DayShortCut>Jeu</DayShortCut>
        <DayShortCut>Ven</DayShortCut>
        <DayShortCut>Sam</DayShortCut>
        <DayShortCut>Dim</DayShortCut>
      </DaysContainer>
      <DaysContainerCells>{monthArray.map(mapFunctionDay)}</DaysContainerCells>
    </FullCalendarContainer>
  );
};

export default Index;
