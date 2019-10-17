import React from 'react';

export default function Card(props) {
	const { person } = props;
	return (
		<div>
			<div>{person.name}</div>
			<div>{person.email}</div>
			<div>{person.role}</div>
		</div>
	);
}
