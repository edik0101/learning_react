//import styles from './Counter.module.css';
import React ,{  useState , useRef, useEffect} from 'react';
import { CounterProps } from './CounterPT';

export default function Counter({setTotal, focus}:CounterProps) {
    // const init1 = parseInt(init || 0);
    const [value, setValue] = useState<string>("");
    const refCounter = useRef<HTMLInputElement>(null); // Указываем тип для ref
    useEffect(function() {
        if(focus)
            refCounter.current?.focus();
        console.log('type1: ', typeof(refCounter));
    },[]);

    function change(event: React.FormEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
        const newValue = parseInt(event.currentTarget.value || "0");
        setValue(newValue.toString());
        //new total
        //subtract the old value
        //изза того что мы можем ввести 30, то вводя 3 а затем 0, нам нжуно 3 отнять от значения
        const stateValue =  parseInt(value || "0");
        setTotal((total)=>(total-stateValue));
        //add the new value
        setTotal((total)=>(total+newValue));
    }

    function keyDown(event: React.KeyboardEvent<HTMLInputElement>){
        console.log(event.key);
        //allow del tab arrow
        if(["Backspace", "Delete", "ArrowLeft","ArrowRight","Tab"].includes(event.key)) return;
        //0 to 9
        if(event.key < "0" || event.key > "9") event.preventDefault();
    
    }

    return (
        <>
            <i>Counter in progress</i>&nbsp; 
            <input type="text" onChange={change} onKeyDown={keyDown} ref={refCounter}/>
            <br/>
            input Value: {value}
        </>
    );
}
