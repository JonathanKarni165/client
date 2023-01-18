import "./App.css";
import Message from "./Message";
import { useEffect, useRef } from "react";

function Chat({ messages, room_name }) {
  const ref = useRef(null);

  const scrollDown = () => {
    const element = ref.current;
    console.log(element);
    element.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => scrollDown(), [messages]);

  return (
    <div>
      <h1 className={"tit"}>{room_name}</h1>
      <div className="panel">
        {typeof messages === "undefined" ? (
          <p>loading...</p>
        ) : (
          messages.map((msg, id) => {
            return (
              <div key={id}>
                <Message
                  text={msg.data}
                  name={room_name === "public" ? msg.sender : ""}
                  index={id}
                  msgs={messages}
                />
              </div>
            );
          })
        )}
        <div ref={ref}></div>
      </div>
    </div>
  );
}

export default Chat;
