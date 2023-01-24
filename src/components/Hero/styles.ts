import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;

  padding-block: 4rem;

  button {
    padding: .75rem 2rem;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Image = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${({theme}) => theme.veryDarkBlue};
  line-height: 5.65rem;
  letter-spacing: -.04ch;

  @media (max-width: 1100px) {
    font-size: 3rem;
    line-height: 3.65rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({theme}) => theme.grayishViolet};
  line-height: 2.1rem;
  letter-spacing: .0144rem;
  margin-block: 1rem 2rem;
`;
