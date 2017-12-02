// @flow

import React from 'react';

const Details = (props: {

}) => (
  <div className="details">
    <h1><pre><code>{JSON.stringify(props.show, null, 2)}</code></pre></h1>
  </div>
);

export default Details;
