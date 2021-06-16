import React from 'react'
import telaCadastro from './components/telaCadastro';
import telaListaUsuarios from './components/telaListaUsuarios';


export default class App extends React.Component {
  state = {
    telaAtual: 'cadastro'
  }
  
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <telaCadastro irParaLista={this.irParaLista}/> 
      case "lista":
        return <telaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Pagina não encontrada</div>

    }
  }

  irParaCadastro = () => {
    this.setState((telaAtual: "cadastro"))
  }

  irParaLista = () => {
    this.setState((telaAtual: "lista"))
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    );
  }
  
}

