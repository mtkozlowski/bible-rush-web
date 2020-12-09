import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import Main from '../styles/Templates/Main';
import RegularSelection from '../styles/Templates/RegularSection';

function Details({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const url = new URL('http://localhost:8000/details');
      const params = { query: match.params.id };

      url.search = new URLSearchParams(params).toString();
      const data = await fetch(url);
      const newItem = await data.json();
      setItem(...newItem);
    };

    fetchItem();
  }, [match]);

  return (
    <Main>
      <RegularSelection>
        <h1>Details!</h1>
        <img src={`${item.thumbnailsSlug}sddefault.jpg`} alt="thumbnailsSlug" />
        <h2>{item.title}</h2>
      </RegularSelection>
    </Main>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default Details;
