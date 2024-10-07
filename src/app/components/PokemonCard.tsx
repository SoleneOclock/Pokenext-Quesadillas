"use client";
// la ligne ci dessus permet de dire à next que ce composant est un client component et qu'il doit s'executer coté client : dans le navigateur du client et non pas sur le serveur front

// ce composant va recevoir en props un pokemon
import type { Pokemon } from "@/@types/pokemon";
import Link from "next/link";
import { useState } from "react";

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
	// ce log s'affiche dans la console du navigateur car c'est un client component
	console.log("rendu du composant PokemonCard");

	// state local
	const [nbLikes, setNbLikes] = useState(0);

	return (
		<div className="border-2 border-soso rounded-lg p-4 relative">
			<button
				type="button"
				className="border-none absolute right-2"
				onClick={() => {
					console.log("bouton clické");
					setNbLikes(nbLikes + 1);
				}}
			>
				{nbLikes} ❤️
			</button>
			<Link href={`/pokemon/${pokemon.name.fr}`}>
				<h2>{pokemon.name.fr}</h2>
			</Link>
			<img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
			<p>
				Talents :{" "}
				{pokemon.talents.map((talent) => (
					<div key={talent.name} className="bg-violet-400 rounded-lg p-1 m-1">
						{talent.name}
					</div>
				))}
			</p>
		</div>
	);
}

export default PokemonCard;
