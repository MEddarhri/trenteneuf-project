import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 13px;
  background: ${(props) =>
    props.confirmed ? 'rgba(0, 95, 248, 0.12)' : 'rgba(253, 148, 0, 0.12)'};
  border-radius: 6px;
  & > * + * {
    margin-left: 15px;
  }
`;
export const NotificationDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  text-align: left;
  /* or 183% */

  display: flex;
  align-items: center;

  color: ${(props) => (props.confirmed ? '#005ff8' : '#ED8B00')};
`;

export const SvgContainer = styled.div`
  padding: 7px 10px;
  background: ${(props) => (props.confirmed ? '#005ff8' : '#ED8B00')};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SvgConfirmed = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='22'
      fill='none'
      viewBox='0 0 18 22'
    >
      <path
        fillRule='evenodd'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.996 1.514c-4.434 0-6.36 4.015-6.36 6.67 0 1.984.287 1.4-.811 3.82-1.341 3.448 4.051 4.858 7.171 4.858s8.512-1.41 7.172-4.858c-1.098-2.42-.81-1.836-.81-3.82 0-2.655-1.928-6.67-6.362-6.67z'
        clipRule='evenodd'
      ></path>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11.306 19.512c-1.294 1.446-3.313 1.463-4.62 0'
      ></path>
    </svg>
  );
};

export const SvgPending = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
      viewBox='0 0 20 20'
    >
      <path
        fillRule='evenodd'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.038 19c-5.974 0-8.318-.461-8.698-2.797-.38-2.335 2.051-6.726 2.8-8.175C6.646 3.184 8.35 1 10.038 1s3.392 2.184 5.897 7.028c.75 1.45 3.181 5.84 2.801 8.175C18.357 18.54 16.012 19 10.038 19z'
        clipRule='evenodd'
      ></path>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.038 6.5v3.895M10.034 13.895h.008'
      ></path>
    </svg>
  );
};
