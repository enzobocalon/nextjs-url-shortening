import styled from 'styled-components';

interface Props {
  size: number;
}

export const Container = styled.div<Props>`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: ${({size}) => size > 0 ? '3rem' : '1rem'};
  }
`;
