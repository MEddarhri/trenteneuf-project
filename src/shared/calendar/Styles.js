import styled from 'styled-components';

export const FullCalendarContainer = styled.div``;

export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 30px;
`;
export const DayShortCut = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  text-transform: capitalize;
  color: #636e72;
`;
// export const DayName = styled.h2``;

export const DaysContainerCells = styled.div`
  display: grid;

  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 100px;
  border: 1px solid rgba(223, 230, 233, 0.5);
`;
export const DayCell = styled.div`
  border: 1px solid rgba(223, 230, 233, 0.5);
  position: relative;
  background-color: ${(props) => (props.dayDisabled ? '#F7F7F7' : '#fff')};
`;

export const DayNumber = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: ${(props) => (props.dayDisabled ? '#B2BEC3' : '#142B37')};
`;

export const DayNumberToday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  top: 8px;
  left: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #fff;
  background-color: rgba(20, 43, 55, 1);
`;

export const TodaySentence = styled.p`
  position: absolute;
  top: 33px;
  left: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #142b37;
`;
