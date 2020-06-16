import React from 'react'

export default function Fragmento(props){
    return (
        <React.Fragment> 
            <h1>Fragmento</h1>
            <p>Cuidado com esse erro!</p>
        </React.Fragment> //ou forma contraida <></> mas nesse caso não se pode passar parametros: <key = '1'></>
    )
}