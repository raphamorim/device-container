var data = {};

var Header = React.createClass({
  render: function() {
    return (
      <div className="content" data={this.props.data} >
        Hello, world! I am a Header.
      </div>
    );
  }
});

var Body = React.createClass({
  render: function() {
    return (
      <div className="content">
        Hello, world! I am a Body.
      </div>
    );
  }
});

React.render(
  <Header data={data} />,
  document.querySelector('.header')
);

React.render(
  <Body />,
  document.querySelector('.body')
);