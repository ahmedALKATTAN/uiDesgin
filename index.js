import React from "react";

export const InputText = (props) => {
  const { name, onChange, placeholder, required, id } = props;
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        id={`${id}`}
        name={`${id}`}
        value={name}
        onChange={onChange}
        placeholder={`${placeholder}`}
        required={required}
      />
    </div>
  );
};

module.exports = InputText;
