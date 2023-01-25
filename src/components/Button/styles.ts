import styled from 'styled-components';

interface Props {
  rounded?: string;
  active?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${({theme, active}) => active ? theme.darkViolet : theme.cyan};
  padding: .5rem 1.5rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  border-radius: ${({rounded}) => rounded === 'semi-rounded' ? '.5rem' : '2rem'};
  transition: all .3s ease;

  :hover {
    background-color: ${({theme}) => theme.buttonHover};
    transition: all .3s ease;
  }
`;
