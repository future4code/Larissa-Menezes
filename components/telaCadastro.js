import React from 'react'



export default class telaCadastro extends React.components{
    state = {
        nome:"",
        email: ""
    }

    handleNome = {Event} => {
        this.setState({nome: Event.target.value})
    }
    
    handleEmail = {Event} => {
        this.setState({email: Event.target.value})
    }
    fazerCadastro = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de Usuarios</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input 
                    placeholder={"Email"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}