//create a component tht tracks and displays the number of times it has beem rendered . useUSeref to create a variable that persists acrosss renders without causing additional renders
//when it changes 

import React , {useState , useCallback, useRef} from "react";

export function Assignement2() {
    const [count,setCount] = useState(0);

    const numberoftimesrerendered = useRef(0); //it is not like global varibles as we initialised it value to 0 when it is mounted and it will remember its value as we wrapped it inside a useref hookS

    const handleReRender = () => {
        //update state to force re-render
        setCount(count+1);
    };

    numberoftimesrerendered.current = numberoftimesrerendered.current + 1;

    return (
        <div>
            <p>This component has rendered {numberoftimesrerendered.current} times.</p>
            <button  onClick={handleReRender}>Force Re-render</button>
        </div>
    )
}