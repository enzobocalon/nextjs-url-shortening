import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;

  svg {
    display: none;
  }

  @media (max-width: 768px) {
    svg {
      display: block;
      min-width: 50px;
    }
  }
`;

export const MainMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  img {
    max-width: 100px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  color: ${({theme}) => theme.gray};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  transition: all .3s ease;

  :hover {
    color: ${({theme}) => theme.darkViolet};
    transition: all .3s ease;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    opacity: 0;
    pointer-events: none;
  }
`;
