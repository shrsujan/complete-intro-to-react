// @flow

import React from 'react';
import { shallow } from 'enzyme';
import ShowCard from '../ShowCard';

describe('ShowCard', () => {
  it('should render as per given props', () => {
    const fakeProps = {
      title: 'Atlanta',
      year: '2008–2013',
      description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
      poster: 'a.jpg',
      imdbID: 'tt4288182',
      trailer: 'MpEdJ-mmTlY'
    };
    const component = shallow(<ShowCard key={fakeProps.imdbID} {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
