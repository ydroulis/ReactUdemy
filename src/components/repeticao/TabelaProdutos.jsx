import React from 'react';
import produtos from '../../data/produtos';
import './TabelaProdutos.css'

export default props => {
    const produtosTab = produtos.map((produto, i) =>{
        return (
            <tr className = {i % 2 === 0? "par":"impar"} key = {produto.id}>
                <td>{produto.id}</td><td>{produto.nome}</td><td>{produto.preco.replace('.', ',')}</td>
            </tr>
        );
    });

    return(
        <div>
            <table>
                <thead className = "thead">
                <tr>
                    <th>Id</th><th>Nome</th><th>Preço</th>
                </tr>
                </thead>
                <tbody>
                    {produtosTab}
                </tbody>
            </table>
        </div>
    )
}