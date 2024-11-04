//import styles from './Counter.module.css';
import React ,{  useState } from 'react';

export default function Counter() {
    // const init1 = parseInt(init || 0);
    const [value, setValue] = useState<string>("");
    
    function change(event: React.FormEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
    }

    function keyDown(event: React.KeyboardEvent<HTMLInputElement>){
        console.log(event.key);
        //allow del tab arrow
        if(["Backspace", "Delete", "ArrowLeft","ArrowRight","Tab"].includes(event.key)) return;
    //0to9
    if(event.key < "0" || event.key > "9") event.preventDefault();
    
    }

    return (
        <>
            <i>Counter in progress</i>&nbsp; 
            <input type="text" onChange={change} onKeyDown={keyDown}/>
            <br/>
            input Value: {value}
        </>
    );
}
