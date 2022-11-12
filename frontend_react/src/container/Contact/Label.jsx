import React from "react";

const Label = (props) => {
  const { text, required, htmlFor } = props;
  return (
    <>
      <label htmlFor={htmlFor} className="FORM__LABEL">
        <span className="font-bold">{text}</span>
        {required && <span className="text-red-700">*</span>}
      </label>
    </>
  );
};

export default Label;