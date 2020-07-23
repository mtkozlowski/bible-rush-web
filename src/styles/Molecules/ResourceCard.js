import React from "react";
import styled from "styled-components";
import { H3, H4 } from "../Atoms/Headings";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  height: 138px;
  width: 246px;
`;
const ResourceCard = ({ cardData }) => (
  <StyledCard>
    <ImageWrapper>
      <img src={cardData.thumbnailsSlug} alt="thumbnailsSlug" />
    </ImageWrapper>
    <div>
      <H3>{cardData.title}</H3>
      <H4>Sigle</H4>
      <ul>
        <li>Dz 25, 13-21</li>
        <li>Dz 28, 16-20. 30-31</li>
        <li>J 21, 20-25</li>
      </ul>
      <Link to={`/details/${cardData.id}`}>Go to DETAILS</Link>
    </div>
  </StyledCard>
);

export default ResourceCard;
