export default ({ num = 0 }) => { //caso nenhuma props for passada o valor de num é 0
    return (
    <div>
    <h2>O resultado é:</h2>
    {num % 2 == 0
    ? <h3>Par</h3>
    : <h3>Ímpar</h3>
    }
    </div>
    )
    
    }