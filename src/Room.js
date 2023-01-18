import "./Room.css";

function Room({ name, room_id, lastMessage, isFromMe, selected }) {
  return (
    <button className="room-btn" onClick={() => selected(room_id, name)}>
      <div className="room-name">{name}</div>
      <div className="msg-state">{isFromMe ? "sent" : "received"}</div>
      <div className="room-msg">{lastMessage}</div>
    </button>
  );
}

export default Room;
