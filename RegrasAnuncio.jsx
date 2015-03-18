var RegrasAnuncio = React.createClass({
  render: function() {
    return (
      <div className="RegrasAnuncio">
        <h3 className="RegrasAnuncio-rotulo">Regras da indicação</h3>
        <p className="RegrasAnuncio-condicoes">- {this.props.anuncio.condicoes.join('\n- ')}</p>
      </div>
    );
  }
});