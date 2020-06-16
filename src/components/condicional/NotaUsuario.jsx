import React from 'react'
import If from './If'

export default props => {
    const isAprovado = props.nota >= 7;
    return (
        <div>
            <If test = {isAprovado}>
                <p>Parabéns!!!</p>
                <p>Voce foi aprovado!!!</p>
                <p>Sua nota: <strong>{props.nota}</strong></p>
            </If>
            {/*<If test = {!usuario || !usuario.nome}>
                Seja bem vindo <strong>Fulano</strong>!!
            </If>*/}
        </div>
        
    )
}
