import React from "react";

export default function Modal(props) {
	const { pokemon, showModal, onClose } = props;
    console.log(pokemon);

	if (!showModal) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className="w-[600px] flex flex-col">
				<button
					className="text-white text-xl place-self-end"
					onClick={() => onClose()}
				>
					Close
				</button>
                <div className="bg-white p-2 rounded">
                    <h3>{pokemon[0].name}</h3>
                
                </div>
			</div>
		</div>
	);
}
