import styled from 'styled-components';
import desktopBg from '../../assets/bg-boost-desktop.svg';

export const Container = styled.section`
  background-color: ${({theme}) => theme.darkViolet};
  background-image: url(${desktopBg.src});
  background-size: cover;
  padding: 4rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: fit-content;
  margin: 0 auto;
  padding-inline: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
  }
`;
