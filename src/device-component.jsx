var Header = React.createClass({
  render: function() {
    return (
      <div className="content">
        <h6>INDIQUE E GANHE</h6>
        <h2>R$ {this.props.anuncio.valor}</h2>
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    var anuncianteKey = this.props.anuncio.anuncianteKey,
        anunciante = anuncianteKey.split(':')[1];


    return (
      <div className="content">
        <div className="bar">
          <img className="profile" src={'http://mobdiq.craft.dev:81/' + this.props.anunciante.logo.src['2x']}/>
          <h3>{this.props.anuncio.rotulo}</h3>
          <h6>{anunciante}</h6>
        </div>
        <div className="midias">
          <img src={'http://mobdiq.craft.dev:81/' + this.props.anuncio.midias[0].src['2x']}/>
        </div>
        <div className="description">
          {this.props.anuncio.descricao}
        </div>
      </div>
    );
  }
});

var Features = React.createClass({
  render: function() {
    var rows = [];
    this.props.anuncio.secoes.forEach(function(secao) {
        if (secao.tipo == 'detalhamento') {
            var lines = [];
            secao.linhas.forEach(function(linha){
              lines.push(<p><div className="detail">{linha.detalhe}</div><div className="description">{linha.descricao}</div></p>)
            });
            
            rows.push(<h3>{secao.rotulo}</h3>);
            rows.push(lines);
        } else if (secao.tipo == 'mapa') {
            rows.push(<h3 className="map">Espaço para o mapa</h3>);
        }
    });

    return (
      <div className="content">
        {rows}
        <span className="break"></span>
      </div>      
    );
  }
});

var Terms = React.createClass({
  render: function() {
    return (
      <div className="content">
        <h3>Regras da indicação</h3>
        <p>- {this.props.anuncio.condicoes}</p>
      </div>
    );
  }
});

React.render(
  <Header anuncio={anuncio} />,
  document.querySelector('.header')
);

React.render(
  <About anuncio={anuncio} anunciante={anunciante} />,
  document.querySelector('.about')
);

React.render(
  <Features anuncio={anuncio} />,
  document.querySelector('.features')
);

React.render(
  <Terms anuncio={anuncio} />,
  document.querySelector('.terms')
);