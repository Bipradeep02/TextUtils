import React, { useState } from "react";

const TextForm = (props) => {

    const upClicked = () => {
        // console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const lowClicked = () => {
        // console.log("button clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const clrClicked = () => {
        // console.log("button clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the Text", "success");
    }

    const handleOnChange = (e) => {
        // console.log("button clicked");
        setText(e.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style = { { color : (props.mode === 'light' ? 'black' : 'white') } }>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter Your Text" style = { {backgroundColor : (props.mode === 'light' ? 'white' : 'grey'), color : (props.mode === 'dark' ? 'white' : 'black') } } value = {text} onChange = {handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-dark mx-2" onClick = {upClicked}>Convert To UpperCase</button>
                <button className="btn btn-dark mx-3" onClick = {lowClicked}>Convert To LowerCase</button>
                <button className="btn btn-dark mx-3" onClick = {clrClicked}>Clear Text</button>
            </div>
            <div className="container my-3" style = { { color : (props.mode === 'light' ? 'black' : 'white') } }>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <h6>{text.length === 0 ? 'Enter Something To Preview It' : text}</h6>
            </div>
        </>
    );
}

export default TextForm;