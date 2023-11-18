export const getPokemonsData = async () => {
	const res = await fetch(
		"https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
	);
	const data = await res.json();
	return data;
};

export const getPokemondata = async (name: string) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const data = await res.json();
	return data;
};
