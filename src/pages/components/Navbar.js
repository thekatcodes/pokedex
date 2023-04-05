import React from "react";
import { useState } from "react";

export default function Navbar() {
    const [search, setSearch] = useState("");
    

    // Set value of search state everytime the input field changes
    const searchInput = (event) => {
        setSearch(event.target.value);
    }
    console.log(search)


    return (
        <>
		<input
			className="search-field"
			type="search"
			value={search}
			placeholder="Search Pokémon"
			onChange={(event) => searchInput(event)}
            ></input>
        </>
	);
}
