/* eslint-disable linebreak-style */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Manrope', sans-serif;
    background-color: hsl(218, 23%, 16%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 28px;
}

p {
    align-items: center;
    color: hsl(193, 38%, 86%);
}
`;

export default GlobalStyles;
