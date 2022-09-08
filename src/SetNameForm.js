import InputBar from "./InputBar";
import "./SetNameForm.css";

function SetNameForm() {
  const saveUsername = (value) => {
    localStorage.setItem("name", value);
    window.location.reload(false);
  };
  return (
    <div className="form">
      <h1 className="tit1">insert your username</h1>
      <InputBar
        callback={saveUsername}
        className={"small-bar-div"}
        submit="ok"
      />
    </div>
  );
}

export default SetNameForm;
