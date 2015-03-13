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
    return (
      React.createElement("div", {className: "content"}, 
        React.createElement("div", {className: "bar"}, 
          React.createElement("img", {className: "profile", src: 'http://mobdiq.craft.dev:81/' + this.props.anunciante.logo.src['2x']}), 
          React.createElement("h3", null, this.props.anuncio.rotulo), 
          React.createElement("h6", null, this.props.anuncio.anuncianteKey)
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
    return (
      React.createElement("div", {className: "content"}, 
        "Dor"
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