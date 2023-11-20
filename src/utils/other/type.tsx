export type pokeprops = {
	key: number;
	id: number;
	name: string;
	image: string;
	type: [];
	weight: number;
	height: number;
	stats: [];
};
export type poketypeprops = {
	name: string,
	type: {
		name: string,
	}
};
export type pokestatprops = {
	base_stat: number,
	stat: {
		name: string,
	}
};