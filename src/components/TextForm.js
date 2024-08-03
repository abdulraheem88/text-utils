import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
       // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
    }

    const handleLoClick = ()=>{
        // console.log("Upper case was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase!","success")
     }

     const handleClearClick = ()=>{
        // console.log("Upper case was clicked" + text);
         let newText = "";
         setText(newText);
         props.showAlert("Cleared all text!","success")
     }

     const speakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text speaking is start!","success")
    }

    const stopSpeak = () => {
        window.speechSynthesis.cancel();
        props.showAlert("Text speaking is stop!","success") 
    }

  

    const handleOnChange = (event)=>{
       // console.log("On changed");
        setText(event.target.value)
        
    }

    const [text,setText] = useState("")

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', 
      color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
<button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-dark mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-danger mx-1 my-2" onClick={handleClearClick}>Clear all Text</button>
<button className="btn btn-success mx-1 my-2" onClick={speakClick}>Start Speaking Text</button>
<button className="btn btn-warning mx-1 my-2" onClick={stopSpeak}>Stop Speaking Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
