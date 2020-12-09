import React from 'react';
import { PropTypes } from 'prop-types';
import RegularSection from '../Templates/RegularSection';
import ResourceCard from '../Molecules/ResourceCard';

const ResultList = ({ cardsData }) => (
  <RegularSection>
    {cardsData.map((r) => (
      <ResourceCard cardData={r} key={r.id} />
    ))}
  </RegularSection>
);

ResultList.propTypes = {
  cardsData: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default ResultList;
