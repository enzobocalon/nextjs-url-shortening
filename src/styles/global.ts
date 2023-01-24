import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  body {
    background-color: 'white';
    font-size: 18px;
    font-family: 'Poppins';
    font-weight: 500;
    -webkit-font-smoothing: antialiased;

    width: 100%;
    min-height: 100vh;
  }

  button {
    font-family: inherit;
    font-weight: 500;
    outline: none;
    border: none;
  }

  img {
    width: 100%;
  }
`;
