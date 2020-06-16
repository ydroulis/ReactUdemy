import React, {cloneElement} from 'react'

export default function Familia(props){
    return(
        <div>
            <h1>Familia {props.sobrenome}</h1>
            {React.Children.map(props.children, filho=>{
                return cloneElement(filho, {...props})
            })}
        </div>
    )
}