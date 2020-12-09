import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Main from '../styles/Templates/Main';
import RegularSelection from '../styles/Templates/RegularSection';

function Add({ match }) {
  const [, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const url = new URL('http://localhost:8000/details');
      const params = { query: match.params.id };

      url.search = new URLSearchParams(params).toString();
      const data = await fetch(url);
      const item = await data.json();
      setItem(...item);
    };

    fetchItem();
  }, [match]);

  return (
    <Main>
      <RegularSelection>
        <h1>Add!</h1>
      </RegularSelection>
    </Main>
  );
}

Add.propTypes = {
  match: PropTypes.element.isRequired,
};

export default Add;
