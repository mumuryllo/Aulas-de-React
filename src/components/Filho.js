// export default props => {
//     return (
//     <>
//     <h2>{props.a}</h2>
//     <h2>{props.b}</h2>
//     </>
//     )
//     }
    


export default props => {
    function gerarNumero() {
    return Math.random()
    }
    return (
    <button onClick={ function() {
    const n = gerarNumero() //armazena o retorno da função em uma constante
    props.funcao('O valor é: ', n) //passa os dados para o Pai 
    
    }}
    >
    Executar
    </button>
    )
    }
    