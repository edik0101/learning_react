//import { Fragment } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
    return (
        <>
            qwwqe
            {/* комментарий */}
            {(function () {
                const jsx: Array<JSX.Element> = [];
                for (let i: number = 0; i < 3; i++) {
                    jsx.push(
                        <div key={i}>
                            Counter {i} defined by{' '}
                            {`<Counter init='5' end ='${10 + i}' />`} : <br />
                            <Counter init={5} end={10 + i} />
                            <br />
                        </div>,
                    );
                }
                return jsx;
            })()}
        </>
    );
}

export default App;
