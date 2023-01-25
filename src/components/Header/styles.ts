import styled from 'styled-components';

interface Props {
  openMenu: boolean
}

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

  img {
    max-width: 100px;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    svg {
      display: block;
      min-width: 50px;
      position: relative;
    }
  }
`;

export const MainMenu = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2.5rem;

  @media (max-width: 768px) {
    opacity: ${({openMenu}) => openMenu ? 1 : 0};
    pointer-events: ${({openMenu}) => openMenu ? 'all' : 'none'};
    background-color: ${({theme}) => theme.darkViolet};
    flex-direction: column;
    position: absolute;
    top: 75px;
    right: 2.25rem;
    max-width: 250px;
    z-index: 100;
    padding-block: 2rem;
    border-radius: 1rem;
    transition: all .3s ease;

    button {
      width: 100%;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
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

  @media (max-width: 768px) {
    color: white;

    :hover {
      color: ${({theme}) => theme.cyan};
    }
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-inline: 2rem;
  }
`;
