"use strict";

var CabecalhoAnuncio = React.createClass({
  displayName: "CabecalhoAnuncio",

  render: function render() {
    return React.createElement(
      "div",
      { className: "Anuncio-Cabecalho" },
      React.createElement(
        "h6",
        { className: "Anuncio-Cabecalho-titulo" },
        "INDIQUE E GANHE"
      ),
      React.createElement(
        "h2",
        { className: "Anuncio-Cabecalho-valor" },
        "R$ ",
        this.props.anuncio.valor
      )
    );
  }
});

var Anuncio = React.createClass({
  displayName: "Anuncio",

  render: function render() {
    return React.createElement(
      "div",
      { className: "Anuncio" },
      React.createElement(CabecalhoAnuncio, { anuncio: this.props.anuncio }),
      React.createElement(InfoAnuncio, { anuncio: this.props.anuncio, anunciante: this.props.anunciante }),
      React.createElement(Midias, { midias: this.props.anuncio.midias }),
      React.createElement("div", { className: "Anuncio-Descricao", dangerouslySetInnerHTML: { __html: this.props.anuncio.descricao } }),
      React.createElement(Secoes, { anuncio: this.props.anuncio }),
      React.createElement(RegrasAnuncio, { anuncio: this.props.anuncio })
    );
  }
});

var InfoAnuncio = React.createClass({
  displayName: "InfoAnuncio",

  render: function render() {
    return React.createElement(
      "div",
      { className: "InfoAnuncio" },
      React.createElement("img", { className: "InfoAnuncio-anuncianteLogo", src: "http://mobdiq.craft.dev:81/" + this.props.anunciante.logo.src["2x"] }),
      React.createElement(
        "h3",
        { className: "InfoAnuncio-anuncioRotulo" },
        this.props.anuncio.rotulo
      ),
      React.createElement(
        "h6",
        { className: "InfoAnuncio-anuncianteNome" },
        this.props.anunciante.nome
      )
    );
  }
});

var Midias = React.createClass({
  displayName: "Midias",

  getInitialState: function getInitialState() {
    return { midia: 0 };
  },

  proximaMidia: function proximaMidia() {
    if (this.state.midia + 1 < this.props.midias.length) {
      this.setState({ midia: this.state.midia + 1 });
    } else {
      this.setState({ midia: 0 });
    }
  },

  render: function render() {
    var midias;
    if (this.props.midias && this.props.midias.length) {
      midias = React.createElement("img", { onClick: this.proximaMidia, src: "http://mobdiq.craft.dev:81/" + this.props.midias[this.state.midia].src["2x"] });
    }

    return React.createElement(
      "div",
      { className: "Midias" },
      midias
    );
  }
});

var RegrasAnuncio = React.createClass({
  displayName: "RegrasAnuncio",

  render: function render() {
    return React.createElement(
      "div",
      { className: "RegrasAnuncio" },
      React.createElement(
        "h3",
        { className: "RegrasAnuncio-rotulo" },
        "Regras da indicação"
      ),
      React.createElement(
        "p",
        { className: "RegrasAnuncio-condicoes" },
        "- ",
        this.props.anuncio.condicoes.join("\n- ")
      )
    );
  }
});
var Secoes = React.createClass({
  displayName: "Secoes",

  render: function render() {
    var rows = [];
    if (this.props.anuncio.secoes && this.props.anuncio.secoes.length) {
      this.props.anuncio.secoes.forEach(function (secao) {
        if (secao.tipo == "detalhamento") {
          rows.push(React.createElement(SecoesDetalhamento, { secao: secao }));
        } else if (secao.tipo == "mapa") {
          rows.push(React.createElement(SecoesMapa, { secao: secao }));
        }
      });
    }

    return React.createElement(
      "div",
      { className: "Secoes" },
      rows
    );
  }
});

var SecoesDetalhamento = React.createClass({
  displayName: "SecoesDetalhamento",

  render: function render() {
    var lines = [];
    this.props.secao.linhas.forEach(function (linha) {
      lines.push(React.createElement(
        "p",
        null,
        React.createElement(
          "div",
          { className: "SecoesDetalhamento-detalhe" },
          linha.detalhe
        ),
        React.createElement(
          "div",
          { className: "Secoes-descricao" },
          linha.descricao
        )
      ));
    });

    return React.createElement(
      "div",
      { className: "SecoesDetalhamento" },
      React.createElement(
        "h3",
        { className: "SecoesDetalhamento-rotulo" },
        this.props.secao.rotulo
      ),
      lines
    );
  }
});

var SecoesMapa = React.createClass({
  displayName: "SecoesMapa",

  render: function render() {
    return React.createElement("img", { className: "SecoesMapa", src: this.props.secao.imagem.src["2x"] });
  }
});
var phone = document.querySelectorAll(".Phone");

React.render(React.createElement(Anuncio, { anuncio: anuncio, anunciante: anunciante }), phone[0]);
//# sourceMappingURL=all.js.map