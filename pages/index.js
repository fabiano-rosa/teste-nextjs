import { useState } from 'react';

function Home() {
    
    return (
        <>
            <h1>Teste NextJS</h1>
            <Contador />
        </>
    );
}

function Contador() {
    const [contador, setContador] = useState(1);

    function add() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>Contador: {contador}</div>
            <button onClick={add}>Adicionar</button>
        </div>
    );
}

export default Home;