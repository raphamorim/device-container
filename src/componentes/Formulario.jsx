var CabecalhoFormulario = React.createClass({
  render: function() {
    return (
      <div className="Formulario-Cabecalho">
        Ganhe <span className="Formulario-Cabecalho-valor">R$ {this.props.anuncio.valor}</span>
      </div>
    );
  }
});

var SecoesFormulario = React.createClass({
  render: function() {
    var rows = [];
    if (this.props.anuncio.formulario.secoes && this.props.anuncio.formulario.secoes.length) {
      this.props.anuncio.formulario.secoes.forEach(function(secao) {
          rows.push(<CamposFormulario campos={secao.campos} />);
      });
    }

    return (
      <div className="SecoesFormulario">
        {rows}
      </div>      
    );
  }
});

var CamposFormulario = React.createClass({
  render: function() {
    var rows = [];
    if (this.props.campos && this.props.campos.length) {
      this.props.campos.forEach(function(campo) {
          if (campo.tipo === 'paragrafo') {
            rows.push(<h2 className="CamposFormulario-titulo">{campo.html}</h2>);
          } else if (campo.tipo === 'texto') {
            rows.push(<div className="CamposFormulario-campo"><h3 className="CamposFormulario-campoTitulo">{campo.rotulo}</h3><input className="CamposFormulario-campoInput" id={campo.id} type='text' /></div>)
          } else if (campo.tipo === 'telefone') {
            rows.push(<div className="CamposFormulario-campo"><h3 className="CamposFormulario-campoTitulo">{campo.rotulo}</h3><input className="CamposFormulario-campoInput" id={campo.id} type='text' /></div>)
          } else if (campo.tipo === 'email') {
            rows.push(<div className="CamposFormulario-campo"><h3 className="CamposFormulario-campoTitulo">{campo.rotulo}</h3><input className="CamposFormulario-campoInput" id={campo.id} type='email' /></div>)
          } else if (campo.tipo === 'opcoes') {
            rows.push(<div className="CamposFormulario-campo"><h3 className="CamposFormulario-campoTitulo">{campo.rotulo}</h3></div>)
          }
      });
    }

    return (
      <div className="CamposFormulario">
        {rows}
      </div>      
    );
  }
});


var Formulario = React.createClass({
  render: function() {
    return (
      <div className="Formulario">
        <CabecalhoFormulario anuncio={this.props.anuncio} />
        <InfoAnuncio anuncio={this.props.anuncio} anunciante={this.props.anunciante} />
        <div className="Formulario-linha"></div>
        <SecoesFormulario anuncio={this.props.anuncio} />
        <RegrasAnuncio anuncio={this.props.anuncio} />
      </div>
    );
  }
});
