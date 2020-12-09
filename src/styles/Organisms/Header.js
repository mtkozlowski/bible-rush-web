import styled from 'styled-components';

const Header = styled.header`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8rem 0;
  transition: translate 0.9s ease-in-out;

  ${({ theme }) => theme.media.regularSection} {
    padding: 1.6rem 0.8rem;
  }
`;

export default Header;
