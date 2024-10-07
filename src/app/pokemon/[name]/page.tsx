import type { Pokemon } from "@/@types/pokemon";
import NavBar from "@/app/components/NavBar";

const fecthPokemonInfos = async (name: string) => {
	const response = await fetch(
		`https://tyradex.vercel.app/api/v1/pokemon/${name}`,
	);
	const datas = await response.json();
	console.log(datas);
	return datas as Pokemon;
};

export default async function PokemonPage({
	params,
}: {
	params: {
		name: string;
	};
}) {
	// il faudrait recuperer la valeur du segment dynamique de l'url pour savoir quel pokemon afficher
	// avec react-router-dom on utilisait le hook useParams
	// là on va recuperer ça direct dans une props qui s'apelle params
	// une fois qu'on a le nom du pokemon : refaire un fetch pour recuperer les infos de ce pokemon
	// on va fetch l'api ici : https://tyradex.vercel.app/api/v1/pokemon/Dracaufeu

	const { name } = params;
	console.log("name", name);

	const pokemonToDisplay = await fecthPokemonInfos(name);

	return (
		<div className="">
			<main className="">
				<NavBar />
				<h1 className="text-soso text-xl text-center p-4">
					Pokemon à afficher : {pokemonToDisplay.name.fr}
				</h1>
				<div className="grid grid-cols-4">
					<img
						src={pokemonToDisplay.sprites.regular}
						alt={pokemonToDisplay.name.fr}
					/>
					<img
						src={pokemonToDisplay.sprites.shiny}
						alt={pokemonToDisplay.name.fr}
					/>
					{pokemonToDisplay.sprites.gmax && (
						<>
							<img
								src={pokemonToDisplay.sprites.gmax.regular}
								alt={pokemonToDisplay.name.fr}
							/>
							<img
								src={pokemonToDisplay.sprites.gmax.shiny}
								alt={pokemonToDisplay.name.fr}
							/>
						</>
					)}
				</div>
				<p>
					Talents :{" "}
					{pokemonToDisplay.talents.map((talent) => (
						<div key={talent.name} className="bg-violet-400 rounded-lg p-1 m-1">
							{talent.name}
						</div>
					))}
				</p>
			</main>
		</div>
	);
}
