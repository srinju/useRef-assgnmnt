//create a component with a text input field and a button . when the component mounts or the button is clicked , automatically focus the text input field using useRef 
//that means whenever we click on the foucs input button the cursor should reach there 

import { useEffect, useRef } from "react";

export function Assignement1() {

    const inputRef = useRef();

    useEffect(() => { //what it does is whenever the page is reloaded then the focus is on the input box that is the cursor will show on the input box
        inputRef.current.focus(); 
    },[inputRef]);

    const handleButtonClick = () => {
        inputRef.current.focus();   //when we click on the button also then also the cursor will focus on the input box 
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text here!"></input>
            <button style={{margin:10}} onClick={handleButtonClick}>Focus Input</button>
        </div>
    )
}