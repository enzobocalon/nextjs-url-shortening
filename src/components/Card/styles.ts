import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  position: relative;
  max-width: 400px;
  border-radius: .5rem;
  padding: 2.5rem;
  z-index: 1;
  flex: 1;

  @media (max-width: 920px) {
    padding: 2.5rem 1rem;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 2rem;
  background-color: ${({theme}) => theme.darkViolet};
  padding: 1.25rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 1.25rem;
`;

export const Title = styled.h3`
  color: ${({theme}) => theme.veryDarkBlue};
  font-size: 1.5rem;
  letter-spacing: -.03ch;
`;

export const Description = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
  color: ${({theme}) => theme.grayishViolet};
  margin-top: .5rem;
`;
