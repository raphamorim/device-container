var data = {};

var Header = React.createClass({
  render: function() {
    return (
      <div className="header" data={this.props.data} >
        Hello, world! I am a Header.
      </div>
    );
  }
});

var Body = React.createClass({
  render: function() {
    return (
      <div className="body">
        Hello, world! I am a Body.
      </div>
    );
  }
});

React.render(
  <Header data={data} />,
  document.querySelector('.box')
);