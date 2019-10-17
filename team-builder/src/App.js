import React, { useState } from 'react';
import './App.css';
import Form from './components/Form;';

function App() {
	const [ people, setPeople ] = useState([
		{ id: 0, name: 'Bradley', email: 'stop@hammer.time', role: 'student' },
		{ id: 1, name: 'Justin', email: 'justin@reactjs.io', role: 'TL' },
	]);

	const addPerson = (person) => {
		setPeople([ ...people, { person, id: Date.now() } ]);
	};
	return;
	<div className='App'>
		<Form addPerson={addPerson} />
	</div>;
}

export default App;
