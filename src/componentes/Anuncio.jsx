var CabecalhoAnuncio = React.createClass({
  render: function() {
    return (
      <div className="Anuncio-Cabecalho">
        <h6 className="Anuncio-Cabecalho-titulo">INDIQUE E GANHE</h6>
        <h2 className="Anuncio-Cabecalho-valor">R$ {this.props.anuncio.valor}</h2>
      </div>
    );
  }
});

var Anuncio = React.createClass({
  render: function() {
    return (
      <div className="Anuncio">
        <CabecalhoAnuncio anuncio={this.props.anuncio} />
        <InfoAnuncio anuncio={this.props.anuncio} anunciante={this.props.anunciante} />
        <Midias midias={this.props.anuncio.midias}/>
        <div className="Anuncio-Descricao" dangerouslySetInnerHTML={{__html: this.props.anuncio.descricao}} />
        <SecoesAnuncio anuncio={this.props.anuncio} />
        <RegrasAnuncio anuncio={this.props.anuncio} />
      </div>
    );
  }
});
