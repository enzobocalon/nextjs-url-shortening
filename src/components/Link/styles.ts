import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const OriginalURL = styled.div`
  max-width: 100%;
  color: ${({theme}) => theme.veryDarkViolet};

  @media (max-width: 768px) {
    border-bottom: 1px solid ${({theme}) => theme.gray};
    width: 100%;
    padding: 1rem 1.5rem;
    text-align: left;

    span {
      word-wrap: break-word;
    }
  }
`;

export const ShortenedURL = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${({theme}) => theme.cyan};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    width: 100%;
    padding: 0 1.5rem 1rem 1.5rem;
    align-items: flex-start;

    span {
      padding-block: .5rem;
    }

    button {
      width: 100%;
    }
  }
`;
