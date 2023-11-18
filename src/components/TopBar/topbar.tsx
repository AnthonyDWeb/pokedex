import "./topbar.css";
import pokeball from "../../assets/images/pokeball.png"
import pokeballNC from "../../assets/images/pokeball-nc.png"

function Topbar() {
	return (
		<div className="title">
			<div className="title_left">
				<p>Pokedex</p>
				<div className="caught-seen">
					<div className="caught">
						<img src={pokeball} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
						<p>450</p>
					</div>
					<div className="seen">
						<img src={pokeballNC} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
						<p>649</p>
					</div>
				</div>
			</div>
			<p style={{ color: "white" }}>A -&gt; Z</p>
		</div>
	);
}

export default Topbar;
