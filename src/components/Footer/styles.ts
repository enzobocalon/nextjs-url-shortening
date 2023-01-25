import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({theme}) => theme.veryDarkViolet};
  color: white;
  padding: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  padding-inline: 2rem;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    filter: contrast(0) brightness(2);
    max-width: 150px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuColumn = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    margin-block: 1rem;
  }
`;

export const MenuTitle = styled.h4`
  font-size: 1rem;
`;


export const MenuItem = styled.div`
  color: ${({theme}) => theme.grayishViolet};
  font-size: .9rem;

  margin-block: .5rem;
  cursor: pointer;
  transition: all .3s ease;

  :hover {
    color: ${({theme}) => theme.cyan};
    transition: all .3s ease;
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;
