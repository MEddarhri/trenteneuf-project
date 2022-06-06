import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 600;
  top: 100%;
  width: 100%;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(20, 43, 55, 0.08);
  border-radius: 12px;
  padding: 10px;
`;

export const LeftPart = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideButton = styled.button``;

export const NumbersContainer = styled.div`
  height: 140px;
  overflow: hidden;
`;
export const NumbersList = styled.div`
  display: flex;
  height: 140px;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Number = styled.div`
  font-size: 14px;
  line-height: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #636e72;
`;

let arrayHours = [];
for (let index = 0; index < 23; index++) {
  arrayHours.push({ hour: index });
}
console.log(arrayHours);
