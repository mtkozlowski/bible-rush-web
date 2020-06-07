import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    a {
        color: ${({theme}) => theme.colors.darkblue };
        display: inline-block;
        margin: 0.2rem 0 0.2rem 1em;
        text-decoration: none;
        padding: 0.4rem 0.6rem 0.3rem;
    }
    a:hover {
        border-radius: 1rem;
        background-color: ${({theme}) => theme.colors.darkblue };
        color: ${({theme}) => theme.colors.white };
    }

    ${({theme}) => theme.media.tablet} {
        margin-top: 0;
    }
`;

export default Nav;