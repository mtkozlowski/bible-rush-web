import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  display: block;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.darkestgrey};
  background: ${({ theme }) => theme.colors.lightgrey};
  padding: 0.8rem 1rem;
`;

function SearchHelper({ recognizedSiglum }) {
  const { book = null, chapter = null, verses = [] } = recognizedSiglum;

  if (book) {
    let message = `szukasz komentarzy do księgi: ${book}`;

    if (chapter.length) message += `, a w niej tego rozdziału ${chapter}`;
    if (verses.length)
      message += ` oraz następujących wersetów: ${verses.join(', ')}`;

    return (
      <>
        <StyledParagraph>
          Witaj, cały czas uczę się właściwie rozpoznawać adresy wersetów
          biblijnych (sigli). Na podstawie tego, co wprowadziłeś(aś) do pola
          powyżej wydaje mi się, że {message}
        </StyledParagraph>
      </>
    );
  }
  return '';
}

export default SearchHelper;
