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
  position: relative;
  box-shadow: 0px 10px 20px rgba(20, 43, 55, 0.08);
  border-radius: 12px 12px 8px 8px;
  //temporary
  width: 413px;
  height: fit-content;
  margin-top: 150px;
  background-color: #fff;
  overflow: hidden;
`;
export const CloseButtonTopRight = styled.button`
  position: absolute;
  padding: 15px 15px;
  top: 0;
  right: 0;
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

export const ConfirmedStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * + * {
    margin-left: 5px;
  }
`;
export const ConfirmedStatusRight = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #005ff8;
`;

export const BottomPart = styled.div`
  display: flex;

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

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`;

export const DeleteSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='21'
      fill='none'
      viewBox='0 0 19 21'
    >
      <path
        stroke='#D80027'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.89 8.554c0 8.02 1.154 11.644-6.61 11.644-7.765 0-6.587-3.625-6.587-11.644M17.365 5.48H1.215M12.715 5.48s.528-3.766-3.426-3.766c-3.953 0-3.425 3.766-3.425 3.766'
      ></path>
    </svg>
  );
};
