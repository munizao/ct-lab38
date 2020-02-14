import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { getGetCount } from '../../selectors/get-get-count';

const Button = ({ actionObj }) => {
  const { action, text, stateName } = actionObj;
  const dispatch = useDispatch();
  const count = useSelector(getGetCount(stateName));
  return (
    <button key={text} onClick={() => dispatch(action())}>
      {text}
      {!!count && `- ${count}`}
    </button>
  );
};

Button.propTypes = {
  actionObj: PropTypes.shape({
    action: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    stateName: PropTypes.string.isRequired
  })
};

export default Button;
