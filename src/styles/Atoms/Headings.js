import styled from 'styled-components';

const PageHeader = styled.h1`
    font-size: 120px;
    margin: 0 0 80px;
    line-height: 1;
    color: ${({theme}) => theme.colors.blue};
`;

export const H1 = styled.h1`
    font-weight: ${({theme}) => theme.boldFontWeight};
    font-size: 3rem;
`;

export const H2 = styled.h2`
    font-weight: ${({theme}) => theme.boldFontWeight};
    font-size: 1.875rem;
`;

export const H3 = styled.h3`
    font-weight: ${({theme}) => theme.boldFontWeight};
    font-size: 1.5rem;
`;

export const H4 = styled.h4`
    font-weight: ${({theme}) => theme.boldFontWeight};
    font-size: 1.172rem;
`;

export const H5 = styled.h5`
    font-weight: ${({theme}) => theme.boldFontWeight};
    font-size: 1rem;
`;

export const H6 = styled.h6`
    font-weight: ${({theme}) => theme.boldFontWeight};
    font-size: 0.8rem;
`;

export default PageHeader