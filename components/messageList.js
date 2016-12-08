var React = require('react');

var MessageList = React.createClass({
	render: () => {
		var messages = this.props.data.map((message, index) => {
			return (
				<li key = { index }>
					{ message.name } said:
						<p>{ message.message }</p>
				</li>
				)
		});

		return (
			<div className = "message">
				<ol id = "messageList">
					{ messages }
				</ol>
			</div>
			)
	}
})

module.exports = MessageList;