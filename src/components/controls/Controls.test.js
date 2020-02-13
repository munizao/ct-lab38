import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  let wrapper;
  let dispatch;
  beforeEach(() => {
    const action1 = () => ({ type: 'STUFF' });
    const action2 = () => ({ type: 'OTHER' });

    const actionData = [
      { action: action1, text: 'stuff' },
      { action: action2, text: 'other' }
    ];
    dispatch = jest.fn();

    wrapper = shallow(<Controls
      actions={actionData}
      dispatch={dispatch} />);
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches the action', () => {
    wrapper.findWhere(el => el.key() === 'stuff').simulate('click');
    expect(dispatch).toHaveBeenCalledWith({ type: 'STUFF' });
  });
});
  
