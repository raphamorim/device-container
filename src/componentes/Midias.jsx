var Midias = React.createClass({
  getInitialState: function() {
    return {midia: 0};
  },

  proximaMidia: function() {
    if (this.state.midia + 1 < this.props.midias.length) {
      this.setState({midia: this.state.midia + 1});
    } else {
      this.setState({midia: 0});
    }
  },

  render: function() {
    var midias;
    if (this.props.midias && this.props.midias.length) {
      midias = <img onClick={this.proximaMidia} src={'http://mobdiq.craft.dev:81/' + this.props.midias[this.state.midia].src['2x']}/>;
    }

    return (
        <div className="Midias">
			{midias}
        </div>
    );
  }
});
