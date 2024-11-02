import styles from './Counter.module.css';
import { useState, useEffect } from 'react';
import { CounterProps } from './CounterPropsTypes';

export default function Counter({ init, end, autostart }: CounterProps) {
    //autostart = autostart ?? '0';
    const [count, setCount] = useState<number>(init ?? 0);
    const [start, setStart] = useState(true);
    //let count: number = 0;
    useEffect(function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let timer: any;
        if (!start) {
            timer = setInterval(function (): void {
            setCount((count)=>{
                const newCount = count+1;
                if(newCount >= end!) setStart(true);
                return newCount; 
            });
        }, 1000);
    }
    return function () {
        clearInterval(timer);
    };
    
        //вызывается перед кадым обновлением компонента
       
    });
    function restart(){
        setStart(false);
        setCount(init!);
    }
    useEffect(function() {
        if(autostart === '1') restart()
    },[])
    return (
        <>
            Initial counter is: {init}
            <br />
            {end}
            <br />
            <div className={styles.div}>Счетчик : {count}</div>
            <br />
            { start ? (<>
                //Первый указывает на то, что вы используете JavaScript-код в JSX, в то время как второй указывает на начало используемого объекта JavaScript.
                <b style={{ color: 'red', fontSize: '20px' }}>
                    {' '}
                    Counter stoped
                </b>
                <button onClick={restart}>Start</button>
                </>
            ) : (
                <i>Counter in progress</i>
            )}
        </>
    );
}
