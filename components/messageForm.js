var React = require('react');

var MessageForm = React.createClass({
	getInitialState: () => {
		return {
			name: '',
			message: ''
		};
	},
	handleNameChange: (e) => {
		this.setState({
			name: e.target.value
		})
	},
	handleMessageChange: (e) => {
		this.setState({
			message: e.target.value
		})
	},
	handleSubmit: (e) => {
		e.preventDefault();
		var name = this.state.name.trim();
		var message = this.this.state.message.trim();
		if (!name || !message) {
			return;
		}
		this.props.onMessageSubmit({
			name: name,
			message: message
		});
		this.setState({
			name: '',
			message: ''
		});
	},
	componentDidMount: () => {
		
	},
	render: () => {
		return (
			<div className = "row">
				<form className = "messageForm" onSubmit = { this.handleSubmit }>
					<input 
						type = "text" 
						placeholder = "your name" 
						value = { this.state.name } 
						onChange = { this.handleNameChange } 
						id = "textName" 
						className = "form-control" />
					<input
                        type="text"
                        placeholder="Say something..."
                        value={this.state.message}
                        onChange={this.handleMessageChange}
                        id="textMessage"
                        className="form-control" />
					<input 
						type = "submit"
						className = "btn btn-default"
						value = "Leave a message" />					
				</form>
			</div>
			)
	}
});

module.exports = MessageForm;