import styled from "styled-components";

const Nav = styled.nav`
  a {
    display: inline-block;
    margin: 0.2rem 0 0.2rem 1em;
    text-decoration: none;
    padding: 0.4rem 0.6rem 0.3rem;
  }
  a:hover {
    border-radius: 1rem;
  }

  ${({ theme }) => theme.media.regularSection} {
    margin-top: 0;
  }
`;

export default Nav;
