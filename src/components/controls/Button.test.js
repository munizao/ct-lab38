import React from 'react';
import 'react-redux';
import Button from './Button';
import { shallow } from 'enzyme';

let wrapper;
let actionObj;
beforeEach(() => {
  actionObj = {
    action: () => ({ type: 'STUFF' }),
    text: 'stuff',
    stateName: 'coffees'
  };
  
  wrapper = shallow(<Button actionObj={actionObj} />);
});

describe('Button Component', () => {
  it('renders Button', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // I don't see how I can possibly make this test work without passing the dispatch in a prop

  // it('dispatches the action', () => {
  //   wrapper.simulate('click');
  //   expect(dispatch).toHaveBeenCalledWith({ type: 'STUFF' });
  // });
});
