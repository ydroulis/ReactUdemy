import React from 'react'

export default props => {
    const n = parseInt(Math.random()* (props.max - props.min)) + props.min; 
    return ( 
        <React.Fragment>
            <p>O valor mínimo é {props.min} e o valor máximo é {props.max}</p>
            <p>O valor aleatório entre os dois números é {n}</p>
        </React.Fragment>
    )

    
}
