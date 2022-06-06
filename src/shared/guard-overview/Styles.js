import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LeftPart = styled.div`
  padding: 10px 0;
  margin-right: 20px;
`;

export const DayLeftPart = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #b2bec3;
`;

export const DateOfGuardLeft = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  color: #142b37;
`;

export const RightPart = styled.div`
  flex: 1;
  padding: 10px 13px 15px 20px;
  max-width: 304px;
  background: ${(props) => (props.pending ? '#FD9400' : '#00b963')};
  border-radius: 4px;
  border-left: 4px solid #142b37;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GuardTimeLeftPart = styled.div``;
export const GuardTimeBtnRightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateInRightPart = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 7px;
  color: #ffffff;
`;

export const TimeFromToContainer = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 5px;
  }
`;
export const TimeFromTo = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const GuardButton = styled.button`
  position: relative;
  padding: 7px 8px;
  background: ${(props) => (props.pending ? '#FD9400' : '#00b963')};
  border-radius: 8px;
  &:hover {
    background: ${(props) => (props.pending ? '#e28f1a' : '#059854')};
  }
`;

export const EditAndDelete = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 118px;
  box-shadow: 0px 10px 20px rgba(20, 43, 55, 0.08);
  border-radius: 7px;
  padding: 4px 0;
  background-color: #fff;
  z-index: 200;
`;
export const ButtonEditAndDelete = styled.button`
  width: 100%;
  padding: 10px 0;
  &:hover {
    background-color: #f7f7f7;
  }
`;
