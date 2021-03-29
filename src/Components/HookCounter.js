import React, { useState } from 'react'

function HookCounter() {
	const initialValue = 0;
	const [count, setCount] = useState(initialValue);
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(initialValue)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
		</div>
	)
}

export default HookCounter