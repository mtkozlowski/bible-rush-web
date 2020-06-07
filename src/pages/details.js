import React, { useEffect, useState } from 'react';
import RegularSelection from '../styles/Templates/RegularSection';
import styled from 'styled-components';

const Main = styled.main`

`;

function Details ({ match }) {
    useEffect(() => {
        const fetchItem = async () => {
            const url = new URL("http://localhost:8000/details");
            const params = {query: match.params.id};

            url.search = new URLSearchParams(params).toString();
            const data = await fetch(url);
            const item = await data.json();
            setItem(...item);
        }

        fetchItem();
    }, [match]);

    const [item, setItem] = useState({});


    return (
        <RegularSelection as={Main}>
            <h1>Details!</h1>
            <img src={item.thumbnailsSlug} alt="thumbnailsSlug" />
            {item.title}
        </RegularSelection>
    )
}

export default Details;