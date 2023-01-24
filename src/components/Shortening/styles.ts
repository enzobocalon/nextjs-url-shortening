import styled from 'styled-components';
import desktopBg from '../../assets/bg-shorten-desktop.svg';
import mobileBg from '../../assets/bg-shorten-mobile.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: 2rem;
  position: relative;
`;

export const Wrapper = styled.div`
  width: calc(100% - 4rem);
  margin-inline: 2rem;
  background-color: ${({theme}) => theme.darkViolet};
  background-image: url(${desktopBg.src});
  background-size: cover;
  padding: 3rem 4rem;
  border-radius: 1rem;
  position: absolute;
  top: -10px;
  left: 0;

  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    flex: 1;
    min-width: 200px;
    padding: 1rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      background-image: url(${mobileBg.src});
      > * {
        width: 100%;
      }
    }

    @media (max-width: 425px) {
      padding: 3rem 2rem;
    }
`;

export const Input = styled.input`
  padding: 1.25rem;
  flex: 1 0 60%;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
`;
