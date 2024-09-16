import React, { useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Declara o estado inicial
    const incremet = () => {
        setCount(count + 1); // Atualiza o estado
    };

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={incremet}>Incrementar</button>
        </div>
    );
}

export default Counter;