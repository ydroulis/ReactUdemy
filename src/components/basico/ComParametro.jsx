import React from 'react';

export default function ComParametros(props){
    const teste = props.nota >= 7 ? 'aprovado' : 'reprovado'
    return (
        <div>
            <p>O aluno <strong>{props.nome}</strong> tirou a nota {props.nota} e está { teste }</p>
        </div>
    )
}