import React,{useState} from 'react'
import './TextForm.css';

export default function TextForm(props) {

//Use of state to get and manipulate the text in textarea

const [text,setText]=useState('');

//method to make text uppertext in textarea

const handleUpClick=()=>{
    let upperText=text.toUpperCase();
    setText(upperText)
    props.showAlert("Converted to uppercase!", "success");
}
//method to handle the value in textarea

const handleOnChange=(event)=>{
    setText(event.target.value)
}
//method to make text lowertext from textarea

const handleDownClick=()=>{
    let lowerText=text.toLowerCase();
    setText(lowerText)
    props.showAlert("Converted to lowercase!", "success");
}
//method to clear the text from textarea

const handleClearClick = ()=>{ 
  let newText = '';
  setText(newText);
  props.showAlert("Text Cleared!", "success");
}
//method to remove the extra space from textarea

const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}
  return (
    <>
  <div className='container' style={{color: props.mode==='dark'?'white':'#706767'}}>
      <h1 className='my-3' style={{color: props.mode==='dark'?'white':'#13466e'}}>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#7d8a93':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

  <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className='headingStyle'>Your text summary:</h1>
      <h5 className='textStyle'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</h5>
      <p style={props.styling}><strong>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</strong></p>
      <h2 className='headingStyle'>Preview</h2>
      <p className='previewStyle'>{text.length>0?text:"Nothing to preview!"}</p>
  </div>
    </>
  )
}

