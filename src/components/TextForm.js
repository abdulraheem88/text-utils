import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
       
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
    }

    const handleLoClick = ()=>{
        
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase!","success")
     }

     const handleExtraSpaces = () => {
      let newText = text.split(/\s+/).join(" ");
      setText(newText);
      props.showAlert("Extra spaces removed!","success")
     }

     const handleClearClick = ()=>{
       
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
       
        setText(event.target.value)
        
    }

    const [text,setText] = useState("")

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-4'>{props.heading}</h2>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', 
      color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-dark mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-info mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button disabled={text.length===0} className="btn btn-danger mx-1 my-2" onClick={handleClearClick}>Clear out all Text</button>
<button disabled={text.length===0} className="btn btn-success mx-1 my-2" onClick={speakClick}>Start Speaking Text</button>
<button disabled={text.length===0} className="btn btn-warning mx-1 my-2" onClick={stopSpeak}>Stop Speaking Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
