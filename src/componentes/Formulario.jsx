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
            rows.push(<CampoFormularioInput campo={campo}/>)
          } else if (campo.tipo === 'telefone') {
            rows.push(<CampoFormularioInput campo={campo} tipo='telefone'/>)
          } else if (campo.tipo === 'email') {
            rows.push(<CampoFormularioInput campo={campo} tipo='email'/>)
          } else if (campo.tipo === 'opcoes') {
            rows.push(<CampoFormularioOpcoes campo={campo}/>)
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

var CampoFormularioInput = React.createClass({
  render: function() {
    var tipo = this.props.tipo || 'texto';
    var inputType = tipo === 'email' ? tipo : 'text';
    return (
      <div className="CampoFormularioInput CampoFormularioInput--tipo-{{tipo}}">
        <h3 className="CamposFormularioInput-titulo">{this.props.campo.rotulo}</h3>
        <input className="CampoFormularioInput-input" id={this.props.campo.id} type={{inputType}} />
      </div>
    );
  }
});

var CampoFormularioOpcoes = React.createClass({
  render: function() {
    var options = [];
    if (this.props.campo.opcoes && this.props.campo.opcoes.length) {
      this.props.campo.opcoes.forEach(function(opcao) {
        options.push(<option value="{opcao.valor}">{opcao.rotulo}</option>)
      });
    }
    return (
      <div className="CampoFormularioOpcoes">
        <h2 className="CampoFormularioOpcoes-titulo">{this.props.campo.rotulo}</h2>
        <select className="CampoFormularioOpcoes-select">
          <option value="" selected></option>
          {options}
        </select>
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
