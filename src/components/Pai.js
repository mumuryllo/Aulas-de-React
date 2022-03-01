// import Filho from './Filho'
// export default props => {
// let x = 13
// let y = 100
// return (
// <>
// <Filho a={x + 300} b={y + 400} />
// </>
// )
// }


import React, { useState } from 'react'
import Filho from './Filho'

export default props => {
const [texto, setTexto] = useState('') //definindo o estado inicial
const [num, setNum] = useState(0) 
function setValores(texto, numero) {
setTexto(texto)
setNum(numero)
}
return (
<>
<h2>
{texto}{num}
</h2>
<Filho funcao={setValores}/>
</>
)
}
