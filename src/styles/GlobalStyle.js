import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => theme.typography.fontImport}
    *, *::before, *::after {box-sizing: border-box;}

    html, body {
        min-height: 100vh;
        margin: 0;
    }

    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.baseFontSize};
        color: ${({ theme }) => theme.colors.dark};

        /* background-color: ${({ theme }) => theme.colors.lightgrey}; */
    }
`;

export default GlobalStyle;
