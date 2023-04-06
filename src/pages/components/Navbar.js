import React, { useEffect, useState } from "react";

export default function Navbar(props) {
	const { fetchPokemon } = props;

	const [searchValue, setSearchValue] = useState("");

	// Set searchValue state everytime the input field changes
	const searchInput = (event) => {
		setSearchValue(event.target.value);
	};

	// useEffect listens for changes to the searchValue state, when it changes, it calls the fetchPokemon function with the new searchValue
	useEffect(() => {
		fetchPokemon(searchValue);
	}, [searchValue]);

	return (
		<>
			<input
				className="search-field"
				type="search"
				value={searchValue}
				placeholder="Search Pokémon"
				onChange={(event) => searchInput(event)}
			></input>
		</>
	);
}
