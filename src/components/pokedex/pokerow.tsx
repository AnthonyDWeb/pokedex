import { pokeprops } from "../../utils/other/type";
import pokeballNC from "../../assets/images/pokeball-nc.png";

function PokeRow({
	poke,
	show,
	handleClick,
}: {
	poke: pokeprops;
	show: () => void;
	handleClick: () => void;
}) {
	return (
		<div className="pokerow" onClick={() => handleClick()} onMouseEnter={()=> show()}>
			<img className="pokerow-image" src={poke.image} alt={poke.name} />
			<p className="pokerow-id">N° {poke.id}</p>
			<p className="pokerow-name">{poke.name}</p>
			<img className="pokeball" src={pokeballNC} alt="pokeball" />
		</div>
	);
}
export default PokeRow;
