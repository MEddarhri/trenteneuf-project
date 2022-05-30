import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.button`
  border-radius: 7px;
  background-color: ${(props) => (props.disabled ? '#F0F3F5' : '#00b963')};
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48px 0 36px 0;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  color: ${(props) => (props.disabled ? '#B2BEC3' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 150ms ease;
  &:hover {
    background: ${(props) =>
      props.disabled ? '#F0F3F5' : 'hsla(152, 100%, 36%, 0.85)'};
  }
`;
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
export const Loading = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #fff;
  border-top-color: #00b963;
  border-radius: 20px;
  animation: ${rotate} 1s ease-in infinite;
`;
