import React from 'react';
import 'tachyons'

const User=(props)=>{
	return(
		<li>
			<span>Name: {props.children}, Number: {props.number}</span>
			<button id="del" className='ma1 pa1 tc grow' onClick={props.onDelete}>Delete</button>
		</li>
	)
}

export default User;