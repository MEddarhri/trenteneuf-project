import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgba(223, 230, 233, 0.5);
  position: relative;
  background-color: ${(props) => {
    if (props.dayDisabled) {
      return '#F7F7F7';
    } else {
      if (props.guardStatus) {
        return 'rgba(253, 148, 0, 0.08)';
      }
      if (props.guardStatus === false) {
        return 'rgba(0, 185, 99, 0.08)';
      }
      return '#fff';
    }
  }};
`;
export const BorderTop = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: ${(props) => (props.guardStatus ? '#fd9400' : '#00B963')};
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
  border-radius: 25px;
  top: 8px;
  left: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
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

export const GuardInCell = styled.div`
  position: absolute;
  top: 55px;
  left: 5%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${(props) => (props.guardStatus ? '#fd9400' : '#00B963')};
  padding: 3px 2px;
  user-select: none;
  & > * + * {
    margin-left: 5px;
  }
`;

export const TimeFromTo = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #ffffff;
`;
