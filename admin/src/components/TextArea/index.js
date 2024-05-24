import TextareaAutosize from "@mui/base/TextareaAutosize";
import PropTypes from "prop-types";
import "./index.css";

function TextArea({ width, height, label, readonly, value, onChange }) {
  return (
    <TextareaAutosize
      aria-label={label}
      placeholder={label}
      className="text-area-style"
      style={{
        width: width ? width : 300,
        height: height ? height : 100,
        borderRadius: "10px",
        border: "1px solid lightgray",
        padding: "1rem 1rem",
      }}
      readOnly={readonly}
      value={value}
      onChange={onChange}
    />
  );
}

TextArea.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  readonly: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
