import React from 'react'

import Blabla from './components/basico/Primeiro' //como usei export defualt o nome não precisa ser igual
import ComParametro from './components/basico/ComParametro'
import Fragmento from './components/basico/Fragmento'
import Aleatorio from './components/basico/Aleatorio'
import Cards from './components/layout/Cards'
import Familia from './components/basico/Familia'
import FamiliaMembro from './components/basico/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import NotaUsuario from './components/condicional/NotaUsuario'
import DiretaPai from './components/comunicacao/DiretaPai'


import './App.css'



export default _ => //forma mais enxuta de uma função
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Cards titulo="#09 - Comunicação Direta" color="#59323C">
               <DiretaPai></DiretaPai>
            </Cards>

            <Cards titulo="#08 - Renderização condicional" color="#982395">
                <ParOuImpar numero={21} />
                <NotaUsuario nota={9} />
                {/*<InfoUsuario usuario = {{ emai: "Yuri@androulis.com" }}/>*/}
            </Cards>

            <Cards titulo="#07 - Desafio repetição" color="#3A9AD9">
                <TabelaProdutos />
            </Cards>

            <Cards titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos />
            </Cards>

            <Cards titulo="#05 - Componentes com filhos" color="#00C8F8">
                <Familia sobrenome='Androulis'>
                    <FamiliaMembro nome='Yuri' />
                    <FamiliaMembro nome='Débora' />
                    <FamiliaMembro nome='Constantinos' />
                </Familia>
                <Familia sobrenome='Alves'>
                    <FamiliaMembro nome='Jéssica' />
                    <FamiliaMembro nome='Luzia' />
                    <FamiliaMembro nome='João' />
                </Familia>
            </Cards>

            <Cards titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={5} max={7} />
            </Cards>

            <Cards titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Cards>

            <Cards titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro nome="Pedro" nota={5} />
            </Cards>

            <Cards titulo="#01 - Primeiro" color="#588C73">
                <Blabla></Blabla>
            </Cards>
        </div>



    </div>
