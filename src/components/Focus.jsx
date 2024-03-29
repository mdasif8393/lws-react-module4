import { useRef } from "react";

export default function Focus() {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleFocusInput}>Focus the input</button>
    </>
  );
}
