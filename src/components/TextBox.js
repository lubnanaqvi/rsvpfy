import React from "react";
const TextBox = ({ textboxId, textboxLabel }) => {
  return (
    <div>
      <label for={textboxId}>{textboxLabel}</label>
      <input type="text" id={textboxId} />
    </div>
  );
};
export default TextBox;
