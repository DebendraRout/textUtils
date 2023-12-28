import React from "react";
import { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");
  const upperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const lowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const clearText = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    let newText = document.getElementById("textBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied", "success");
  };
  return (
    <>
      <div className="container  mb-3">
        <h1 className="mt-5">{props.heading}</h1>
        <textarea
          autoFocus
          className={`form-control bg-${props.mode} text-${props.modeText}`}
          id="textBox"
          value={text}
          onChange={handleOnchange}
          rows={10}
          defaultValue={""}
        />
        <button onClick={upperCase} className="btn btn-primary mt-3 me-3">
          Convert to Uppercase
        </button>
        <button onClick={lowerCase} className="btn btn-primary mt-3 me-3">
          Convert to Lowercase
        </button>

        <button onClick={clearText} className="btn btn-primary mt-3 me-3">
          Clear Text
        </button>
        <button onClick={copyText} className="btn btn-primary mt-3 me-3">
          Copy Text
        </button>
      </div>

      <div className="container">
        <h3 className="mt-5">{props.heading2}</h3>
        <p>
          {text.split(" ").length - 1} words & {text.length} character
        </p>
      </div>

      <div className="container">
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
