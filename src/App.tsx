//import { Fragment } from 'react';
import './App.css';
import React from 'react';
import Counter from './components/Counter';

function App() {
    return (
        <>
            {/* комментарий */}
            {[...Array(3).keys()].map(function (i) {
                const val = i <2 ? '1' : '0';
                console.log(val);
                return (
                    <React.Fragment key={i}>
                        Counter {i} defined by{' '}
                        {`<Counter autostart='${val}' init='0'
                            end='${10 + i} />`}{' '}
                        : <br />
                        <Counter autostart={val} init={0} end={10 + i} />
                        <br />
                        <br />
                    </React.Fragment>
                );
            })}
        </>
    );
}

export default App;
