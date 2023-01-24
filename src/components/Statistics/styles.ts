import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f0f1f6;
  margin-top: 4rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;

  padding-block: 12rem 4rem;
  padding-inline: 2rem;
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.veryDarkBlue};
  font-size: 2.5rem;
  letter-spacing: -.03ch;
`;

export const Description = styled.p`
  line-height: 2rem;
  color: ${({theme}) => theme.grayishViolet};
  max-width: 32rem;
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.75rem;
  margin-top: 4rem;
  position: relative;

  div:nth-child(2) {
    margin-top: 2.75rem;
  }

  div:nth-child(3) {
    margin-top: 5.5rem;
  }

  ::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 6px;
    background-color: ${({theme}) => theme.cyan};
  }
`;
