import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  return (
    <div>
      <h1 classame={styles.title}>Welcome Back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
