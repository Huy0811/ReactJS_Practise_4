import React from "react";

type InputProps = {
  text: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <input
      type="number"
      value={props.text}
      onChange={(event) => props.handleChange(event)}
    />
  );
};

export default Input;
