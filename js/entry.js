var React = require('react');
var ReactDOM = require('react-dom');
var MessageBoard = require('../components/messageBoard.js');

ReactDOM.render(<MessageBoard title = "留言板" />,
	document.getElementById('container')
)