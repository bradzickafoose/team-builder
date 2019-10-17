import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

function App() {
	const [ people, setPeople ] = useState([
		{ id: 0, name: 'Bradley', email: 'stop@hammer.time', role: 'student' },
		{ id: 1, name: 'Justin', email: 'justin@gmail.com', role: 'TL' },
	]);

	const addPerson = (person) => {
		setPeople([ ...people, { ...person, id: Date.now() } ]);
	};
	return (
		<div className='App'>
			<Form submitPerson={addPerson} buttonText='Add Person' />
			{people.map((person, index) => <Card key={index} person={person} />)}
		</div>
	);
}

export default App;
