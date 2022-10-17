import reset from 'styled-reset';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }

  body {
    position: relative;
    max-width: 1500px;
    max-height: 1000px;
    min-height: 800px;
    margin: 0 auto;
    background: #FFFFFF;
    border: 1px solid black;
    color : #000000;
    font-family: 'Noto Sans KR', sans-serif;
  } 
`;

export default GlobalStyle;
