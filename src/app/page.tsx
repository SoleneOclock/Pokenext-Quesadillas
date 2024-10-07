import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import type { Pokemon } from "@/@types/pokemon";

const fetchPokemons = async () => {
	// si jamais ce code throw une error c'est la page erreur qui va la catch sera rendue
	const response = await fetch("https://tyradex.vercel.app/api/v1/gen/1");
	const data = await response.json();
	// on revoie les données
	return data as Pokemon[];
};

// un serveur component peut etre asynchrone
export default async function Home() {
	// on veut recup les pokemons de l'API (ici : https://tyradex.vercel.app/api/v1/gen/1)
	// mais vous pouvez recuperer ceux de votre api express faite en projet
	// comme avant :
	// - un state pour stocker la liste des pokemons : au debut un tableau vide
	// - un fetch pour recuperer les pokemon après le premier rendu (dans un useEffect)
	// - on rempli le state avec les pokemons reçus -> ça déclanche un second rendu avec un state rempli : les pokemons s'affichent

	// nous on va fetch les données coté serveur
	// avec Next : de base tous les composants sont rendus coté serveur
	// attention les console.log sont donc visibles dans le terminal du serveur et non dans le navigateur
	console.log("execution du composant : render !");
	const pokemonList = await fetchPokemons();

	return (
		<div className="">
			<main className="">
				<NavBar />
				<h1 className="text-soso text-xl text-center p-4">Pokedex</h1>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
					{pokemonList.map((pokemon) => (
						<PokemonCard key={pokemon.pokedex_id} pokemon={pokemon} />
					))}
				</div>
			</main>
		</div>
	);
}
