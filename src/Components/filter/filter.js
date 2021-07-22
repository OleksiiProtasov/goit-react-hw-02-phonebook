import React from "react";
import PropTypes from "prop-types";

export default function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
