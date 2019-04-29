import React from 'react';
import { shallow } from 'enzyme';
import BrowseRecords from './index';

describe('<BrowseRecords />', () => {
  it('renders without crashing given the required props', () => {
    const enzymeWrapper = shallow(<BrowseRecords />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
