var Header = React.createClass({displayName: "Header",
  render: function() {
    return (
      React.createElement("div", {className: "content"}, 
        React.createElement("h6", null, "INDIQUE E GANHE"), 
        React.createElement("h2", null, "R$ ", this.props.anuncio.valor)
      )
    );
  }
});

var About = React.createClass({displayName: "About",
  render: function() {
    var anuncianteKey = this.props.anuncio.anuncianteKey,
        anunciante = anuncianteKey.split(':')[1];


    return (
      React.createElement("div", {className: "content"}, 
        React.createElement("div", {className: "bar"}, 
          React.createElement("img", {className: "profile", src: 'http://mobdiq.craft.dev:81/' + this.props.anunciante.logo.src['2x']}), 
          React.createElement("h3", null, this.props.anuncio.rotulo), 
          React.createElement("h6", null, anunciante)
        ), 
        React.createElement("div", {className: "midias"}, 
          React.createElement("img", {src: 'http://mobdiq.craft.dev:81/' + this.props.anuncio.midias[0].src['2x']})
        ), 
        React.createElement("div", {className: "description"}, 
          this.props.anuncio.descricao
        )
      )
    );
  }
});

var Features = React.createClass({displayName: "Features",
  render: function() {
    var rows = [];
    this.props.anuncio.secoes.forEach(function(secao) {
        if (secao.tipo == 'detalhamento') {
            var lines = [];
            secao.linhas.forEach(function(linha){
              lines.push(React.createElement("p", null, React.createElement("div", {className: "detail"}, linha.detalhe), React.createElement("div", {className: "description"}, linha.descricao)))
            });
            
            rows.push(React.createElement("h3", null, secao.rotulo));
            rows.push(lines);
        } else if (secao.tipo == 'mapa') {
            rows.push(React.createElement("h3", {className: "map"}, "Espaço para o mapa"));
        }
    });

    return (
      React.createElement("div", {className: "content"}, 
        rows, 
        React.createElement("span", {className: "break"})
      )      
    );
  }
});

var Terms = React.createClass({displayName: "Terms",
  render: function() {
    return (
      React.createElement("div", {className: "content"}, 
        React.createElement("h3", null, "Regras da indicação"), 
        React.createElement("p", null, "- ", this.props.anuncio.condicoes)
      )
    );
  }
});

React.render(
  React.createElement(Header, {anuncio: anuncio}),
  document.querySelector('.header')
);

React.render(
  React.createElement(About, {anuncio: anuncio, anunciante: anunciante}),
  document.querySelector('.about')
);

React.render(
  React.createElement(Features, {anuncio: anuncio}),
  document.querySelector('.features')
);

React.render(
  React.createElement(Terms, {anuncio: anuncio}),
  document.querySelector('.terms')
);