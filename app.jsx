import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);

		this.state = {name: 'Victor'}
	}
	updateName = (ev) => {
		const { value } = ev.target;

		this.setState({name:value})
	};
	render() {
		return (
		<div className = 'container' style = {{ color: 'blue' }}>
			<input type="text" onBlur = {this.updateName} />
			<p>Your name is {this.state.name}</p>
			Hello World!
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'))