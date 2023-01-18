import Room from "./Room";
import "./App.css";

function Rooms({ rooms, public_room, selected }) {
  return (
    <div>
      <h1 className={"tit"}>Chats</h1>
      <div className="panel">
        {public_room ? (
          <Room
            name={"public"}
            lastMessage={
              public_room.messages[public_room.messages.length - 1]["data"]
            }
            isFromMe={
              public_room.messages[public_room.messages.length - 1][
                "sender"
              ] === sessionStorage.getItem("name")
            }
            selected={selected}
            key={0}
          />
        ) : (
          "no room"
        )}

        {rooms
          ? rooms.map((room, id) => {
              return (
                <Room
                  name={
                    room.users[0] === sessionStorage.getItem("name")
                      ? room.users[1]
                      : room.users[0]
                  }
                  room_id={room.room_num}
                  lastMessage={room.messages[room.messages.length - 1]["data"]}
                  isFromMe={
                    room.messages[room.messages.length - 1]["sender"] ===
                    sessionStorage.getItem("name")
                  }
                  selected={selected}
                  key={id}
                />
              );
            })
          : "no rooms"}
      </div>
    </div>
  );
}

export default Rooms;
