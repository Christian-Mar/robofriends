import React, { Component } from 'react';
//import logo from './logo.svg';
import Hello from './Hello';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Hello greeting={'Hello React Ninja'}/>
			</div>
		);
	}
}

export default App;
