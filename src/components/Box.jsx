import * as React from "react";

const Box = (props) => {
  return (
    <div
    onClick = {props.handleClick}
    id = {props.id}
      style={{
        width: "180px",
        height: "180px",
        backgroundColor: props.color,
        border: "1px solid black",
        display: "inline-block",
      }}
    >
      <span>{props.color}</span>
    </div>
  );
};

export default Box;
