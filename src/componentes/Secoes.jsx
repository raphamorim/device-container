var Secoes = React.createClass({
  render: function() {
    var rows = [];
    if (this.props.anuncio.secoes && this.props.anuncio.secoes.length) {
      this.props.anuncio.secoes.forEach(function(secao) {
          if (secao.tipo == 'detalhamento') {
            rows.push(<SecaoDetalhamento secao={secao} />);
          } else if (secao.tipo == 'mapa') {
            rows.push(<SecaoMapa secao={secao} />);
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

var SecaoDetalhamento = React.createClass({ 
  render: function() {
    var lines = [];
    this.props.secao.linhas.forEach(function(linha){
      var detalhe;
      if (linha.detalhe.trim().length){
        detalhe = <div className="SecaoDetalhamento-detalhe">{linha.detalhe}</div>;
      }

      lines.push(<div className="SecaoDetalhamento-linha">{detalhe}<div className="SecaoDetalhamento-descricao" >{linha.descricao}</div></div>)
    });
   
    return (
      <div className="SecaoDetalhamento">
        <h3 className="SecaoDetalhamento-rotulo">{this.props.secao.rotulo}</h3>
        <div className="SecaoDetalhamento-caracteristicas">
          {lines}
        </div>
      </div>   
    )
  }
});

var SecaoMapa = React.createClass({
  render: function() {
      return (
        <div className="SecaoMapa">
            <a className="SecaoMapa-link" href={this.props.secao.url} target="_blank">
              <img className="SecaoMapa-imagem" src={this.props.secao.imagem.src['2x']} />
              <div className="SecaoMapa-texto">Como chegar?</div>
            </a>
        </div>
      )
  }
});