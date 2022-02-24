import React, { useState } from 'react'


export default props => {
    const [numero, setNumero] = useState(props.inicial);
    
    const inc = () => {
        if (numero == props.limite){
            alert("Você atingiu o número máximo!");
            return
        }
        
        setNumero(numero + props.passo);
    }

    const dec = () => {
        if (numero == 0){
            alert("Você não pode colocar números negativos");
            return
        }
        setNumero(numero - props.passo);
    }

    return (
        <>
            <h2>{numero}</h2>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </>
    );
}

    