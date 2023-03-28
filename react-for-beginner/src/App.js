import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("created");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((v) => !v);
  const onClick = () => setValue((v) => v + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Call the API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("Search for", keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
