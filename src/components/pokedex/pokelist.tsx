import { useEffect, useState } from "react";
import PokeRow from "./pokerow";
import { pokeprops } from "../../utils/other/type";
import { getPokemondata, getPokemonsData } from "../../utils/api/fetch_data";
import PokeCard from "./pokecard";
import Modal from "./modal";
import useDevice from "../../utils/hooks/useDevice";

function PokeList() {
	const { isMobile } = useDevice();
	const [allPokemons, setAllPokemons] = useState<any[]>([]);
	const [isShown, setIsShown] = useState(false);
	const [selected, setSelected] = useState();
	const [modalIsOpen, setModalIsOpen] = useState(false);

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
				type: data.types,
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
		<div className="list-container">
			<div className="list">
				{allPokemons.map((pokemon) => (
					<div className="row-card" key={pokemon.name}>
						{isShown && pokemon.id === selected && !isMobile && (
							<PokeCard poke={pokemon} />
						)}
						<PokeRow
							poke={pokemon}
							show={() => {
								setIsShown(true);
								setSelected(pokemon.id);
							}}
							handleClick={() => setModalIsOpen(true)}
						/>
						{modalIsOpen && pokemon.id === selected && (
							<Modal pokedata={pokemon} onClick={() => setModalIsOpen(false)} />
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default PokeList;
