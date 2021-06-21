import React from 'react'



export default class telaListaUsuarios extends React.components{
    render() {
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                <h2>Lista de Usuarios</h2>
            </div>
        )
    }
}