import React, {useState} from 'react'

export default function TextBox(props) {
    const copyButton = ()=>{
        navigator.clipboard.writeText(text);
        if(text !== ""){
            SetName("copied");
            SetMyStyle({
                backgroundColor : "white",
                border : "1px solid green",
                color : "green"
            })
        }
        setTimeout(() => {
            SetMyStyle({
                color : "black",
                border : "1px solid black",
                backgroundColor : "white",
            })
            SetName("copy");
        }, 1000);
    }
    const btn1Func = ()=>{
        let newText = text.toUpperCase();
        SetText(newText);
    }
    const btn2Func = ()=>{
        let newText = text.toLowerCase();
        SetText(newText);
    }
    const btn3Func = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        SetText(newText);
    }
    const btn4Func = ()=>{
        function capitalize(text) {
            let sentences = text.split('. '); // Split paragraph into sentences
            for (let i = 0; i < sentences.length; i++) {
              let sentence = sentences[i].trim(); // Remove any leading/trailing spaces
              let firstChar = sentence.charAt(0); // Get the first character of the sentence
              sentences[i] = firstChar.toUpperCase() + sentence.slice(1).toLowerCase(); // Capitalize first letter and add the rest of the sentence
            }
            return sentences.join('. '); // Join sentences back into a paragraph
          }
          let newText1 = capitalize(text);
          let newText = newText1.replace(/\s+/g, ' ').trim();
          SetText(newText);
    }
    const btn5Func = ()=>{
        let newText = "";
        SetText(newText);
    }
    const handleOnChange = (event)=>{
        SetText(event.target.value);
    }
    const emptyIt = ()=>{
        if(text === 'Enter text here'){
            SetText("");
        }
    }
    const [text, SetText] = useState('Enter text here');
    const [name, SetName] = useState('copy');
    const TextAreaStyle = {
        color: "white",
        backgroundColor : "rgb(56, 56, 56)"
    };
    const [MyStyle, SetMyStyle] = useState({
        color : "black",
        border : "1px solid black",
        backgroundColor : "white"
    });
    return (
    <>
    <div className="mb-3 my-3">
        <h3>{props.heading}</h3>
        <textarea style={TextAreaStyle} className="form-control" value={text} onClick={emptyIt} onChange= {handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        <button className="btn btn-secondary my-3" onClick={btn1Func} >Convert to UpperCase</button>
        <button className="btn btn-secondary my-3 mx-2" onClick={btn2Func} >Convert to Lowercase</button>
        <button className="btn btn-secondary my-3 mx-1" onClick={btn3Func} >Remove Spaces</button>
        <button className="btn btn-secondary my-3 mx-1" onClick={btn4Func} >Make correction</button>
        <button className="btn btn-secondary my-3 mx-1" style = {MyStyle} onClick={copyButton} >{name}</button>
        <button className="btn btn-outline-secondary my-3 mx-1" onClick={btn5Func} >Clear</button>
    </div>
    </>
  )
}
