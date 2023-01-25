import styled from 'styled-components';
import desktopBg from '../../assets/bg-shorten-desktop.svg';
import mobileBg from '../../assets/bg-shorten-mobile.svg';

interface Props {
  error: string
}

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
  align-items: flex-start;
  gap: 2rem;

  button {
    flex: 1;
    min-width: 200px;
    min-height: 69px;
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

export const InputContainer = styled.div`
  flex: 1 0 60%
`;

export const Input = styled.input<Props>`
  padding: 1.25rem;
  width: 100%;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  border: ${({error, theme}) => error ? `4px solid ${theme.red}` : '4px solid transparent'};
`;

export const Error = styled.span`
  margin-top: .5rem;
  color: ${({theme}) => theme.red};
  font-size: .8rem;
  font-style: italic;
`;
