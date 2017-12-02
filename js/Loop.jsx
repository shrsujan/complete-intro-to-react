// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: white;
`;

class Loop extends Component {
  forLoop = () => {
    const arr = [];
    for (let i = 1; i <= 5; i += 1) {
      let obj = '';
      for (let j = 1; j <= 5; j += 1) {
        obj += i;
      }
      arr.push(obj);
    }
    return arr;
  };

  render() {
    return (
      <Wrapper>
        <h2>For Loop</h2>
        {this.forLoop().map(obj => <p>{obj}</p>)}
      </Wrapper>
    );
  }
}

export default Loop;
