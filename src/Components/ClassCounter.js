import React from 'react'

export class ClassCounter extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 count: 0,
		}
		this.incrementCounter = this.incrementCounter.bind(this);
	}

	incrementCounter() {
		this.setState({
			count: this.state.count + 1,
		})
	}

	render() {
		return (
			<div>
				<button onClick={this.incrementCounter}>Counter {this.state.count}</button>
			</div>
		)
	}
}

export default ClassCounter