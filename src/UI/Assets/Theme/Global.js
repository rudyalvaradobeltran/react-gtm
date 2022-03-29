import { createGlobalStyle } from "styled-components";
import Background from '../Images/Background/Background.png';
import Container from '../Images/Background/Container.png';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: #424242 url(${Background});
  }
  .container {
    background: #fff url(${Container});
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

export default GlobalStyles;
