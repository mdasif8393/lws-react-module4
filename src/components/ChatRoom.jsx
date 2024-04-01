import { useEffect } from "react";
import { createConnection } from "../utlis/chat";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    //cleanup
    return () => {
      connection.disconnect();
    };
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
