import React from 'react';
import { Link } from "react-router-dom"
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';
import Header from './Header';
import { H1 } from '../Atoms/Headings';

const Main = styled.main`
    width: ${({theme}) => theme.regularSection};
    max-width: 100%;
    margin: 0 auto;
`;

const HeaderTop = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
    width: 100%;
    text-align: right;

    div {
        width: ${({theme}) => theme.regularSection};
        max-width: 100%;
        margin: 0 auto;
    }

    span {
        margin-left: 1rem;
    }
`;

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
    <>
        <GlobalStyle/>
        {/* <HeaderTop>
            <div>
                <span>
                    <Link to="../../pages/support">Wesprzyj</Link>
                </span>
                <span>
                    <Link to="../../pages/about">O projekcie</Link>
                </span>
                <span>
                    <a href="codefroheave.com">Autor</a>
                </span>
            </div>
        </HeaderTop> */}
        <Header>
            <H1>Bible Crush Saga</H1>
        </Header>
        <Main>
            {children}
        </Main>
    </>
    </ThemeProvider>
);

export default Layout;