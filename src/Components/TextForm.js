import React,{useState} from 'react'


export default function TextForm(props) {
  const handleOnchange = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }
  
  const handleUpClick = () => {
    // console.log("Button clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLowClick = () => {
    // console.log("Button clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "success");

  }

  const handleCopy = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard.", "success");

  }
  const handleClear = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared.", "success");

  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed.", "success");

  }
  const[text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white': 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="textBox" value={text} style={{backgroundColor: props.mode === 'dark'? '#2d3666': 'white', color: props.mode === 'dark'? 'white': 'black'}} onChange={handleOnchange} rows="7"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text </button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces </button>
      
    </div>
    <div className="container my-4"style={{color: props.mode === 'dark'? 'white': 'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text: "Enter something in textbox to preview "}</p>
    </div>
      
    </>
  )
}

