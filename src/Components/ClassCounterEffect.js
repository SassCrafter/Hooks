import React from 'react'

export class ClassCounterEffect extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 count: 0,
		}
		this.increaseCounter = this.increaseCounter.bind(this);
	}


	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`;
	}

	componentDidUpdate() {
		document.title = `Clicked ${this.state.count} times`;
	}

	increaseCounter() {
		this.setState((prevState) => {
			return {count: prevState.count + 1}
		})
	}


	render() {
		return (
			<div>
				<button onClick={this.increaseCounter}>Click me</button>
			</div>
		)
	}
}

export default ClassCounterEffect