import React, { useState } from 'react'

function HookCounterObject() {

	const [ name, setName ] = useState({first: '', last: ''});

	return (
		<div>
			<form>
				<input type="text" value={name.first} onChange={(e) => setName(prevName => ({...name, first: e.target.value}))}/>
				<input type="text" value={name.last} onChange={(e) => setName(prevName => ({...name, last: e.target.value}))}/>
				<h2>Your first name is - {name.first}</h2>
				<h2>Your last name is - {name.last}</h2>
			</form>
		</div>
	)
}

export default HookCounterObject