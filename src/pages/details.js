import React, { useEffect, useState } from 'react';
import Main from '../styles/Templates/Main';
import RegularSelection from '../styles/Templates/RegularSection';

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
        <Main>
            <RegularSelection>
                <h1>Details!</h1>
                <img src={item.thumbnailsSlug} alt="thumbnailsSlug" />
                {item.title}
            </RegularSelection>
        </Main>
    )
}

export default Details;