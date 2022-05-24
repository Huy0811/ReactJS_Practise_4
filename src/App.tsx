import React, { useState } from "react";
import "./App.css";
import Button from "./components/asset/Button";
import Input from "./components/asset/Input";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  //const [text, setText] = useState("Enter text here");
  return (
    <div className="App">
      <Button
        a={a}
        b={b}
        text="Add"
        handleClick={(event, a, b) => {
          alert(a + " + " + b + " = " + (a + b));
        }}
      />
      <Button
        a={a}
        b={b}
        text="Subtract"
        handleClick={(event, a, b) => {
          alert(a + " - " + b + " = " + (a - b));
        }}
      />
      <Button
        a={a}
        b={b}
        text="Multiply"
        handleClick={(event, a, b) => {
          alert(a + " x " + b + " = " + a * b);
        }}
      />
      <Button
        a={a}
        b={b}
        text="Divide"
        handleClick={(event, a, b) => {
          alert(a + " : " + b + " = " + a / b);
        }}
      />
      {/* <Input
        text={text}
        handleChange={(event) => {
          setText(event.currentTarget.value);
          console.log(text);
        }}
      /> */}
      <Input
        text={a}
        handleChange={(event) => {
          setA(Number(event.currentTarget.value));
        }}
      />
      <Input
        text={b}
        handleChange={(event) => {
          setB(Number(event.currentTarget.value));
        }}
      />
    </div>
  );
}

export default App;
