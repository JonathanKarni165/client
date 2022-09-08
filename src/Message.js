import React from "react";
import "./Message.css";

function Message({ text, name, index, msgs }) {
  const isMe = name === localStorage.getItem("name");
  let isLastMsgMe = false;

  //check if the last sent message is from the same person
  if (index > 0)
    if (msgs[index - 1].name)
      if (msgs[index - 1].name === name) isLastMsgMe = true;

  return (
    <div className={isMe ? "my-msg-div" : "other-msg-div"}>
      <div className={isMe ? "my-name" : "other-name"}>
        {isLastMsgMe ? "" : isMe ? "You" : name}
      </div>
      {name === localStorage.getItem("name") ? (
        <p key={index} className="my-msg">
          {text}
        </p>
      ) : (
        <p key={index} className="other-msg">
          {text}
        </p>
      )}
    </div>
  );
}

export default Message;
