import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export const ErTextField = (props) => {
  const { name, label, onChange, placeholder, required, id, IconStart, size } =
    props;
  return (
    <div>
      <TextField
        label={label}
        id={name}
        sx={{ m: 0.1, width: "30ch" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{IconStart}</InputAdornment>
          ),
        }}
        name="userName"
        // // value={userName}
        onChange={onChange}
        placeholder={placeholder}
        required
        size={size}
      />
    </div>
  );
};
