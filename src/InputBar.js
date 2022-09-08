import React from "react";
import "./InputBar.css";
import { useState } from "react";

function InputBar({ callback, className, submit }) {
  const [text, setText] = useState("");

  return (
    <div className={className}>
      <input
        className="inbar"
        id="input"
        type="text"
        onChange={(input) => setText(input.target.value)}
        value={text}
      />
      <button
        className="sndbtn"
        onClick={() => {
          if (text !== "") callback(text);
          setText("");
        }}
      >
        {submit}
      </button>
    </div>
  );
}

export default InputBar;
