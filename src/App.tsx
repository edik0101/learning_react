//import { Fragment } from 'react';
import './App.css';
import React from 'react';
import Counter from './components/Counter';

function App() {
    return (
        <>
            {/* комментарий */}
            {[0, 1, 2].map(function (i) {
                return (
                    <React.Fragment key={i}>
                        Counter {i} defined by{' '}
                        {`<Counter init='5'
                            end='${10 + i} />`}{' '}
                        : <br />
                        <Counter init={5} end={10 + i} />
                        <br />
                        <br />
                    </React.Fragment>
                );
            })}
        </>
    );
}

export default App;
