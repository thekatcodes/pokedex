import React, { useEffect, useState } from "react";
import Image from "next/image";

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
        <div className="navbar text-center flex pt-4 pb-4 mb-12 bg-red">
            <Image
            src="/pokeball.png"
            alt="Pokeball Logo"
            width={50}
            height={50}
                className='navbar__logo ml-4'
            />
			<h1 className="text-white ml-4">Pokedex</h1>
			<input
				className="navbar__search px-4 py-3 mx-auto rounded-full"
				type="search"
				value={searchValue}
				placeholder="Search Pokémon"
				onChange={(event) => searchInput(event)}
			></input>
		</div>
	);
}
