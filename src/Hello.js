import React, { Component } from 'react';
import styles from './Hello.module.css';

class Hello extends Component {
	render() {
		return (
			<div className={styles.container}>
				<h1>Hello World</h1>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

export default Hello;
