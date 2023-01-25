import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f0f1f6;
  margin-top: 4rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;

  padding-block: 8rem 4rem;
  padding-inline: 2rem;

  @media (max-width: 768px) {
    padding-block: 12rem 4rem;
  }
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.veryDarkBlue};
  font-size: 2.5rem;
  letter-spacing: -.03ch;
  margin-top: 2rem;
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
  justify-content: space-between;
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
    width: 100%;
    height: 6px;
    background-color: ${({theme}) => theme.cyan};
  }

  @media (max-width: 768px) {
    flex-direction: column;

    ::after {
      transform: rotate(90deg);
      top: 50%;
      min-width: 500px;
    }
  }
`;

export const Link = styled.div`

`;
