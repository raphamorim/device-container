var data = {};

var Header = React.createClass({displayName: "Header",
  render: function() {
    return (
      React.createElement("div", {className: "content", data: this.props.data}, 
        "Hello, world! I am a Header."
      )
    );
  }
});

var Body = React.createClass({displayName: "Body",
  render: function() {
    return (
      React.createElement("div", {className: "content"}, 
        "Hello, world! I am a Body."
      )
    );
  }
});

React.render(
  React.createElement(Header, {data: data}),
  document.querySelector('.header')
);

React.render(
  React.createElement(Body, null),
  document.querySelector('.body')
);