import { useEffect, useState } from "react";
import "./pokelist.css";
import PokemonCard from "../PokemonCard/pokemoncard";
import { pokeprops } from "../../utils/other/type";
import { getPokemondata, getPokemonsData } from "../../utils/api/fetch_data";

function PokeList() {
	const [allPokemons, setAllPokemons] = useState<any[]>([]);

	useEffect(() => {
		allPokemons.length === 0 && getAllPokemons();
	});

	const getAllPokemons = async () => {
		const storagedata: string | null = localStorage.getItem("pokemons");
		if (storagedata) {
			const pokedata = JSON.parse(storagedata);
			setAllPokemons(pokedata);
		} else {
			const data = await getPokemonsData();
			createPokemonObject(data.results);
		}
	};

	const createPokemonObject = (results: []) => {
		const pokemonList: pokeprops[] = [];
		results.forEach(async (pokemon: pokeprops) => {
			const data = await getPokemondata(pokemon.name);

			pokemonList.push({
				key: data.id,
				id: data.id.toString().padStart(3, "0"),
				name: data.name.replace(/^./, (str: string) => str.toUpperCase()),
				image: data.sprites.other["official-artwork"].front_default,
				type: data.types[0].type.name,
				weight: data.weight,
				height: data.height,
				stats: data.stats,
			});
			pokemonList.sort((a, b) => a.id - b.id);
			localStorage.setItem("pokemons", JSON.stringify(pokemonList));
			setAllPokemons(pokemonList);
		});
	};

	return (
		<div className="app-container">
			<div className="pokemon-container">
				<div className="all-container">
					{allPokemons.map((pokemon) => (
						<PokemonCard key={pokemon.name} pokedata={pokemon} />
					))}
				</div>
			</div>
		</div>
	);
}

export default PokeList;
