import React from "react";
import "./button.css";

function Button({ text, handleClick, buttonType }) {
  return (
    <div className="button_container">
      {buttonType === "filled" ? (
        <button onClick={handleClick} className="filled_btn">
          {text}
        </button>
      ) : (
        <button onClick={handleClick} className="outlined_btn">
          {text}
        </button>
      )}
    </div>
  );
}

export default Button;
