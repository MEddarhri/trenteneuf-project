import styled from 'styled-components';
export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const DashContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const MainCalendarContainer = styled.div`
  display: flex;
  padding: 66px 25px 30px 100px;
  & > * + * {
    margin-left: 48px;
  }
`;

export const CalendarArea = styled.div`
  flex: 0.7;
`;

export const NextGuardsArea = styled.div`
  flex: 0.3;
`;

export const CalendarHeading = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.02em;
  color: #142b37;
  margin-bottom: 45px;
`;

export const SelectDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 43px;
`;

export const GuardsStatusContainer = styled.div``;
export const GuardStatusTitle = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #142b37;
`;
export const GuardStatusDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #636e72;
`;

export const SlideMonthContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Month = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #142b37;
  text-transform: capitalize;
`;
export const SlideBtn = styled.button`
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  color: #a3a3a3;
`;

export const SelectViewContainer = styled.div``;

export const SelectView = styled.select`
  position: relative;
  appearance: none;
  padding: 10px 12px;
  border: 1px solid #b2bec3;
  border-radius: 7px;
  &:focus {
    outline: none;
  }
`;

export const SelectArrowDown = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const Option = styled.option`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #2d3436;
`;

export const NextGuardTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const NextGuardTitle = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  letter-spacing: -0.02em;
  color: #142b37;
  margin-right: 23px;
`;
export const FilterButton = styled.button`
  border: 1px solid #b2bec3;
  border-radius: 7px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #142b37;
  padding: 8px 12px;
  /* display: flex;
  align-items: center;
  & > * + * {
    margin-left: 10px;
  } */
`;
export const FilterSvg = styled.img`
  margin-right: 10px;
`;

export const GuardOverview = styled.div`
  padding: 29px 0;
`;

export const AddGuardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(20, 43, 55, 0.31);
  z-index: 500;
  display: flex;
  justify-content: center;
`;

export const AddEditGuardContainer = styled.div`
  box-shadow: 0px 10px 20px rgba(20, 43, 55, 0.08);
  border-radius: 12px 12px 8px 8px;
  //temporary
  width: 413px;
  height: fit-content;
  margin-top: 150px;
  background-color: #fff;
  overflow: hidden;
`;
export const TopPart = styled.div`
  padding: 31px 42px 19px 39px;
`;

export const AddEditGuardTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #111314;
  margin-bottom: 35px;
`;

export const AddEditGuardInputCont = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 25px;
  }
`;

export const AddEditGuardLabel = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #a3a3a3;
`;

export const SelectTimeContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dfe6e9;
  padding-bottom: 25px;
  & > * + * {
    margin-left: 16px;
  }
`;

export const SplitTimePicker = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.02em;

  color: #636e72;
`;

export const SelectStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectContLeft = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.02em;

  color: #142b37;
`;

export const BottomPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 19px 42px 19px 39px;
  background-color: #f7f7f7;
  & > * + * {
    margin-left: 10px;
  }
`;

export const ButtonAddEdit = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${(props) => (props.regular ? '#111314' : '#fff')};
  background: ${(props) => (props.regular ? '#fff' : '#00b963')};
  border-radius: 7px;
  ${(props) =>
    props.regular &&
    'filter: drop-shadow(0px 1px 2px rgba(178, 190, 195, 0.5));'}
`;
