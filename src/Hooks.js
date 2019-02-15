import React, { useState } from "react";

function useSliceOfState() {
  let [title, setTitle] = useState("hello world");
  let [inputValue, setInputValue] = useState("");

  function setTitleToFoo() {
    setTitle("foo");
  }

  return {
    title,
    setTitle,
    inputValue,
    setInputValue,
    setTitleToFoo
  };
}

function App() {
  const {
    title,
    setTitle,
    inputValue,
    setInputValue,
    setTitleToFoo
  } = useSliceOfState();

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={setTitleToFoo}>set title to 'foo'</button>
      <input
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            setTitle(inputValue);
          }
        }}
      />
    </div>
  );
}

export default App;
