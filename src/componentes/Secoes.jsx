var Secoes = React.createClass({
  render: function() {
    var rows = [];
    if (this.props.anuncio.secoes && this.props.anuncio.secoes.length) {
      this.props.anuncio.secoes.forEach(function(secao) {
          if (secao.tipo == 'detalhamento') {
            rows.push(<SecoesDetalhamento secao={secao} />);
          } else if (secao.tipo == 'mapa') {
            rows.push(<SecoesMapa secao={secao} />);
          }
      });
    }

    return (
      <div className="Secoes">
        {rows}
      </div>      
    );
  }
});

var SecoesDetalhamento = React.createClass({ 
  render: function() {
    var lines = [];
    this.props.secao.linhas.forEach(function(linha){
      lines.push(<p><div className="SecoesDetalhamento-detalhe">{linha.detalhe}</div><div className="Secoes-descricao" >{linha.descricao}</div></p>)
    });
   
    return (
      <div className="SecoesDetalhamento">
        <h3 className="SecoesDetalhamento-rotulo">{this.props.secao.rotulo}</h3>
        {lines}
      </div>   
    )
  }
});

var SecoesMapa = React.createClass({
  render: function() {
      return (
        <img className="SecoesMapa" src={this.props.secao.imagem.src['2x']} />
      )
  }
});