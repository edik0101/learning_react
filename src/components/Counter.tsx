import styles from './Counter.module.css';
import { useState, useEffect } from 'react';
import { CounterProps } from './Counter';
//import React from 'react';

export default function Counter({ init, end }: CounterProps) {
    // const init1 = parseInt(init || 0);
    const [count, SetCount] = useState<number>(init ?? 0);
    const [start, SetStart] = useState<boolean>(true);
    // function incr(event: React.MouseEvent<HTMLElement>) {
    //     SetCount((count) => count + 1);
    //     console.log(event.type);
    //     console.log(event.currentTarget);
    // }
    //let count: number = 0;
    useEffect(function () {
        let timer: any | null = null;
        if (!start) {
            //кнопка инкремента не видима,можно инициализировать счетчки
            timer = setInterval(function () {
                SetCount((count) => {
                    const newCount: number = count + 1;
                    if (end && newCount >= end) SetStart(true);
                    return newCount;
                });
            }, 1000);
        }
        return function () {
            clearInterval(timer);
        };
    });
    function restart() {
        SetStart(false);
        SetCount(init!);
    }
    return (
        <>
            Initial counter is: {init}
            <br />
            {end}
            <br />
            <div className={styles.div}>Счетчик : {count}</div>
            <br />
            {start ? (
                <>
                    <i>Counter in progress</i>&nbsp;
                    <button onClick={restart}> Start</button>
                </>
            ) : (
                <b>Counter in progress</b>
            )}
            {/* {end && count >= end ? (
                //Первый указывает на то, что вы используете JavaScript-код в JSX, в то время как второй указывает на начало используемого объекта JavaScript.
                <b style={{ color: 'red', fontSize: '20px' }}>
                    {' '}
                    Counter stoped
                </b>
            ) : (
                <i>Counter in progress</i>
            )} */}
        </>
    );
}
