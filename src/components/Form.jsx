import { useRef } from "react";

export default function Form() {
  const myRef = useRef(null);

  const handleScroll = () => {
    myRef.current.textContent = "Hello react";
  };
  return (
    <>
      <div ref={myRef}>Form</div>
      <button onClick={handleScroll}>Scroll</button>
    </>
  );
}
