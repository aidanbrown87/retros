import React from 'react';

export default (props) => {
  return (
    <ul className="postIts">
      {props.data.map(function(result) {
        return <li key={result}>{result}</li>
      })}
    </ul>
  );
}
