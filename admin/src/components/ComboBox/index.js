/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Index({ label, data, select, handleChange, width }) {
  return (
    <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label={label}
          onChange={handleChange}
          sx={{ minWidth: width ? width : 30, height: "3rem" }}
        >
          {data.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Index;
