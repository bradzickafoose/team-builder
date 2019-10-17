import React, { useState } from 'react';

export default function Form(props) {
	const { submitPerson, buttonText } = props;
	const [ person, setPerson ] = useState({ name: '', email: '', role: '' });
	const handleChange = (event) => {
		setPerson({ ...person, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		submitPerson(person);
		setPerson({ name: '', email: '', role: '' });
	};
	return (
		<form onSubmit={handleSubmit}>
			<input placeholder='name' value={person.name} name='name' onChange={handleChange} />
			<input placeholder='email' value={person.email} name='email' onChange={handleChange} />
			<input placeholder='role' value={person.role} name='role' onChange={handleChange} />
			<button type='submit'>{buttonText}</button>
		</form>
	);
}
