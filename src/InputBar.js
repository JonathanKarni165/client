import React from "react";
import "./InputBar.css";
import { useState } from "react";
import { setUserAgent } from "react-device-detect";

function InputBar({ callback, className, submit }) {
  const [text, setText] = useState("");


  return (
    <div className="placeholder">

      <div className="big-bar-div">
        <input
          className="inbar"
          id="input"
          type="text"
          onChange={(input) => setText(input.target.value)}
          value={text}
        />

      </div>

      <div className="small-bar-div">
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
    </div>
  );
}

export default InputBar;
