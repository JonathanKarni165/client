import React, { useState, useEffect, useContext, useRef } from "react";
import io from "socket.io-client";
import Message from "./Message";
import InputBar from "./InputBar";
import "./App.css";

const socket = io.connect("ws://chat-server-yonatan.herokuapp.com/");

function App() {
  const [data, setData] = useState({});
  const ref = useRef(null);

  const getMessages = () => {
    socket.emit("get_messages", (response) => {
      setData(response);

      //check if refereshed after a message was failed
      if (localStorage.getItem("tmp_message")) {
        addMessage(localStorage.getItem("tmp_message"));
        localStorage.removeItem("tmp_message");
      }
    });
  };

  const addMessage = (txt) => {
    if (socket.connected === false) {
      localStorage.setItem("tmp_message", txt);
      window.location.reload(false);
    }
    const newMsg = { text: txt, name: localStorage.getItem("name") };
    socket.emit("post_message", newMsg);
    getMessages();
  };

  const scrollDown = () => {
    const element = ref.current;
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(getMessages, []);
  useEffect(scrollDown, [data]);

  socket.on("disconnect", () => {
    window.location.reload(false);
  });

  socket.on("refresh", () => {
    getMessages();
  });

  return (
    <div>
      <h1 className={"tit"}>Chat App</h1>
      <div className="panel">
        {typeof data.messages === "undefined" ? (
          <p>loading...</p>
        ) : (
          data.messages.map((msg, id) => {
            return (
              <Message
                text={msg.text}
                name={msg.name ? msg.name : ""}
                index={id}
                msgs={data.messages}
              />
            );
          })
        )}

        <div style={{ float: "left", clear: "both" }} ref={ref}></div>
      </div>
      <InputBar className="big-bar-div" callback={addMessage} submit="send" />
    </div>
  );
}

export default App;
