import React from 'react';

export default props => {
    const cb = props.quandoClicar;
    const min = 50;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
    const gerarNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function(e) {
                    cb('João', gerarIdade(), gerarNerd());
                }
            }>
                Fornecer informações
                </button>
        </div>
    )
}