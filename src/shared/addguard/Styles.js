import styled from 'styled-components';

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
  justify-content: space-between;
  border-bottom: 1px solid #dfe6e9;
  padding-bottom: 25px;
  & > * + * {
    margin-left: 16px;
  }
`;

export const SelectTime = styled.div`
  position: relative;
  width: 140px;
  height: 40px;
  background-color: #42a5df;
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
