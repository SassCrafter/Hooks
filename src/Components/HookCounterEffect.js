import React, {useState, useEffect} from 'react'

function HookCounterEffect() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		document.title = `You clicked ${count} times`
	})
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Counter: {count}</button>
		</div>
	)
}

export default HookCounterEffect