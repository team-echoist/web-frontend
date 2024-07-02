/* eslint-disable react-hooks/rules-of-hooks */
import TextField from "@mui/material/TextField";

function index({ value, onChange, isShowInput, label, placeholder, name }) {
  if (!isShowInput) {
    return null;
  }

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e, name)}
      style={{
        width: "100%",
        marginBottom: "10px",
        backgroundColor: "white",
      }}
      InputLabelProps={{ shrink: true }}
    />
  );
}

export default index;
