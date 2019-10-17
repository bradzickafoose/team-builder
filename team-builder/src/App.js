import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import { Route, Link } from 'react-router-dom';

function App() {
	const [ people, setPeople ] = useState([
		{ id: 0, name: 'Bradley', email: 'stop@hammer.time', role: 'student' },
		{ id: 1, name: 'Justin', email: 'justin@gmail.com', role: 'TL' },
	]);

	const addPerson = (person) => {
		setPeople([ ...people, { ...person, id: Date.now() } ]);
	};

	const editPerson = (editedPerson) => {};

	return (
		<div className='App'>
			<Link to='/'>Home</Link>
			<Link to='/add'>Add Person</Link>
			<Route path='/add' render={(props) => <Form submitPerson={addPerson} buttonText='Add Person' />} />
			<Route exact path='/' render={(props) => people.map((person, index) => <Card key={index} person={person} />)} />
		</div>
	);
}

export default App;
