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
  padding: 10px 15px;
  top: 0;
  right: 0;
`;
export const TopPart = styled.div`
  padding: 31px 42px 36px 39px;
`;

export const ImgAndTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const ImgContainer = styled.div`
  height: 122px;
  width: 112px;
`;

export const GuardContent = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #a3a3a3;
`;

export const DeleteGuardSentence = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #111314;
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
  background: ${(props) => (props.regular ? '#fff' : '#D80027')};
  border-radius: 7px;
  ${(props) =>
    props.regular &&
    'filter: drop-shadow(0px 1px 2px rgba(178, 190, 195, 0.5));'}
`;
