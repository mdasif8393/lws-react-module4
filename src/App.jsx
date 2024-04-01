import { useState } from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        <button onClick={() => setShow((s) => !s)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && <ChatRoom />}
    </>
  );
}

export default App;
