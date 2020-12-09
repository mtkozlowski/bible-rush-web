import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RegularSection from '../Templates/RegularSection';
import Nav from '../Molecules/Navigation';

const StyledHeaderTop = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgrey};
  text-align: right;
`;

const HeaderTop = () => (
  <StyledHeaderTop>
    <RegularSection as={Nav}>
      <Link to="/">Home</Link>
      <Link to="/support">Wesprzyj</Link>
      <Link to="/about">O projekcie</Link>
      <a href="//codeforheaven.com">Autor</a>
    </RegularSection>
  </StyledHeaderTop>
);

export default HeaderTop;
