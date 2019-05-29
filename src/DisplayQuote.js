import React from 'react';

const DisplayQuote = ({ quote }) => {
  return (
    <div className="DisplayQuote">
      <img src={quote.image} alt="simpsons pic" />
      <ul>
        <li>
          Quote : {quote.quote}
        </li>
        <li>
          Character : {quote.character}
        </li>
        <li>
          CharacterDirection : {quote.character.direction}
        </li>
      </ul>
    </div>
  );
};

export default DisplayQuote;