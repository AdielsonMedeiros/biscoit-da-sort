import React, { Component } from 'react'
import './estilo.css'
class App extends Component{

    constructor(props){
        super(props)
        this.state ={
            textoFrase:''
        }

        this.quebraBiscoito = this.quebraBiscoito.bind(this)

        this.frases = ['A maior de todas as torres começa no solo.', 'A vida trará coisas boas se tiver paciência', 'Você é do tamanho do seu sonho.',
    'aguá mole pedra dura tanto bate até que é nós','Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.', 'O Vasco da Gama é o melhor time do Brasil!', '<strong> * YOU ARE * <strong/>']
    }

    quebraBiscoito(){
        let state = this.state
        let numeroaleatorio = Math.floor(Math.random() * this.frases.length)
        state.textoFrase = ' " ' +this.frases[numeroaleatorio]+ ' " '
        this.setState(state)
    }
    render(){
        return(
            <div className="conteiner">
                <img src={require('./img/1471273.png')} className="img"/>
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase"> {this.state.textoFrase} </h3>
            </div>
        )
    }
}


class Botao extends Component{
    render(){
        return(
        <div>
            <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
        </div>
        )
    }
}

export default App
