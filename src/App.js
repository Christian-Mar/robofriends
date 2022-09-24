import { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from './robots';
import styles from './App.module.css';

const App = () => {

  // state
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');
  // useEffect bepaalt de state en geeft alle robots weer
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				setRobots(users);
			});
	}, []);
  // onSearchChange geeft de input weer en wordt doorgegeven als property naar de searchbox
	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	};
  // filteredRobots maak de vergelijking tussen de naam van de robot en de input in de search, om als property door te geven aan de CardList
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<div>
			<h1 className={styles.title}>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<CardList robots={filteredRobots} />
		</div>
	);
};

export default App;
