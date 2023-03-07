import React,{useState} from 'react'
import './TextForm.css';

export default function TextForm(props) {

const [text,setText]=useState('');
const handleUpClick=()=>{
    let upperText=text.toUpperCase();
    setText(upperText)
    props.showAlert("Converted to uppercase!", "success");
}
const handleOnChange=(event)=>{
    setText(event.target.value)
}
const handleDownClick=()=>{
    let lowerText=text.toLowerCase();
    setText(lowerText)
    props.showAlert("Converted to lowercase!", "success");
}
const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-3'>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleDownClick}>Convert to Lowercase</button>
      <button  disabled={text.length===0}className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 style={{ color: 'green' ,lineHeight : 2}}>Your text summary:</h1>
    <h5 className='textStyle'>{text.split(" ").length} Words and {text.length} Characters</h5>
    <p style={props.styling}>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2 style={{ color: 'green'}}>Preview</h2>
    <p style={{ color: 'brown'}}>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

