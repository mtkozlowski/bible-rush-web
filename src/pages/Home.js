import React, { useEffect, useState } from 'react';
import Main from '../styles/Templates/Main';
import RegularSection from '../styles/Templates/RegularSection';

const Home = () => {
  const [randomVerse, setRandomVerse] = useState({
    content: '',
    sigla: [],
  });

  useEffect(() => {
    const data = fetch(process.env.REACT_APP_VERSES_API);

    data
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        const { content: newContent, sigla: newSigla } = items;
        setRandomVerse({
          content: newContent,
          sigla: newSigla,
        });
      });
  }, []);

  return (
    <Main>
      <RegularSection>
        <p>{randomVerse.content}</p>
        <p>{randomVerse.sigla}</p>
      </RegularSection>
    </Main>
  );
};

export default Home;
