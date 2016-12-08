var React = require('react');
var MessageList = require('../components/messageList.js');
var MessageForm = require('../components/messageForm.js');

var data = [{
	name: 'coldriver',
	message: 'Hello!'
}];

var MessageBoard = React.createClass({
	getInitialState: () => {
		return {
			data: []
		};
	},
	componentDidMount: () => {
		setTimeout(() => {
			this.setState({
				data: data
			})
		}, 2000)
	},
	handleMessageSubmit: (message) => {
		data.push(message);
		this.setState({
			data: data
		});
	},
	render: () => {
		return (
			<div className = "messageBoard">
				<h3>{ this.props.title }</h3>
				<MessageList data = { this.state.data } />
				<MessageForm onMessageSubmit = { this.handleMessageSubmit } />
			</div>
			)
	}
})

module.exports = MessageBoard;