import pokeball from "../../assets/images/pokeball.png";
import pokeballNC from "../../assets/images/pokeball-nc.png";

function Topbar() {
	return (
		<div className="topbar-container">
			<div className="topbar-container-left">
				<p className="title">Pokedex</p>
				<div className="caught-seen">
					<div className="caught">
						<img className="pokeball" src={pokeball} alt="pokeball"/>
						<p>450</p>
					</div>
					<div className="seen">
						<img className="pokeball" src={pokeballNC} alt="pokeball"/>
						<p>649</p>
					</div>
				</div>
			</div>
			<p className="order">A &gt; Z</p>
		</div>
	);
}

export default Topbar;
