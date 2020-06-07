import styled from 'styled-components';

const Header = styled.header`
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 1.6rem 0;
    transition: translate .9s ease-in-out;

    @media (min-width: 1080px) {
        ${({atHome})  => atHome && `
            transform: translateY(8rem);
        `};
    }

    ${({theme}) => theme.media.tablet} {
        padding: 1.6rem 0.8rem;
    }
`;

export default Header;