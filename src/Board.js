import React from 'react';

export default (props) => {
  return (
    <ul>
      {props.data.map(function(result) {
        return <li key={result}>{result}</li>
      })}
    </ul>
  );
}
