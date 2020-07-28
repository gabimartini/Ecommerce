import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  type = 'checkbox', name, detail, onChange,
}) => (
  <input type={type} name={name} onChange={onChange} detail={detail} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  detail: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
