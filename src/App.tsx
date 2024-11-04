import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
    const [total, setTotal]= useState(0);
        return (
        <>
     {/* https://github.com/PacktPublishing/ASP.NET-Core-5-and-React-Second-Edition */}
            <Counter  setTotal={setTotal} /> <hr />
            <Counter focus setTotal={setTotal} /> <hr />
            <Counter setTotal={setTotal} /> <hr />
            <b> Total: {total}</b>
        </>
    );
}

export default App;
