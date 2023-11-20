import pokeballNC from "../../assets/images/pokeball-nc.png";
import { pokeprops, poketypeprops } from "../../utils/other/type";

function PokeCard({ poke }: { poke: pokeprops }) {
	console.log("poke", poke);
	return (
		<div className="pokecard">
			<div className="pokecard-title-container">
				<img className="pokecard-title-img" src={poke.image} alt={poke.name} />
				<p className="pokecard-title-id">N° {poke.id}</p>
				<p className="pokecard-title-name">{poke.name}</p>
				<img className="pokeball invert" src={pokeballNC} alt="pokeball" />
			</div>
			<img className="pokecard-img" src={poke.image} alt={poke.name} />
			<div className="pokecard-stats">
				<div className="pokecard-stat bottom-line">
					<p className="pokecard-stat-name">{poke.type.length > 1 ? "Types" : "Type"}:</p>
					<p className="pokecard-stat-value">
						{poke?.type?.map((t: poketypeprops) => (
							<span className={`${t.type.name}`} key={poke.name + t.type.name}>
								{t.type.name}
							</span>
						))}
					</p>
				</div>
				<div className="pokecard-stat bottom-line">
					<p className="pokecard-stat-name">Height:</p>
					<p className="pokecard-stat-value">{poke.height}0 cm</p>
				</div>
				<div className="pokecard-stat">
					<p className="pokecard-stat-name">Weight:</p>
					<p className="pokecard-stat-value">{poke.weight} lbs</p>
				</div>
			</div>
		</div>
	);
}
export default PokeCard;
