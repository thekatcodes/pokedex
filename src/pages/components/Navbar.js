import React, { useEffect, useState } from "react";

export default function Navbar(props) {
	const { fetchPokemon } = props;

	const [searchValue, setSearchValue] = useState("");

	// Set searchValue state everytime the input field changes
	const searchInput = (event) => {
		setSearchValue(event.target.value);
	};
	console.log(searchValue);
	// useEffect listens for changes to the searchValue state, when it changes, it calls the fetchPokemon function with the new searchValue
	useEffect(() => {
		fetchPokemon(searchValue);
	}, [searchValue]);

	return (
		<div className="navbar text-center">
			<input
				className="navbar__search border-solid border-2 border-sky-500 px-4 py-3 mt-4 mb-4 rounded-full"
				type="search"
				value={searchValue}
				placeholder="Search Pokémon"
				onChange={(event) => searchInput(event)}
			></input>
		</div>
	);
}
