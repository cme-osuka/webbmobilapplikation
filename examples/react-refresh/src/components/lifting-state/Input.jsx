
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type="text"
      onChange={(e) => props.setValue(e.target.value)}
      value={props.value}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

export default Input;
