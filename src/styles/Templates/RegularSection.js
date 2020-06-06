import styled from 'styled-components';


const RegularSection =  styled.section`
    width: ${({theme}) => theme.regularSection};
    max-width: 100%;
    margin: 0 auto;

    ${({theme}) => theme.media.tablet} {
        width: 100%;
    }
`;

export default RegularSection;