import React from 'react';
import styled from 'styled-components';
import RegularSection from '../Templates/RegularSection';
import ResourceCard from '../Molecules/ResourceCard';

const ResultList = ({ cardsData }) => (
    <RegularSection>
        {cardsData.map(r => <ResourceCard cardData={r}/>)}
    </RegularSection>
);

export default ResultList;