var InfoAnuncio = React.createClass({
  render: function() {
    return (    
        <div className="InfoAnuncio">
          <img className="InfoAnuncio-anuncianteLogo" src={'http://mobdiq.craft.dev:81/' + this.props.anunciante.logo.src['2x']}/>
          <h3 className="InfoAnuncio-anuncioRotulo">{this.props.anuncio.rotulo}</h3>
          <h6 className="InfoAnuncio-anuncianteNome">{this.props.anunciante.nome}</h6>
        </div>
    );
  }
});
