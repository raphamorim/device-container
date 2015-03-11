var device = new Object();

/* Set Devices */
device.android = new Android();
device.iPhone = null;
device.windowsPhone = null;

/* Android */
function Android(version) {
	var version = 'lollipop';

	this.header = function(){
		return React.createClass({displayName: "Header",
  			render: function() {
    			return React.createElement("div", null, "Header: ", this.props.text);
  			}
		});
	}

	this.body = function(){
		return React.createClass({displayName: "Body",
  			render: function() {
    			return React.createElement("div", null, "Body: ", this.props.text);
  			}
		});
	}
}
