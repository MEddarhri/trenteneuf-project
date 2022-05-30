import styled from 'styled-components';

export const Container = styled.div`
  color: #636e72;
  font-size: 14px;
`;
export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  color: #636e72;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const InputInsideContainer = styled.div`
  position: relative;
`;
export const Input = styled.input`
  border-radius: 7px;
  background-color: #f7f7f7;
  border: none;
  padding: 18px;
  width: 100%;
  transition: all 20ms ease;
  &::placeholder {
    color: #b2bec3;
    font-size: 14px;
  }

  &:focus {
    border: 1.25px solid #00b963;
    box-shadow: 0px 0px 1px 4px rgba(0, 185, 99, 0.18);
  }
`;
export const TogglePassword = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  top: 0;
  right: 0;

  height: 100%;
`;
