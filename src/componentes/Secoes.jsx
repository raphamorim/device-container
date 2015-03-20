var SecoesAnuncio = React.createClass({
  render: function() {
    var rows = [];
    if (this.props.anuncio.secoes && this.props.anuncio.secoes.length) {
      this.props.anuncio.secoes.forEach(function(secao) {
          if (secao.tipo == 'detalhamento') {
            rows.push(<SecaoAnuncioDetalhamento secao={secao} />);
          } else if (secao.tipo == 'mapa') {
            rows.push(<SecaoAnuncioMapa secao={secao} />);
          }
      });
    }
    return (
      <div className="SecoesAnuncio">
        {rows}
      </div>      
    );
  }
});

var SecaoAnuncioDetalhamento = React.createClass({ 
  render: function() {
    var lines = [];
    this.props.secao.linhas.forEach(function(linha){
      var detalhe;
      if (linha.detalhe.trim().length){
        detalhe = <div className="SecaoAnuncioDetalhamento-detalhe">{linha.detalhe}</div>;
      }

      lines.push(<div className="SecaoAnuncioDetalhamento-linha">{detalhe}<div className="SecaoDetalhamento-descricao" >{linha.descricao}</div></div>)
    });
    return (
      <div className="SecaoAnuncioDetalhamento">
        <h3 className="SecaoAnuncioDetalhamento-rotulo">{this.props.secao.rotulo}</h3>
        <div className="SecaoAnuncioDetalhamento-caracteristicas">
          {lines}
        </div>
      </div>   
    )
  }
});

var SecaoAnuncioMapa = React.createClass({
  render: function() {
      return (
        <div className="SecaoAnuncioMapa">
            <a className="SecaoAnuncioMapa-link" href={this.props.secao.url} target="_blank">
              <img className="SecaoAnuncioMapa-imagem" src={this.props.secao.imagem.src['2x']} />
              <div className="SecaoAnuncioMapa-texto">Como chegar?</div>
            </a>
        </div>
      )
  }
});