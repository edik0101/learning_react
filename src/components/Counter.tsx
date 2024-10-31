import styles from './Counter.module.css';
import { useState, useEffect } from 'react';
import { CounterProps } from './Couter';

export default function Counter({ init, end }: CounterProps) {
    // const init1 = parseInt(init || 0);
    const [count, SetCount] = useState<number>(init ?? 0);

    //let count: number = 0;
    useEffect(function () {
        if (end && count >= end) return;
        const timer = setInterval(function (): void {
            SetCount(count + 1);

            //SetCount((count) => count + 1);
        }, 1000);
        //вызывается перед кадым обновлением компонента
        return function () {
            clearInterval(timer);
        };
    });
    return (
        <>
            Initial counter is: {init}
            <br />
            {end}
            <br />
            <div className={styles.div}>Счетчик : {count}</div>
            <br />
            {end && count >= end ? (
                <b> Counter stoped</b>
            ) : (
                <i>Counter in progress</i>
            )}
        </>
    );
}
