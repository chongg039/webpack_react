var React = require('react');
var MessageList = require('../components/messageList.js');
var MessageForm = require('../components/messageForm.js');

var data = [{
	name: 'coldriver',
	message: 'Hello!'
}];

var MessageBoard = React.createClass({
	getInitialState: function () {
		return {
			data: []
		};
	},
	componentDidMount: function () {
		setTimeout(function () {
			this.setState({
				data: data
			})
		}, 2000)
	},
	handleMessageSubmit: function (message) {
		data.push(message);
		this.setState({
			data: data
		});
	},
	render: function () {
		return (
			<div className = "messageBorad">
				<h3>{ this.props.title }</h3>
				<MessageList data = { this.state.data } />
				<MessageForm onMessageSubmit = { this.handleMessageSubmit } />
			</div>
			)
	}
})

module.exports = MessageBoard;