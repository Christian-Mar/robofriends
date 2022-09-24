import styles from './SearchBox.module.css';

const SearchBox = ({ searchChange }) => {
	return (
		<div className={styles.searchbox_container}>
			<input
				type='search'
				placeholder='Search robots'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox
