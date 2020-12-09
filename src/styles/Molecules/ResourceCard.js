import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { H3, H4 } from '../Atoms/Headings';

const StyledCard = styled.div`
  display: flex;
  & + & {
    margin-top: 1.6rem;
  }
`;

const ImageWrapper = styled(Link)`
  display: block;
  height: 180px;
  width: 320px;
  margin-right: 1.6rem;
  order: 0;
`;

const StyledWrapper = styled.div`
  order: 1;
`;

const ResourceCard = ({ cardData }) => (
  <StyledCard>
    <StyledWrapper>
      <H3>
        <Link to={`/details/${cardData.id}`}>{cardData.title}</Link>
      </H3>
      <H4>Sigle</H4>
      <ul>
        <li>Dz 25, 13-21</li>
        <li>Dz 28, 16-20. 30-31</li>
        <li>J 21, 20-25</li>
      </ul>
    </StyledWrapper>
    <ImageWrapper to={`/details/${cardData.id}`}>
      <img
        src={`${cardData.thumbnailsSlug}mqdefault.jpg`}
        alt="thumbnailsSlug"
      />
    </ImageWrapper>
  </StyledCard>
);

ResourceCard.propTypes = {
  cardData: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default ResourceCard;
