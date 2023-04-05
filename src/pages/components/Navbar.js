import React from "react";

export default function Navbar(props) {

    const { searchValue, searchInput } = props;

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
