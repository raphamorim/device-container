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
      React.createElement(SecoesAnuncio, { anuncio: this.props.anuncio }),
      React.createElement(RegrasAnuncio, { anuncio: this.props.anuncio })
    );
  }
});

var Device = React.createClass({
  displayName: "Device",

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "Device" },
      this.props.children
    );
  }
});

var CabecalhoFormulario = React.createClass({
  displayName: "CabecalhoFormulario",

  render: function render() {
    return React.createElement(
      "div",
      { className: "Formulario-Cabecalho" },
      "Ganhe ",
      React.createElement(
        "span",
        { className: "Formulario-Cabecalho-valor" },
        "R$ ",
        this.props.anuncio.valor
      )
    );
  }
});

var SecoesFormulario = React.createClass({
  displayName: "SecoesFormulario",

  render: function render() {
    var rows = [];
    if (this.props.anuncio.formulario.secoes && this.props.anuncio.formulario.secoes.length) {
      this.props.anuncio.formulario.secoes.forEach(function (secao) {
        rows.push(React.createElement(CamposFormulario, { campos: secao.campos }));
      });
    }
    return React.createElement(
      "div",
      { className: "SecoesFormulario" },
      rows
    );
  }
});

var CamposFormulario = React.createClass({
  displayName: "CamposFormulario",

  render: function render() {
    var rows = [];
    if (this.props.campos && this.props.campos.length) {
      this.props.campos.forEach(function (campo) {
        if (campo.tipo === "paragrafo") {
          rows.push(React.createElement(
            "h2",
            { className: "CamposFormulario-titulo" },
            campo.html
          ));
        } else if (campo.tipo === "texto") {
          rows.push(React.createElement(CampoFormularioInput, { campo: campo }));
        } else if (campo.tipo === "telefone") {
          rows.push(React.createElement(CampoFormularioInput, { campo: campo, tipo: "telefone" }));
        } else if (campo.tipo === "email") {
          rows.push(React.createElement(CampoFormularioInput, { campo: campo, tipo: "email" }));
        } else if (campo.tipo === "opcoes") {
          rows.push(React.createElement(CampoFormularioOpcoes, { campo: campo }));
        }
      });
    }
    return React.createElement(
      "div",
      { className: "CamposFormulario" },
      rows
    );
  }
});

var CampoFormularioInput = React.createClass({
  displayName: "CampoFormularioInput",

  render: function render() {
    var tipo = this.props.tipo || "texto";
    var inputType = tipo === "email" ? tipo : "text";
    return React.createElement(
      "div",
      { className: "CampoFormularioInput CampoFormularioInput--tipo-{{tipo}}" },
      React.createElement(
        "h3",
        { className: "CamposFormularioInput-titulo" },
        this.props.campo.rotulo
      ),
      React.createElement("input", { className: "CampoFormularioInput-input", id: this.props.campo.id, type: { inputType: inputType } })
    );
  }
});

var CampoFormularioOpcoes = React.createClass({
  displayName: "CampoFormularioOpcoes",

  render: function render() {
    var options = [];
    if (this.props.campo.opcoes && this.props.campo.opcoes.length) {
      this.props.campo.opcoes.forEach(function (opcao) {
        options.push(React.createElement(
          "option",
          { value: "{opcao.valor}" },
          opcao.rotulo
        ));
      });
    }
    return React.createElement(
      "div",
      { className: "CampoFormularioOpcoes" },
      React.createElement(
        "h2",
        { className: "CampoFormularioOpcoes-titulo" },
        this.props.campo.rotulo
      ),
      React.createElement(
        "select",
        { className: "CampoFormularioOpcoes-select" },
        React.createElement("option", { value: "", selected: true }),
        options
      )
    );
  }
});

var Formulario = React.createClass({
  displayName: "Formulario",

  render: function render() {
    return React.createElement(
      "div",
      { className: "Formulario" },
      React.createElement(CabecalhoFormulario, { anuncio: this.props.anuncio }),
      React.createElement(InfoAnuncio, { anuncio: this.props.anuncio, anunciante: this.props.anunciante }),
      React.createElement("div", { className: "Formulario-linha" }),
      React.createElement(SecoesFormulario, { anuncio: this.props.anuncio }),
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
var SecoesAnuncio = React.createClass({
  displayName: "SecoesAnuncio",

  render: function render() {
    var rows = [];
    if (this.props.anuncio.secoes && this.props.anuncio.secoes.length) {
      this.props.anuncio.secoes.forEach(function (secao) {
        if (secao.tipo == "detalhamento") {
          rows.push(React.createElement(SecaoAnuncioDetalhamento, { secao: secao }));
        } else if (secao.tipo == "mapa") {
          rows.push(React.createElement(SecaoAnuncioMapa, { secao: secao }));
        }
      });
    }
    return React.createElement(
      "div",
      { className: "SecoesAnuncio" },
      rows
    );
  }
});

var SecaoAnuncioDetalhamento = React.createClass({
  displayName: "SecaoAnuncioDetalhamento",

  render: function render() {
    var lines = [];
    this.props.secao.linhas.forEach(function (linha) {
      var detalhe;
      if (linha.detalhe.trim().length) {
        detalhe = React.createElement(
          "div",
          { className: "SecaoAnuncioDetalhamento-detalhe" },
          linha.detalhe
        );
      }

      lines.push(React.createElement(
        "div",
        { className: "SecaoAnuncioDetalhamento-linha" },
        detalhe,
        React.createElement(
          "div",
          { className: "SecaoAnuncioDetalhamento-descricao" },
          linha.descricao
        )
      ));
    });
    return React.createElement(
      "div",
      { className: "SecaoAnuncioDetalhamento" },
      React.createElement(
        "h3",
        { className: "SecaoAnuncioDetalhamento-rotulo" },
        this.props.secao.rotulo
      ),
      React.createElement(
        "div",
        { className: "SecaoAnuncioDetalhamento-caracteristicas" },
        lines
      )
    );
  }
});

var SecaoAnuncioMapa = React.createClass({
  displayName: "SecaoAnuncioMapa",

  render: function render() {
    return React.createElement(
      "div",
      { className: "SecaoAnuncioMapa" },
      React.createElement(
        "a",
        { className: "SecaoAnuncioMapa-link", href: this.props.secao.url, target: "_blank" },
        React.createElement("img", { className: "SecaoAnuncioMapa-imagem", src: this.props.secao.imagem.src["2x"] }),
        React.createElement(
          "div",
          { className: "SecaoAnuncioMapa-texto" },
          "Como chegar?"
        )
      )
    );
  }
});
var phone = document.querySelectorAll(".Phone");

React.render(React.createElement(
  Device,
  null,
  React.createElement(Anuncio, { anuncio: anuncio, anunciante: anunciante })
), phone[0]);

React.render(React.createElement(
  Device,
  null,
  React.createElement(Formulario, { anuncio: anuncio, anunciante: anunciante })
), phone[1]);
//# sourceMappingURL=all.js.map