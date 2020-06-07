import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyle/>
        {children}
    </>
    </ThemeProvider>
);

export default Layout;