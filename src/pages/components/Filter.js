import React, { useState, useEffect } from "react";

export default function Filter(props) {
	const { fetchFilter } = props;
	const [showMenu, setShowMenu] = useState(false);
	const [filterValue, setFilterValue] = useState("");

	console.log(filterValue);

	const types = [
		{ name: "bug" },
		{ name: "dark" },
		{ name: "dragon" },
		{ name: "electric" },
		{ name: "fairy" },
		{ name: "fighting" },
		{ name: "fire" },
		{ name: "flying" },
		{ name: "ghost" },
		{ name: "grass" },
		{ name: "ground" },
		{ name: "ice" },
		{ name: "normal" },
		{ name: "poison" },
		{ name: "psychic" },
		{ name: "rock" },
		{ name: "steel" },
		{ name: "water" },
	];

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	useEffect(() => {
		fetchFilter(filterValue);
	}, [filterValue]);

	return (
		<div>
			<button
				id="dropdownDefaultButton"
				data-dropdown-toggle="dropdown"
				className="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
				type="button"
				onClick={toggleMenu}
			>
				Filter by type
				<svg
					className="w-4 h-4 ml-2"
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
			{/* <!-- Dropdown menu --> */}
			<div
				id="dropdown"
				className={`absolute z-10 ${
					showMenu ? "block" : "hidden"
				} bg-white divide-y divide-gray-100 rounded-lg shadow w-[6.5rem] right-[0.5em]`}
				style={{ maxHeight: "200px", overflowY: "auto" }}
			>
				<ul
					className="py-2 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownDefaultButton"
				>
					{types.map((type) => (
						<li key={type.name}>
							<button
								className="block px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-grey-200"
								onClick={() => {
									setFilterValue(type.name);
									setShowMenu(false);
								}}
							>
								{type.name}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
