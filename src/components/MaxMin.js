import React from 'react'

export default  (props) => {
    console.log(props)
    console.log(props.min)
    console.log(props.max)
    return<h2>O valor {props.max} é maior que o valor {props.min}</h2>
    }
     

    