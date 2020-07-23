import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => theme.typography.primaryFont.fontImport}
    ${({ theme }) => theme.typography.secondaryFont.fontImport}

    *, *::before, *::after {box-sizing: border-box;}

    html, body {
        min-height: 100vh;
        margin: 0;
    }

    body {
        font-family: ${({ theme }) => theme.typography.primaryFont.fontFamily};
        font-size: ${({ theme }) => theme.typography.baseFontSize};
        color: ${({ theme }) => theme.colors.black};
    }

    h1, h2 {
        font-family: ${({ theme }) => theme.typography.secondaryFont.fontFamily};
    }
`;

export default GlobalStyle;
