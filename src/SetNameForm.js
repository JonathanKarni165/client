import InputBar from "./InputBar";
import "./SetNameForm.css";
import "./App.css";
import { useState } from "react";

function SetNameForm({ signIn, signUp }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clear = () => {
    setUsername("");
    setPassword("");
  }

  return (
    <div className="form">
      <h1 className="tit1">Who are you?</h1>

      <div className="indiv">

        <input className="inbar" placeholder="username" id="input1"
          onChange={(input) => { setUsername(input.target.value) }}
          value={username}></input>

      </div>

      <div className="indiv">
        <input className="inbar" placeholder="password" id="input2"
          onChange={(input) => { setPassword(input.target.value) }}
          type="password"
          value={password}></input>
      </div>

      <div className="btnpnl">
        <div className="btndiv1">
          <button className="sndbtn" onClick={() => { clear(); signIn(username, password) }}>sign in</button>
        </div>

        <div className="btndiv2">
          <button className="sndbtn" onClick={() => { clear(); signUp(username, password); }}>sign up</button>
        </div>

      </div>

    </div>
  );
}

export default SetNameForm;
