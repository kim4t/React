import { useState, useEffect } from "react";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((arr) => [toDo, ...toDos]); // need to create new one
    setToDo("");
  };
  useEffect(() => console.log(toDos), [toDos]);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your to do"
          value={toDo}
        />
        <button>Add to Do ({toDos.length})</button>
      </form>
      <hr />
      {toDos.sort().map((v, idx) => (
        <li key={idx}>{v}</li>
      ))}
    </div>
  );
}

export default ToDo;
